var nama = "Zero";
var peran = "";

if (nama === "" && peran === "") {
  console.log("Nama harus diisi!")
}

if (peran === "") {
  console.log("Halo "+ nama + " , Pilih peranmu untuk memulai game!")
}

if (peran === "Ksatria") {
  console.log("Selamat datang di Dunia Proxytia, " + nama + ". Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!")
}

if (peran === "Tabib") {
  console.log("Selamat datang di Dunia Proxytia, " + nama + ". Halo " + peran + " " + nama + ", kamu akan membantu temanmu yang terluka.")
}

if (peran === "Penyihir") {
  console.log("Selamat datang di Dunia Proxytia, " + nama + ". Halo " + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
}