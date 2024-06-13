// alışveriş listesi
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("listItemInput");
  const ekleButon = document.getElementById("addItemButton");
  const listele = document.getElementById("alisverisListe");
  const yorum = document.getElementById("yorum");
  ekleButon.classList = 'ekle';
  //ekleme :
  function maddeEkle() {
    const itemText = input.value.trim();
    if (itemText) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      listItem.style.cursor = "pointer";

      //silme
      const silmeButonu = document.createElement("button");
      silmeButonu.textContent = "Sil";
      silmeButonu.classList = 'sil';
      silmeButonu.onclick = function () {
        listele.removeChild(listItem);
      };
      listItem.appendChild(silmeButonu);

      listele.appendChild(listItem);
      input.value = "";

      //düzenle
      const duzenleButon = document.createElement("button");
      duzenleButon.textContent = "Düzenle";
      duzenleButon.classList = 'duzenle';
      duzenleButon.addEventListener("click", function () {
        input.value = listItem.firstChild.textContent;
        duzenleButon.addEventListener("click", function () {
        const yeniIsim = input.value.trim();
        if (yeniIsim) {
          listItem.firstChild.textContent = yeniIsim;
          };
        });
      });
      listItem.appendChild(duzenleButon);

      //tamamla
      const tamamlaButonu = document.createElement("button");
      tamamlaButonu.textContent = "Tamamlandi";
      tamamlaButonu.classList = 'tamamla';
      tamamlaButonu.onclick = function () {
        listItem.classList.add('tamamlandi');
      };
      listItem.appendChild(tamamlaButonu);

      listele.appendChild(listItem);
      input.value = "";      

      listItem.addEventListener("click", function () {
        alert(`${listItem.firstChild.textContent} maddesine tıkladın`);
      });
    }
  }

  ekleButon.addEventListener("click", maddeEkle);
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      maddeEkle();
    }
    yorum.textContent = "";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth === 500) {
      alert("pencere boyutu 500`un altinda");
    }
  });
});
