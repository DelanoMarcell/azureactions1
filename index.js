//create cars api using express
const express = require('express');
const app = express();

//corse
const cors = require('cors');

app.use(cors());

app.use(express.static('public')); 
app.use(express.json());


const cars = [
    {   
        "id": 1,
        "make": "Toyota",
        "model": "Camry",
        "year": 2022,
        "price": 250000
    },
    {
        "id": 2,
        "make": "Honda",
        "model": "Accord",
        "year": 2021,
        "price": 200000
    },
    { 
        "id": 3,
        "make": "Ford",
        "model": "Mustang",
        "year": 2020,
        "price": 300000
    }

]

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
}
);

app.get('/about', (req, res) => {
    res.send('About page');
}
);




//get all cars
app.get('/cars', (req, res) => {
    res.json(cars);
});

//get car by id
app.get('/cars/:id', (req, res) => {
    const id = req.params.id;
    const car = cars.find(car => car.id === id);
    res.json(car);
});

//update car
app.put('/cars/:id', (req, res) => {
    const id = req.params.id;
    const updatedCar = req.body;
    const index = cars.findIndex(car => car.id === id);
    cars[index] = updatedCar;
    res.json(updatedCar);
});

//delete car
app.delete('/cars/:id', (req, res) => {
    const id = req.params.id;
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    res.json({ message: `Car with id ${id} deleted` });
});

//add car
app.post('/cars', (req, res) => {
    console.log(req);
    const newCar = req.body;
    console.log(newCar);
    cars.push(newCar);
    res.json(newCar);
});

//start app at localhost:3000 or prcess.env.PORT

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
} );

    