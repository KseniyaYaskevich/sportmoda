import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperBrands = new Swiper('.brands__swiper', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  grabCursor: true,
  pagination: {
    el: '.brands__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.brands__button-next',
    prevEl: '.brands__button-prev',
  },
});

swiperBrands.update();
