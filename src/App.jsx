import React, {useState,useEffect} from 'react'
import Filter from './Filter' 
import Navbar from './Navbar'
import Card from './Card'
import './App.css'

function App() {

  const [Data, setData] = useState([]);

  useEffect(()=>{
    fetch('Tunes/looney_tunes.json').
    then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
  },[])

  return (
    <div className="App">
      <Navbar Name="Looney Tunes API"/>
      <Filter/>
      <div className='Card-Box'>
        {Data.map((item,iteration)=> (
          <Card key={iteration} Card_Name={item.name} Card_Src={item.image}/>
        ))}
      </div>
    </div>
  );

}

export default App;