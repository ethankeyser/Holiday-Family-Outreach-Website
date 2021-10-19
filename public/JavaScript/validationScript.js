function checkFields() {
  var alertMessage = "";
  var save = true;
  var firstName = document.forms["paymentInfo"]["fullname"].value;
  if (firstname == null || firstname == "") {
    alertMessage += "First Name may not be left blank. ";
    save = false;
  }
  var email = document.forms["paymentInfo"]["Email"].value;
  if (email == null || email == "") {
    alertMessage += "Email may not be left blank. ";
    save = false;
  }
  var address = document.forms["paymentInfo"]["Address"].value;
  if (address == null || address == "") {
    alertMessage += "Address may not be left blank. ";
    save = false;
  }
  var city = document.forms["paymentInfo"]["City"].value;
  if (city == null || city == "") {
    alertMessage += "City may not be left blank. ";
    save = false;
  }
  var state = document.forms["paymentInfo"]["State"].value;
  if (state == null || state == "") {
    alertMessage += "State may not be left blank. ";
    save = false;
  }
  var zip = document.forms["paymentInfo"]["Zip"].value;
  if (zip == null || zip == "") {
    alertMessage += "Zip Code may not be left blank. ";
    save = false;
  }
  var cardName = document.forms["paymentInfo"]["CardName"].value;
  if (cardName == null || cardName == "") {
    alertMessage += "Name on Card may not be left blank. ";
    save = false;
  }
  var cardNum = document.forms["paymentInfo"]["CardNum"].value;
  if (cardNum == null || cardNum == "") {
    alertMessage += "Card Number may not be left blank. ";
    save = false;
  }
  var expMonth = document.forms["paymentInfo"]["ExpMonth"].value;
  if (expMonth == null || expMonth == "") {
    alertMessage += "Expiration Month may not be left blank. ";
    save = false;
  }
  var expYr = document.forms["paymentInfo"]["ExpYr"].value;
  if (expYr == null || expYr == "") {
    alertMessage += "Expiration Year may not be left blank. ";
    save = false;
  }
  var cvc = document.forms["paymentInfo"]["Cvc"].value;
  if (cvc == null || cvc == "") {
    alertMessage += "CVC may not be left blank. ";
    save = false;
  }

  if(save != true) {
    alert(alertMessage);
    return false;
  }

}
