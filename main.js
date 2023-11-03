const btntext = document.getElementById("btntext");
const text1 = document.getElementById("text1");
const imgtext = document.getElementById("imgtext1");
const textmuncul =
  "udah 18 umurnya yaa, dk kerasa, lh makin besar lh makin dewasa. Dari bertambahnya usia ni ku harap, ka semakin baik ya, semakin bertanggung jawab, semakin bisa menilai banyak hal baik buruk, dan banyak banyak berpikir postif jauh jauh berpikir negatif, terutama ke alm.atok yaa. untuk doa ku dk mau panjang lebar, karena terlalu bnyk cukup dalam doa aja yaa. hanya segini aja nau yg bisa ku kasih dulu, dk bisa terlalu bnyk omongan karena takut ada salah ketik.";

const typing = 83;
let index = 0;
function ketiktext() {
  if (index < textmuncul.length) {
    text1.innerHTML += textmuncul.charAt(index);
    index++;
    setTimeout(ketiktext, typing);
  }
}

btntext.addEventListener("click", () => {});
const halawal = document.getElementById("halamanawal");
const isitext = document.getElementById("textisi");
const btnisi = document.getElementById("btnisi");
const silang = document.querySelectorAll(".silang");
const kawai = document.getElementById("kawai");
const imut = document.getElementById("imut");
const cantik = document.getElementById("cantik");
const baik = document.getElementById("baik");
const lucu = document.getElementById("lucu");
const ngangenin = document.getElementById("ngangenin");
const benar = document.getElementById("jwbnbenar");
const salah = document.getElementById("salah");

const textutama = document.querySelector(".textutama");
btnisi.addEventListener("click", () => {
  const mengisi = isitext.value.toLowerCase();
  if (mengisi === "kawaii") {
    kawai.style.display = "flex";
  } else if (mengisi === "imut") {
    imut.style.display = "flex";
  } else if (mengisi === "cantik") {
    cantik.style.display = "flex";
  } else if (mengisi === "baik") {
    baik.style.display = "flex";
  } else if (mengisi === "lucu") {
    lucu.style.display = "flex";
  } else if (mengisi === "ngangenin") {
    ngangenin.style.display = "flex";
  } else if (mengisi === "semuanya") {
    benar.style.display = "flex";
  } else if (mengisi === "salah semua") {
    salah.style.display = "flex";
  } else {
    alert(
      "jawabannya harus hanya kata aja ndaa kyk kawaii,cantik, imut,PAK KETU KANGEN NIAN!!!,kyk gitu lh contoh e :)"
    );
  }
});
silang.forEach((x) => {
  x.addEventListener("click", () => {
    if (kawai.style.display === "flex") {
      kawai.style.display = "none";
    } else if (imut.style.display === "flex") {
      imut.style.display = "none";
    } else if (cantik.style.display === "flex") {
      cantik.style.display = "none";
    } else if (baik.style.display === "flex") {
      baik.style.display = "none";
    } else if (lucu.style.display === "flex") {
      lucu.style.display = "none";
    } else if (ngangenin.style.display === "flex") {
      ngangenin.style.display = "none";
    } else if (benar.style.display === "flex") {
      // halawal.style.display = "none";
      // benar.style.display = "none";
      // textutama.style.display = "block";
      // ketiktext();
    } else if (salah.style.display === "flex") {
      salah.style.display = "none";
    }
  });
});

const klik = document.getElementById("kliklanjutin");
klik.addEventListener("click", () => {
  halawal.style.display = "none";
  benar.style.display = "none";
  textutama.style.display = "block";
  ketiktext();
  btntext.style.display = "block";
});

const gambar = document.getElementById("gambar");
btntext.addEventListener("click", () => {
  gambar.style.display = "block";
});

gambar.addEventListener("click", () => {
  gambar.style.display = "none";
});
