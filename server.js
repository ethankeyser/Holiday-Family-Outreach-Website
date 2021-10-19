require("dotenv").config()

const express = require("express")
const app = express()
app.use(express.json())

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map ([
    [1, {priceincents: 10000, name: "Donation"}],
])

app.listen(3000)
