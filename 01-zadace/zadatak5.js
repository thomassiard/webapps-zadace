let a = "dobar dan thomas siard";

function cammelCase() {
  let polje = a.split(" ");
  for (let i = 1; i < polje.length; i++) {
    polje[i] = polje[i][0].toUpperCase() + polje[i].substring(1);
  }
  console.log(polje.join(""));
}

cammelCase();
