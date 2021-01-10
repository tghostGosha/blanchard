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

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const element = document.querySelector('#selectCustom');
new Choices(element, {
  searchEnabled: false,
  itemSelectText: false
});


window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#swiper-slide-item, #swiper-slide-link').addEventListener('click', function() {
    document.querySelector('#popup').classList.toggle('is-active')
  })
})

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#btn-event').addEventListener('click', function() {
    document.querySelector('#hidding-list').classList.toggle('is-active')
  })
})
