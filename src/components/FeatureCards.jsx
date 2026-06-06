const cards = [
  {
    iconBg: 'bg-pink-100',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-rose-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Aptech's Certificates Enjoy Global Recognition",
    text: "Aptech's courses lead to professional I.T. certifications from leading I.T brands such as Microsoft and from Aptech itself. Each course includes classroom learning as well as practical sessions in the lab.",
  },
  {
    iconBg: 'bg-purple-100',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-purple-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Our International Education Alliances',
    text: 'Aptech has alliance with the best international Universities and institutes across the globe. Students can pursue an international ICT degree in Nigeria or at partner universities in UK, Australia, Dubai, Malta, Ireland or Malaysia.',
  },
  {
    iconBg: 'bg-green-100',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-green-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Aptech's Mission",
    text: "I.T. is an empowering tool, which when appropriately utilized, leads to an increase in productivity improvements and prosperity at the individual, organizational, societal, national and global levels.",
  },
]

export default function FeatureCards() {
  return (
    <section className="relative z-10 -mt-28 px-6 pb-16 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={i}
              data-aos={i === 0 ? 'fade-right' : i === 2 ? 'fade-left' : undefined}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-full ${card.iconBg} flex items-center justify-center mb-6`}>{card.icon}</div>
              <h3 className="text-gray-900 font-bold text-lg mb-4 leading-snug">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a href="/courses" className="bg-primary text-white font-semibold px-8 py-3 rounded flex items-center gap-2 hover:opacity-90 transition-opacity">
            Get started <span className="text-lg">›</span>
          </a>
        </div>
      </div>
    </section>
  )
}
