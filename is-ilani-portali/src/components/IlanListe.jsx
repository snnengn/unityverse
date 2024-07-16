import React from "react";


function IlanListe({ilanlar}) {
    console.log(ilanlar)
  return (
    <div className="container my-5">
      <ul className="list-group">
        {ilanlar.map((ilan) => (
          <li key={ilan.id} className="list-group-item d-flex align-items-start">
            <div className="me-auto d-flex flex-row">
              <div className="fw-bold ilan d-flex justify-content-center align-items-center mx-3">
                <img
                  className="object-fit-cover"
                  src={ilan.job_image_url}
                  alt=""
                />
              </div>
              <div>
                <p className="fw-bold text-secondary">#{ilan.category}</p>
                <h5 className="lead">{ilan.job_title}</h5>
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
