document.addEventListener('DOMContentLoaded', function() {
const click = document.querySelector(".fa.fa-bars")
click.addEventListener('click', function() {
    console.log('click')
    const display = document.querySelector(".navbar")
    if (display.classList.contains('shown')) 
        display.classList.remove("shown")
    else
        display.classList.add("shown")
})

})
    