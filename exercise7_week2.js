// nomor 1
var rows1 = 5
for (var i = 0; i < rows1; i++) {
    var line ='';
    line += "*";
    console.log(line);
}

//nomor 2
var rows2 = 5
for (var i = 0; i < rows2; i++ ) {
    var line = "";
    for (var j = 0; j < rows2; j++) {
        line += "*";
    }
    console.log(line)
}

//nomor 3
var rows3 = 5
for (var i = 0; i <rows3; i++) {
    var line = "";
    for (var j = 0; j <= i; j++) {
        line += "*";
    }
    console.log(line)
}
