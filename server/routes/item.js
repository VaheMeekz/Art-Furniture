const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Item = require("../models").Item;

router.post('/', async function (req, res) {
    const {nameAm, nameRu, price, numberCode, categorie, descriptionAm, descriptionRu} = req.body

    if (!(nameAm && nameRu && price && numberCode && categorie && descriptionAm && descriptionRu)) {
        return res.json({message: "Լրացրեք բոլոր դաշտերը!!!"})
    }
    const newItem = await Item.create({nameAm, nameRu, price, numberCode, categorie, descriptionAm, descriptionRu})
})


router.get('/', async function (req, res) {
    const allItems = await Item.findAll()
    if (!allItems) {
        return res.json({message: "Ներկա պահին չկան ապրանքներ"})
    }
    return res.json(allItems)
})

router.get('/this/:id', async function (req, res) {
    const thisItem = await Item.findByPk(req.params["id"]);
    if (!thisItem) {
        return res.json({message: "տվյալ ապրանքը բացակայում է!"})
    }
    return res.json(thisItem)
})

router.post('/edit', async function (req, res) {
    const {id, nameAm, nameRu, price, numberCode, categorie, descriptionAm, descriptionRu} = req.body

    if (!(id && nameAm && nameRu && price && numberCode && categorie && descriptionAm && descriptionRu)) {
        return res.json({message: "Լրացրեք բոլոր դաշտերը!!!"})
    }

    const thisItem = await Item.findOne({where: {id}})

    if (!thisItem) {
        return res.json({message: "error"})
    }
    thisItem.nameAm = nameAm
    thisItem.nameRu = nameRu
    thisItem.price = price
    thisItem.numberCode = numberCode
    thisItem.categorie = categorie
    thisItem.descriptionAm = descriptionAm
    thisItem.descriptionRu = descriptionRu
    thisItem.save()

    return res.json(thisItem)
})

router.post('/delete', async function(req,res){
    const {id} = req.body

    const thisItem = await Item

    if(!id){
        return res.json({message:'Deleting data failed!'})
    }

    try {
        thisItem.destroy({
            where: { id: id }
        })
        return res.json({message:'Ջնջվեց!'})
    } catch (error) {
        return res.json({message:'Deleting data failed!',statusCode:500})
    }
})

module.exports = router;