import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperDiscounts = new Swiper('.discounts__general', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  pagination: {
    el: '.general__pagination',
    clickable: true,
  },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
});

const swiperDiscountMax = new Swiper('.discounts__special', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  pagination: {
    el: '.special__pagination',
    clickable: true,
  },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
});

swiperDiscounts.update();
swiperDiscountMax.update();
