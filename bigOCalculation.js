function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 5; // O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anotherFuntion(); // O(n)
    let stranger = true; // (n)
    a++; // O(n)
  }
  return a; // O(1)
}

//BIG 0(3 + 4N) = O(N)
