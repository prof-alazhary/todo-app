const User = require('../models/User');

module.exports = {

    create(){
        const user = new User();

        user.name = 'name';
      
        user.save((err)=>{
          console.log("creation error-->",err)
        })
    }
}