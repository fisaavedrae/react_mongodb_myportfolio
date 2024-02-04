const express = require("express");
const router = express.Router();
const { getInformacionContacto, getInformacionAdicional, getEducation, getExperience, getExpertise, getPortafolio, getSkills } = require("../database/consultas");

router.get("/home", (req, res) => {
    res.send("Hello World Express Js")
})

router.get('/informacionContacto', async (req, res) => {
    try {
        const results = await getInformacionContacto()
        res.json(results)
    }
    catch (error) {
        res.status(400).json({ message: 'Error al obtener los informacionContacto' })
    }

})

router.get('/informacionAdicional', async (req, res) => {
    try {
        const results = await getInformacionAdicional()
        res.json(results)
    }
    catch (error) {
        res.status(400).json({ message: 'Error al obtener los informacionAdicional' })
    }

})

router.get('/education', async (req, res) => {
    try {
        const results = await getEducation()
        res.json(results)
    }
    catch (error) {
        res.status(400).json({ message: 'Error al obtener los getEducation' })
    }

})

router.get('/experience', async (req, res) => {
    try {
        const results = await getExperience()
        res.json(results)
    }
    catch (error) {
        res.status(400).json({ message: 'Error al obtener los getExperience' })
    }

})

router.get('/expertise', async (req, res) => {
    try {
        const results = await getExpertise()
        res.json(results)
    }
    catch (error) {
        res.status(400).json({ message: 'Error al obtener los getExpertise' })
    }

})

router.get('/portafolio', async (req, res) => {
    try {
        const results = await getPortafolio()
        res.json(results)
    }
    catch (error) {
        res.status(400).json({ message: 'Error al obtener los getPortafolio' })
    }

})

router.get('/skills', async (req, res) => {
    try {
        const results = await getSkills()
        res.json(results)
    }
    catch (error) {
        res.status(400).json({ message: 'Error al obtener los getSkills' })
    }

})


module.exports = router;