import React, {useEffect, useState} from 'react';
import KullaniciDetay from "./KullaniciDetay";
import KullaniciListesi from "./KullaniciListesi";

function App() {
  const [kullanicilar, setKullanicilar] = useState([]);
  const [secilen, setSecilen] = useState(null);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((data) => setKullanicilar(data));
  }, []);


  const handleSecilen = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((response) => response.json())
          .then((data) => setSecilen(data));
  }
  return(
       <div>
          {secilen ? (
               <KullaniciDetay kullanici={secilen} geriDon={() => setSecilen(null)}/>
           ) :(
               <KullaniciListesi kullanicilar={kullanicilar} detayGoster={handleSecilen}/>
            )
           }
       </div>
    );
};

export default App;
