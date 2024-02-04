require('dotenv').config();
const client = require('./db');


const getInformacionContacto = async () => {
    try {
        const result = await client.db(process.env.MONGO_DB).collection("informacionContacto").find().toArray();

        if (result) {
            console.log('Found a listing in the collection with the name informacionContacto');
            console.log(result);
            return (result);
        } else {
            console.log(`No listings found with the name informacionContacto`);
        }
    } catch (error) {
        console.log(error)
    }
}

const getInformacionAdicional = async () => {
    try {
        const result = await client.db(process.env.MONGO_DB).collection("informacionAdicional").find().toArray();

        if (result) {
            console.log('Found a listing in the collection with the name informacionAdicional');
            console.log(result);
            return (result);
        } else {
            console.log(`No listings found with the name informacionAdicional`);
        }
    } catch (error) {
        console.log(error)
    }
}

const getEducation = async () => {
    try {
        const result = await client.db(process.env.MONGO_DB).collection("education").find().toArray();

        if (result) {
            console.log('Found a listing in the collection with the name education');
            console.log(result);
            return (result);
        } else {
            console.log(`No listings found with the name education`);
        }
    } catch (error) {
        console.log(error)
    }
}

const getExperience = async () => {
    try {
        const result = await client.db(process.env.MONGO_DB).collection("experience").find().toArray();

        if (result) {
            console.log('Found a listing in the collection with the name experience');
            console.log(result);
            return (result);
        } else {
            console.log(`No listings found with the name experience`);
        }
    } catch (error) {
        console.log(error)
    }
}

const getExpertise = async () => {
    try {
        const result = await client.db(process.env.MONGO_DB).collection("expertise").find().toArray();

        if (result) {
            console.log('Found a listing in the collection with the name expertise');
            console.log(result);
            return (result);
        } else {
            console.log(`No listings found with the name expertise`);
        }
    } catch (error) {
        console.log(error)
    }
}

const getPortafolio = async () => {
    try {
        const result = await client.db(process.env.MONGO_DB).collection("portafolio").find().toArray();

        if (result) {
            console.log('Found a listing in the collection with the name portafolio');
            console.log(result);
            return (result);
        } else {
            console.log(`No listings found with the name portafolio`);
        }
    } catch (error) {
        console.log(error)
    }
}

const getSkills = async () => {
    try {
        const result = await client.db(process.env.MONGO_DB).collection("skills").find().toArray();

        if (result) {
            console.log('Found a listing in the collection with the name skills');
            console.log(result);
            return (result);
        } else {
            console.log(`No listings found with the name skills`);
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getInformacionContacto, getInformacionAdicional, getEducation, getExperience, getExpertise, getPortafolio, getSkills
}