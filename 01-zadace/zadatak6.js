function provjeri(X) {
  if (X >= 0 && X <= 1000) {
    let rezultat = 1;
    for (let i = 7; i < X; i += 7) {
      rezultat *= i;
    }
    console.log(rezultat);
  } else {
    console.log(X, "nije unutar [0,1000]");
  }
}

provjeri(23);
