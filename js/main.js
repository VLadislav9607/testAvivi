const toggleBtn = document.querySelector('.toggle__button');
const menuIcon = document.querySelector('.menu-icon');
const headerMob = document.querySelector('.header__wrapper--mob');
const signIn = document.querySelectorAll('.header__signin__link');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close__btn');

const btnPlay = document.querySelector('.video__btn');
const video = document.querySelector('#video');
const wrapper = document.querySelector('.video__wrapper');

toggleBtn.onclick = () => {
   headerMob.classList.toggle('active');
   menuIcon.classList.toggle('menu-icon-active');
};

signIn.forEach((item, i) => {
   item.onclick = () => {
      popup.classList.add('popup__active');
   }
   signIn[1].onclick = () => {
      popup.classList.add('popup__active');
      headerMob.classList.remove('active');
      menuIcon.classList.remove('menu-icon-active');
   }
})

popupClose.onclick = () => {
   popup.classList.remove('popup__active');
}

function playVideo () {
   if (video.paused) {
      video.play();
      btnPlay.style.opacity = '0';
   } else {
      video.pause();
      btnPlay.style.opacity = '1';
   }
}

wrapper.addEventListener('click', playVideo);
