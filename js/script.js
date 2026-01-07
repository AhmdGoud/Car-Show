const showDropMenuBtn = document.querySelector('.dropmenu-btn')
const dropmenu = document.querySelector('.dropmenu')
showDropMenuBtn.addEventListener('click', function(){
    dropmenu.classList.toggle('show-dropmenu')
})

let carsCards = document.querySelector('.cars-cards')

fetch("../cars.json")
    .then(response => response.json())
    .then(cars => {

        let holder = '';
        for (let car of cars){
            let carCard = document.createElement('div')
            carCard = `
            <div class="car-card">
                <div class="car-image"><img src="${car.image_url}" alt=""></div>
                <div class="head">
                    <h4>${car.brand}</h4>
                    <h3>${car.price}$</h3>
                </div>
                
                <div class="details">
                    <p>model: ${car.model}</p>
                    <p>color: ${car.color}</p>
                    <p>fuel: ${car.fuel}</p>
                    <p>mileage: ${car.mileage}</p>
                    <p>year: ${car.year}</p>
                    <p>transmission: ${car.transmission}</p>
                </div>
                <button>Overview Car</button>
            </div>
            `
            holder+= carCard
        }
        carsCards.innerHTML = holder
    })
.catch(error => console.log(error))
