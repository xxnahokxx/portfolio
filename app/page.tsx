import About from '@/components/about/About'
import Footer from '@/components/footer/Footer'
import HomeSection from '@/components/home/Home'
import Navbar from '@/components/navbar/Navbar'
import Projects from '@/components/projects/Projects'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f9f9f9]">

      <Navbar />
      <div className='container m-auto pb-32'>
        <HomeSection />
        <About />
        <Projects />
      </div>
      <Footer/>
    </main>
  )
}
