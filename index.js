function writeCards(names, event) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
      thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
  }
  
  function countDown(Number) {
    while (Number > 0) {
      console.log(Number);
      Number -= 1;
    }
    console.log(Number);
  }