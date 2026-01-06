
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
                <img src="${car.image_url}" alt="">
                <div class="head">
                    <h4>${car.brand}</h4>
                    <h3>${car.price}</h3>
                </div>
                
                <div class="details">
                    <p>${car.color}</p>
                    <p>${car.fuel}</p>
                    <p>${car.model}</p>
                    <p>${car.mileage}</p>
                    <p>${car.year}</p>
                    <p>${car.transmission}</p>
                </div>
                <button>Schedule a visit</button>
            </div>
            `
            holder+= carCard
        }
        carsCards.innerHTML = holder
    })
.catch(error => console.log(error))
