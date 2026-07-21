import HeroSection from '../components/HeroSection'
import FeatureCards from '../components/FeatureCards'
import WhyEnroll from '../components/WhyEnroll'
import FuturePrograms from '../components/FuturePrograms'
import FeaturedCourses from '../components/FeaturedCourses'
import Testimonials from '../components/Testimonials'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <div>
      <SEO
        title="Computer Education & IT Training in Lagos"
        description="Aptech Akowonjo offers professional computer education, IT training and internationally recognized certification courses in Lagos, Nigeria."
        path="/"
      />
      <HeroSection />
      <FeatureCards />
      <WhyEnroll />
      <FeaturedCourses />
      <Testimonials />
    </div>
  )
}
