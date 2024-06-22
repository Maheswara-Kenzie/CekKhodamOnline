let khodam = [
    "Rusdi Tambal Ban",
    "Celana Kuyang",
    "Ambatron 2000",
    "Granny Classmild",
    "Singa Vegetarian",
    "Kucing Pincang",
    "Sigit Rendang",
    "Icikiwir",
    "Icikiwir 2.0",
    "Rumah Angker",
    "Kuda Kejepit",
    "Rawa Rontek",
    "Kodok Idol",
    "Botol Yakult",
    "Monyet Kaki Seribu",
    "Kaleng Khong Ghuan",
    "Kambing Amazon",
    "Naga",
    "Phoenix",
    "Meganthropus Paleojavanicus",
    "Homo Erectus",
    "Trex Sumbing",
    "Tuyul Mullet",
    "Tikus Berkepala Gajah",
    "Ular Tangga",
    "Ular Berkepala Lele",
    "Laba-Laba Sunda",
    "Naga Mahjong",
    "Naga Bearbrand",
    "Raja Kecoa",
    "Martabak Ketan Surabaya",
    "Nyi Blorong",
    "Rusdi Tambal Ban",
    "Celana Kuyang",
    "Ambatron 2000",
    "Granny Classmild",
    "Singa Vegetarian",
    "Kucing Pincang",
    "Sigit Rendang",
    "Icikiwir",
    "Icikiwir 2.0",
    "Rumah Angker",
    "Kuda Kejepit",
    "Rawa Rontek",
    "Kodok Idol",
    "Botol Yakult",
    "Monyet Kaki Seribu",
    "Kaleng Khong Ghuan",
    "Kambing Amazon",
    "Naga",
    "Phoenix",
    "Meganthropus Paleojavanicus",
    "Homo Erectus",
    "Trex Sumbing",
    "Tuyul Mullet",
    "Tikus Berkepala Gajah",
    "Ular Tangga",
    "Ular Berkepala Lele",
    "Laba-Laba Sunda",
    "Naga Mahjong",
    "Naga Bearbrand",
    "Raja Kecoa",
    "Martabak Ketan Surabaya",
    "Nyi Blorong",

    "Rusdi Tambal Ban",
    "Celana Kuyang",
    "Ambatron 2000",
    "Granny Classmild",
    "Singa Vegetarian",
    "Kucing Pincang",
    "Sigit Rendang",
    "Icikiwir",
    "Icikiwir 2.0",
    "Rumah Angker",
    "Kuda Kejepit",
    "Rawa Rontek",
    "Kodok Idol",
    "Botol Yakult",
    "Monyet Kaki Seribu",
    "Kaleng Khong Ghuan",
    "Kambing Amazon",
    "Naga",
    "Phoenix",
    "Meganthropus Paleojavanicus",
    "Homo Erectus",
    "Trex Sumbing",
    "Tuyul Mullet",
    "Tikus Berkepala Gajah",
    "Ular Tangga",
    "Ular Berkepala Lele",
    "Laba-Laba Sunda",
    "Naga Mahjong",
    "Naga Bearbrand",
    "Raja Kecoa",
    "Martabak Ketan Surabaya",
    "Nyi Blorong",


      ];
  
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("picit").click();
    }
  });
  
  function picit() {
    if (document.getElementById("input").value == "") {
      alert("Anda tidak memasukkan apapun!");

    } else {
      let x = document.getElementById("input").value;
      let y = Math.floor(Math.random() * 50);
      document.getElementById("name").innerHTML = x;
      document.getElementById("container").style.display = "none";
      document.getElementById("hasil").style.display = "block";
      document.getElementById("khodam").innerHTML = khodam[(0, y)];
  
      console.log(y);
    }
  }
  