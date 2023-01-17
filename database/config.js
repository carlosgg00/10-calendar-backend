const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect('mongodb+srv://mern_user:ignororoZGzpFsiB@calendardb.qhhuu1b.mongodb.net/test');

        console.log('DB Online')

    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de inicializar BD')
    }
}

module.exports = {
    dbConnection
}