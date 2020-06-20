const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/', (req,res)=>{
	User.find()
	.then(user => res.json(user))
	.catch(err => res.status(400).json('Error: ' + err));
})

router.post('/', (req,res)=>{
	const {name, phone, email}= req.body;
	const newUser = new User({
		name,
		phone,
		email
	}) 
	newUser.save()
	.then(()=> res.json(newUser))
	.catch(err => res.status(400).json('Error: ' + err));
})

router.get('/:id', (req,res)=>{
	User.findById(req.params.id)
	.then(user => res.json(user))
	.catch(err => res.status(400).json('Error: ' + err));
})




router.put('/:id' ,(req, res)=>{
	User.findByIdAndUpdate(req.params.id)
	.then(user=>
	{
		user.name = req.body.name;
        user.phone = req.body.phone;
        user.email= req.body.email;
        user.save()
        res.json(user)
	})
	.catch(err => res.status(400).json('Error: ' + err));
})
/*router.put('/:id', function(req, res){
  var book = req.body;
  var query = req.params.id;
  // if the field doesn't exist $set will set a new field
  var update = {
    '$set':{
      name:book.name,
      phone:book.phone,
      email:book.email
    }
  };
    // When true returns the updated document
    var options = {new: true};

    User.findOneAndUpdate(query, update, options, function(err, books){
      if(err){
        throw err;
      }
      res.json(books);
    })

})

*/

router.delete('/:id', (req,res)=>{
	User.findByIdAndDelete(req.params.id)
	.then(user=> res.json(user))
	.catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router; 