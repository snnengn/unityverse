import React from "react";
import IlanData from "../data/IlanData";

function IlanListe() {
  return (
    <div className="container mt-5">
      <ul className="list-group">
        {IlanData.map((ilan) => (
          <li className="list-group-item d-flex align-items-start">
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
                <h5 className="">{ilan.job_title}</h5>
                <p className="lead">{ilan.job_description}</p>
                <p className="fw-bold">{ilan.location}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IlanListe;
