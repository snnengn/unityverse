import React from "react";

function Kategoriler({ kategoriler, kategoriFiltre, onShowAll }) {
  return (
    <div className="container">
      <div className="rounded card p-3 mt-3">
        <h3 className="text-center display-6" >Kategoriler</h3>
        <div className="d-inline-flex flex-row justify-content-start flex-wrap ilan">
          {kategoriler.map((category, index) => (
            <a
              href="#"
              className="p-2 me-2 mt-2 text-bg-secondary rounded-pill"
              key={index}
              onClick={() => kategoriFiltre(category)}
            >
              #{category}
            </a>
          ))}
          <a
            href="#"
            className="p-2 me-2 mt-2 text-bg-primary rounded-pill"
            onClick={onShowAll}
          >
            Hepsini Göster
          </a>
        </div>
      </div>
    </div>
  );
}

export default Kategoriler;
