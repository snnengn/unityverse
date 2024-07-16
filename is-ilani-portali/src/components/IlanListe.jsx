import React from "react";


function IlanListe({ilanlar, onSelect}) {
  return (
    
    <div className="container my-5">



      <ul className="list-group">
        {ilanlar.map((ilan) => (
          <li key={ilan.id} onClick={() => onSelect(ilan)} className="list-group-item d-flex align-items-start liste">
            <div className="me-auto d-flex flex-row">
              <div className="fw-bold ilan d-flex justify-content-center align-items-center mx-3">
                <img
                  className="object-fit-cover"
                  src={ilan.job_image_url}
                  alt=""
                />
              </div>
              <div className="p-1" >
                <p className="badge text-bg-secondary rounded-pill">#{ilan.category}</p>
                <h5 className="">{ilan.job_title}</h5>
                <p className="">{ilan.location}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IlanListe;
