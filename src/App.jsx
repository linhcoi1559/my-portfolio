import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ExternalLink, 
  FolderGit2, 
  Terminal, 
  Database,
  Code2,
  Phone
} from 'lucide-react';

const Github = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
import './index.css';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <nav>
        <div className="container nav-content">
          <div className="nav-logo">
            <span className="text-gradient">Linh</span>.dev
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="hero container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-greeting">Hi, I'm</span>
            <h1 className="hero-title">
              Nguyen Van <span className="text-gradient">Linh</span>
            </h1>
            <h2 className="hero-subtitle">Fullstack Developer</h2>
            <p className="hero-desc">
              Passionate Fullstack Developer with hands-on experience in Next.js, React, NestJS, and RESTful API design. Experienced in developing cloud-deployed web applications, integrating AI capabilities, and managing relational databases. A fast learner with a strong problem-solving mindset seeking to build impactful software solutions.
            </p>
            
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Work
              </a>
              <a href="https://www.facebook.com/nguyenvan.linhks" target="_blank" rel="noreferrer" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://www.facebook.com/nguyenvan.linhks" target="_blank" rel="noreferrer" title="Facebook">
                <Facebook />
              </a>
              <a href="https://github.com/linhcoi1559" target="_blank" rel="noreferrer" title="GitHub">
                <Github />
              </a>
              <a href="mailto:linhnguyenhn1559@gmail.com" title="Email">
                <Mail />
              </a>
              <a href="tel:+84389586668" title="Phone">
                <Phone />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-title">Technical Skills</motion.h2>
            
            <div className="skills-grid">
              <motion.div variants={fadeInUp} className="glass-card">
                <h3 className="skill-category-title">
                  <Code2 className="text-gradient" /> Languages
                </h3>
                <div className="skill-list">
                  {['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML/CSS', 'SQL'].map(skill => (
                    <span key={skill} className="badge">{skill}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass-card">
                <h3 className="skill-category-title">
                  <Terminal className="text-gradient" /> Frameworks
                </h3>
                <div className="skill-list">
                  {['React', 'Next.js', 'Node.js', 'NestJS', 'Bootstrap', 'Tailwind CSS'].map(skill => (
                    <span key={skill} className="badge">{skill}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass-card">
                <h3 className="skill-category-title">
                  <Database className="text-gradient" /> Tools & Platforms
                </h3>
                <div className="skill-list">
                  {['Git', 'GitHub', 'Vercel', 'MySQL', 'Android Studio', 'Postman'].map(skill => (
                    <span key={skill} className="badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-title">Experience & Education</motion.h2>
            
            <div className="timeline">
              <motion.div variants={fadeInUp} className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">Jan. 2023 – Mar. 2023</span>
                <h3 className="timeline-title">Fullstack Developer Intern</h3>
                <p className="timeline-company">Rikei Soft | Hanoi, Vietnam</p>
                <ul className="timeline-desc">
                  <li>Engineered a comprehensive shopping application using React and Node.js, integrating secure RESTful APIs to handle user transactions and data protection.</li>
                  <li>Developed a revenue management dashboard utilizing SQL and MySQL, enabling accurate tracking of sales performance and business metrics.</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">Dec. 2022 – Jan. 2023</span>
                <h3 className="timeline-title">Front-End Developer Intern</h3>
                <p className="timeline-company">Rikei Academy | Hanoi, Vietnam</p>
                <ul className="timeline-desc">
                  <li>Constructed pixel-perfect UI clones of Facebook, Shopee, and Pixabay using HTML, CSS, and JavaScript, mastering component architecture and layout design.</li>
                  <li>Optimized web interfaces using Bootstrap, ensuring fully responsive design across various device screen sizes.</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">Oct. 2022 – Present</span>
                <h3 className="timeline-title">Information and Communication Technology</h3>
                <p className="timeline-company">University of Science and Technology of Hanoi (USTH)</p>
                <ul className="timeline-desc">
                  <li>Pursuing a degree focusing on software engineering, web development, and computer vision.</li>
                  <li>Relevant coursework in Data Structures, Algorithms, Databases, and AI.</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-title">Featured Projects</motion.h2>
            
            <div className="projects-grid">
              {/* Project 1 */}
              <motion.div variants={fadeInUp} className="glass-card project-card">
                <div className="project-header">
                  <FolderGit2 className="project-icon" />
                  <div className="project-links">
                    <a href="https://github.com/linhcoi1559/thesis" target="_blank" rel="noreferrer" title="Source Code">
                      <Github size={20} />
                    </a>
                    <a href="https://thesis-linh15.vercel.app" target="_blank" rel="noreferrer" title="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">Smart Boarding House</h3>
                <div className="project-desc">
                  <p>A comprehensive SaaS platform for boarding house and rental management.</p>
                  <ul>
                    <li>Streamlined room listings, tenant billing, and automated contract workflows.</li>
                    <li>Integrated AI-driven assistant features to automate tenant inquiry handling, optimize search recommendations, and summarize rental data.</li>
                    <li>Architected responsive front-end and secure backend RESTful APIs with role-based access control.</li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span className="badge">Next.js</span>
                  <span className="badge">NestJS</span>
                  <span className="badge">TypeScript</span>
                  <span className="badge">AI Integration</span>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div variants={fadeInUp} className="glass-card project-card">
                <div className="project-header">
                  <FolderGit2 className="project-icon" />
                  <div className="project-links">
                    <a href="https://github.com/linhcoi1559/RedditClonePJ" target="_blank" rel="noreferrer" title="Source Code">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">Reddit Clone for Android</h3>
                <div className="project-desc">
                  <p>Native Android Reddit client built in Java, consuming Reddit RESTful APIs.</p>
                  <ul>
                    <li>Fetches and renders dynamic feed content, comments, and subreddit posts.</li>
                    <li>Engineered responsive XML layouts and custom UI components to replicate the core browsing experience and navigation flow of the official app.</li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span className="badge">Java</span>
                  <span className="badge">Android Studio</span>
                  <span className="badge">Reddit API</span>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div variants={fadeInUp} className="glass-card project-card">
                <div className="project-header">
                  <FolderGit2 className="project-icon" />
                  <div className="project-links"></div>
                </div>
                <h3 className="project-title">Traffic Sign Recognition Bot</h3>
                <div className="project-desc">
                  <p>Automated recognition system using Python and OpenCV to detect and classify diverse traffic signs in real-time.</p>
                  <ul>
                    <li>Implemented image preprocessing, filtering, and classification pipelines to support autonomous navigation algorithms with high accuracy.</li>
                  </ul>
                </div>
                <div className="project-tech">
                  <span className="badge">Python</span>
                  <span className="badge">Computer Vision</span>
                  <span className="badge">OpenCV</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>Designed & Built by Nguyen Van Linh &copy; 2026</p>
        </div>
      </footer>
    </>
  );
}

export default App;
