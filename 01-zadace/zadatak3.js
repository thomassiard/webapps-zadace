function vrijeme(X) {
  var sati = Math.floor(X / 60);
  var minute = X % 60;
  console.log("Ovo je", sati, "sata", "i", minute, "minuta");
}

console.log(vrijeme(120));
