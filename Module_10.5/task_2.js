const btn = document.querySelector('.btn');

let screenWidth, screenHeight, windowWidth, windowHeight; 

btn.addEventListener('click', () => {

    screenWidth = window.screen.width; // Размер экрана - ширина всего экрана
    screenHeight = window.screen.height; // Размер экрана - высота всего экрана

    windowWidth = window.innerWidth; // Внутренний размер окна - ширина области просмотра без скролла
    windowHeight = window.innerHeight; // Внутренний размер окна - высота  области просмотра без скролла

    alert(`Ширина всего экрана - ${screenWidth}, высота всего экрана - ${screenHeight} 
            \n Ширина области просмотра - ${windowWidth}, высота области просмотра - ${windowHeight}`);
});