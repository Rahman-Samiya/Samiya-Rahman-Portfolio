import { ReactNode, useEffect, useState } from 'react'
import { Github, Linkedin, Code2, Mail, Phone, MapPin, Download, Sun, Moon, Menu, X, ArrowUp, ExternalLink, FileText, Trophy, AlertTriangle } from 'lucide-react'
import { profile, skills, projects, research, experience, education, competitive, leadership, awards, Category, Project, TimelineItem } from './data'
import ContactForm from './Contact'

const nav = [['about','About'],['skills','Skills'],['projects','Projects'],['research','Research'],['experience','Experience'],['competitive','Activities'],['leadership','Leadership'],['awards','Awards']]
const ids = ['about','skills','projects','research','experience','education','competitive','leadership','awards','contact']
const group: Record<string,string> = { education:'experience' }

function Section({ id, title, eyebrow, children }: { id:string; title:string; eyebrow:string; children:ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400">{eyebrow}</p>
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h2>
      {children}
    </section>
  )
}

function Navbar({ active, dark, toggle }: { active:string; dark:boolean; toggle:()=>void }) {
  const [open, setOpen] = useState(false)
  const link = (id:string, label:string, mobile = false) => (
    <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active===id?'true':undefined}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition ${mobile ? 'block' : ''} ${active===id ? 'bg-slate-200/80 text-slate-900 dark:bg-white/10 dark:text-white' : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white'}`}>{label}</a>
  )
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-slate-50/85 backdrop-blur dark:border-white/10 dark:bg-[#0d0f14]/85">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="text-base font-bold tracking-tight text-slate-900 dark:text-white">Samiya Rahman</a>
        <div className="hidden items-center gap-1 lg:flex">{nav.map(([i,l]) => link(i,l))}</div>
        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden !py-2 lg:inline-flex">Contact</a>
          <button onClick={toggle} aria-label={dark?'Switch to light theme':'Switch to dark theme'} className="rounded-lg p-2 hover:bg-slate-200 dark:hover:bg-white/10">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu" className="rounded-lg p-2 hover:bg-slate-200 dark:hover:bg-white/10 lg:hidden">{open ? <X size={18}/> : <Menu size={18}/>}</button>
        </div>
      </nav>
      {open && <div className="space-y-1 border-t border-slate-200 p-4 dark:border-white/10 lg:hidden">{nav.map(([i,l]) => link(i,l,true))}<a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full justify-center">Contact</a></div>}
    </header>
  )
}

function Hero() {
  const social = [[profile.github,'GitHub',Github],[profile.linkedin,'LinkedIn',Linkedin],[profile.codeforces,'Codeforces',Code2]] as const
  return (
    <section id="top" className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-36 lg:grid-cols-2">
      <div className="pointer-events-none absolute -top-10 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10 blur-3xl" aria-hidden />
      <div className="fade relative">
        <p className="mb-3 font-mono text-sm text-cyan-600 dark:text-cyan-400">{profile.name} · {profile.title}</p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">Turning Ideas Into <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">Intelligent Digital Solutions.</span></h1>
        <p className="mt-5 max-w-xl text-lg">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href={profile.cv} download="Samiya_Rahman_CV.pdf" className="btn-ghost"><Download size={16}/>Download CV</a>
          <a href="#contact" className="btn-ghost">Contact Me</a>
        </div>
        <div className="mt-8 flex gap-4">{social.map(([h,l,I]) => <a key={l} href={h} target="_blank" rel="noopener noreferrer" aria-label={l} className="flex items-center gap-1.5 text-sm hover:text-cyan-500"><I size={18}/>{l}</a>)}</div>
      </div>
      <div className="fade relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/25 via-violet-500/15 to-cyan-500/25 blur-2xl" aria-hidden />
        <figure className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#141821]">
          <img src="/samiya.jpg" alt="Portrait of Samiya Rahman" width={640} height={815} className="aspect-[4/5] w-full object-cover object-top" />
          <figcaption className="border-t border-slate-200 p-4 dark:border-white/10">
            <p className="font-semibold text-slate-900 dark:text-white">Samiya Rahman</p>
            <p className="text-sm">Full Stack Developer | AI/ML Engineer</p>
            <div className="mt-3 flex flex-wrap gap-2"><span className="tag">IEEE · ICCIT 2025</span><span className="tag">6 Projects</span><span className="tag">Sylhet, Bangladesh</span></div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="About Me">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">{profile.about.map(p => <p key={p}>{p}</p>)}</div>
        <div className="card"><h3 className="mb-3 font-semibold text-slate-900 dark:text-white">Interests</h3><div className="flex flex-wrap gap-2">{profile.interests.map(i => <span key={i} className="tag">{i}</span>)}</div>
          <h3 className="mb-1 mt-5 font-semibold text-slate-900 dark:text-white">Education</h3><p className="text-sm">B.Sc. (Engg.) in CSE, Sylhet International University (2023 – Present)</p>
          <h3 className="mb-1 mt-5 font-semibold text-slate-900 dark:text-white">Languages</h3><p className="text-sm">Bangla (Native) · English (Fluent)</p></div>
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="Technical Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(s => <div key={s.name} className="card"><h3 className="mb-4 font-semibold text-slate-900 dark:text-white">{s.name}</h3><div className="flex flex-wrap gap-2">{s.items.map(i => <span key={i} className="tag">{i}</span>)}</div></div>)}
      </div>
    </Section>
  )
}

function ProjectModal({ p, onClose }: { p: Project; onClose: ()=>void }) {
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', k); document.body.style.overflow = 'hidden'; return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' } }, [onClose])
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="pm-t" onClick={e => e.stopPropagation()} className="card max-h-[90vh] w-full max-w-lg overflow-y-auto shadow-2xl dark:bg-[#141821]">
        <div className="flex items-start justify-between gap-4"><div><h3 id="pm-t" className="text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3><p className="text-sm text-cyan-600 dark:text-cyan-400">{p.subtitle}</p></div>
          <button autoFocus onClick={onClose} aria-label="Close" className="rounded-lg p-1.5 hover:bg-slate-200 dark:hover:bg-white/10"><X size={18}/></button></div>
        <p className="mt-4">{p.summary}</p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">{p.details.map(d => <li key={d}>{d}</li>)}</ul>
        <div className="mt-4 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="tag">{t}</span>)}</div>
        {p.disclaimer && <p className="mt-4 flex gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-700 dark:text-amber-300"><AlertTriangle size={16} className="mt-0.5 shrink-0"/>{p.disclaimer}</p>}
        <div className="mt-5 flex gap-3"><a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn-primary"><Github size={16}/>View on GitHub</a>{p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost"><ExternalLink size={16}/>Live demo</a>}</div>
      </div>
    </div>
  )
}

