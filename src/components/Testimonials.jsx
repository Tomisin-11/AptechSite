import { useState, useEffect, useRef } from 'react'

const testimonials = [
  { name: 'Adewale Okonkwo', role: 'ADSE Graduate · Software Developer', initials: 'AO', text: 'I had zero coding experience before joining Aptech Akowonjo. Today, I work as a junior software developer at a fintech company in Lagos. The ADSE program changed my life completely.', stars: 5 },
  { name: 'Fatima Ibrahim', role: 'Data Science Graduate · Data Analyst', initials: 'FI', text: 'The Data Science course here was top-notch. The instructors were brilliant and patient. I enrolled knowing nothing about Python, and I graduated with a job offer already in hand.', stars: 5 },
  { name: 'Chukwuemeka Ude', role: 'Web Dev Graduate · Freelancer', initials: 'CU', text: 'Aptech Akowonjo gave me the skills and the confidence to start my own web design business. Two years in, I have over 30 clients. Best investment I ever made.', stars: 5 },
  { name: 'Blessing Nwachukwu', role: 'Cyber Security Graduate', initials: 'BN', text: 'The cybersecurity course was intense but rewarding. I got my CompTIA certification and landed a job at a bank just 2 months after graduation. Thank you Aptech!', stars: 5 },
  { name: 'Tunde Adesanya', role: 'UI/UX Graduate · Product Designer', initials: 'TA', text: 'The UI/UX course gave me real-world projects and Figma skills that I use daily. I now work as a product designer at a startup in Lekki. Incredible experience.', stars: 5 },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(intervalRef.current)
  }, [paused])

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p data-aos="fade-up" className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-gray-900 font-bold text-4xl mb-4">What Our Graduates Say</h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-500 max-w-xl mx-auto text-base">Real stories from real students who transformed their careers with Aptech Akowonjo.</p>
        </div>

        {/* Text Testimonial Slider */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visible.map((t, i) => (
            <div key={`${current}-${i}`} className={`bg-gray-50 rounded-2xl p-6 border border-gray-100 transition-all duration-300 ${i === 0 ? 'ring-2 ring-primary/20' : ''}`}>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0">{t.initials}</div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-gray-300'}`} />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="mt-24 text-center">
          <h2 data-aos="fade-up" className="text-gray-900 font-bold text-3xl mb-16">In Collaboration with</h2>
          <img data-aos="fade-up" data-aos-delay="100" src="/src/assets/About/collaborations.png" alt="Our Collaborations" className="mx-auto w-full max-w-3xl object-contain" />
        </div>
      </div>
    </section>
  )
}