let polje = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function neparni() {
  let brojevi = [];
  for (let i of polje) {
    if (i % 3 == 0) {
      brojevi.push(i);
    }
  }
  console.log(`Brojevi djeljivi s 3: ${brojevi}`);
}

neparni();
