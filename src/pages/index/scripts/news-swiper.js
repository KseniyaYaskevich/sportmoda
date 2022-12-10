import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperNews = new Swiper('.news__swiper', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.news__button-next',
    prevEl: '.news__button-prev',
  },
});

swiperNews.update();
