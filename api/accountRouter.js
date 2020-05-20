const express= require('express');
const db=require('../data/dbConfig');

const router=express.Router();

router.get('/?', async (req,res)=>{
    const object= req.query;
    try {
        const info = await (await db('accounts').orderBy(req.query.sortBy,req.query.sortDir).limit(req.query.limit))
        res.status(200).json(info);
    } catch(err){
        
            res.status(500).json({error: 'Internal Server Error'})
        
    }
})

module.exports= router;


