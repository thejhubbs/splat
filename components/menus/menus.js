
function menuToggle() {
    var menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', (e)=> {
        $('#menu-list').slideToggle();
    });
}