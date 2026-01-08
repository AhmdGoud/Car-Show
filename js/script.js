// show menu on click
const showDropMenuBtn = document.querySelector('.dropmenu-btn')
const dropmenu = document.querySelector('.dropmenu')
showDropMenuBtn.addEventListener('click', function(){
    dropmenu.classList.toggle('show-dropmenu')
})


// fetch cars from the json file

const overviewCard = document.querySelector('.car-overview')

fetch("../cars.json")
    .then(response => response.json())
    .then(cars => {

        const carsCards = document.querySelector('.cars-cards')
        let holder = '';

        for (let car of cars){
            let carCard = document.createElement('div')
            carCard = `
            <div class="car-card">
                <div class="car-image">
                    <img src="${car.image_url}" alt="">
                </div>
                <div class="car-info">
                    <div class="head">
                        <h2>${car.brand}</h2>
                        <h3>${car.price}$</h3>
                    </div>
                    
                    <div class="details">
                        <p id="model">Model: ${car.model}</p>
                        <p>Color: ${car.color}</p>
                        <p>Fuel: ${car.fuel}</p>
                        <p>Mileage: ${car.mileage}</p>
                        <p>Transmission: ${car.transmission}</p>
                        <p id="year">Year: ${car.year}</p>
                    </div>
                    <button>Overview Car</button>
                </div>
            </div>
            `
            holder+= carCard
        }
        carsCards.innerHTML = holder

        overviewCard.innerHTML = `
                ${carsCards.firstElementChild.innerHTML}
                <div class="features">
                    <div class="loan-calc">Loan Calculator</div>
                    <div class="compare">Compare</div>
                </div>
            `
    })
.catch(error => console.log(error))


// display car in the overview card
setTimeout(() =>{
    const overviewBtns = document.querySelectorAll('.car-card button')

    overviewBtns.forEach((overviewBtn) =>{
        overviewBtn.addEventListener('click', function(){

            const SelectedCar = overviewBtn.parentElement.parentElement.innerHTML
            overviewCard.innerHTML = `
                ${SelectedCar}
                <div class="features">
                    <div class="loan-calc">Loan Calculator</div>
                    <div class="compare">Compare</div>
                </div>
            `
        })
    })
}, 1000)
