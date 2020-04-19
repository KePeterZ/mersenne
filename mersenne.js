function mersenne(n) {
  return 2**n-1
}

function isMersennePrime(n) {
  number = mersenne(n)
  for (var i=2; i<number; i++) {
    if (number%i == 0) {
      return false
    }
  }
  return true
}

function promptWithMersenne() {
  number = 2**prompt("Mit szeretnél megnézni?")-1
  for (var i=2; i<number; i++) {
    if (number%i == 0) {
      prompt(`A/Az ${number} nem Mersenne-prím!`)
    }
  }
  return prompt(`A/Az ${number} egy Mersenne-prím!`)
}

console.log(isMersennePrime(11))