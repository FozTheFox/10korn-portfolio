'use client'

import { useState , useRef } from 'react'
import { useTranslations } from 'next-intl';
import ProjectModal from '../components/ProjectModal'; 
import { RiGithubLine, RiFileTextLine, RiTerminalBoxLine, RiBriefcaseLine, RiGraduationCapLine, RiCodeLine, RiCodeBoxLine, RiServerLine,
         RiSettingsLine, RiDatabase2Line, RiMailSendLine, RiLinkedinBoxLine }
         from 'react-icons/ri';
import { TypeAnimation } from 'react-type-animation';
import { motion , useScroll , Reorder , AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { useSecretCode } from '../hooks/useSecretCode';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const tHero = useTranslations('Hero');
  const tProjects = useTranslations('Projects');
  const tAbout = useTranslations('About');
  const tExp = useTranslations('Experience');
  const tEdu = useTranslations('Education');
  const tSkills = useTranslations('Skills');
  const tContact = useTranslations('Contact');
  const tFooter = useTranslations('Footer');

  const { scrollYProgress } = useScroll();
  const [showTooltip, setShowTooltip] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const [isFoxMode, setIsFoxMode] = useState(false);
  // 🦊 ตั้งค่ารหัสลับ 'f', 'o', 'x'
  useSecretCode(['f', 'o', 'x'], () => {
    setIsFoxMode(true);
    alert('🦊 Secret Fox Mode Activated!'); // เปลี่ยนตรงนี้เป็นลูกเล่นที่คุณอยากได้
    
    // ตั้งเวลาให้ลูกเล่นหายไปเอง (ออปชันเสริม)
    setTimeout(() => setIsFoxMode(false), 5000); 
  });
  
  const [showOiiaCat, setShowOiiaCat] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const konamiCode = [
    'arrowup', 'arrowup', 
    'arrowdown', 'arrowdown', 
    'arrowleft', 'arrowright', 
    'arrowleft', 'arrowright', 
    'keyb', 'keya'
  ];

  useSecretCode(konamiCode, () => {
    setShowOiiaCat(true);
    
    // 2. ใช้ setTimeout สั้นๆ เพื่อรอให้ React เรนเดอร์แท็ก <video> เสร็จก่อนสั่ง play()
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // รีเซ็ตวิดีโอไปวินาทีแรก
        videoRef.current.play(); // สั่งเล่น
      }
    }, 50);

    // 3. ตั้งเวลาซ่อนและ "หยุด" วิดีโอ (ป้องกันเสียงค้าง)
    setTimeout(() => {
      setShowOiiaCat(false);
      if (videoRef.current) {
        videoRef.current.pause(); 
      }
    }, 8000); // ปรับเวลา 5000 (5 วิ) ให้ตรงกับความยาววิดีโอของคุณนะครับ
  });

  const [expList, setExpList] = useState([
    { id: 'internship' },
    { id: 'universityProject' }
  ]);

  const projects = [
    {
      id: 'jobPlatform',
      techStack: ['👤 Solo Project', 'React', 'Vite', 'Tailwind', 'GoFiber', 'Gorm', 'PostgreSQL', 'pgAdmin4', 'Docker'],
      icon: <RiTerminalBoxLine className="w-6 h-6 text-blue-500" />,
      link: 'https://github.com/FozTheFox/Skills-JobApp',
      images: ['/projects/jobapp/jobapp_1.png', '/projects/jobapp/jobapp_2.png', '/projects/jobapp/jobapp_3.png',
               '/projects/jobapp/jobapp_4.png', '/projects/jobapp/jobapp_5.png', '/projects/jobapp/jobapp_6.png',
               '/projects/jobapp/jobapp_7.png', '/projects/jobapp/jobapp_8.png', '/projects/jobapp/jobapp_9.png',
               '/projects/jobapp/jobapp_10.png', '/projects/jobapp/jobapp_11.png', '/projects/jobapp/jobapp_12.png',
               '/projects/jobapp/jobapp_13.png', '/projects/jobapp/jobapp_14.png', '/projects/jobapp/jobapp_15.png',
               '/projects/jobapp/jobapp_16.png', '/projects/jobapp/jobapp_17.png', '/projects/jobapp/jobapp_18.png',
               '/projects/jobapp/jobapp_19.png', '/projects/jobapp/jobapp_20.png', '/projects/jobapp/jobapp_21.png',
               '/projects/jobapp/jobapp_22.png', '/projects/jobapp/jobapp_23.png', '/projects/jobapp/jobapp_24.png',
      ]
    },
    {
      id: 'posSystem',
      techStack: ['🤝 Team Project', 'React', 'Node.js', 'Tailwind', 'GoFiber', 'Gorm', 'PostgreSQL', 'Raspberry Pi'],
      icon: <RiTerminalBoxLine className="w-6 h-6 text-emerald-500" />,
      link: 'https://github.com/FozTheFox/WarehouseProject',
      images: ['/projects/dual-system/1.jpg', '/projects/dual-system/2.jpg', '/projects/dual-system/3.jpg',
               '/projects/dual-system/4.jpg', '/projects/dual-system/5.jpg', '/projects/dual-system/6.jpg',
               '/projects/dual-system/7.jpg', '/projects/dual-system/8.jpg', '/projects/dual-system/9.jpg',
               '/projects/dual-system/10.jpg', '/projects/dual-system/11.jpg', '/projects/dual-system/12.jpg',
               '/projects/dual-system/13.jpg', '/projects/dual-system/14.jpg', '/projects/dual-system/15.jpg',
               '/projects/dual-system/16.jpg', '/projects/dual-system/17.jpg', '/projects/dual-system/18.jpg',
               '/projects/dual-system/19.jpg', '/projects/dual-system/20.jpg', '/projects/dual-system/21.jpg',
               '/projects/dual-system/22.jpg', '/projects/dual-system/23.jpg', '/projects/dual-system/24.jpg',
               '/projects/dual-system/25.jpg', '/projects/dual-system/26.jpg', '/projects/dual-system/27.jpg',
               '/projects/dual-system/28.jpg', '/projects/dual-system/29.jpg', '/projects/dual-system/30.jpg',
               '/projects/dual-system/31.jpg', '/projects/dual-system/32.jpg', '/projects/dual-system/33.jpg',
               '/projects/dual-system/34.jpg', '/projects/dual-system/35.jpg',]
    },
    {
      id: 'garageManage',
      techStack: ['🤝 Team Project', 'React', 'Tailwind', 'Flutter', 'GetWidget', 'Laravel', 'MySql', 'phpMyAdmin', 'XAMPP'],
      icon: <RiTerminalBoxLine className="w-6 h-6 text-orange-500" />,
      link: 'https://github.com/FozTheFox/Senior-Project',
      images: ['/projects/bodyNpaint/BnPM1-preview.png', '/projects/bodyNpaint/BnPM2-preview.png', '/projects/bodyNpaint/BnPM3-preview.png',
               '/projects/bodyNpaint/BnPM4-preview.png', '/projects/bodyNpaint/BnPM5-preview.png', '/projects/bodyNpaint/BnPM6-preview.png',
               '/projects/bodyNpaint/BnPM7-preview.png', '/projects/bodyNpaint/BnPM8-preview.png', '/projects/bodyNpaint/BnPM9-preview.png',
               '/projects/bodyNpaint/BnPM10-preview.png', '/projects/bodyNpaint/BnPM11-preview.png', '/projects/bodyNpaint/BnPM12-preview.png',
               '/projects/bodyNpaint/BnPM13-preview.png', '/projects/bodyNpaint/BnPM14-preview.png', '/projects/bodyNpaint/BnPM15-preview.png'
              ]
    }
  ];

  const skillCategories = [
    {
      id: 'language',
      icon: <RiCodeLine className="w-8 h-8 text-orange-500" />,
      skills: ['HTML / CSS', 'JavaScript', 'TypeScript', 'Golang', 'Java', 'C# (Basic)', 'PHP (Basic)', 'Python (Basic)' , 'Rust (Basic)']
    },
    {
      id: 'frontend',
      icon: <RiCodeBoxLine className="w-8 h-8 text-blue-500" />,
      skills: ['React', 'Next.js', 'Tailwind', 'Responsive Design', 'UI/UX Principles']
    },
    {
      id: 'backend',
      icon: <RiServerLine className="w-8 h-8 text-emerald-500" />,
      skills: ['GoFiber', 'Node.js', 'Laravel (Basic)' ,'RESTful APIs', 'System Design']
    },
    {
      id: 'database',
      icon: <RiDatabase2Line className="w-8 h-8 text-purple-500" />,
      skills: ['PostgreSQL', 'Oracle', 'MySQL', 'SQLite (Basic)', 'MongoDB (Basic)']
    },
    {
      id: 'tools',
      icon: <RiSettingsLine className="w-8 h-8 text-indigo-500" />,
      skills: ['Git / GitHub', 'Docker', 'Postman', 'Figma', 'Linux (Basic)']
    },
    {
      id: 'extra',
      icon: <RiLinkedinBoxLine className="w-8 h-8 text-cyan-500" />,
      skills: ['Problem Solving', 'Teamwork', 'Communication', 'Fast Learning', 'Self-Driven Learner','Adaptability', 'Leadership']
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 max-w-6xl">

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 dark:bg-cyan-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* --- Section 1: Summary --- */}
      <section id="aboutme" className="scroll-mt-40 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 mb-32 animate-fade-in-up text-center md:text-left">
        <div className="shrink-0">
          <div 
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative"
          >
            <motion.img 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                  duration: 0.2,
                  scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
              }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              dragElastic={0.6}
              dragSnapToOrigin={true}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.90 }}
              src="/profile.png"
              alt="Profile Picture"
              className="w-56 h-56 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-slate-100 dark:border-slate-800 cursor-grab active:cursor-grabbing relative" 
            />
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-blue-600 dark:bg-cyan-600 text-white rounded-lg shadow-xl text-xs z-50 whitespace-nowrap"
                >
                  {tHero('dragTooltip')}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-6xl md:leading-tight font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            {tHero('greeting')}
          </h1>
          <TypeAnimation
            sequence={[ tHero('role'), 1500, tHero('arole'), 1500,]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="mb-6 text-3xl md:text-5xl font-medium bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500"
          />
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 mt-4 leading-relaxed mx-auto md:mx-0 max-w-xl">
            {tHero('description')}
          </p>
          <p className="justify-end items-end text-xs italic text-slate-600 dark:text-slate-400 mb-6 leading-relaxed mx-auto md:mx-0 max-w-xl">
            {tHero('quote')}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a 
              whileHover={{ scale: 1.10 }}
              whileTap={{ scale: 0.90 }}
              href="/resume-sippagon-en-2026.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 hover:text-blue-400 dark:hover:text-cyan-600"
            >
              <RiFileTextLine className="w-5 h-5" />
              {tHero('resumeBtn')}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.10 }}
              whileTap={{ scale: 0.90 }}
              href="https://github.com/FozTheFox" 
              target="_blank" rel="noreferrer" 
              className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-blue-500 dark:hover:text-cyan-400"
            >
              <RiGithubLine className="w-5 h-5" />
              {tHero('githubBtn')}
            </motion.a>
          </div>
        </div>
      </section>

      {/* --- Section 2: About Me --- */}
      <section className="mb-20 animate-fade-in-up">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center justify-center md:justify-start gap-3">
          <span className="w-8 h-1 bg-blue-600 dark:bg-cyan-500 rounded-full"></span>
          {tAbout('title')}
        </h3>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mx-auto md:mx-0">
          {tAbout('description')}
        </p>
      </section>

      {/* --- Section 3: Education --- */}
      <section id="education" className="mt-20 scroll-mt-24 animate-fade-in-up">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center justify-center md:justify-start gap-3">
          <span className="w-8 h-1 bg-blue-600 dark:bg-cyan-500 rounded-full"></span>
          {tEdu('title')}
        </h3>

        <ScrollReveal direction="left">
          <div className="flex flex-col gap-8">
            <div className="group relative flex flex-col md:flex-row gap-4 md:gap-8 p-6 md:p-8 bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-blue-500/50 dark:hover:border-cyan-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="md:w-1/4 shrink-0 pl-4 md:pl-2">
                  <span className="w-36 h-12 p-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide">
                    <RiGraduationCapLine className="w-6 h-6" />
                    {tEdu('items.university.period')}
                  </span>
                </div>

                <div className="md:w-3/4 flex flex-col pl-4 md:pl-0">
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
                    {tEdu('items.university.degree')}
                  </h4>
                  <p className="text-md font-medium text-blue-600 dark:text-cyan-400 mb-4">
                    {tEdu('items.university.school')}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {tEdu('items.university.description')}
                  </p>
                </div>
              </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- Section 4: Experience --- */}
      <section id="experience" className="mt-10 scroll-mt-24 animate-fade-in-up">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center justify-center md:justify-start gap-3">
          <span className="w-8 h-1 bg-blue-600 dark:bg-cyan-500 rounded-full"></span>
          {tExp('title')}
        </h3>

        <Reorder.Group
          axis="y" 
          values={expList} 
          onReorder={setExpList} 
          className="flex flex-col gap-8 relative"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

          {expList.map((exp) => (
            <Reorder.Item 
              key={exp.id} 
              value={exp} 
              whileDrag={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)", zIndex: 50 }}
            >
              <div 
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative"
              >
                <div className="group relative flex flex-col md:flex-row gap-4 md:gap-8 p-6 md:p-8 bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-blue-500/50 dark:hover:border-cyan-500/50 hover:shadow-lg transition-all duration-300 cursor-grab active:cursor-grabbing overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 dark:bg-slate-700 rounded-l-2xl group-hover:bg-blue-500 dark:group-hover:bg-cyan-500 transition-colors"></div>

                  <div className="md:w-1/4 shrink-0 pl-4 md:pl-2">
                    <span className="w-36 h-12 p-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide">
                      <RiBriefcaseLine className="w-6 h-6" />
                      {tExp(`items.${exp.id}.period`)}
                    </span>
                  </div>

                  <div className="md:w-3/4 flex flex-col pl-4 md:pl-0">
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {tExp(`items.${exp.id}.role`)}
                    </h4>
                    <p className="text-md font-medium text-slate-500 dark:text-slate-400 mb-4">
                      {tExp(`items.${exp.id}.company`)}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {tExp(`items.${exp.id}.description`)}
                    </p>
                  </div>
                </div>
                <AnimatePresence>
                  {hoveredId === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-blue-600 dark:bg-cyan-600 text-white rounded-lg shadow-xl text-xs z-50 whitespace-nowrap"
                    >
                      {tExp(`dragTooltip`)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </section>

      {/* --- Section 5: Projects --- */}
      <ScrollReveal>
        <section id="projects" className="mt-20 scroll-mt-24">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center justify-center md:justify-start gap-3">
            <span className="w-8 h-1 bg-blue-600 dark:bg-cyan-500 rounded-full"></span>
            {tProjects('title')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="relative group h-full"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="group flex flex-col h-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-xl hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-4 bg-slate-50 dark:bg-slate-900 w-12 h-12 rounded-xl flex items-center justify-center">
                    {project.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {tProjects(`items.${project.id}.title`)}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 grow">
                    {tProjects(`items.${project.id}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-auto flex items-center gap-2 px-6 py-3 w-fit bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 border border-blue-600 dark:border-cyan-600 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-cyan-600 hover:text-white transition-all"
                  >
                    <RiGithubLine className="w-5 h-5" />
                    {tProjects('viewCode')}
                  </motion.a>

                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-blue-600 dark:bg-cyan-600 text-white rounded-lg shadow-xl text-xs z-50 whitespace-nowrap"
                      >
                        {tProjects(`tooltip`)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* --- Section 6: Skills --- */}
      <ScrollReveal>
        <section id="skills" className="mt-20 scroll-mt-24">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 flex items-center justify-center md:justify-start gap-3">
            <span className="w-8 h-1 bg-blue-600 dark:bg-cyan-500 rounded-full"></span>
            {tSkills('title')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            {skillCategories.map((category) => (
              <div 
                key={category.id} 
                className="relative group flex flex-col bg-transparent dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 transition-all duration-300 hover:border-blue-500/20 dark:hover:border-cyan-500/20 hover:shadow-lg"
              >
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {category.icon}
                </div>
                
                <h4 className="text-lg font-bold text-black dark:text-white uppercase tracking-widest mb-8">
                  {tSkills(`categories.${category.id}`)}
                </h4>
              
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className={`
                        px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-300
                        ${category.id === 'language' ? 'bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20' : ''}
                        ${category.id === 'frontend' ? 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20' : ''}
                        ${category.id === 'backend' ? 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' : ''}
                        ${category.id === 'database' ? 'bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20' : ''}
                        ${category.id === 'tools' ? 'bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20' : ''}
                        ${category.id === 'extra' ? 'bg-cyan-50 text-cyan-700 border-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20' : ''}
                        hover:scale-110 hover:shadow-lg hover:bg-opacity-100
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* --- Section 7: Contact Me --- */}
      <section id="contact" className="mt-40 mb-20 scroll-mt-24">
        <div className="max-w-4xl mx-auto border-blue-600 rounded-[3rem] p-10 md:p-20 text-center text-black dark:text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-400/50 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/50 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              {tContact('title')}
            </h3>
            <p className="text-lg md:text-xl text-black dark:text-white mb-12 max-w-2xl mx-auto leading-relaxed">
              {tContact('description')}
            </p>

            <div className="flex flex-col items-center gap-8">
              <motion.button
                onClick={() => window.location.href = 'mailto:sippagon.ph@gmail.com'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-10 py-5 bg-blue-600 text-white hover:text-blue-600 hover:bg-slate-200 dark:bg-cyan-600 dark:hover:text-cyan-600 rounded-full font-bold text-xl hover:shadow-lg shadow-blue-500/50 cursor-pointer"
              >
                <RiMailSendLine className="w-6 h-6 group-hover:animate-bounce" />
                {tContact('button')}
              </motion.button>

              <div className="flex flex-col gap-4">
                <span className="text-black dark:text-white text-sm uppercase tracking-widest font-medium">
                  {tContact('social')}
                </span>
                <div className="flex justify-center gap-6">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    href="https://github.com/FozTheFox"
                    target="_blank"
                    className="p-3 bg-slate-900 text-white hover:bg-slate-200 hover:text-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-700 dark:hover:text-cyan-400 rounded-full"
                  >
                    <RiGithubLine className="w-7 h-7" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    href="https://linkedin.com/in/sippagon-phanla-or-77a809341/"
                    target="_blank"
                    className="p-3 bg-white text-black hover:bg-slate-200 hover:text-blue-600 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-700 dark:hover:text-cyan-400 rounded-full shadow-md"
                  >
                    <RiLinkedinBoxLine className="w-7 h-7" />
                  </motion.a>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  {tContact('konamicode')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <footer className="py-10 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p className="mt-2"> © {new Date().getFullYear()} {tFooter('copyright')}</p>
        <p>{tFooter('build')}</p>
      </footer>

      {/* --- 🐱 โค้ดส่วนโชว์ Oiia Cat (วางไว้ตรงไหนก็ได้ใน div หลัก แต่แนะนำให้ไว้ล่างสุด) --- */}
      <AnimatePresence>
        {showOiiaCat && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 z-9999 flex items-center justify-center pointer-events-none"
          >
            {/* 4. แท็ก Video พร้อมตั้งค่าที่จำเป็น */}
            <video 
              ref={videoRef}
              src="/oiia-cat.mp4" // เปลี่ยนเป็นชื่อไฟล์ของคุณ
              playsInline // บังคับให้เล่นในกรอบ (จำเป็นมากสำหรับ Safari บน iPhone)
              className="w-64 h-64 md:w-full md:h-96 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}