import Loader from 'react-loaders'
import emailJs from '@emailjs/browser'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm =useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailJs.sendForm('service_2s0co8c','template_zluvjtw',refForm.current,'k5iQhMuYYPqw_ZpZh')
    .then(()=>{
      alert('Message sent to the Revinian')
      window.location.reload(false)
    },
    ()=>{
      alert('Message failed to sent')
      window.location.reload(false)
    })
  }
 
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
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in opportunities - especially on ambitious or large
            projects. However, if you have any other requests or questions,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail} >
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type='submit' className='flat-button' value="SEND"></input>
                  </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Antony Chalkias,
          <br />
          Greece,
          <br/>
          Heraklion 700 03<br/>
          St.Varvara <br/>
          <span>ant.f.chlks@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[35.137458, 25.001952]} zoom={13}></MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
