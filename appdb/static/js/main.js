

$(".menu-open").on('click', function(e) {
console.log(1)
    e.preventDefault();
    $(this).parent().toggleClass('active-menu')
});
$(".close-menu").on('click', function(e) {
    $(".banner").removeClass('active-menu');

});
const menuTitle = document.querySelector('.content-menu')
menuTitle.addEventListener('click', function(x) {
    if (x.target.classList.contains('content-btn')) {
        const Taget = x.target.getAttribute('data-title');
        menuTitle.querySelector('.active').classList.remove('active');
        x.target.classList.add('active');
        const menuItem = document.querySelector('.content')
        menuItem.querySelector('.content-menu-list.active').classList.remove('active')
        menuItem.querySelector(Taget).classList.add('active')
    }
})