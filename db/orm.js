const mongoose = require('mongoose');
const bcrypt = require ( 'bcrypt' );

mongoose.connect(`mongodb://localhost:27017/${process.env.realtor_users}`, {useNewUrlParser: true, useUnifiedTopology: true,});
mongoose.set('useCreateIndex', true);

// include mongoose models (it will include each file in the models directory)
const dbU = require( './models/users.js' );
const dbL= require( './models/lists.js' );

function saveUser( data ){

    const userData = {
        firstName :  data.firstName,
        lastName :  data.lastName,
        mobile : data.mobile,
        city : data.city,
        company : data.company,
        emailAddress :  data.email,
        userPassword :  data.password,
    }
    const dbUser = new dbU ( userData );
    return dbUser.save(  );
}
function saveList(data){
    const ListInfo = {
        address :  data.address,
        photo :  data.photo,
        propType : data.propType,
        price : data.price,
        beds :  data.beds,
        baths :  data.baths,
    }
    const dbList = new dbL ( ListInfo );
    return dbList.save(  );
}


module.exports = {
    saveUser,
    saveList

}