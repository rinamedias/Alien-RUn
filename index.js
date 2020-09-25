const karakter = document.getElementById('karakter')
const rintangan = document.getElementById('rintangan')
const start = document.getElementById('start')

const jump = (e) => {
    if (e.keyCode === 32) {
        if (karakter.classList == 'animasi') { return }
        karakter.classList.add('animasiKarakter')
        rintangan.classList.add('animasiRintangan')
        start.classList.remove('play-again')
        setTimeout(function removeJump() {
            karakter.classList.remove('animasiKarakter')
        }, 300)
    }
}

const gameOver = () => {
    const karakterTop = parseInt(window.getComputedStyle(karakter).getPropertyValue('top'))
    const rintanganLeft = parseInt(window.getComputedStyle(rintangan).getPropertyValue('left'))
    if (rintanganLeft > 20 && rintanganLeft < 40 && karakterTop > 120) {
        alert('game over ')
        rintangan.classList.remove('animasiRintangan')
        start.classList.add('play-again')
    }
}

document.addEventListener('keyup', jump)
setInterval(gameOver, 10);