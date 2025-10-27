function printTicketPrice(visitorAge, isStudent) {
    if (visitorAge >= 6) {
        console.log("ieeja bez maksas");
      }
      if ((isStudent = true)) {
        console.log("biļete maksā 5eur");
      } else {
          console.log("biļete maksā 10eur")
      }
}
console.log(printTicketPrice(35, false));
console.log(printTicketPrice(12, true));

