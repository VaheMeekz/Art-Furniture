const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Categories = require("../models").Categorie;

router.post('/', async function (req, res) {
    const {name} = req.body

    if (!name) {
        return res.json({message:"Լրացրեք դաշտը"})
    }

    const newCategorien = await Categories.create({firstName:name})

    return res.json(newCategorien)
})


router.get('/',async function (req,res){
    const allCategories = await Categories.findAll()
    if(!allCategories){
        return res.json("Այս պահին չկա կատեգորիաներ")
    }

    return res.json(allCategories)
})


router.post('/edit', async function(req,res){
    const {id,name} = req.body

    const thisCategorine = await Categories.findOne({where:{id}})

    if(!thisCategorine){
        return res.json({message:"error"})
    }

    thisCategorine.firstName = name
    thisCategorine.save()

    return res.json(thisCategorine)
})


router.post('/deleate', async function(req,res){
    const {id} = req.body

    if(!id){
       return res.json({message:"Լրացրեք բոլոր տվյալները!!!"})
    }

    const thisCategorie = await Categories.destroy({where:{id}})

    return res.json({messaege:"Տվյալ կատեգորիան ջջնջված է!!"})
})

module.exports = router;