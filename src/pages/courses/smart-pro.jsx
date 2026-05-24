const smartCourses = [
  {
    image: '/src/assets/Courses/smart/python.jpg',
    title: 'Web Application with Python',
    description: 'Learn full stack web development using python framework like django and more..',
  },
  {
    image: '/src/assets/Courses/smart/dotnet.jpg',
    title: 'Smart Professional .NET',
    description: 'Learn full stack web development using .NET framework and more...',
  },
  {
    image: '/src/assets/Courses/smart/java.jpg',
    title: 'Smart Professional Java',
    description: 'Learn to build application using java programming , framework and more...',
  },
  {
    image: '/src/assets/Courses/smart/android.jpg',
    title: 'Android App Development',
    description: 'Learn to build android appliction using java programming , framework and more...',
  },
  {
    image: '/src/assets/Courses/smart/ethical.jpg',
    title: 'Ethical Hacking',
    description: 'Understand the world of ethical hacking, penetration and more',
  },
  {
    image: '/src/assets/Courses/smart/digital-marketing.jpg',
    title: 'Digital Marketing',
    description: 'Understand the world of digital marketting, content marketting and more',
  },
  {
    image: '/src/assets/Courses/smart/sql.jpg',
    title: 'Smart Professional SQL DBA',
    description: 'Understand the world of database and more',
  },
  {
    image: '/src/assets/Courses/smart/flutter.jpg',
    title: 'Smart Professional Flutter',
    description: 'Build mobile application that run on android and IOS using Flutter.',
  },
  {
    image: '/src/assets/Courses/smart/php.jpg',
    title: 'Smart Professional PHP',
    description: 'Learn Full-stack web development using PHP frameworks like Laravel and more..',
  },
]

export default function CoursesSmart() {
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
            Aptech Smart <span className="text-yellow-400">Professional & ACN PRO</span>
          </h1>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto mt-20">

          {/* <h2
            data-aos="fade-up"
            className="text-center text-gray-900 font-bold text-4xl mb-14"
          >
            Our <span className="text-yellow-500">Smart Professional</span> Courses
          </h2> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {smartCourses.map((course, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="flex gap-6 items-start"
              >
                {/* Image with zoom on hover */}
                <div className="flex-shrink-0 w-[200px] h-[140px] rounded-xl overflow-hidden shadow-md">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-gray-900 font-bold text-xl mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}