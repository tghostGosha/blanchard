let open_items = new Set();

let items = document.querySelectorAll('.header__menu__item');
let angle = 180;
items.forEach((item) => {
  item.onclick = function () {
    item.classList.toggle('open');
    if (item.classList.contains("open")) {
      for (let open_item of open_items) {
        open_item.click();
      }
      open_items.clear();
      open_items.add(item);
    }
    else {
      open_items.delete(item);
    }
    let arrow = item.getElementsByClassName("header__menu__link__btn");
    let svg = arrow.item(0).getElementsByTagName("svg");
    svg.item(0).style = "transform: rotate(" + angle + "deg)";
    angle += 180;
  }

})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#header__menu__btn').addEventListener('click', function () {
    document.querySelector('#header__menu__input').classList.toggle('is-active')
  })
})

const sliders = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.edition-swiper-container');
const slider2 = document.querySelector('.project-swiper-container');
const slider = document.querySelector('.events-swiper-container');

let swiper = new Swiper(sliders, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
      loop: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        spaceBetween: 12
      },

      600: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 34,
        slidesPerGroup: 4,
      },

      850: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 34,
        slidesPerGroup: 3,
      },

      1420: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
        slidesPerGroup: 3,
      }
    },

});

let swiper1;

function init_swiper1() {
  swiper1 = new Swiper(slider1, {
    autoHeight: false,
    slideClass: 'edition-swiper-slide',
    wrapperClass: 'edition-swiper-wrapper',
    pagination: {
      el: '.edition-swiper-pagination',
      clickable: true,
      type: 'fraction',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {

      600: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 49,
        slidesPerGroup: 2,
      },

      1420: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      }
    },

  });
}
init_swiper1();
const changeDirection = () => {
  console.log(document.documentElement.clientWidth)
  if (document.documentElement.clientWidth <= 600) {
    if (swiper1)
      swiper1.destroy(true, true);
    swiper1 = null;
  } else {
    if (!swiper1)
      init_swiper1();
  }
};


let mySwiper;

function mobileSlider() {
	if (document.documentElement.clientWidth <= 500 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 30,

      wrapperClass: 'events-swiper-wrapper',
			slideClass: 'events-swiper-slider',
      pagination:{
			el: '.events-swiper-pagination',
			clickable: true,
			 },
		});

		slider.dataset.mobile = 'true';
	}

	if (document.documentElement.clientWidth > 500) {
    slider.dataset.mobile = 'false';

		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
  changeDirection();
});

let swiper2 = new Swiper(slider2, {
  centerSlides: true,
  slideClass: 'project-swiper-slide',
  wrapperClass: 'project-swiper-wrapper',
  navigation: {
    nextEl: '.project-swiper-button-next',
    prevEl: '.project-swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 21,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },

    1420: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },
});

const element = document.querySelector('#selectCustom');
new Choices(element, {
  searchEnabled: false,
  itemSelectText: false
});



window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#swiper-slide-item, #swiper-slide-link').addEventListener('click', function () {
    document.querySelector('#popup').classList.toggle('is-active')
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn-event').addEventListener('click', function () {
    document.querySelector('.events-swiper-containert, .events-swiper-wrapper').classList.toggle('is-active')
    let x = document.getElementById("btn-event");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })
})

tippy('#myButton', {
  content: 'Пример современных тенденций - современная методология разработки ',
});
tippy('#myButton2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции   ',
});
tippy('#myButton3', {
  content: 'В стремлении повысить качество  ',
});

var selector = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")

im.mask(selector)

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 15
    },
    tel: {
      required: true,
      function: () => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Как вас зовут?',
    tel: 'Укажите ваш телефон',
  },
});

$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger,.header__nav').toggleClass('active');
  });
});
