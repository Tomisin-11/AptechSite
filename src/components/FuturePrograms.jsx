import futureImg from '../assets/Home/future-programs.png'

export default function FuturePrograms() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Future <span className="text-yellow-400">Programs</span></h2>
          <p className="text-gray-600 leading-relaxed">We are constantly expanding our curriculum to meet industry demands. Stay tuned for upcoming courses in Cloud Computing, Cybersecurity, Data Science, and more.</p>
        </div>
        <div className="w-full h-72 flex items-center justify-center">
          <img src={futureImg} alt="Future Programs" className="w-full h-full object-contain p-4" />
        </div>
      </div>
    </section>
  )
}
