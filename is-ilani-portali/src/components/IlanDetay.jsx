import React from "react";

function IlanDetay({ ilan, onBack }) {
  if (!ilan) return <div>Bir iş seçin</div>;
  return (
    <div className="container">
      <div className="card my-5 p-3 ilan d-flex justify-content-center align-items-center text-center">
      <span className="badge text-bg-secondary rounded-pill" > #{ilan.category} </span>
        <img className="object-fit-cover my-5" src={ilan.job_image_url} alt="" />
        <h2>{ilan.job_title}</h2> 
        <p className="lead" >{ilan.job_description}</p>
        <h6>{ilan.location}</h6>
        <div className="mt-5" >  
        <button className="btn btn-success me-1">
          Başvur
        </button>
        <button className="btn btn-primary" onClick={onBack}>
          Geri Dön
        </button>

        </div>

      </div>
    </div>
  );
}

export default IlanDetay;
