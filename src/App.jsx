
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import PlayerCards from './components/playerCards/PlayerCards'
import SelectedPlayer from './components/selectedPlayer/SelectedPlayer'

function App() {
 const [coins , setCoins] = useState(0);
 const [isActive, setIsActive] = useState({available:true ,status : "available"})
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/public/fack.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlayers(data);
      });
  }, []);
 
//  handle coin function
 const handleCoins = (value) => {
  // const newValue =  [...coins, value];
    const newValue = coins + value;

    setCoins(newValue);
    // console.log(`Coins updated: ${value} added`);
    // console.log(`Total Coins: ${newValue}`);
  };

  const handleActivate = (active)=>{
    if(active == "available"){
      setIsActive({available:true ,status : "available"})
    }
    else{
      setIsActive({available:false ,status : "available"})
    }
  }

  return (
    <>
     <Navbar coins={coins}/>
     <Banner handleCoins={handleCoins}/>
<div className='min-h-screen container mx-auto'>
  <div className='my-12 flex justify-end gap-2'>
    <button onClick={()=>handleActivate("available")} className={`${isActive.available ?"btn btn-primary" :"btn"}`}>Abailabe</button>
    <button onClick={()=>handleActivate("selected")} className={`${isActive.available?"btn" :"btn btn-primary"}`}>Selected </button>
  </div>
  {
    isActive.available? <PlayerCards players={players} /> : <SelectedPlayer />
  }
  

</div>
     <Footer />
  
    </>
  )
}

export default App
