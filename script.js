
function toggleSideMenu() {
    const tabBar = document.getElementById('tabBar');
    const content = document.querySelector('.content');
    const header = document.querySelector('.header');
    if (tabBar.style.left === '-300px') {
        tabBar.style.left = '0';
        content.style.marginLeft = '250px';
        header.style.marginLeft = '250px';
    } else {
        tabBar.style.left = '-300px';
        content.style.marginLeft = '0';
        header.style.marginLeft = '0';
    }
}

function toggleSubtags(tab) {
    const subtags = tab.querySelector('.subtags');
    tab.classList.toggle('expanded');
    subtags.classList.toggle('expanded');
}

let isArrow1 = true;

function changeArrow(tab) {
    const rightArrow = tab.querySelector('.right-arrow'); // Get the image inside the button's sibling
    if (isArrow1) {
        rightArrow.src = 'arrow2.png'; // Change to image2
    } else {
        rightArrow.src = 'arrow.png'; // Change back to image1
    }
    isArrow1 = !isArrow1;
}