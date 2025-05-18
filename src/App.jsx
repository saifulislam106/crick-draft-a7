
import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import PlayerCards from './components/playerCards/PlayerCards'

function App() {
 const [coins , setCoins] = useState(0);

 const handleCoins = (value) => {
  // const newValue =  [...coins, value];
    const newValue = coins + value;

    setCoins(newValue);
    console.log(`Coins updated: ${value} added`);
    console.log(`Total Coins: ${newValue}`);
  };

  return (
    <>
     <Navbar coins={coins}/>
     <Banner handleCoins={handleCoins}/>
<div className='min-h-screen container mx-auto'>
  <PlayerCards />
</div>
     <Footer />
  
    </>
  )
}

export default App
