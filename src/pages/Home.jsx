import HeroSection from '../components/HeroSection'
import FeatureCards from '../components/FeatureCards'
import WhyEnroll from '../components/WhyEnroll'
import FuturePrograms from '../components/FuturePrograms'
import FeaturedCourses from '../components/FeaturedCourses'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureCards />
      <WhyEnroll />
      <FeaturedCourses />
      <Testimonials />
    </div>
  )
}
