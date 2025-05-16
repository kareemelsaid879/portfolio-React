import { useState, useEffect } from 'react'
import './App.css'
import Hero from './Components/hero.jsx'
import About from './Components/About.jsx'
import Skills from './Components/skills.jsx'
import Portfolio from './Components/Portfolio.jsx'
import Spinner from './Components/spinner.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevtheme) => prevtheme == 'light' ? 'dark' : 'light')
    console.log(theme)
  }

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
              <Hero curTheme={theme} toggleTheme={toggleTheme} />
              <About curTheme={theme} />
              <Skills curTheme={theme} />
              <Portfolio curTheme={theme} />
            </>
          )

      }
    </>
  )
}

export default App
