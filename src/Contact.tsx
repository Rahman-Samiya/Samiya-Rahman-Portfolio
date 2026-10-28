import { FormEvent, useState } from 'react'
import { profile } from './data'

type Errors = Partial<Record<'name'|'email'|'subject'|'message', string>>
const endpoint = import.meta.env.VITE_FORMSPREE_ID ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}` : ''
const field = 'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-white'

export default function ContactForm() {
  const [v, setV] = useState({ name:'', email:'', subject:'', message:'' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<{type:'ok'|'info'|'err'; text:string}|null>(null)
  const [busy, setBusy] = useState(false)

  const validate = (): Errors => {
    const e: Errors = {}
    if (v.name.trim().length < 2) e.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email address.'
    if (v.subject.trim().length < 3) e.subject = 'Subject must be at least 3 characters.'
    if (v.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }

  const submit = async (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate(); setErrors(e); setStatus(null)
    if (Object.keys(e).length) return
    if (!endpoint) {
      const body = encodeURIComponent(`${v.message}\n\n— ${v.name} (${v.email})`)
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(v.subject)}&body=${body}`
      setStatus({ type:'info', text:'Direct form delivery is not configured, so your email app was opened with the message drafted. The message is only sent once you send it from your email app.' })
      return
    }
    setBusy(true)
    try {
      const res = await fetch(endpoint, { method:'POST', headers:{'Content-Type':'application/json', Accept:'application/json'}, body: JSON.stringify(v) })
      if (!res.ok) throw new Error()
      setStatus({ type:'ok', text:'Message sent successfully. Thank you!' }); setV({ name:'', email:'', subject:'', message:'' })
    } catch { setStatus({ type:'err', text:`Could not send the message. Please email ${profile.email} directly.` }) }
    finally { setBusy(false) }
  }

  const f = (k: keyof typeof v, label: string, type = 'text') => (
    <div>
      <label htmlFor={k} className="mb-1 block text-sm font-medium text-slate-800 dark:text-slate-200">{label}</label>
      {k === 'message'
        ? <textarea id={k} rows={5} className={field} value={v[k]} onChange={e => setV({ ...v, [k]: e.target.value })} aria-invalid={!!errors[k]} aria-describedby={`${k}-e`} />
        : <input id={k} type={type} className={field} value={v[k]} onChange={e => setV({ ...v, [k]: e.target.value })} aria-invalid={!!errors[k]} aria-describedby={`${k}-e`} />}
      <p id={`${k}-e`} className="mt-1 min-h-4 text-xs text-red-500">{errors[k]}</p>
    </div>
  )
  return (
    <form onSubmit={submit} noValidate className="card space-y-1">
      {f('name','Name')}{f('email','Email','email')}{f('subject','Subject')}{f('message','Message')}
      <button className="btn-primary" disabled={busy}>{busy ? 'Sending…' : 'Send message'}</button>
      <div role="status" aria-live="polite" className={`pt-3 text-sm ${status?.type==='ok'?'text-emerald-500':status?.type==='err'?'text-red-500':'text-cyan-500'}`}>{status?.text}</div>
    </form>
  )
}
