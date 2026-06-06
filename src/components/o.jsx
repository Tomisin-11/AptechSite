import { Link } from 'react-router-dom'

const programs = [
  {
    image: '/src/assets/Courses/course2.jpg',
    badge: 'ON CAMPUS',
    badgeColor: 'bg-primary text-white',
    title: 'Advanced Diploma in Software Engineering',
    short: 'ADSE',
    description: 'Our flagship 2-year program covering full-stack development, AI/ML, cloud computing, data science, IoT and more — powered with Generative AI and a UK degree pathway.',
    duration: '2 Years',
    schedule: 'Four times a week',
    path: '/courses/adse',
  },
  {
    image: '/src/assets/Courses/course1.jpg',
    badge: 'ON CAMPUS & ONLINE',
    badgeColor: 'bg-yellow-400 text-black',
    title: 'Aptech Certified Network Specialist',
    short: 'ACNS',
    description: 'Specialise in hardware, networking and cybersecurity over 2 years. Graduate with globally recognised certifications and the skills to work as a Network or Security Engineer.',
    duration: '2 Years',
    schedule: 'Twice a week',
    path: '/courses/acns',
  },
  {
    image: '/src/assets/Courses/course3.jpg',
    badge: 'ON CAMPUS & ONLINE',
    badgeColor: 'bg-yellow-400 text-black',
    title: 'Smart Professional Courses',
    short: 'ASP',
    description: 'Six-month focused programs across Python, Java, Flutter, .NET, Digital Marketing, Ethical Hacking and more. Pick your track, go deep, get job-ready fast.',
    duration: '6 Months',
    schedule: 'Twice a week',
    path: '/courses/smart-pro',
  },
]

export default function FindYourProgram() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Career Programs</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-gray-900 font-black text-4xl md:text-5xl mb-4">
            Find Your <span className="text-primary">Perfect Program</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Our curriculum uses a project-based learning approach and is perfect for both beginners and experienced individuals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {programs.map((prog, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className={`absolute top-4 left-4 text-xs font-black px-3 py-1.5 rounded-full tracking-wide ${prog.badgeColor}`}>
                  {prog.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-gray-900 font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
                  {prog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-5">
                  {prog.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-5 text-sm text-gray-400 pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1.5">
                    {/* Calendar icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5" />
                    </svg>
                    {prog.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    {/* Grid icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                    {prog.schedule}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All CTA */}
        <div data-aos="fade-up" className="text-center">
          <Link to="/courses"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity text-sm">
            Browse All Courses →
          </Link>
        </div>

      </div>
    </section>
  )
}