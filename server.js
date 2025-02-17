// sk_test_51Qt8eeRn5fu1Mx8bVTJpvxM4YJcuQiyguv8ERkRClSmOpYsobjwjYvS6vdNowNbVX2wOi5uaycG3IRdHFm0Ijm9L00HWoq8j8T
// Wooden Table: price_1Qt8piRn5fu1Mx8bfRNQXeLz
// Puffer Jacket: price_1Qt8uSRn5fu1Mx8bG2zBqwSn
// Camera: price_1Qt8xWRn5fu1Mx8bcCaqv5kl
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51Qt8eeRn5fu1Mx8bVTJpvxM4YJcuQiyguv8ERkRClSmOpYsobjwjYvS6vdNowNbVX2wOi5uaycG3IRdHFm0Ijm9L00HWoq8j8T');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {

console.log(req.body)
const items = req.body.items;    
let lineItems = [];
items.forEach((item) => {
    lineItems.push({
        price: item.id,
        quantity: item.quantity
    });

});

const session = await stripe.checkout.sessions.create(
    {
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    });
        res.send(JSON.stringify({
            url: session.url
        }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));