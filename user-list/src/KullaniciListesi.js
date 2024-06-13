import React from "react";

const KullaniciListesi = ({kullanicilar, detayGoster}) => {
    return(
        <div className="container mt-5" style={{width:500}}>
            <h2 className="text-center mb-4">Kullanıcı Listesi </h2>
            <div className="list-group">
                {kullanicilar.map((kullanici) => (
                    <p key={kullanici.id} onClick={() => detayGoster(kullanici.id)} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">{kullanici.name}</h5>
                        
                        <button type="button" className="btn btn-primary ms-2 " onClick={() => detayGoster(kullanici.id)}>></button>
                    </p>
                ))}

            </div>
        </div>
    )

}
export default KullaniciListesi;