function Projects() {
  const [f, setF] = useState<'all'|Category>('all')
  const [sel, setSel] = useState<Project|null>(null)
  const filters = [['all','All'],['fullstack','Full Stack'],['ai','AI/ML'],['other','Other Projects']] as const
  const list = projects.filter(p => f === 'all' || p.category === f)
  return (
    <Section id="projects" eyebrow="03 — Work" title="Featured Projects">
      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {filters.map(([k,l]) => <button key={k} onClick={() => setF(k)} aria-pressed={f===k} className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${f===k ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white' : 'border border-slate-300 hover:bg-slate-100 dark:border-white/15 dark:hover:bg-white/5'}`}>{l}</button>)}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {list.map(p => (
          <article key={p.id} className={`card flex flex-col ${p.featured ? 'border-violet-400/40 md:col-span-2 dark:border-violet-400/30' : ''}`}>
            <div className="mb-1 flex items-center gap-2">{p.featured && <span className="rounded bg-violet-500/15 px-2 py-0.5 text-xs font-semibold text-violet-600 dark:text-violet-300">Featured</span>}<span className="text-xs uppercase tracking-wide text-slate-500">{p.category === 'ai' ? 'AI/ML' : p.category === 'fullstack' ? 'Full Stack' : 'Other'}</span></div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3><p className="text-sm text-cyan-600 dark:text-cyan-400">{p.subtitle}</p>
            <p className="mt-3 flex-1">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="tag">{t}</span>)}</div>
            <div className="mt-5 flex gap-3"><button onClick={() => setSel(p)} className="btn-ghost">Details</button><a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Github size={16}/>GitHub</a>{p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost"><ExternalLink size={16}/>Live</a>}</div>
          </article>
        ))}
      </div>
      {sel && <ProjectModal p={sel} onClose={() => setSel(null)} />}
    </Section>
  )
}

