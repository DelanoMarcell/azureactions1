/* 

//get all cars
app.get('/cars', (req, res) => {
    res.json(cars);
});


*/
//get all cars, add delete button
var loadButton = document.getElementById('loadCarsBtn');
loadButton.addEventListener('click', function () {
    const url = '/cars';
    fetch(url)
        .then(response => response.json())
        .then(cars => {
            var carsList = document.getElementById('carList');
            carsList.innerHTML = ''; // Clear existing cars

            cars.forEach(car => {
                var carItem = document.createElement('div'); // Create a div for each car
                carItem.classList.add('car-item');  // Add a class for styling

                carItem.innerHTML = `
                    <h2>${car.make} ${car.model}</h2>
                    <p>Year: ${car.year}</p>
                    <p>Price: ${car.price}</p>
                `;

                carsList.appendChild(carItem);
            });
        });
});



//add car
// Get the form element
var carForm = document.getElementById('carForm');

// Add an event listener for the form submission
carForm.addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    // Create a new car object from the form data
    var newCar = {
        make: document.getElementById('make').value,
        model: document.getElementById('model').value,
        year: document.getElementById('year').value,
        price: document.getElementById('price').value
    };

    // Send the new car data to the server
    fetch('/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCar),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        //clear form fields
        document.getElementById('make').value = '';
        document.getElementById('model').value = '';
        document.getElementById('year').value = '';
        document.getElementById('price').value = '';
        
    })
    .catch((error) => {         
        console.error('Error:', error);
    });
});



