console.log ('LOOPING PERTAMA');

var firstloop = 2;
while (firstloop <= 20) {
  console.log(firstloop + ' - I love coding');
  firstloop += 2;
}

console.log ('LOOPING KEDUA');

for (var secondloop = 20; secondloop > 0; secondloop -= 2) {
  console.log (secondloop + ' - I will become fullstack developer')
}

console.log ('LOOPING PERTAMA');
for (var firstlooping = 0; firstlooping < 20; firstlooping ++) {
  console.log (firstlooping + ' - I love coding')
}

console.log ('LOOPING KEDUA');
for (var secondlooping = 20; secondlooping > 0; secondlooping --) {
    console.log (secondlooping + ' - I will become fullstack developer');
}

for (var counter = 1; counter <= 100; counter++ ) {
    if (counter % 2 === 0) {
        console.log(counter + " EVEN")
    }
    else {
        console.log(counter + " ODD")
    }
}

for (var repeat = 1; repeat <= 100; repeat += 2) {
    if (repeat % 3 === 0) {
        console.log (repeat + " KELIPATAN " + repeat);
    }
    else {
        console.log ("")
    }
}

for (var kelipatan6 = 1; kelipatan6 <= 100; kelipatan6 += 5) {
    if (kelipatan6 % 6 === 0) {
        console.log(kelipatan6 + " KELIPATAN " + kelipatan6)
    }
    else {
        console.log("")
    }
}

for (var kelipatan10 = 1; kelipatan10 <= 100; kelipatan10 += 9) {
    if (kelipatan10 % 10 === 0) {
        console.log(kelipatan10 + " KELIPATAN " + kelipatan10) 
    }
    else {
        console.log("")
    }
}

