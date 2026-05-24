export default function FuturePrograms() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Right - Image (shows first on mobile via order) */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="rounded-2xl overflow-hidden bg-[#eef0f8] w-full order-first md:order-last"
        >
          <img
            src="/src/assets/Home/future-programs.png"
            alt="Future Programs"
            className="w-full h-full object-contain p-4"
          />
        </div>

        {/* Left - Text */}
        <div className="order-last md:order-first">
          <h2
            data-aos="fade-right"
            data-aos-delay="0"
            className="text-gray-900 font-bold text-4xl md:text-5xl mb-6"
          >
            Future Programs
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="150"
            className="text-gray-500 text-base leading-relaxed mb-8"
          >
            For the first time Aptech is launching futuristic cutting-edge Digital
            Transformation Programs aligned with Industry 4.0 like Power Business
            Intelligence (BI), Block Chain, Artificial Intelligence (AI), Machine Learning
            with R, Software Engineering, Data Analytics (Machine Learning using R &
            Python, Artificial Intelligence, Business Intelligence), Digital Marketing
            (SEO, SEM, Mobile & Email Marketing, ORM), Big Data, in Nigeria
          </p>
          
           <a data-aos="fade-right"
            data-aos-delay="300"
            href="/courses"
            className="inline-flex items-center justify-center bg-primary text-white font-semibold px-8 py-4 rounded hover:opacity-90 transition-opacity w-60"
          >
            Get Started Today
          </a>
        </div>

      </div>
    </section>
  )
}