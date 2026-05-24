import { useState, useEffect } from 'react'

const slides = [
  {
    image: '/src/assets/Home/HeroSection/image1.png',
    heading: 'Are You Job Ready With',
    highlight: 'Digital Skill',
    end: 'For Industry?',
    sub: 'Skill up now and stay relevant in digital age.',
  },
  {
    image: '/src/assets/Home/HeroSection/image2.png',
    heading: 'KickStart Your Career With An',
    highlight: 'ICT Degree!',
    end: '',
    sub: 'Why go to a Nigerian University when you can KickStart your Career with an ICT Degree from a University Overseas.',
  },
  {
    image: '/src/assets/Home/HeroSection/image3.png',
    heading: 'Enjoy Global',
    highlight: 'Recognition',
    end: '',
    // sub: 'Get easy & affordable access to an International I.T. Degree!',
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
<div className="relative w-full h-[85vh] overflow-visible pb-32">

      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      {/* Gradient overlay */}
<div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-6 pt-16 text-center">
        <h1 className="text-white mt-20 font-bold text-4xl md:text-5xl leading-tight max-w-5xl">
          {slide.heading}{' '}
          <span className="text-yellow-400">{slide.highlight}</span>{' '}
          {slide.end}
        </h1>
        <p className="text-white/80 mt-4 text-base md:text-lg max-w-2xl">
          {slide.sub}
        </p>
      </div>

    </div>
  )
}