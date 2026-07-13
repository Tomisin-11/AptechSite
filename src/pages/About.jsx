import aboutHero from '../assets/About/about-hero.jpg'
import collaborationsImg from '../assets/About/collaborations.png'
import aboutVideo from '../assets/About/about-video.mp4'
export default function About() {
  return (
    <div>
      <div className="relative w-full h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutHero})`, backgroundAttachment:'fixed', backgroundSize:'cover', backgroundPosition:'center' }}>
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center">
          <h1 className="text-white font-bold text-5xl md:text-6xl">About <span className="text-yellow-400">Us</span></h1>
          <p className="text-white/80 mt-4 text-lg">Welcome! It's all about Aptech Akowonjo Computer Education...</p>
        </div>
      </div>

      <div className="py-20 px-6 bg-white"> 
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="rounded-2xl overflow-hidden shadow-md">
              <video src={aboutVideo} autoPlay loop muted playsInline className="w-full h-200 object-cover" />
            </div>
            <div data-aos="fade-up">
              <h2 className="text-gray-900 font-bold text-4xl mb-6">About Us</h2>
              <p className="text-gray-600 text-base leading-relaxed">


Aptech Computer Education, Akowonjo, Lagos, is a premier ICT training institution established through the acquisition of the Aptech Computer Education franchise from Mumbai, India by HansFelz Technology Limited. Our foundation is built on a passion for empowering individuals with globally relevant digital skills and creating a lasting legacy of technological excellence in Nigeria.
<br /><br />
With over 25 years of combined industry experience spanning banking, insurance, information technology, corporate organizations, government institutions, and multinational companies, our leadership team recognized the need to bridge the digital skills gap and prepare the next generation of Nigerian technology professionals for the future.
<br /><br />
At Aptech Akowonjo, we are committed to developing highly skilled, innovative, and industry-ready professionals who can thrive in today's rapidly evolving digital economy. Through internationally recognized curricula, hands-on learning, and career-focused training, we equip students with the practical knowledge and confidence required to succeed in the global technology landscape.
<br /><br />
Our mission goes beyond education; it is a commitment to giving back to society by contributing to the growth and advancement of ICT in Nigeria. We believe that technology is a powerful tool for transformation, and we are dedicated to nurturing the talent that will drive innovation, economic growth, and digital transformation across Africa and beyond.
<br /><br />
At Aptech Akowonjo, we don't just teach technology, we build careers, empower futures, and inspire the next generation of digital leaders.
              </p>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 data-aos="fade-up" className="text-gray-900 font-bold text-3xl mb-16">In Collaboration with</h2>
            <img data-aos="fade-up" data-aos-delay="100" src={collaborationsImg} alt="Our Collaborations" className="mx-auto w-full max-w-3xl object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}
