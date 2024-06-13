document.addEventListener("DOMContentLoaded", function () {
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const button = document.getElementById("baslat");
    const sayilar = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    sayilar.forEach(sayi => {
        const span = document.createElement("span");
        span.textContent = sayi;
        card1.appendChild(span);
    });

    button.addEventListener("click", async () => {

        const numaralar = Array.from(card1.children);

        const karakteriTasi = (span, gecikme) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    span.style.opacity = 0;
                    setTimeout(() => {
                        span.style.opacity = 1;
                        resolve(span);
                    }, 1000);
                }, gecikme * 1000);
            });
        };

        const siraliEkle = (span) => {
            const numara = parseInt(span.textContent);
            const mevcutNumara = Array.from(card2.children);
            let eklendi = false;
            mevcutNumara.forEach(mevcutNum => {
                if (numara < parseInt(mevcutNum.textContent) && !eklendi) {
                    card2.insertBefore(span, mevcutNum);
                    eklendi = true;
                }
            });
            if (!eklendi) {
                card2.appendChild(span);
            }
        };

    const gecikme = ms => new Promise(resolve => setTimeout(resolve, ms));
        for (let i = 0; i < numaralar.length; i++) {
            if (i % 2 === 1) {
                const gecikmeSuresi = 4 + i;
                const numTasi = await karakteriTasi(numaralar[i], gecikmeSuresi);
                siraliEkle(numTasi);

                if (i - 1 >= 0) {
                    await gecikme(1000);
                    const numCift = await karakteriTasi(numaralar[i - 1], 0);
                    siraliEkle(numCift);
                }
            }
        }

        await gecikme(1000);
        const numSekiz = await karakteriTasi(numaralar[8], 0);
        siraliEkle(numSekiz);

    });
});