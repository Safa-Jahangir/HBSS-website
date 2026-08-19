import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Menu, 
  X,
  Users,
  Briefcase,
  Code2,
  Sparkles,
  GraduationCap,
  BookOpen,
  Award,
  Clock,
  CheckCircle2,
  Baby,
  BrainCircuit,
  BarChart3,
  MessageSquare,
  Laptop,
  Check,
  ChevronRight,
  MonitorCheck,
  Mic
} from 'lucide-react';

// Color Palette Constants
const INK = '#17335F';
const INK_SOFT = '#54607A';
const PAPER = '#F7F8FA';
const CARD = '#FFFFFF';
const GOLD = '#8A6B12';
const GOLD_SOFT = '#E8B23D';
const SKY = '#2F6FB0';
const LINE = '#DFE3EA';

export default function HBSSLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [activeTab, setActiveTab] = useState('skills'); // 'academics' | 'entrytest' | 'skills'
  const [activeFaq, setActiveFaq] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialPaused, setTestimonialPaused] = useState(false);

  const handleOpenApply = (programName = '') => {
    setSelectedProgram(programName);
    setApplyModalOpen(true);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted successfully for ${selectedProgram || 'Admissions'}! Our counselor will reach out shortly.`);
    setApplyModalOpen(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const academicPrograms = [
    { badge: "Foundation", title: "Junior Wing (Grade 1 - 8)", tagline: "Core conceptual clarity & homework support", features: ["Daily guided concept building", "Focus on Maths, Science & English", "Bi-weekly progress reports"], icon: Baby },
    { badge: "Board Prep", title: "Pre-9th & Matric (9th / 10th)", tagline: "FBISE & BISE Rawalpindi focused curriculum", features: ["Targeted chapter test sessions", "Board paper presentation guidelines", "Numerical & conceptual problem drills"], icon: BookOpen },
    { badge: "College Wing", title: "Intermediate (FSc / ICS)", tagline: "Pre-Medical, Pre-Engineering & Computer Science", features: ["Experienced subject specialists", "Intensive numerical & coding labs", "Comprehensive exam series"], icon: GraduationCap }
  ];

  const entryTestPrograms = [
    { badge: "Medical Wing", title: "MDCAT Prep Masterclass", tagline: "Complete PMDC aligned high-yield preparation", features: ["10,000+ Topic-wise MCQ Question Bank", "Time-management elimination tricks", "Full-length simulation grand tests"], icon: Award },
    { badge: "Engineering Wing", title: "ECAT & NUST NET Prep", tagline: "For UET, NUST, FAST, GIKI & PIEAS candidates", features: ["Advanced physics & high-speed math shortcuts", "Past papers breakdown (2015-2025)", "Computer Science entrance modules"], icon: Code2 }
  ];

  const skillCourses = [
    { 
      badge: "Tech Track", 
      title: "Data Analytics Masterclass", 
      tagline: "Turn raw data into business intelligence", 
      mode: "Onsite & Live Online", 
      features: [
        "MS Excel (Basic to Advanced) & Power Query, SQL", 
        "Python for Data Analysis (Numpy, Pandas, Matplotlib, Seaborn)", 
        "Power BI, Tableau, Web Scraping & Capstone Projects"
      ], 
      icon: BarChart3 
    },
    { 
      badge: "Next-Gen AI", 
      title: "Artificial Intelligence & ML", 
      tagline: "Applied machine learning & prompt engineering", 
      mode: "Onsite & Live Online", 
      features: [
        "Python Basics, NumPy, Pandas, Matplotlib & Seaborn", 
        "Supervised, Unsupervised & Reinforcement Learning", 
        "Deep Learning, Neural Networks, NLP, LLMs & Capstone Project"
      ], 
      icon: BrainCircuit 
    },
    { 
      badge: "Programming", 
      title: "Python Programming", 
      tagline: "From syntax foundations to object-oriented development", 
      mode: "Onsite & Live Online", 
      features: [
        "Environment setup, syntax, variables, and built-in functions", 
        "Data structures (Lists, Tuples, Dictionaries, Sets) & loops", 
        "OOP, file handling, modules & conditional workflows"
      ], 
      icon: Code2 
    },
    { 
      badge: "Productivity", 
      title: "Office Automation", 
      tagline: "Essential workplace documentation & computing tools", 
      mode: "Onsite & Live Online", 
      features: [
        "Professional document creation and formatting with MS Word", 
        "Data organization, formulas, and spreadsheets with Excel", 
        "Dynamic presentation design and delivery with PowerPoint"
      ], 
      icon: Laptop 
    },
    { 
      badge: "Communication", 
      title: "Spoken English & Communication", 
      tagline: "Fluency, corporate articulation & public speaking", 
      mode: "Onsite & Live Online", 
      features: [
        "Accent neutralization & grammar correction drills", 
        "Interview skills, boardroom debates & public speaking", 
        "Interactive group conversations and active listening"
      ], 
      icon: MessageSquare 
    },
    { 
      badge: "Career Ready", 
      title: "E-Learning & Digital Skills", 
      tagline: "Modern digital tools, freelancing & workflows", 
      mode: "Onsite & Live Online", 
      features: [
        "Remote collaboration & cloud productivity suites", 
        "Freelancing marketplace mechanics & profile building", 
        "Hands-on tool mastery for remote work efficiency"
      ], 
      icon: GraduationCap 
    }
  ];

  
  const testimonials = [
    { 
      quote: "I am currently studying in 2nd Year, and I joined this academy in my 1st Year. My experience with the academy has been excellent from the very beginning. The staff is well-educated, cooperative, and supportive. Alongside my 2nd Year studies, I am also learning skills and working towards Data Analytics.", 
      name: "Muhammad Faizan Khan", 
      program: "Intermediate & Data Analytics Student" 
    },
    { 
      quote: "I am very grateful to God that I have found a good institute with a good guide who teaches me in a way that I can easily understand and follow, and I see the feedback in myself and I am very, very satisfied with it.", 
      name: "Alok Gill", 
      program: "Student" 
    },
    { 
      quote: "I am Sobia Zaman, mother of Muhammad Emaad Ali. He is enrolled in the Data Analytics course at this institute. The course content is excellent and the instructors are very professional. It has been a great learning experience for my son.", 
      name: "Sobia Zaman", 
      program: "Parent of Data Analytics Student" 
    }
  ];

  useEffect(() => {
    if (testimonialPaused) return;
    const id = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(id);
  }, [testimonialPaused, testimonials.length]);

  return (
    <div className="min-h-screen font-sans selection:bg-[#E8B23D] selection:text-[#17335F] overflow-x-hidden" style={{ backgroundColor: PAPER, color: INK }}>
      
      {/* Background Decorative Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] rounded-full blur-[140px]" style={{ backgroundColor: `${SKY}15` }} />
        <div className="absolute top-1/2 right-[-5%] w-[450px] h-[450px] rounded-full blur-[160px]" style={{ backgroundColor: `${GOLD_SOFT}15` }} />
      </div>

      {/* Top Banner Ticker */}
      <div className="overflow-hidden relative z-50 shadow-inner" style={{ backgroundColor: GOLD_SOFT }}>
        <div className="marquee-track py-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 px-6 shrink-0 whitespace-nowrap text-xs font-bold tracking-wide" style={{ color: INK }}>
              <span className="text-[10px] uppercase px-2 py-0.5 rounded-full font-black shadow-sm" style={{ backgroundColor: INK, color: GOLD_SOFT }}>New</span>
              <Mic className="w-3.5 h-3.5" style={{ color: INK }} />
              <span>Admissions Open for New Batches — Academic, MDCAT/ECAT & Professional Tech Courses (Online/Onsite)</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .marquee-track { display: flex; width: max-content; animation: hbss-marquee 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes hbss-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-lg border-b shadow-sm" style={{ backgroundColor: `${CARD}90`, borderColor: LINE }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.a href="#" whileHover={{ scale: 1.02 }} className="flex items-center gap-3 group z-10">
              <div className="p-1 border rounded-xl backdrop-blur-md transition-all shadow-sm" style={{ borderColor: LINE, backgroundColor: PAPER }}>
                <img src="/logo.jpeg" alt="HBSS Logo" className="h-10 w-auto block object-contain rounded" />
              </div>
              <div className="leading-none">
                <span className="text-2xl font-black tracking-tight block" style={{ color: INK }}>HBSS</span>
                <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: GOLD }}>Institute</span>
              </div>
            </motion.a>

            <div className="hidden lg:flex items-center space-x-7 font-medium text-sm z-10" style={{ color: INK_SOFT }}>
              <a href="#programs-hub" className="hover:opacity-80 transition-opacity">Courses & Batches</a>
              <a href="#learning-modes" className="hover:opacity-80 transition-opacity">Learning Modes</a>
              <a href="#features" className="hover:opacity-80 transition-opacity">Methodology</a>
              <a href="#faqs" className="hover:opacity-80 transition-opacity">FAQs</a>
              <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
            </div>

            <div className="hidden lg:flex items-center gap-3 z-10">
              
              <motion.button 
                whileHover={{ scale: 1.04 }} 
                whileTap={{ scale: 0.96 }}
                onClick={() => handleOpenApply('Admissions 2026')}
                className="font-extrabold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
                style={{ backgroundColor: GOLD, color: CARD }}
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden focus:outline-none z-10 p-2" style={{ color: INK }}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden border-b px-6 pt-3 pb-6 space-y-3 font-medium" style={{ backgroundColor: CARD, borderColor: LINE, color: INK_SOFT }}>
              <a href="#programs-hub" onClick={() => setMobileMenuOpen(false)} className="block py-1">Courses & Batches</a>
              <a href="#learning-modes" onClick={() => setMobileMenuOpen(false)} className="block py-1">Learning Modes</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-1">Methodology</a>
              <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="block py-1">FAQs</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1">Contact</a>
              <button onClick={() => { setMobileMenuOpen(false); handleOpenApply('Admissions'); }} className="w-full text-center font-bold py-3 rounded-xl mt-3 shadow-md" style={{ backgroundColor: GOLD, color: CARD }}>
                Apply Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold shadow-xs" style={{ backgroundColor: CARD, borderColor: LINE, color: GOLD }}>
                <Sparkles className="w-3.5 h-3.5" /> Rawalpindi Campus & Online Virtual Classrooms
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15]" style={{ color: INK }}>
                Pakistan's Hybrid Platform for <span className="underline decoration-wavy underline-offset-8" style={{ color: GOLD, textDecorationColor: `${GOLD}40` }}>Board Toppers</span> & Modern Tech Careers.
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ color: INK_SOFT }}>
                Coaching for Grades 1–8, Matric, FSc/ICS, and ECAT/MDCAT test series, alongside industry-grade practical tracks in Data Analytics, AI, and Spoken English.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 justify-center lg:justify-start pt-1 text-xs" style={{ color: INK_SOFT }}>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border shadow-xs" style={{ backgroundColor: CARD, borderColor: LINE }}>
                  <Check className="w-3.5 h-3.5" style={{ color: GOLD }} /> Daily Board Test Series
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border shadow-xs" style={{ backgroundColor: CARD, borderColor: LINE }}>
                  <Check className="w-3.5 h-3.5" style={{ color: GOLD }} /> Live Interactive Online Streams
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border shadow-xs" style={{ backgroundColor: CARD, borderColor: LINE }}>
                  <Check className="w-3.5 h-3.5" style={{ color: GOLD }} /> Hands-on Tech Projects
                </span>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <motion.button 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleOpenApply('Admissions 2026')}
                  className="font-black px-8 py-4 rounded-xl shadow-lg text-center transition flex items-center justify-center gap-2 text-base"
                  style={{ backgroundColor: GOLD, color: CARD }}
                >
                  Start Enrollment <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.a 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.97 }}
                  href="#programs-hub" 
                  className="font-bold px-7 py-4 rounded-xl text-center transition flex items-center justify-center gap-2 text-base border shadow-xs"
                  style={{ borderColor: LINE, color: INK, backgroundColor: CARD }}
                >
                  View Course Catalog
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-5 relative">
              <div className="relative border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl overflow-hidden" style={{ backgroundColor: CARD, borderColor: LINE }}>
                <div className="absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: `${GOLD_SOFT}25` }} />

                <div className="flex items-center justify-between border-b pb-4 mb-6" style={{ borderColor: LINE }}>
                  <div className="flex items-center gap-3">
                    <img src="/logo.jpeg" alt="Logo" className="w-9 h-9 object-contain rounded border p-0.5 shadow-xs" style={{ borderColor: LINE, backgroundColor: PAPER }} />
                    <div>
                      <h4 className="font-bold text-sm" style={{ color: INK }}>HBSS Admission Portal</h4>
                      <p className="text-[10px]" style={{ color: GOLD }}>Phase 1 Active Batches</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1 shadow-xs" style={{ backgroundColor: '#E6F4EA', borderColor: '#CEEAD6', color: '#137333' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Intake Open
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 border rounded-xl transition-all flex items-center justify-between shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE }}>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5" style={{ color: GOLD }} />
                      <div>
                        <p className="text-xs font-bold" style={{ color: INK }}>Academic Coaching (1–12)</p>
                        <p className="text-[10px]" style={{ color: INK_SOFT }}>FBISE & BISE Rawalpindi Syllabus</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold" style={{ color: GOLD }}>Onsite</span>
                  </div>

                  <div className="p-3.5 border rounded-xl transition-all flex items-center justify-between shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE }}>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5" style={{ color: GOLD }} />
                      <div>
                        <p className="text-xs font-bold" style={{ color: INK }}>MDCAT / ECAT Crash Batch</p>
                        <p className="text-[10px]" style={{ color: INK_SOFT }}>Targeted MCQs & Paper Analysis</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold" style={{ color: GOLD }}>Onsite</span>
                  </div>

                  <div className="p-3.5 border rounded-xl flex items-center justify-between shadow-sm" style={{ backgroundColor: `${GOLD_SOFT}15`, borderColor: `${GOLD_SOFT}40` }}>
                    <div className="flex items-center gap-3">
                      <Laptop className="w-5 h-5" style={{ color: GOLD }} />
                      <div>
                        <p className="text-xs font-bold" style={{ color: INK }}>AI & Data Analytics Tracks</p>
                        <p className="text-[10px]" style={{ color: INK_SOFT }}>Hands-on certifications & tools</p>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded shadow-xs" style={{ backgroundColor: GOLD, color: CARD }}>Hybrid</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t flex items-center justify-between text-xs" style={{ borderColor: LINE, color: INK_SOFT }}>
                  <span>Campuses & Distance Learning</span>
                  <a href="#contact" className="font-bold hover:underline flex items-center gap-1" style={{ color: GOLD }}>
                    Fazal Town, Rawalpindi <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-y py-10 relative z-10 shadow-xs" style={{ backgroundColor: CARD, borderColor: LINE }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-black" style={{ color: GOLD }}>100%</p>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: INK_SOFT }}>Concept-Oriented Focus</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-black" style={{ color: INK }}>Dual</p>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: INK_SOFT }}>Onsite & Online Modes</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-black" style={{ color: GOLD }}>1–12</p>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: INK_SOFT }}>Grades + Entry Tests</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-black" style={{ color: INK }}>4+ Tech</p>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: INK_SOFT }}>Career Skill Modules</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Programs Hub */}
      <section id="programs-hub" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Select Your Pathway</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2" style={{ color: INK }}>Explore All Courses & Programs</h2>
            <p className="text-sm mt-3" style={{ color: INK_SOFT }}>Filter between regular academic schooling coaching, specialized medical/engineering entrance test batches, or high-income tech skills.</p>
            
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl border max-w-md mx-auto shadow-sm" style={{ backgroundColor: CARD, borderColor: LINE }}>
              <button 
                onClick={() => setActiveTab('skills')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${activeTab === 'skills' ? 'shadow-sm' : 'hover:opacity-75'}`}
                style={activeTab === 'skills' ? { backgroundColor: GOLD, color: CARD } : { color: INK_SOFT }}
              >
                Tech & Skills
              </button>
              <button 
                onClick={() => setActiveTab('academics')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${activeTab === 'academics' ? 'shadow-sm' : 'hover:opacity-75'}`}
                style={activeTab === 'academics' ? { backgroundColor: GOLD, color: CARD } : { color: INK_SOFT }}
              >
                Academics (1-12)
              </button>
              <button 
                onClick={() => setActiveTab('entrytest')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${activeTab === 'entrytest' ? 'shadow-sm' : 'hover:opacity-75'}`}
                style={activeTab === 'entrytest' ? { backgroundColor: GOLD, color: CARD } : { color: INK_SOFT }}
              >
                ECAT / MDCAT
              </button>
            </div>
          </div>

          <div className="mt-12">
            
            {activeTab === 'skills' && (
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCourses.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -6 }} className="rounded-2xl p-6 border shadow-sm transition-all flex flex-col justify-between group relative" style={{ backgroundColor: CARD, borderColor: LINE }}>
                      <div className="absolute top-4 right-4 border rounded-full px-2.5 py-0.5 text-[10px] font-bold shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: GOLD }}>
                        {item.mode}
                      </div>
                      <div>
                        <div className="w-12 h-12 border rounded-xl flex items-center justify-center mb-5 shadow-xs transition-colors group-hover:shadow-md" style={{ backgroundColor: PAPER, borderColor: LINE, color: GOLD }}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-bold" style={{ color: INK_SOFT }}>{item.badge}</span>
                        <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: INK }}>{item.title}</h3>
                        <p className="text-xs mb-4" style={{ color: INK_SOFT }}>{item.tagline}</p>
                        
                        <div className="space-y-2 border-t pt-4 mb-6" style={{ borderColor: LINE }}>
                          {item.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-[11px]" style={{ color: INK_SOFT }}>
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => handleOpenApply(item.title)}
                        className="w-full py-2.5 rounded-xl border text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-xs"
                        style={{ backgroundColor: PAPER, borderColor: LINE, color: INK }}
                      >
                        Enroll Course <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === 'academics' && (
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
                {academicPrograms.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -6 }} className="rounded-2xl p-7 border shadow-sm transition-all flex flex-col justify-between group" style={{ backgroundColor: CARD, borderColor: LINE }}>
                      <div>
                        <div className="w-12 h-12 border rounded-xl flex items-center justify-center mb-5 shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: GOLD }}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-bold" style={{ color: INK_SOFT }}>{item.badge}</span>
                        <h3 className="text-2xl font-bold mb-2" style={{ color: INK }}>{item.title}</h3>
                        <p className="text-xs mb-4" style={{ color: INK_SOFT }}>{item.tagline}</p>
                        
                        <div className="space-y-2.5 border-t pt-4 mb-6" style={{ borderColor: LINE }}>
                          {item.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs" style={{ color: INK_SOFT }}>
                              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => handleOpenApply(item.title)}
                        className="w-full py-3 rounded-xl border text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-xs"
                        style={{ backgroundColor: PAPER, borderColor: LINE, color: INK }}
                      >
                        Enroll Academic Class <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === 'entrytest' && (
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {entryTestPrograms.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -6 }} className="rounded-3xl p-8 border shadow-sm transition-all flex flex-col justify-between group" style={{ backgroundColor: CARD, borderColor: LINE }}>
                      <div>
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 font-bold shadow-md" style={{ backgroundColor: GOLD, color: CARD }}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs uppercase tracking-widest font-extrabold" style={{ color: GOLD }}>{item.badge}</span>
                        <h3 className="text-2xl font-bold mt-1 mb-2" style={{ color: INK }}>{item.title}</h3>
                        <p className="text-sm mb-6" style={{ color: INK_SOFT }}>{item.tagline}</p>
                        
                        <div className="space-y-3 border-t pt-5 mb-8" style={{ borderColor: LINE }}>
                          {item.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2.5 text-xs" style={{ color: INK_SOFT }}>
                              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => handleOpenApply(item.title)}
                        className="w-full py-3.5 rounded-xl text-sm font-black transition-all text-center flex items-center justify-center gap-2 shadow-md"
                        style={{ backgroundColor: GOLD, color: CARD }}
                      >
                        Join Test Preparation Batch <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

          </div>

        </div>
      </section>

      {/* Learning Modes */}
      <section id="learning-modes" className="py-24 relative z-10 border-t" style={{ borderColor: LINE, backgroundColor: CARD }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Flexible Education</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2" style={{ color: INK }}>Study On-Campus or Online</h2>
            <p className="text-sm mt-3" style={{ color: INK_SOFT }}>Choose the learning experience that fits your lifestyle without compromising on quality or mentorship.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border shadow-sm relative overflow-hidden group" style={{ backgroundColor: PAPER, borderColor: LINE }}>
              <div className="p-3 rounded-2xl w-fit mb-6 shadow-sm" style={{ backgroundColor: GOLD, color: CARD }}>
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: INK }}>Onsite Campus Learning</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: INK_SOFT }}>
                Join our disciplined, distraction-free classrooms near Fazal Town, Rawalpindi. Experience in-person mentorship, physical test checking, and peer group study.
              </p>
              <ul className="space-y-2.5 text-xs mb-6" style={{ color: INK_SOFT }}>
                <li className="flex items-center gap-2"><Check className="w-4 h-4" style={{ color: GOLD }} /> Air-conditioned, tech-equipped classrooms</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4" style={{ color: GOLD }} /> Direct one-on-one doubt clearing sessions with faculty</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4" style={{ color: GOLD }} /> Strict attendance & weekly parent-teacher reporting</li>
              </ul>
              <div className="p-3 rounded-xl border text-xs font-mono shadow-xs" style={{ backgroundColor: CARD, borderColor: LINE, color: INK }}>
                📍 Location: Fazal Town, Phase-I, Airport Road, Rawalpindi
              </div>
            </div>

            <div className="p-8 rounded-3xl border shadow-sm relative overflow-hidden group" style={{ backgroundColor: PAPER, borderColor: `${GOLD_SOFT}40` }}>
              <div className="p-3 rounded-2xl w-fit mb-6 shadow-sm" style={{ backgroundColor: GOLD, color: CARD }}>
                <MonitorCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: INK }}>Live Interactive Online Classes</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: INK_SOFT }}>
                Study from anywhere across Pakistan or overseas with live interactive screen-sharing, digital whiteboard demonstrations, and recorded class archives.
              </p>
              <ul className="space-y-2.5 text-xs mb-6" style={{ color: INK_SOFT }}>
                <li className="flex items-center gap-2"><Check className="w-4 h-4" style={{ color: GOLD }} /> High-definition live audio & video interactive sessions</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4" style={{ color: GOLD }} /> Digital PDF study notes & recorded lecture backup</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4" style={{ color: GOLD }} /> Online quizzes, mock timer tests & instant grading</li>
              </ul>
              <div className="p-3 rounded-xl border text-xs font-mono shadow-xs" style={{ backgroundColor: CARD, borderColor: `${GOLD_SOFT}40`, color: GOLD }}>
                🌐 Available Nationwide & for Overseas Students
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Methodology */}
      <section id="features" className="py-24 relative z-10 border-t" style={{ borderColor: LINE, backgroundColor: PAPER }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>The HBSS Edge</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2" style={{ color: INK }}>Proven Preparation System</h2>
            <p className="text-sm mt-3" style={{ color: INK_SOFT }}>A systematic 4-step framework engineered for consistent board and entrance test achievements.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Concept Lecture", desc: "Crystal-clear breakdown of fundamental syllabus concepts rather than rote learning." },
              { step: "02", title: "Daily Practice Drills", desc: "Topic-wise past paper questions, high-yield MCQs, and board numerical sets." },
              { step: "03", title: "Weekly Testing", desc: "Strictly timed test series simulating board and university entry examination patterns." },
              { step: "04", title: "Remedial Feedback", desc: "Individual paper review, marking corrections, and parent performance reviews." }
            ].map((item, idx) => (
              <div key={idx} className="border rounded-2xl p-6 relative shadow-sm" style={{ backgroundColor: CARD, borderColor: LINE }}>
                <span className="text-3xl font-black mb-4 block font-mono" style={{ color: `${GOLD}50` }}>{item.step}</span>
                <h4 className="text-lg font-bold mb-2" style={{ color: INK }}>{item.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: INK_SOFT }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative z-10 border-t" style={{ borderColor: LINE, backgroundColor: CARD }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>What People Say</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2" style={{ color: INK }}>From Students &amp; Parents</h2>
          </div>

          <div
            className="grid md:grid-cols-3 gap-6"
            onMouseEnter={() => setTestimonialPaused(true)}
            onMouseLeave={() => setTestimonialPaused(false)}
          >
            <AnimatePresence mode="popLayout">
              {[0, 1, 2].map((offset) => {
                const t = testimonials[(testimonialIndex + offset) % testimonials.length];
                return (
                  <motion.div
                    key={`${testimonialIndex}-${offset}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45 }}
                    className="rounded-2xl p-6 border shadow-sm flex flex-col justify-between"
                    style={{ backgroundColor: PAPER, borderColor: LINE }}
                  >
                    <p className="text-sm leading-relaxed mb-6" style={{ color: INK }}>&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0 shadow-xs" style={{ backgroundColor: CARD, borderColor: LINE, color: GOLD }}>
                        <Users className="w-4.5 h-4.5" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-sm font-bold" style={{ color: INK }}>{t.name}</p>
                        <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: GOLD }}>{t.program}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="rounded-full transition-all"
                style={{ width: i === testimonialIndex ? 20 : 8, height: 8, backgroundColor: i === testimonialIndex ? GOLD : LINE }}
              />
            ))}
          </div>

          
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-24 relative z-10 border-t" style={{ borderColor: LINE, backgroundColor: CARD }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Frequently Asked Questions</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2" style={{ color: INK }}>Have Questions? We Have Answers</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I attend Data Analytics or AI courses purely online?",
                a: "Yes! All our professional skill courses (Data Analytics, Artificial Intelligence, Spoken English, and Digital Skills) are available in both Live Interactive Online mode and physical Onsite sessions at our Rawalpindi campus."
              },
              {
                q: "Which boards are covered in the Academic coaching wing?",
                a: "Our regular academic sessions from Grade 1 through 12 (Matric, FSc Pre-Medical, Pre-Engineering, and ICS) are specifically mapped according to the official curriculum of FBISE (Federal Board) and BISE Rawalpindi."
              },
              {
                q: "What is the schedule for MDCAT / ECAT test preparation?",
                a: "We offer both regular comprehensive batches and intensive crash test sessions right after Intermediate board exams, featuring full-syllabus mock tests and numerical drills."
              },
              {
                q: "How can I register or visit the campus?",
                a: "You can click 'Apply Now' on this website to fill out an instant registration form, call us at 0349-5216134, or visit our campus located near Attock Petrol Pump, Fazal Town Phase-I, Main Old Airport Road, Rawalpindi."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border rounded-2xl overflow-hidden shadow-xs transition-colors" style={{ backgroundColor: PAPER, borderColor: LINE }}>
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm focus:outline-none"
                  style={{ color: INK }}
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${activeFaq === idx ? 'rotate-90' : ''}`} style={{ color: GOLD }} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-5 pb-5 text-xs leading-relaxed border-t pt-3" style={{ borderColor: LINE, color: INK_SOFT, backgroundColor: CARD }}>
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10 border-t" style={{ borderColor: LINE, backgroundColor: PAPER }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 border rounded-3xl p-8 sm:p-12 shadow-sm" style={{ backgroundColor: CARD, borderColor: LINE }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Admission Helpdesk</span>
              <h2 className="text-3xl font-black mt-1 mb-4" style={{ color: INK }}>Contact HBSS Institute</h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: INK_SOFT }}>
                Speak directly with our academic counselors for fee structures, batch timings, or demo class schedules for online and onsite tracks.
              </p>
              
              <div className="space-y-4 text-sm" style={{ color: INK_SOFT }}>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl border shrink-0 mt-0.5 shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: GOLD }}><MapPin className="w-5 h-5" /></div>
                  <span>HBSS Institute, Near Attock Petrol Pump, Fazal Town, Phase-I, Main Old Airport Road, Rawalpindi</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl border shrink-0 shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: GOLD }}><Phone className="w-5 h-5" /></div>
                  <span>0349-5216134</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl border shrink-0 shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: GOLD }}><Mail className="w-5 h-5" /></div>
                  <span>hbssacademy15@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl border shrink-0 shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: GOLD }}><Clock className="w-5 h-5" /></div>
                  <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted! We will contact you soon."); }}>
              <div>
                <label className="block text-xs font-bold uppercase mb-1" style={{ color: INK_SOFT }}>Student / Parent Name</label>
                <input type="text" required placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: INK }} />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-1" style={{ color: INK_SOFT }}>Phone Number (WhatsApp)</label>
                <input type="tel" required placeholder="0349-5216134" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: INK }} />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-1" style={{ color: INK_SOFT }}>Select Program of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: INK }}>
                  <option value="data-ai">Data Analytics / AI Track (Online / Onsite)</option>
                  <option value="spoken-english">Spoken English & Communication</option>
                  <option value="ecat-mdcat">MDCAT / ECAT Entry Test</option>
                  <option value="fsc-ics">Intermediate (FSc / ICS 11th & 12th)</option>
                  <option value="matric">Matric / Pre-9th (FBISE / Rawalpindi)</option>
                  <option value="junior">Junior Wing (Grade 1 - 8)</option>
                </select>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full font-black py-3.5 rounded-xl text-sm transition shadow-md mt-2"
                style={{ backgroundColor: GOLD, color: CARD }}
              >
                Submit Quick Inquiry
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t text-xs relative z-10" style={{ backgroundColor: CARD, borderColor: LINE, color: INK_SOFT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b" style={{ borderColor: LINE }}>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo.jpeg" alt="Logo" className="h-10 w-auto rounded object-contain border p-1" style={{ borderColor: LINE, backgroundColor: PAPER }} />
                <span className="text-xl font-black tracking-tight" style={{ color: INK }}>HBSS <span style={{ color: GOLD }}>Institute</span></span>
              </div>
              <p className="leading-relaxed text-xs" style={{ color: INK_SOFT }}>
                A premier coaching and skill training institute offering quality academic programs from Grade 1 to 12, ECAT/MDCAT, alongside professional certifications in Data Analytics, AI, and Spoken English.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 border-b pb-1.5 w-fit" style={{ color: INK, borderColor: GOLD }}>Quick Programs</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#programs-hub" className="hover:opacity-75">Junior Wing (Grade 1-8)</a></li>
                <li><a href="#programs-hub" className="hover:opacity-75">Matric & Intermediate (FSc/ICS)</a></li>
                <li><a href="#programs-hub" className="hover:opacity-75">MDCAT & ECAT Batches</a></li>
                <li><a href="#programs-hub" className="hover:opacity-75">Data Analytics Masterclass</a></li>
                <li><a href="#programs-hub" className="hover:opacity-75">Artificial Intelligence & ML</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 border-b pb-1.5 w-fit" style={{ color: INK, borderColor: GOLD }}>Rawalpindi Campus</h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <span>Near Attock Petrol Pump, Fazal Town Phase-I, Main Old Airport Road, Rawalpindi</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                  <span>0349-5216134</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                  <span>hbssacademy15@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4 border-b pb-1.5 w-fit" style={{ color: INK, borderColor: GOLD }}>Official Media</h4>
              <p className="text-xs mb-4" style={{ color: INK_SOFT }}>Follow us for test dates, result announcements, and scholarship tests:</p>
              <div className="flex items-center space-x-3 mb-4">
                {[Facebook, Instagram, Linkedin].map((SocialIcon, idx) => (
                  <a key={idx} href="#" className="p-2.5 rounded-xl transition border shadow-xs flex items-center justify-center" style={{ backgroundColor: PAPER, borderColor: LINE, color: GOLD }}>
                    <SocialIcon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs" style={{ color: INK_SOFT }}>
            <p>© {new Date().getFullYear()} HBSS Institute. All rights reserved.</p>
            <p>Official Portal: <a href="https://hbssinstitute.com" className="font-semibold hover:underline" style={{ color: GOLD }}>hbssinstitute.com</a></p>
          </div>

        </div>
      </footer>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {applyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setApplyModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }} 
              transition={{ type: "spring", duration: 0.4 }} 
              className="rounded-2xl max-w-md w-full p-6 border shadow-2xl relative z-10"
              style={{ backgroundColor: CARD, borderColor: LINE }}
            >
              <button onClick={() => setApplyModalOpen(false)} className="absolute top-4 right-4 transition-opacity hover:opacity-70" style={{ color: INK_SOFT }}>
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-6">
                <img src="/logo.jpeg" alt="Logo" className="h-12 w-auto mx-auto mb-3 rounded object-contain border p-1 shadow-xs" style={{ borderColor: LINE, backgroundColor: PAPER }} />
                <h3 className="text-xl font-bold" style={{ color: INK }}>Enroll at HBSS Institute</h3>
                <p className="text-xs mt-1" style={{ color: INK_SOFT }}>Submit your preferences to confirm your seat.</p>
              </div>
              
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase mb-1" style={{ color: INK_SOFT }}>Selected Track</label>
                  <input type="text" value={selectedProgram} readOnly className="w-full px-4 py-2.5 rounded-xl border text-sm font-semibold outline-none cursor-not-allowed shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: GOLD }} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase mb-1" style={{ color: INK_SOFT }}>Full Name</label>
                  <input type="text" required placeholder="Student / Applicant Name" className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: INK }} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase mb-1" style={{ color: INK_SOFT }}>Study Mode</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: INK }}>
                    <option value="onsite">Onsite (Rawalpindi Campus)</option>
                    <option value="online">Online (Live Remote Sessions)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase mb-1" style={{ color: INK_SOFT }}>WhatsApp / Phone Number</label>
                  <input type="tel" required placeholder="0349-5216134" className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none shadow-xs" style={{ backgroundColor: PAPER, borderColor: LINE, color: INK }} />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full font-black py-3 rounded-xl text-sm transition mt-2 shadow-md"
                  style={{ backgroundColor: GOLD, color: CARD }}
                >
                  Submit Application
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}