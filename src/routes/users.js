const { Router } = require('express');
const router = Router();

const Users = require('../models/Users');
const faker = require('faker');

router.get('/api/users', async (req, res) => {
    const users = await Users.find();
    res.json({users: users});
});

router.get('/api/users/create', async (req, res) => {
    
    for(let i = 0; i < 5; i++){
        await Users.create({
            firstName: faker.name.findName(),
            lastName: faker.name.lastName(),
            avatar: faker.image.avatar()
        });
    }
    res.json({message: '5 usuarios agregados'});
});

module.exports = router;
