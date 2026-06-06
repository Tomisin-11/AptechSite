import coursesHero from '../../assets/Courses/courses-hero.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const programs = [
  {
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&q=80',
    title: 'Python Programming',
    duration: '6 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'Core Python, OOP, File Handling, Libraries (NumPy, Pandas), REST APIs, Mini Projects',
    benefits: [
      'Build real-world Python applications',
      'Work with data and automation',
      'Foundation for AI/ML and web development',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    title: 'Java Programming',
    duration: '6 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'Java Fundamentals, OOP, Data Structures, JavaFX, JDBC, Spring Boot Basics',
    benefits: [
      'Write robust, cross-platform applications',
      'Understand enterprise-grade programming',
      'Solid foundation for backend development',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    title: 'Flutter & Mobile Dev',
    duration: '6 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'Dart Language, Flutter Widgets, State Management, REST APIs, Firebase, App Deployment',
    benefits: [
      'Build iOS and Android apps from one codebase',
      'Deploy apps to the Play Store and App Store',
      'Work with real backend integrations',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    title: 'AI / Machine Learning',
    duration: '2 Years',
    schedule: 'Four times a week',
    format: 'Onsite / Online',
    details: 'Python for AI, Machine Learning Algorithms, Deep Learning, Neural Networks, NLP, Computer Vision, TensorFlow, Scikit-learn, Capstone Projects',
    benefits: [
      'Build and deploy intelligent AI-powered systems',
      'Work on real-world ML and NLP projects',
      'Graduate job-ready for AI/ML engineer roles',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80',
    title: 'Software Development',
    duration: '2 Years',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'Full-Stack Web Development, Java, .NET, Python, Database Management, DevOps Basics, Agile & Scrum, eProjects',
    benefits: [
      'Master both frontend and backend development',
      'Work with industry-standard tools and workflows',
      'Build a portfolio of real software projects',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    title: 'Data Science / Data Analytics',
    duration: '6 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'Python for Data Science, Pandas, NumPy, Data Visualisation (Matplotlib, Power BI), Statistical Analysis, Machine Learning Basics, Capstone Project',
    benefits: [
      'Analyse and interpret large datasets confidently',
      'Create compelling data visualisations and reports',
      'Launch a career as a data analyst or data scientist',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80',
    title: 'Digital Marketing',
    duration: '6 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'SEO, Google Ads, Meta Ads, Social Media Strategy, Email Marketing, Google Analytics, Content Creation, Campaign Management',
    benefits: [
      'Plan and execute end-to-end digital campaigns',
      'Grow brands through organic and paid channels',
      'Measure and optimise ROI with analytics tools',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    title: 'UI/UX & Graphic Design',
    duration: '6 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'Figma, Adobe XD, Wireframing, Prototyping, User Research, Design Systems, Adobe Photoshop, Illustrator, Brand Identity Design',
    benefits: [
      'Design beautiful, user-centred digital products',
      'Build a professional design portfolio',
      'Work as a UI/UX designer or brand designer',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    title: 'Cybersecurity & Ethical Hacking',
    duration: '6 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'Network Security, Penetration Testing, Kali Linux, Vulnerability Assessment, OWASP Top 10, Social Engineering, CEH Exam Preparation',
    benefits: [
      'Identify and exploit vulnerabilities ethically',
      'Prepare for CEH and CompTIA Security+ certifications',
      'Land roles in cybersecurity and red-team operations',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80',
    title: '.NET Development',
    duration: '6 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'C# Fundamentals, ASP.NET Core MVC, Entity Framework, REST APIs, Azure Basics',
    benefits: [
      'Build enterprise web applications',
      'Work with Microsoft tech stack',
      'Deploy to Azure cloud environments',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    title: 'Digital Marketing (Short Track)',
    duration: '3 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'SEO, Google Ads, Social Media Marketing, Email Campaigns, Analytics, Content Strategy',
    benefits: [
      'Run and manage paid ad campaigns',
      'Grow brands organically on social media',
      'Analyse and improve campaign performance',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80',
    title: 'Ethical Hacking',
    duration: '6 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'Network Security, Penetration Testing, Kali Linux, Vulnerability Assessment, OWASP, CEH Prep',
    benefits: [
      'Identify and exploit vulnerabilities ethically',
      'Prepare for CEH certification',
      'Work in cybersecurity and red-team roles',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80',
    title: 'SQL & Database Management',
    duration: '6 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'SQL Fundamentals, Joins, Stored Procedures, Indexing, SQL Server, Database Design',
    benefits: [
      'Design and manage relational databases',
      'Write complex queries for data retrieval',
      'Work as a database administrator or analyst',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&q=80',
    title: 'Android Development',
    duration: '6 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'Kotlin/Java, Android Studio, UI Design, APIs, Firebase, Google Play Deployment',
    benefits: [
      'Build native Android applications',
      'Publish apps to the Google Play Store',
      'Integrate third-party services and APIs',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    title: 'PHP & Web Development',
    duration: '6 Months',
    schedule: 'Twice a week',
    format: 'Onsite / Online',
    details: 'HTML5, CSS3, JavaScript, PHP, MySQL, Laravel Basics, WordPress',
    benefits: [
      'Build dynamic, database-driven websites',
      "Work with the world's most-used web stack",
      'Create and customise WordPress sites professionally',
    ],
  },
]

export default function CoursesSmart() {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      {/* Hero */}
      <div
        className="relative w-full h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${coursesHero})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div data-aos="fade-up" className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl">
            Aptech Smart <span className="text-yellow-400">Professional & ACN PRO</span>
          </h1>
          <p className="text-white/70 mt-3 text-base md:text-lg">
            6-month focused programs — pick your track, go deep, get job-ready fast.
          </p>
        </div>
      </div>

      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 data-aos="fade-up" className="text-center text-gray-900 font-bold text-3xl md:text-4xl mb-14">
            Our <span className="text-primary">Smart Professional</span> Courses
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {programs.map((prog, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                onClick={() => setSelected(prog)}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-gray-900 font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed flex-grow mb-4 line-clamp-2">
                    {prog.details}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-primary flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {prog.duration}
                    </div>
                    <span className="text-xs font-semibold text-primary flex items-center gap-1">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto overflow-y-auto max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <h2 className="text-gray-900 font-bold text-xl">{selected.title}</h2>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 transition-colors text-sm">
                Close
              </button>
            </div>

            <div className="px-6 pb-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Duration:</strong> {selected.duration}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h4.5" />
                  </svg>
                  Full Details:
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-6">{selected.details}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h4.5" />
                  </svg>
                  Benefits:
                </div>
                <ul className="pl-6 flex flex-col gap-1.5">
                  {selected.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25" />
                </svg>
                <span><strong>Schedule:</strong> {selected.schedule}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                </svg>
                <span><strong>Format:</strong> {selected.format}</span>
              </div>

              <div className="flex justify-end pt-2">
                <Link
                  to="/contact"
                  onClick={() => setSelected(null)}
                  className="bg-primary text-white font-semibold text-sm px-7 py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}