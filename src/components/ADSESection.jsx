// import { Link } from 'react-router-dom'

// const tracks = [
//   { icon: '☁️', label: 'Cloud & Azure' },
//   { icon: '🤖', label: 'AI & Machine Learning' },
//   { icon: '📊', label: 'Data Science' },
//   { icon: '📱', label: 'Flutter & Mobile' },
//   { icon: '🐍', label: 'Python & Django' },
//   { icon: '⚙️', label: 'Java & Spring Boot' },
//   { icon: '🔒', label: 'Ethical Hacking' },
//   { icon: '🌐', label: 'IoT Development' },
// ]

// const exits = [
//   { label: 'After Term 1', cert: 'CPISM', full: 'Certificate of Proficiency in Information Systems Management', color: 'border-l-blue-500' },
//   { label: 'After Term 2', cert: 'DISM', full: 'Diploma in Information Systems Management', color: 'border-l-primary' },
//   { label: 'Full Course', cert: 'ADSE', full: 'Advanced Diploma in Software Engineering', color: 'border-l-yellow-400' },
// ]

// export default function ADSESection() {
//   return (
//     <section className="py-20 px-6 bg-black overflow-hidden">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
//           <div>
//             <p data-aos="fade-up" className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Flagship Program</p>
//             <h2 data-aos="fade-up" data-aos-delay="100" className="text-white font-black text-4xl md:text-5xl leading-tight">
//               Advanced Diploma in<br /><span className="text-yellow-400">Software Engineering</span>
//             </h2>
//           </div>
//           <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap gap-2 md:justify-end">
//             <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full">2 Years</span>
//             <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full">4 Terms</span>
//             <span className="bg-yellow-400 text-black text-xs font-black px-3 py-1.5 rounded-full">Powered with Gen AI</span>
//           </div>
//         </div>

//         {/* Description + Image */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-14">
//           <div data-aos="fade-right">
//             <p className="text-white/70 text-base leading-relaxed mb-5">
//               The ADSE is Aptech's most comprehensive and career-transforming program. You'll master the full stack — from web and mobile development to AI, data science, cloud computing, and ethical hacking — all powered with Generative AI tools.
//             </p>
//             <p className="text-white/70 text-base leading-relaxed mb-8">
//               Graduates gain globally recognised certifications and a unique pathway to a <strong className="text-white">BSc (Hons.) from Middlesex University, UK</strong> — one of the fastest and most affordable routes to an international degree.
//             </p>

//             {/* Exit Certifications */}
//             <div className="flex flex-col gap-3">
//               {exits.map((e, i) => (
//                 <div key={i} data-aos="fade-up" data-aos-delay={i * 80}
//                   className={`border-l-4 ${e.color} bg-white/5 rounded-r-xl pl-4 pr-5 py-3`}>
//                   <p className="text-white/50 text-xs uppercase tracking-wide mb-0.5">{e.label}</p>
//                   <p className="text-white font-bold text-sm">{e.cert} <span className="text-white/60 font-normal">— {e.full}</span></p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div data-aos="fade-left" className="relative">
//             <div className="rounded-2xl overflow-hidden shadow-2xl">
//               <img src="/src/assets/Courses/adse.jpg" alt="ADSE Program" className="w-full h-72 object-cover" />
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent" />
//             </div>
//             {/* Floating stat */}
//             <div className="absolute -bottom-5 -left-5 bg-yellow-400 text-black rounded-2xl px-5 py-4 shadow-xl">
//               <p className="font-black text-3xl leading-none">7+</p>
//               <p className="text-xs font-bold mt-1">Specialisation Tracks</p>
//             </div>
//           </div>
//         </div>

//         {/* Tracks grid */}
//         <div data-aos="fade-up" className="mb-10">
//           <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-5">Specialisation Tracks Available</p>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//             {tracks.map((t, i) => (
//               <div key={i} data-aos="fade-up" data-aos-delay={i * 50}
//                 className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors">
//                 <span className="text-xl">{t.icon}</span>
//                 <span className="text-white/80 text-sm font-medium">{t.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div data-aos="fade-up" className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-white/10">
//           <Link to="/courses/adse"
//             className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-7 py-3.5 rounded-xl hover:bg-yellow-300 transition-colors text-sm">
//             Explore Full Curriculum →
//           </Link>
//           <Link to="/contact"
//             className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm">
//             Talk to an Advisor
//           </Link>
//         </div>

//       </div>
//     </section>
//   )
// }
