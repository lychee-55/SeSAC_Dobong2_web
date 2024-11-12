// console.log(bar)

// $('small-menu').click(function(e){
    //     $('small-menu').toggleClass(".small-menu1")
    // })
const star = document.querySelector('.menu-bar')
star.addEventListener('click',(e)=>{
    e.preventDefault();

    const smallMenu = document.querySelector('.small-menu')
    smallMenu.classList.toggle('small-menu1');
})