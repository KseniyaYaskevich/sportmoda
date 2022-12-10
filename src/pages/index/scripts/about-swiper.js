import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperAboutCompany = new Swiper('.about-company__swiper', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  grabCursor: true,
  navigation: {
    nextEl: '.about-company__button-next',
    prevEl: '.about-company__button-prev',
  },
});

const swiperAboutProducts = new Swiper('.about-products__swiper', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  grabCursor: true,
  navigation: {
    nextEl: '.about-products__button-next',
    prevEl: '.about-products__button-prev',
  },
});

swiperAboutCompany.update();
swiperAboutProducts.update();
