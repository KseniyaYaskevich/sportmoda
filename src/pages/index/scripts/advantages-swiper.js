import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperAdvantages = new Swiper('.advantages__swiper', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  grabCursor: true,
  pagination: {
    el: '.advantages__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.advantages__button-next',
    prevEl: '.advantages__button-prev',
  },
});

swiperAdvantages.update();
