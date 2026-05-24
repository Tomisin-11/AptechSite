export default function WhyEnroll() {
  return (
    <section className="bg-[#111827] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left - Text */}
        <div>
          <h2
            data-aos="fade-up"
            data-aos-delay="0"
            className="text-white font-bold text-4xl md:text-5xl mb-6"
          >
            Why should I enroll?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-400 text-base leading-relaxed mb-8"
          >
            A career in programming is actually possible whether you are old or young,
            male or female and one of the very best reasons to become a computer
            programmer is the bounty of jobs out there. And because we are an
            increasingly technologically reliant society it is also apparent that there will be
            jobs in the programming sector for a long time to come. As other industries
            decline and cease to be, programming is growing and expanding into almost all
            areas of life.
          </p>
          
          <a  data-aos="fade-up"
            data-aos-delay="300"
            href="/courses"
            className="inline-flex items-center gap-3 bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded hover:bg-yellow-300 transition-colors"
          >
            Enroll Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Right - Looping Video */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <video
            src="/src/assets/Home/enroll-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}