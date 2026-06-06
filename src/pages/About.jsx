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
              <video src={aboutVideo} autoPlay loop muted playsInline className="w-full h-120 object-cover" />
            </div>
            <div data-aos="fade-up">
              <h2 className="text-gray-900 font-bold text-4xl mb-6">About Us</h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Aptech Computer Education, Akowonjo, Lagos State came into being when HansFelz Technology Limited acquired the ICT Educational franchise from Aptech Computer Education, Mumbai India. It was based on the vision to pass a legacy of ICT training to the up and coming ICT servy Nigerians and also to develop the next generation of Nigerians who will continue from the present generation after more than 25 years experience garnered in the ICT space in the banking institutions, Insurance, Full Fledged IT companies, etc cutting across Private companies, corporate organizations, Public and multi-national companies. Our soul aim was to give something back to the society for the betterment of ICT in Nigeria.
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
