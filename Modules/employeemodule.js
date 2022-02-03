const client = require('../connection');

module.exports.getUserModule= async (req,res)=>{
    try{
    var data = await client.query(`select * from users`);
    res.send(data.rows);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.searchUserModule= async (req,res,firstname)=>{
    try{
    var data = await client.query('select * from users where firstname = ?',firstname);
    res.send(data.rows);
    }
    catch(err){
        console.log(err);
        console.log('no users found');
        res.status(500).send('no users found');
    }
}


module.exports.createUserModule= async (req,res)=>{
    try{
    var data = await client.query(`insert into users (id, firstname, lastname, address)  values ('${req.body.id}','${req.body.firstname}','${req.body.lastname}','${req.body.address}')`);
    res.send('success');
    console.log(data)
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.updateUserModule= async (req,res)=>{
    try{
     await client.query(`update users set firstname = '${req.body.firstname}', lastname = '${req.body.lastname}',address = '${req.body.address}' where id  = ${req.params.id} `);
    res.send('updated');
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.deleteUserModule= async (req,res)=>{
    try{
     await client.query(`delete from users where id = ${req.params.id} `);
    res.send('deleted');
    }
    catch(err){ 
        console.log(err);
        res.status(500).send(err);
    }
}

