
var button2 = document.getElementById("submitPaymentTen")
button2.addEventListener("click", () => {
  fetch('/create-checkout-session', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [
        {id: 2, quantity: 1}
      ],
    }),
  })
  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })
  .then(({ url }) => {
    console.log(url)
    window.location = url
  })
  .catch(e => {
    console.error(e.error)
  })
})

var button3 = document.getElementById("submitPaymentTwenty")
button3.addEventListener("click", () => {
  fetch('/create-checkout-session', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [
        {id: 3, quantity: 1}
      ],
    }),
  })
  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })
  .then(({ url }) => {
    console.log(url)
    window.location = url
  })
  .catch(e => {
    console.error(e.error)
  })
})

var button4 = document.getElementById("submitPaymentFifty")
button4.addEventListener("click", () => {
  fetch('/create-checkout-session', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [
        {id: 1, quantity: 1}
      ],
    }),
  })
  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })
  .then(({ url }) => {
    console.log(url)
    window.location = url
  })
  .catch(e => {
    console.error(e.error)
  })
})

var button5 = document.getElementById("submitPaymentHundred")
button5.addEventListener("click", () => {
  fetch('/create-checkout-session', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [
        {id: 5, quantity: 1}
      ],
    }),
  })
  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })
  .then(({ url }) => {
    console.log(url)
    window.location = url
  })
  .catch(e => {
    console.error(e.error)
  })
})

var button5 = document.getElementById("submitPaymentCustom")

button5.addEventListener("click", () => {
  var amount = document.getElementById("custom-textbox").value * 100;
  console.log(amount)
  fetch('/create-checkout-session-custom', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [
        {id: 5, quantity: 1, priceincents: amount}
      ],
    }),
  })
  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })
  .then(({ url }) => {
    console.log(url)
    window.location = url
  })
  .catch(e => {
    console.error(e.error)
  })
})
