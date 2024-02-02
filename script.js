const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close_btn')
const filterMenu = document.querySelector('.nav')
const heading = document.querySelector('.heading')
const filter = document.querySelector('.filter')
const body = document.querySelector('body')
const closeBtn2 = document.querySelector('.close_btn2')

const showFilterMenu = () => {
    filterMenu.style.display = 'grid';
    heading.style.display = 'none'
}

openBtn.addEventListener('click', showFilterMenu);
closeBtn.addEventListener('click', function (event) {
    event.preventDefault()
    filterMenu.style.display = 'none'
    heading.style.display = 'inline-flex'
});

filter.addEventListener('click', () => {
    filterMenu.style.display = 'none';
    heading.style.display = 'inline-flex'
});

closeBtn2.addEventListener('click', function (event) {
    event.preventDefault()
    filterMenu.style.display = 'none'
    heading.style.display = 'inline-flex'
})
