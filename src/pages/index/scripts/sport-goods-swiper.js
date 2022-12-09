import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperSportGoods = new Swiper('.sport-goods__swiper', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 15,

  pagination: {
    el: '.sport-goods__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.sport-goods__button-next',
    prevEl: '.sport-goods__button-prev',
  },
});

swiperSportGoods.update();
