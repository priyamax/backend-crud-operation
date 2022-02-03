const express = require('express');
const route = express.Router();
const empmodule = require('../Modules/employeemodule')

route.get('/getUser',empmodule.getUserModule);
route.post('/createUser',empmodule.createUserModule);
route.put('/updateUser/:id',empmodule.updateUserModule);
route.delete('/deleteUser/:id',empmodule.deleteUserModule);

module.exports=route;
