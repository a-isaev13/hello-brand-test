/*Импорт из других файлов .js*/

//Проверка поддержки Webp
import * as functions from "./modules/functions.js";
functions.isWebp();

new Swiper(".reviews__swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  speed: 500,
});

const btnPopup = document.querySelector(".header__info-btn");
const closepopup = document.querySelector(".close-btn");
const popup = document.querySelector(".popup");

btnPopup.addEventListener("click", () => {
  popup.classList.add("active");
});
closepopup.addEventListener("click", () => {
  popup.classList.remove("active");
});

const btnMenu = document.querySelector(".header__nav-btn");
const menu = document.querySelector(".header__nav");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("header__nav--active");
});
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("header__nav-btn--active");
  document.querySelector("body").classList.toggle("body-active");
});

$(document).ready(function() {
	$("form").submit(function() {
		let th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
