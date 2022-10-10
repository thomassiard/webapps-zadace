let objekt1 = {
  a: 1,
  b: 2,
  c: 3,
};

let objekt2 = {
  a: 321,
  b: 3,
  c: 1,
};

function objekti(o1, o2) {
  let kljuc1 = JSON.stringify(Object.keys(o1));
  let kljuc2 = JSON.stringify(Object.keys(o2));
  console.log(kljuc1 == kljuc2);
}

objekti(objekt1, objekt2);
