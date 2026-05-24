const semesters = [
  {
    title: 'SEMESTER ONE',
    objective: 'Hardware Specialist',
    items: [
      'Digital Electronics',
      'Fundamentals of Computer Hardware and Networking',
      'PC Configuration and Troubleshooting',
      'and more!!!',
    ],
  },
  {
    title: 'SEMESTER TWO',
    objective: 'Network Administrator',
    items: [
      'Networking Essentials',
      'Routing Technology',
      'Working with Windows Operating System',
      'and more!!',
    ],
  },
  {
    title: 'SEMESTER THREE',
    objective: 'Hardware Specialist',
    items: [
      'Configuring a Network Infrastructure',
      'Windows Server Administration',
      'Advanced Windows server configuration',
      'eProject',
    ],
  },
  {
    title: 'SEMESTER FOUR',
    objective: 'SQL Server - Database Manager',
    items: [
      'Database Management Using SQL Server',
      'Database Administration using SQL Server',
      'Database warehouse implementation using SQL Server',
      'eProject',
    ],
  },
]

export default function CoursesACNS() {
  return (
    <div>

      {/* Hero Banner */}
      <div
        className="relative w-full h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/src/assets/Courses/courses-hero.jpg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div data-aos="fade-up" className="relative z-10 text-center">
          <h1 className="text-white font-bold text-5xl md:text-4xl">
            Aptech Certified <span className="text-yellow-400">Network Specialist</span>
          </h1>
          {/* <p data-aos="fade-up" data-aos-delay="100" className="text-white/80 mt-4 text-lg">
            Aptech Lays Particular Emphasis On Academic Quality. <br />
            HERE'S HOW WE DO IT:
          </p> */}
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-16 mt-25 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left - Image */}
          <div data-aos="fade-right" className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/src/assets/Courses/acns.jpg"
              alt="ACNS Course"
              className="w-full h-120 object-cover"
            />
          </div>

          {/* Right - Text */}
          <div data-aos="fade-up">
            <h2 className="text-gray-900 font-bold text-2xl mb-6">
              Aptech Certified Network Specialist
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Increase in PCs & internet connectivity, growth of telecom, retail, banking,
              manufacturing & other industries is leading to a demand for people who can
              set up, maintain and service PCs & IT systems. Thus, Aptech offers Aptech
              Certified Network Specialist (ACNS) which is a two-year program that
              ensures you are well-versed with networking. This program leads to global
              certifications in networking, security and database management using SQL
              server. The ACNS program helps you make a career as a Security Specialist,
              Database Administrator, Network Manager and so on. A Network Specialist
              has a highly responsible job, not only in managing a company's vital
              information infrastructure, but also in keeping out security threats.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              This course offers the FASTEST and the MOST ECONOMICAL pathway for
              a degree from a U.K institution.
            </p>
            <p className="text-gray-900 font-bold text-base">
              JOB PROFILE : <span className="font-normal">Network Specialist</span>
            </p>
          </div>

        </div>
      </div>

      {/* Semesters Section */}
      <div className="py-16 px-6 mt-15 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {semesters.map((sem, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="flex gap-5"
            >
              {/* Book Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-gray-900 font-black text-xl mb-1 tracking-wide">
                  {sem.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-semibold">Course Objective:</span>{' '}
                  {sem.objective}
                </p>
                <ul className="flex flex-col gap-2">
                  {sem.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-800 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}