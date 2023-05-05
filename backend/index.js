const express = require('express');
const nodemailer = require('nodemailer');
const QRCode = require('qrcode');
const app = express();
const { CourierClient } = require("@trycourier/courier");
const port = 5000;

app.get('/sendemail', async (req, res) => {
    const courier = CourierClient({ authorizationToken: "pk_prod_H377WMT114M4ZZH29WTEYX3Z7G2J" });
    const { requestId } = await courier.send({
        message: {
            to: {
                email: "sribalajiarumugam9791@gmail.com",
            },
            template: "XRYYXR3S944A61GN0ZESWRDHQXWJ",
            data: {
            },
        },
    });
    res.send("email send succfully");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
