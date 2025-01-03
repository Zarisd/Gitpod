import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import Always from './components/Always/Always'
import Text from './components/Text/Text'
import Cd from './components/Cd/Cd'
import Remote from './components/Remote/Remote'
import Used from './components/Used/Used'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
   <>
   <Header/>
   <Always/>
   <Text/>
   <Cd/>
   <Remote/>
   <Used/>
   <Footer/>
   </>
  )
}

export default App