function aceito(){
    let status = document.getElementById('status');
    let macaquinhos = document.getElementById('macaquinhos');
    let recuso = document.getElementById('recuso');
    let aceito = document.getElementById('aceito');

    recuso.style.display = 'none';
    aceito.style.display = 'none';
    macaquinhos.style.display = 'inline';
    status.innerText = 'te amo 💖'
}

function recusoclick(){
    let status = document.getElementById('status');
    let recuso = document.getElementById('recuso');
    status.innerText = 'aceita logo 😤'

    bottom = Math.floor(Math.random() * (200 - 1) + 1);
    left = Math.floor(Math.random() * (300 - 1) + 1);

    recuso.style.top = bottom + 'px';
    recuso.style.left = left + 'px';
}

function recuso(){
    let recuso = document.getElementById('recuso');
    bottom = Math.floor(Math.random() * (200 - 1) + 1);
    left = Math.floor(Math.random() * (300 - 1) + 1);

    recuso.style.top = bottom + 'px';
    recuso.style.left = left + 'px';
}

