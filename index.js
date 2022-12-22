function writeCards(names, event) {
  let thanksCards = []
  for (let i = 0; i < names.length; i++) {
    thanksCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return thanksCards
}

function countDown(Number) {
  while (Number > 0) {
    console.log(Number);
    Number -= 1;
  }
  console.log(Number);
}