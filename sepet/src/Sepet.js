import React, {useContext} from 'react'
import { UrunContext } from './SepetContext';

const Sepet = () => {
    const {sepet, bosSepet} = useContext(UrunContext);
    const toplam = sepet.reduce((acc, item) => acc + item.fiyat, 0)
    const sepetToplam = toplam + 29;

    if(sepet.length === 0) return;
  return (

    <div className='row justify-content-between border-bottom p-1 bg-light'>
        <div className='col text-end'>
<h3 className='border-bottom py-2'>Sepet <span class="badge text-bg-primary rounded-pill">{sepet.length} Ürün </span></h3>
<ul className='list-group list-group-flush list-group-numbered'>
    {sepet.map((item)=> (
        <li key={item.id} className='list-group-item'>
            <span>{item.isim} </span>
            <span>{item.fiyat} TL</span>
        </li>
    ))}
</ul>
</div>
<div className='col'>
<h3 className='border-bottom py-2'>Sepet Tutarı</h3>
<p><b>Kargo:</b> 29 TL</p>
<p><b>Toplam:</b> {sepetToplam} TL</p>
<div className="d-grid gap-2 mb-1" style={{width:250}}>
<button type="button" className="btn btn-primary" onClick={bosSepet}>Sepeti Boşalt</button>
</div>
    </div>
    </div>

  )
}

export default Sepet