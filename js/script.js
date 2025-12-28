const showDropMenuBtn = document.querySelector('.dropmenu-btn')
const dropmenu = document.querySelector('.dropmenu')
showDropMenuBtn.addEventListener('click', function(){
    dropmenu.classList.toggle('show-dropmenu')
})