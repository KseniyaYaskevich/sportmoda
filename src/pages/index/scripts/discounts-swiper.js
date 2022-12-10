import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperDiscounts = new Swiper('.discounts-general__swiper', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  pagination: {
    el: '.discounts-general__pagination',
    clickable: true,
  },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
});

const swiperDiscountMax = new Swiper('.discounts-special__swiper', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  pagination: {
    el: '.discounts-special__pagination',
    clickable: true,
  },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
});

swiperDiscounts.update();
swiperDiscountMax.update();
