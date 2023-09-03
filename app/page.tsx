"use client"
import About from '@/components/about/About'
import Footer from '@/components/footer/Footer'
import HomeSection from '@/components/home/Home'
import Navbar from '@/components/navbar/Navbar'
import Projects from '@/components/projects/Projects'
import { useEffect, useState } from 'react'

export default function Home() {

  const [theme, setTheme] = useState<string>(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light"
  })

  const handleClickTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("body")?.classList.add("dark")
    } else {
      document.querySelector("body")?.classList.remove("dark")
    }
  }, [theme])


  return (
    <main className="flex flex-col min-h-screen bg-[#f9f9f9] transition-colors duration-300  dark:bg-slate-950 dark:text-white">

      <Navbar theme={handleClickTheme} status={theme} />
      <div className='container m-auto pb-32'>
        <HomeSection />
        <About />
        <Projects />
      </div>
      <Footer />
    </main>
  )
}
