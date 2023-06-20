const mongoose = require('mongoose');
DB_URL='mongodb+srv://ajanmoldosi:anmol@cluster0.rylqzhr.mongodb.net/auth?retryWrites=true&w=majority'

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});

const Person = mongoose.model('Users', schema);

const person = new Person({
    name: 'John Doe',
    age: 25,
    email: 'johndoe@example.com',
});

person.save()
    .then(() => {
        console.log('Person saved successfully');
    })
    .catch((error) => {
        console.error('Error saving person:', error);
    });
