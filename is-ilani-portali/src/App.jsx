import { useState } from 'react'
import './App.css'
import IlanListe from './components/IlanListe'
import IlanAra from './components/IlanAra'
import IlanData from "./data/IlanData";


function App() {

  const [ilanAra, setIlanAra] = useState("");

  const handleSearch = (ara) => {
    setIlanAra(ara);
  };

  const ilanFiltre = ilanAra === "" ? IlanData : IlanData.filter((ilan) =>
    ilan.job_title.toLowerCase().includes(ilanAra.toLowerCase())
  );

  return (
    <>
      <IlanAra onSearch={handleSearch}/>
      <IlanListe ilanlar={ilanFiltre}/>
      
    </>
  )
}

export default App
