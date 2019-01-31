var nama = "Zero";
var peran = "Penyihir";

if (nama === "" && peran === "") {
  console.log("Nama harus diisi!")
}

if (nama === "Mikael" && peran === "") {
  console.log("Halo Mikael, Pilih peranmu untuk memulai game!")
}

if (nama === "Nina" && peran === "Ksatria") {
  console.log("Selamat datang di Dunia Proxytia, " + nama + ". Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!")
}

if (nama === "Danu" && peran === "Tabib") {
  console.log("Selamat datang di Dunia Proxytia, " + nama + ". Halo " + peran + " " + nama + ", kamu akan membantu temanmu yang terluka.")
}

if (nama === "Zero" && peran === "Penyihir") {
  console.log("Selamat datang di Dunia Proxytia, " + nama + ". Halo " + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
}