
import {dataset as data} from '../dataset';
import {useState,useEffect} from 'react';
import "./components/App.css"
import InfoVuelo from './components/Vuelo'


function App() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    setInfo(data)
  
  }, [])  
  

  return (
    <div className='Vuelo-container'>
        <h1 className='titulo'>Bienvenido a <span>Flybondi!</span> </h1>
    <InfoVuelo info={info}/>
    
   </div>
  )
}

export default App
