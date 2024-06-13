import {useContext} from "react"
import urunData from "./UrunData";
import { UrunContext } from './SepetContext';
const UrunListe = () => {
    const {sepeteEkle} = useContext (UrunContext);
   
    return (
      <div className="container">
        <div className="row mt-5 justify-content-center">
           {urunData.map((urun)=> (        
            <div key={urun.id} className="card mx-2">

        <img className="object-fit-cover urun-img" src={urun.image} alt=""/>
        <div className="card-body">

        <h5 className="card-title">{urun.isim} </h5>
        <p className="card-text">{urun.fiyat} TL</p>
            <div className="d-grid gap-2 mb-2">
                <button type="button" className="btn btn-primary" onClick={() => sepeteEkle(urun)}> Sepete Ekle </button>
            </div>
        </div>
         </div>
    ))}
   
    </div>
      </div>
    )
  }
  
  export default UrunListe;