function provjerava(X) {
  if (X >= 100 && X <= 150000) {
    console.log(X);
  } else {
    console.log(X, "nije unutar [100,150000]");
  }
}

provjerava(53);
