import coursesHero from '../../assets/Courses/courses-hero.jpg'
import acnsImg from '../../assets/Courses/acns.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const semesters = [
  { title: 'SEMESTER ONE', objective: 'Hardware Specialist', items: ['Digital Electronics', 'Fundamentals of Computer Hardware and Networking', 'PC Configuration and Troubleshooting', 'and more!!!'] },
  { title: 'SEMESTER TWO', objective: 'Network Administrator', items: ['Networking Essentials', 'Routing Technology', 'Working with Windows Operating System', 'and more!!'] },
  { title: 'SEMESTER THREE', objective: 'Hardware Specialist', items: ['Configuring a Network Infrastructure', 'Windows Server Administration', 'Advanced Windows server configuration', 'eProject'] },
  { title: 'SEMESTER FOUR', objective: 'SQL Server - Database Manager', items: ['Database Management Using SQL Server', 'Database Administration using SQL Server', 'Database warehouse implementation using SQL Server', 'eProject'] },
]

const courseModal = {
  title: 'Aptech Certified Network Specialist (ACNS)',
  duration: '2 Years',
  schedule: 'Twice a week',
  format: 'Onsite / Online',
  details: 'Digital Electronics, Hardware & Networking, Routing Technology, Windows Server Administration, SQL Server, Database Administration',
  benefits: [
    'Set up and maintain professional IT systems',
    'Earn globally recognised networking certifications',
    'Fast-track pathway to a UK university degree',
    'Work as a Network Specialist or Database Administrator',
  ],
}

export default function CoursesACNS() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className="relative w-full h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${coursesHero})`, backgroundAttachment:'fixed', backgroundSize:'cover', backgroundPosition:'center' }}>
        <div className="absolute inset-0 bg-black/75" />
        <div data-aos="fade-up" className="relative z-10 text-center">
          <h1 className="text-white font-bold text-5xl">ACNS <span className="text-yellow-400">Career Courses</span></h1>
        </div>
      </div>

      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right" className="rounded-2xl overflow-hidden shadow-md">
            <img src={acnsImg} alt="ACNS Course" className="w-full h-full object-cover" />
          </div>
          <div data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">2 Years</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">4 Semesters</span>
            </div>
            <h2 className="text-gray-900 font-bold text-3xl mb-6">Aptech Certified Network Specialist</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Increase in PCs & internet connectivity, growth of telecom, retail, banking, manufacturing & other industries is leading to a demand for people who can set up, maintain and service PCs & IT systems. Thus, Aptech offers Aptech Certified Network Specialist (ACNS) which is a two-year program that ensures you are well-versed with networking.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              This program leads to global certifications in networking, security and database management using SQL server. This course offers the FASTEST and the MOST ECONOMICAL pathway for a degree from a U.K institution.
            </p>
            <p className="text-gray-900 font-bold text-base">JOB PROFILE: <span className="font-normal text-gray-600">Network Specialist</span></p>

            {/* Apply button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowModal(true)}
                className="bg-primary text-white font-semibold text-sm px-7 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 data-aos="fade-up" className="text-2xl font-bold text-gray-900 mb-10 text-center">Course Curriculum</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {semesters.map((sem, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 font-black text-xl mb-1 tracking-wide">{sem.title}</h3>
                  <p className="text-gray-600 text-sm mb-4"><span className="font-semibold">Course Objective:</span> {sem.objective}</p>
                  <ul className="flex flex-col gap-2">
                    {sem.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-800 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <h2 className="text-gray-900 font-bold text-xl">{courseModal.title}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors text-sm">Close</button>
            </div>
            <div className="px-6 pb-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Duration:</strong> {courseModal.duration}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h4.5" />
                  </svg>
                  Full Details:
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-6">{courseModal.details}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h4.5" />
                  </svg>
                  Benefits:
                </div>
                <ul className="pl-6 flex flex-col gap-1.5">
                  {courseModal.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />{b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25" />
                </svg>
                <span><strong>Schedule:</strong> {courseModal.schedule}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                </svg>
                <span><strong>Format:</strong> {courseModal.format}</span>
              </div>
              <div className="flex justify-end pt-2">
                <Link
                  to="/contact"
                  onClick={() => setShowModal(false)}
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