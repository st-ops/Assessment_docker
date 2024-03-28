const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.send("The Details are submitted successfully");
})
app.post('/submit', (req, res)=>{
    details = req.body;
    console.log(details);
    const html = `
        <table border="1">
            <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            <tr>
                <td>${details.fullname}</td>
                <td>${details.email}</td>
                <td>${details.password}</td>
            </tr>
        </table>
    `;
    res.send(html);
    // res.send(`The details are ${details.fullname} ${details.email} ${details.password}`);
})
app.get('/submit', (req, res)=>{
    res.send("wORKING")
})
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

