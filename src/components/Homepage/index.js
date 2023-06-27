import LogoSim from '../../assets/images/logoSim.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e', 'v', 'i', 'n', 'i', 'a', 'n']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass}_12`}>i,</span>
          <br />
          <span className={`${letterClass}_13`}>I</span>
          <span className={`${letterClass}_14`}>'m</span>
          <img src={LogoSim} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            index={22}
          />
        </h1>
        <h2>Frontend developer / Up coming Fullstack Dev</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type='pacman'/>
    </>

  )
}

export default Home
