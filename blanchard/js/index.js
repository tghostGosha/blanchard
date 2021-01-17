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
const sliders = document.querySelectorAll('.swiper-container');

sliders.forEach((el) => {
  let swiper = new Swiper(el, {
    delegate: '.tile.swiper-slide:not(.swiper-slide-duplicate) a, *:not(.swiper-slide) > a',
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: el.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'fraction',
    },
    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },
  });
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
    document.querySelector('#hidding-list').classList.toggle('is-active')
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

