import { Link } from 'react-router-dom'
import coursesHero from '../assets/Courses/courses-hero.jpg'
import course1 from '../assets/Courses/course1.jpg'
import course2 from '../assets/Courses/course2.jpg'
import course3 from '../assets/Courses/course3.jpg'

const courses = [
  { image: course1, title: 'Aptech ACNS Career Courses', path: '/courses/acns' },
  { image: course2, title: 'Advanced Diploma In Software Engineering (ADSE)', path: '/courses/adse' },
  { image: course3, title: 'Aptech Smart Professional Courses', path: '/courses/smart-pro' },
]

export default function Courses() {
  return (
    <div>
      <div className="relative w-full h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${coursesHero})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/75" />
        <div data-aos="fade-up" className="relative z-10 text-center">
          <h1 className="text-white font-bold text-5xl md:text-4xl">Our <span className="text-yellow-400">Courses</span></h1>
          <p data-aos="fade-up" data-aos-delay="100" className="text-white/80 mt-4 text-lg">Aptech Lays Particular Emphasis On Academic Quality.<br />HERE'S HOW WE DO IT:</p>
        </div>
      </div>
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 data-aos="fade-up" className="text-center text-gray-900 font-bold text-4xl mb-14">We Teach <span className="text-yellow-500">In-Demand Courses</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  )
}
