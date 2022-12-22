function crediSelection() {
  let cekilecek, vadeSayisi;
  let aylikTaksit, odenecektutar;
  cekilecek = document.getElementById("kredi").value;
  let vadeD = document.getElementById("vade");
  vadeSys = vadeD.options[vadeD.selectedIndex].value;

  if (vadeSys == 12) {
    odenecektutar = cekilecek * 1.1;
  } else if (vadeSys == 24) {
    odenecektutar = cekilecek * 1.2;
  } else if (vadeSys == 36) {
    odenecektutar = cekilecek * 1.3;
  } else if (vadeSys == 48) {
    odenecektutar = cekilecek * 1.4;
  }
  aylikTaksit = odenecektutar / vadeSys;

  document.querySelector("#Hesaplama").innerHTML =
    "geri odeme tutarınız: " +
    odenecektutar.toFixed(2) +
    " aylık turar : " +
    aylikTaksit.toFixed(2);
}
