import React from "react";

const KullaniciDetay = ({kullanici, geriDon}) => {
    return(
<div className="container mt-5">
<h2 className="text-center mb-4">Kullanıcı Detay </h2>
        <div className="card w-75 mx-auto" >
  <img src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg" style={{width:300}} className="card-img-top my-4 mx-auto" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{kullanici.name}</h5>
    <p className="card-text">{kullanici.username}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Adres: {kullanici.address.street}, {kullanici.address.suite}, {kullanici.address.city}</li>
    <li className="list-group-item">Tel: {kullanici.phone}</li>
  </ul>
  <div className="card-body">
    <p className="card-text">Email: {kullanici.email}</p>
    <p className="card-text">Web: {kullanici.website}</p>
  </div>
            <button className="btn btn-primary m-2" onClick={geriDon}>Kullanıcı Listesine geri dön!</button>  
</div>


</div>

    )
}
export default KullaniciDetay;