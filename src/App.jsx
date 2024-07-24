import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from '../components/navbar/Navbar'
import { Header } from '../components/header/Header'
import { Advert } from '../components/advertment/Advert'
import { Properties } from '../components/properties/Properties'
import { Department } from '../components/departments/Department'
import { Footer } from '../components/footer/Footer'
import {Link , BrowserRouter ,Route ,Routes } from 'react-router-dom' ;

function App() {
  let [dark, setdark] = useState(false);
  function setDark() {
    setdark(!dark);
  }
  let [spinner, setspinner] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setspinner(false)
    }, 2000)
  }, [])
  return (
    <>
      <section className='app'>
        {spinner ?
          <div className='loaders'>
            <div className="loader"></div>
          </div>
          :
          <div className={dark ? 'dark' : 'light'}>
            <Navbar setDark={setDark} />
            <Header dark={dark} />
            <Advert />
            <Properties />
            <Department />
            <Footer />
          </div>
        }
      </section>
    </>
  )
}

export default App
