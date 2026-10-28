export type Category = 'fullstack' | 'ai' | 'other'
export interface Project { id:string; title:string; subtitle:string; category:Category; featured?:boolean; summary:string; details:string[]; tech:string[]; repo:string; demo?:string; disclaimer?:string }
export interface TimelineItem { title:string; org:string; period:string; points?:string[] }

export const profile = {
  name:'Samiya Rahman', title:'Full Stack Developer | AI/ML Engineer', location:'Sylhet, Bangladesh',
  email:'samiyarahman50020@gmail.com', phone:'+880 1730-262476',
  github:'https://github.com/Rahman-Samiya', linkedin:'https://www.linkedin.com/in/samiya-rahman-873816384',
  codeforces:'https://codeforces.com/profile/Samiya123', cv:'/Samiya_Rahman_CV.pdf',
  intro:'Computer Science and Engineering undergraduate building full-stack web applications, REST APIs, and machine learning and deep learning solutions with a software engineering mindset.',
  about:[
    'I am a Computer Science and Engineering undergraduate with hands-on experience in full-stack web development, artificial intelligence, machine learning, and deep learning. I build web applications, design RESTful APIs, integrate AI/ML models, and manage databases.',
    'I am also a published researcher and a programming instructor, and I take part in competitive programming and university activities.',
  ],
  objective:'Seeking opportunities as a Full Stack Developer or AI/ML Engineer to contribute to innovative, scalable, and real-world technology solutions.',
  interests:['Full-stack web development','REST API design','Machine learning & deep learning','Model deployment','Research & analytical thinking','Problem solving'],
}

export const skills: {name:string; items:string[]}[] = [
  {name:'Programming', items:['Python','PHP','Java','JavaScript','TypeScript','C','C++']},
  {name:'Web Development', items:['Laravel','React.js','Next.js','Vue.js','HTML5','CSS3','Eloquent ORM']},
  {name:'AI / Machine Learning', items:['Machine Learning','Deep Learning','Scikit-learn','TensorFlow/Keras','PyTorch','XGBoost','Pandas','NumPy','Data Preprocessing','Feature Engineering','Model Evaluation']},
  {name:'Backend & ML Deployment', items:['Flask','RESTful APIs','Model Deployment','Jupyter Notebook','Google Colab']},
  {name:'Databases', items:['MySQL','SQL']},
  {name:'Tools & Platforms', items:['Git','GitHub','VS Code','XAMPP','Laragon']},
]

export const projects: Project[] = [
  {id:'buddyscript',title:'BuddyScript',subtitle:'Social Media Web Application',category:'fullstack',featured:true,
   summary:'Full-stack social platform with authentication, posts, image uploads, privacy controls, threaded comments, likes, and profile management.',
   details:['Authentication and profile management','Post creation with image uploads and privacy controls','Threaded comments and likes','Next.js/React/TypeScript front end with a Laravel and MySQL back end'],
   tech:['Next.js','React','TypeScript','Laravel','MySQL'],repo:'https://github.com/Rahman-Samiya/BuddyScirpt-Task.git'},
  {id:'oral-cancer',title:'Oral Cancer Risk Detection',subtitle:'AI-based Web Application',category:'ai',featured:true,
   summary:'Analyzes uploaded oral images for possible oral cancer risk using classical ML and deep learning models behind a Flask backend.',
   details:['Patient details collection','Prediction history storage','Confidence scores and recommendations','Printable medical-style report generation'],
   tech:['Python','Flask','Machine Learning','Deep Learning'],repo:'https://github.com/Rahman-Samiya/Oral-Cancer-Detection-Project.git',
   disclaimer:'This application is a demonstration and is not a substitute for professional medical diagnosis.'},
  {id:'ezyproduct',title:'EzyProduct',subtitle:'Product Management & Catalog System',category:'fullstack',
   summary:'Catalog system with CRUD, search, pagination, and RESTful APIs, built on a layered Controller–Service–Repository architecture.',
   details:['Product listing and details APIs','Search and pagination','Controller–Service–Repository layering'],
   tech:['Laravel 11','PHP 8.2','MySQL','Tailwind CSS'],repo:'https://github.com/Rahman-Samiya/EzyProduct.git'},
  {id:'task-api',title:'Smart Task Manager API',subtitle:'REST API',category:'fullstack',
   summary:'REST API with Sanctum authentication, task CRUD, filtering, pagination, and dashboard analytics.',
   details:['Sanctum authentication','Task CRUD with filtering and pagination','Dashboard analytics endpoints'],
   tech:['Laravel','PHP','MySQL','REST APIs'],repo:'https://github.com/Rahman-Samiya/Task-Manager-Api.git'},
  {id:'dry-eye',title:'Dry Eye Disease Predictor',subtitle:'ML Health Prediction App',category:'ai',
   summary:'Machine learning powered web application for health prediction with database integration.',
   details:['Flask web application serving an ML model','Database integration for stored data'],
   tech:['Python','Flask','Machine Learning','SQL'],repo:'https://github.com/Rahman-Samiya/Dry-Eye-Disease-Predictor.git'},
  {id:'mini-compiler',title:'Mini Compiler',subtitle:'Custom Mini-Language Compiler',category:'other',
   summary:'Compiler for a custom mini-language covering the full pipeline, with a browser-based visualizer.',
   details:['Lexical analysis and syntax parsing','Semantic validation and constant folding','Three-address code (TAC) generation','Assembly-style code generation'],
   tech:['Flask','HTML','CSS','JavaScript'],repo:'https://github.com/Rahman-Samiya/Mini_Compiler.git'},
]

