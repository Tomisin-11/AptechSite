import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import CoursesACNS from './pages/courses/acns'
import CoursesADSE from './pages/courses/adse'
import CoursesSmart from './pages/courses/smart-pro'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/acns" element={<CoursesACNS />} />
             <Route path="/courses/adse" element={<CoursesADSE />} />
            <Route path="/courses/smart" element={<CoursesSmart />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App