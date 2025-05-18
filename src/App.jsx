
import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import PlayerCards from './components/playerCards/PlayerCards'

function App() {


  return (
    <>
     <Navbar />
     <Banner />
<div className='min-h-screen container mx-auto'>
  <PlayerCards />
</div>
     <Footer />
  
    </>
  )
}

export default App