export const research = {
  title:'Temporal Sentiment and Engagement Analysis of Facebook Data Using Machine Learning Models',
  venue:'International Conference on Computer and Information Technology (ICCIT 2025)',
  status:'Accepted — IEEE', url:'https://ieeexplore.ieee.org/document/11490137',
}

export const experience: TimelineItem[] = [
  {title:'Programming Instructor',org:'Cybernetics Robo Academy',period:'Jul 2025 – Present',points:['Teach programming fundamentals and problem-solving skills.']},
]
export const education: TimelineItem[] = [
  {title:'B.Sc. (Engg.) in Computer Science & Engineering',org:'Sylhet International University',period:'2023 – Present'},
  {title:'Higher Secondary Certificate, Science',org:"Govt. Agragami Girls' High School & College",period:'2022'},
  {title:'Secondary School Certificate, Science',org:'Baushi Kashimpur High School',period:'2020'},
]
export const competitive = [
  'Regular participant, SIU IUPC','Programming Club Member — SIU','Competed in ICPC Online Preliminary (2023, 2024, 2025)','Competed in Inter-University Programming Contest 2024 (On-site) — LU & MU',
]
export const leadership: TimelineItem[] = [
  {title:'Cultural Secretary',org:'CSE Society',period:'Jul 2024 – Aug 2026',points:['Organized and coordinated university-level science fairs, ICT fests, Math and Physics Olympiads, and various cultural events.']},
  {title:'Joint Convenor',org:'Sylhet International University Cultural Club',period:'Oct 2026 – Present'},
  {title:'Campus Ambassador',org:'ICT Olympiad Bangladesh',period:'Dec 2024 – Present'},
  {title:'Volunteer & Invigilator',org:'14th, 15th & 16th Bangladesh Physics Olympiad',period:'2024 – 2026'},
  {title:'Volunteer',org:'Futurenation Masterclass & Scholarship Awards Ceremony',period:'Oct 2024 – Present'},
  {title:'Volunteer',org:'GEIST International Foundation',period:'Jan 2023 – Present'},
]
export const awards = [
  {title:'Winner — "Digital Bangladesh Day" Essay Competition',meta:'2021 · District level'},
  {title:'2nd Prize — "National Insurance Day" Essay Competition',meta:'2022 · District level'},
  {title:'Winner — "Golden Jubilee Celebration" Essay Competition',meta:'2022 · District level'},
  {title:'3rd Prize — "Golden Jubilee Celebration" Essay Competition',meta:'2022 · Division level'},
]
