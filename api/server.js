const express = require("express");
const morgan=require('morgan');
const helmet=require('helmet');
const db = require("../data/dbConfig.js");
const router=require('./accountRouter.js');


const server = express();

server.use(express.json());
server.use(morgan());
server.use(helmet());
server.use('/api/accounts', router);


server.get('/', (req,res)=>{
    db('accounts')
    .then(account=> res.status(200).json(account))
    .catch(err=> res.status(500).json({error: 'Can\'t get the users data'}))
})

server.post('/', (req,res)=>{
    db('accounts').insert(req.body)
    .then(id=> res.status(200).json(`Succefully added new account, here is your id: ${id}`))
    .catch(err=> res.status(500).json(err))
    console.log(req.body)
})

server.delete('/:id', (req,res)=>{
    db('accounts').where({id:req.params.id}).delete()
    .then(count=> res.status(200).json(`Successfully delete ${count} users`))
.catch(err=> res.status(500).json({errorMessage: 'Could not delete the user'}))
})

server.put('/:id', (req,res)=>{
    db('accounts').where({id: req.params.id}).update(req.body)
    .then(count=> res.status(200).json(`Successfully update ${count} users`))
.catch(err=> res.status(500).json({errorMessage: 'Could not find the user with that id'}))
})

module.exports = server;
