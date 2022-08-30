const express = require('express');
const app = express();
const { Users } = require('./models');

app.use(express.json());

app.post('/user', async (req, res) => {
    try {
        const userBody = req.body;
        const user = await Users.create({
            username: userBody.username,
            email: userBody.email,
            psw: userBody.psw,
            payment: userBody.payment,
            isAdmin: userBody.isAdmin
        });

        res.status(201).send(user);
    } catch (error) {
        res.status(500).send('Falha ao criar usuario ' + error);
    }
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(7000, () => {
        console.log('Meu servidor esta rodando');
    });
};

module.exports = app;