import { useState, useEffect } from 'react'
import './App.css'
import Hero from './Components/hero.jsx'
import About from './Components/About.jsx'
import Skills from './Components/skills.jsx'
import Portfolio from './Components/Portfolio.jsx'
import Spinner from './Components/spinner.jsx'


function App() {
  const [count, setCount] = useState(0)
  // const [theme, setTheme] = useState('light');
  // var myTheme = 'bg-light'

  // const toggleTheme = (prevtheme) => {
  //   setTheme(prevtheme === 'bg-light' ? myTheme = 'dark' : myTheme = 'bg-light');
  // }

  useEffect(() => {
    let loading = setTimeout(() => {
      count < 5 ?
        setCount(count + 1)
        :
        clearTimeout(loading)

      console.log(count)
    }, 1000)

  }, [count])

  return (
    <>
      {
        count < 5 ?
          (<Spinner />)

          :
          (
            <>
              <Hero />
              <About />
              <Skills />
              <Portfolio />
            </>
          )

      }
    </>
  )
}

export default App
