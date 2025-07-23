let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('.dots .dot')


let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function movimentDots(){
     let dotsOld = indicator.querySelector('.dots .dot.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.numbers').innerHTML = '0' + (active + 1)

}

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')


    if(active + 1 > lastPosition ){
        active = 0

    } else {
        active = active + 1

    }

    items[active].classList.add('active')
    movimentDots()

   
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    if(active == firstPosition){

        active = lastPosition
    } else {
        active = active - 1
    }
    
    items[active].classList.add('active')
    movimentDots()


}