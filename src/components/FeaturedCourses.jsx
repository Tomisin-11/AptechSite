import { Link } from 'react-router-dom'

const courses = [
  { image: '/src/assets/Courses/course1.jpg', title: 'Aptech ACNS Career Courses', path: '/courses/acns' },
  { image: '/src/assets/Courses/course2.jpg', title: 'Advanced Diploma In Software Engineering (ADSE)', path: '/courses/adse' },
  { image: '/src/assets/Courses/course3.jpg', title: 'Aptech Smart Professional Courses', path: '/courses/smart-pro' },
]


export default function FindYourProgram() {
  return (
    <section className="py-20 px-6 bg-white">
          <div>
            
    {/* Header */}
       

            <div>
 
                  <div className="py-16   bg-white">
                    <div className="max-w-6xl mx-auto">
                       <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Career Programs</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-gray-900 font-black font-bold text-4xl mb-4">
            Find Your <span className="text-primary">Perfect Program</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Our curriculum uses a project-based learning approach and is perfect for both beginners and experienced individuals.
          </p>
        </div>
                      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
                        {courses.map((course, i) => (
                          <Link to={course.path} key={i}
                            data-aos={i === 0 ? 'fade-right' : i === 2 ? 'fade-left' : 'fade-up'}
                            data-aos-delay={i * 100}
                            className="relative rounded-2xl overflow-hidden h-[440px] group cursor-pointer">
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
                            <div className="absolute top-6 left-6 right-6">
                              <h3 className="text-white font-bold text-2xl leading-snug">{course.title}</h3>
                            </div>
                            <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white font-semibold text-sm">
                              Read More
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                              </svg>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
          </div>
    </section>
  )
}