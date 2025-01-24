import './App.scss'
import About from './components/about'
import Herosection from './components/herosection'
import Menu from './components/menu'
import Chefword from './components/chefword'

// import Laurel from './components/laurel'
// import Contact from './components/contact'
// import Newsletter from './components/newsletter'
// import Footer from './components/footer'

function App() {

  return (
    <>
      <Herosection/>
      <About/>
      <Menu/>
      <Chefword/>

      {/* 
      <Laurel/>
      <Contact/>
      <Newsletter/>
      <Footer/> */}
    </>
  )
}

export default App
