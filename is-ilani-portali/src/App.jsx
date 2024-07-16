import { useState } from 'react'
import './App.css'
import IlanListe from './components/IlanListe'
import IlanAra from './components/IlanAra'
import IlanData from "./data/IlanData";
import IlanDetay from './components/IlanDetay';
import Kategoriler from './components/Kategoriler';


function App() {

  const [ilanAra, setIlanAra] = useState("");
  const [secilenIlan, setSecilenIlan] = useState(null);
  const [kategoriFiltre, setKategoriFiltre] = useState("");

  const handleSearch = (ara) => {
    setIlanAra(ara);
  };

  const handleSelect = (ilan) => {
    setSecilenIlan(ilan);
};

  const handleBack = () => {
    setSecilenIlan(null);
  };

  const handleFilterByCategory = (category) => {
    setKategoriFiltre(category);
    setIlanAra("");
};

  const handleShowAll = () => {
    setKategoriFiltre("");
    setIlanAra("");
  }

  const kategoriler = [...new Set(IlanData.map(ilan => ilan.category))];

  const ilanFiltre = kategoriFiltre
   ? IlanData.filter((ilan) => ilan.category === kategoriFiltre)
   : ilanAra
   ? IlanData.filter((ilan) =>
    ilan.job_title.toLowerCase().includes(ilanAra.toLowerCase())
  )
  : IlanData;

  return (
    <>
      <h1 className='text-center my-5 display-2'>İş İlanı Portalı</h1>
      <IlanAra onSearch={handleSearch}/>

      <div>
      {secilenIlan ? (
      <IlanDetay ilan={secilenIlan} onBack={handleBack}/>
    ) :(

      <div>
      <Kategoriler kategoriler={kategoriler} kategoriFiltre={handleFilterByCategory} onShowAll={handleShowAll}/>
      
      <IlanListe ilanlar={ilanFiltre} onSelect={handleSelect} />
        
      </div>

    )
  }
    </div>
      
      
    </>
  )
}

export default App
