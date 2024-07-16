import { useState } from 'react'
import './App.css'
import IlanListe from './components/IlanListe'
import IlanAra from './components/IlanAra'
import IlanData from "./data/IlanData";
import IlanDetay from './components/IlanDetay';


function App() {

  const [ilanAra, setIlanAra] = useState("");
  const [secilenIlan, setSecilenIlan] = useState(null);

  const handleSearch = (ara) => {
    setIlanAra(ara);
  };

  const handleSelect = (ilan) => {
    setSecilenIlan(ilan);
};

  const handleBack = () => {
    setSecilenIlan(null);
  };

  const ilanFiltre = ilanAra === "" ? IlanData : IlanData.filter((ilan) =>
    ilan.job_title.toLowerCase().includes(ilanAra.toLowerCase())
  );

  return (
    <>
      <h1 className='text-center my-5 display-2'>İş İlanı Portalı</h1>
      <IlanAra onSearch={handleSearch}/>

      <div>
      {secilenIlan ? (
      <IlanDetay ilan={secilenIlan} onBack={handleBack}/>
    ) :(
      <IlanListe ilanlar={ilanFiltre} onSelect={handleSelect}/>
    )
  }
    </div>
      
      
    </>
  )
}

export default App