function Research() {
  return (
    <Section id="research" eyebrow="04 — Research" title="Research & Publication">
      <div className="card border-cyan-400/40 dark:border-cyan-400/30">
        <span className="tag mb-3 inline-block text-cyan-700 dark:text-cyan-300">{research.status}</span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{research.title}</h3>
        <p className="mt-2">{research.venue}</p>
        <a href={research.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5"><FileText size={16}/>View Publication</a>
      </div>
    </Section>
  )
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-6 border-l border-slate-300 pl-6 dark:border-white/15">
      {items.map(i => (
        <li key={i.title + i.org} className="relative">
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 ring-4 ring-slate-50 dark:ring-[#0d0f14]" />
          <p className="font-mono text-xs text-cyan-600 dark:text-cyan-400">{i.period}</p>
          <h3 className="font-semibold text-slate-900 dark:text-white">{i.title}</h3><p className="text-sm">{i.org}</p>
          {i.points && <ul className="mt-1 list-disc pl-5 text-sm">{i.points.map(p => <li key={p}>{p}</li>)}</ul>}
        </li>
      ))}
    </ol>
  )
}

function Contact() {
  const rows = [[Mail,profile.email,`mailto:${profile.email}`],[Phone,profile.phone,`tel:${profile.phone.replace(/[^+\d]/g,'')}`],[MapPin,profile.location,''],[Github,'Rahman-Samiya',profile.github],[Linkedin,'LinkedIn',profile.linkedin]] as const
  return (
    <Section id="contact" eyebrow="12 — Contact" title="Get in Touch">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card space-y-4">{rows.map(([I,t,h]) => <div key={t} className="flex items-center gap-3"><I size={18} className="text-cyan-500"/>{h ? <a href={h} {...(h.startsWith('http') ? {target:'_blank', rel:'noopener noreferrer'} : {})} className="hover:text-cyan-500">{t}</a> : <span>{t}</span>}</div>)}</div>
        <ContactForm />
      </div>
    </Section>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [active, setActive] = useState('')
  const [top, setTop] = useState(false)
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* storage unavailable */ } }, [dark])
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(group[e.target.id] ?? e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    ids.forEach(i => { const el = document.getElementById(i); if (el) io.observe(el) })
    const s = () => setTop(window.scrollY > 600); window.addEventListener('scroll', s, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', s) }
  }, [])
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:p-2 focus:text-black">Skip to content</a>
      <Navbar active={active} dark={dark} toggle={() => setDark(!dark)} />
      <main>
        <Hero /><About /><Skills /><Projects /><Research />
        <Section id="experience" eyebrow="05 — Experience" title="Professional Experience"><Timeline items={experience} /></Section>
        <Section id="education" eyebrow="06 — Education" title="Education"><Timeline items={education} /></Section>
        <Section id="competitive" eyebrow="07 — Contests" title="Competitive Programming">
          <div className="grid gap-4 sm:grid-cols-2">{competitive.map(c => <div key={c} className="card flex items-start gap-3 !p-5"><Code2 size={18} className="mt-0.5 shrink-0 text-violet-500"/>{c}</div>)}</div>
          <a href={profile.codeforces} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6">Codeforces profile</a>
        </Section>
        <Section id="leadership" eyebrow="08 — Leadership" title="Leadership & Activities"><Timeline items={leadership} /></Section>
        <Section id="awards" eyebrow="09 — Awards" title="Awards">
          <div className="grid gap-4 sm:grid-cols-2">{awards.map(a => <div key={a.title} className="card flex items-start gap-3 !p-5"><Trophy size={18} className="mt-0.5 shrink-0 text-amber-500"/><div><p className="font-medium text-slate-900 dark:text-white">{a.title}</p><p className="text-sm">{a.meta}</p></div></div>)}</div>
        </Section>
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm dark:border-white/10">© {new Date().getFullYear()} {profile.name}</footer>
      {top && <button onClick={() => window.scrollTo({ top: 0 })} aria-label="Back to top" className="fixed bottom-6 right-6 z-30 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 p-3 text-white shadow-lg"><ArrowUp size={18}/></button>}
    </>
  )
}
