let open_items = new Set();

let items = document.querySelectorAll('.header__menu-item');
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
    let arrow = item.getElementsByClassName("header__menu-btn");
    let svg = arrow.item(0).getElementsByTagName("svg");
    svg.item(0).style = "transform: rotate(" + angle + "deg)";
    angle += 180;
  }

})

/*========================burger========================*/
$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger,.header__nav').toggleClass('active');
  });
});


/*====================320 px header=================*/
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#header__menu-btn, #header__close-btn').addEventListener('click', function(event) {
    document.querySelector('#header__form').classList.toggle('is-active')
    document.querySelector('.header-burger-320').classList.toggle('is-close')
    document.querySelector('.header__logo-320').classList.toggle('is-close')
    document.querySelector('.header__form__close-btn').classList.toggle('is-open')
    document.querySelector('#header__menu-input').classList.toggle('is-open')
  })

})
/*===================edition checkbox=================*/
/*window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#edition__checkbox-btn').addEventListener('click', function(event) {
    document.querySelector('.edition__form').classList.toggle('is-active')
  })
});

/*=====================edition-select======================*/
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.edition__form-label').addEventListener('click', function(){
    document.querySelector('.edition__form-input').classList.toggle('is-selected')
  })
})

/*==========================swiper==================*/
const sliders = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.edition-swiper-container');
const slider2 = document.querySelector('.project-swiper-container');
const slider = document.querySelector('.events-swiper-container');

let swiper = new Swiper(sliders, {

  pagination: {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
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
    //
      1420: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },

      850: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      600: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
    },
});

let swiper1;

function init_swiper1() {
  swiper1 = new Swiper(slider1, {
    slidesPerView: 2,
    slidesPerColumn: 4,
    slidesPerGroup: 2,
    spaceBetween: 30,
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
      1420: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 49,
        slidesPerGroup: 2,
      },
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
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  centerSlides: true,
  slideClass: 'project-swiper-slide',
  wrapperClass: 'project-swiper-wrapper',
  navigation: {
    nextEl: '.project-swiper-button-next',
    prevEl: '.project-swiper-button-prev',
  },
  breakpoints: {

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

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn-event').addEventListener('click', function () {
    document.querySelector('.events-swiper-wrapper').classList.toggle('is-active')
    let x = document.getElementById("btn-event");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })
})

/*=======================swiper popup===================*/
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#swiper-slide-item, #swiper-slide-link').addEventListener('click', function () {
    document.querySelector('#popup').classList.toggle('is-active')
  })
})

/*=======================Choises=================*/
const element = document.querySelector('#selectCustom');
new Choices(element, {
  searchEnabled: false,
  itemSelectText: false
});



/*====================accordion link================*/
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.accordion-link').addEventListener('click', function () {
    document.querySelector('.accordion-link').classList.toggle('is-selected')
  })
})


/*===================================TABS========================*/

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__tabs-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab__content').forEach(function (tabContent) {
        tabContent.classList.remove('tab__content-active')
        tabContent.classList.remove('is-active')
      })
      document.querySelectorAll('.catalog__tabs-btn').forEach(function (btn) {
        btn.classList.remove('is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tab__content-active')
      tabsBtn.classList.toggle('is-active')
    })

  })

})

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.btn-italic').classList.add('is-active')
  document.querySelector('.accordion-link').classList.add('is-active')
})

window.addEventListener('DOMContentLoaded', function(){

  document.querySelectorAll('.painters__left-block').forEach(function(tabContent){
    tabContent.classList.remove('painters__left-block-active')
    tabContent.classList.remove('is-active')
  })
  document.querySelectorAll('.tab__content-active').forEach(function(tabContent){
    tabContent.classList.remove('tab__content-active')
  })
  document.querySelector('[data-target="three"]').classList.add('tab__content-active')
  document.querySelectorAll('.first-active-painter-tab').forEach(function(tabContent){
    tabContent.classList.add('painters__left-block-active');
  });
  document.querySelectorAll('.accordion-link.first-active-painter-link').forEach(function(link){
    link.classList.add('is-active')
  });
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.accordion-link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      const dataTargetVal = tabsBtn.closest(`.tab__content[data-target]`);
      const tabContent = `.tab__content[data-target="${dataTargetVal.getAttribute('data-target')}"]`;
      document.querySelectorAll(`${tabContent} .painters__left-block`).forEach(function (tabContent) {
        tabContent.classList.remove('painters__left-block-active')
        tabContent.classList.remove('is-active')
      })
      document.querySelectorAll(`${tabContent} .accordion-link`).forEach(function (btn) {
        btn.classList.remove('is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('painters__left-block-active')
      tabsBtn.classList.add('is-active')
    })

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
/*================edition-accordion==========*/
  //$(document).ready(function(){
   // $('edition__checkbox-btn').click(function(event){
  //    $(this).toggleClass('active').next().slideToggle(300);
   // });
  //});
