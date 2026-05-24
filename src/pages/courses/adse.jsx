const semesters = [
  {
    title: 'SEMESTER ONE',
    objective: '(CPISM)',
    items: [
      'Programming Principles and Techniques',
      'Logic Building and Elementary Programming',
      'Building Next Generation Website',
      'Responsive Web sites using AngularJS',
      'Data Management (SQL) and more ..',
    ],
  },
  {
    title: 'SEMESTER TWO',
    objective: '(DISM)',
    items: [
      'Use XML & JSON',
      'Red Hat Linux operating system',
      'Fundamentals of Java',
      'Object Oriented Programming with Java',
      'Programming in C#',
      'Cloud Computing',
      'Fundamentals of IOT',
    ],
  },
  {
    title: 'SEMESTER 3A - JAVA',
    objective: '',
    items: [
      'Web component Development with Java',
      'Integrating Application with Spring Framework',
      'Introduction to Dart Programming',
      'Android App Development with Flutter',
      'eProject',
    ],
  },
  {
    title: 'SEMESTER 3B - .NET',
    objective: '',
    items: [
      'Developing ASP.net and MVC web application',
      'Introduction to Dart Programming',
      'Agile and Develops',
      'and more ..',
    ],
  },
  {
    title: 'SEMESTER 4A',
    objective: '(OST & JAVA)',
    items: [
      'Working with MYSQL',
      'Programming with Python',
      'Web application development using python',
      'eproject: Python web application development',
      'Oracle Database SQL',
      'Programming with PL SQL',
      'Oracle Database Administration I',
      'Oracle Database Administration II',
    ],
  },
  {
    title: 'SEMESTER 4B',
    objective: '(OST & .NET)',
    items: [
      'Working with MYSQL',
      'Programming with Python',
      'Web application development using python',
      'eproject: Python web application development',
      'Developing Microsoft Azure & Web service',
      'Creating services for the web',
      'Software engineering principle',
    ],
  },
  {
    title: 'SEMESTER 4C',
    objective: '(OST & ORACLE)',
    items: [
      'Working with MYSQL',
      'Programming with Python',
      'Web application development using python',
      'eproject: Python web application development',
      'Oracle Database SQL',
      'Programming with PL SQL',
      'Oracle Database Administration I',
      'Oracle Database Administration II',
    ],
  },
  {
    title: 'SEMESTER 4D',
    objective: '(OST & NETWORKING)',
    items: [
      'Working with MYSQL',
      'Programming with Python',
      'Web application development using python',
      'eproject: Python web application development',
      'Azure Fundamental',
      'Implementing, Managing and Monitoring Azure environment',
      'Azure architect technologies',
      'Azure architect Designs',
    ],
  },
  {
    title: 'SEMESTER 4E',
    objective: 'SQL Server - Database Manager',
    items: [
      'Programming with Python',
      'Large Data Management with MongoDB',
      'Emerging Job Areas SMAC',
      'R: Programming',
      'Foundation of big data Systems',
      'Processing Big Data (Hadoop, MapReduce, Hire, Pig Latin)',
      'Visual Analytics with Tableau',
      'Web and Social Media Analytics(Google Analytics and SAS)',
      'Project - Big Data',
    ],
  },
  {
    title: 'SEMESTER 4F',
    objective: '(AI & MACHINE LEARNING)',
    items: [
      'Programming with Python',
      'Large Data Management with MongoDB',
      'Emerging Job Areas SMAC',
      'R: Programming',
      'AI Primer(HL, DL, Neural Networks)',
      'Natural Language Processing Toolkits',
      'Machine learning',
      'Deep Learning and Machine learning APIs',
      'Project - Chatbot and Recommendation Engine',
    ],
  },
  {
    title: 'SEMESTER 4G',
    objective: '(IOT)',
    items: [
      'Programming with Python',
      'Large Data Management with MongoDB',
      'Emerging Job Areas SMAC',
      'IOT Hardware',
      'IoT Networking',
      'Programming the IoT with Python',
      'Project - IoT',
    ],
  },
]

export default function CoursesADSE() {
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
            Advance Diploma <span className="text-yellow-400">In Software Engineering</span>
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left - Image */}
          <div data-aos="fade-right" className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/src/assets/Courses/adse.jpg"
              alt="ADSE Course"
              className="w-full h-110 object-cover"
            />
          </div>

          {/* Right - Text centered */}
          <div data-aos="fade-up" className="flex flex-col   ">
            <h2 className="text-gray-900 font-bold text-2xl mb-6">
              Advance Diploma In Software Engineering
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              The Advanced Diploma in Software Engineering (ADSE) covers Java, .NET,
              Linux, Python and a lot of in-demand technologies. Students learn about the
              latest concepts like Cloud Computing and Internet of Things. These
              technologies make you knowledge-efficient and job-ready I.T. Professional.
              Aptech has alliances with various universities abroad like the Middlesex
              Universities, UK. Students gets a fantastic opportunity to study at any of
              the four campuses of the university in London, Dubai, Mauritius and Malta to
              obtain a BSc. (Hons.) degree from Middlesex University.
            </p>
          </div>

        </div>
      </div>

      {/* Semesters Section */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {semesters.map((sem, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 50}
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
                {sem.objective && (
                  <p className="text-gray-600 text-sm mb-4">
                    <span className="font-semibold">Course Objective:</span>{' '}
                    {sem.objective}
                  </p>
                )}
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