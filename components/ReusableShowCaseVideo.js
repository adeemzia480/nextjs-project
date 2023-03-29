import cn from 'classnames';
import ReusableHtmlVideo from 'components/ReusableHtmlVideo';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './ReusableShowCaseVideo.module.scss';

export default function ReusableShowCaseVideo(props) {
  return (
    <div className={cn(styles.root, 'reusable-show-case-video', "maxContent")}>
      <div className={styles.flexRow}>
        <h1 className={styles.title}>Showcase</h1>
        <div className={styles.flexRow__item}>
          <button className={styles.btn} onClick={() => alert('It is clickable')}>
            <span className={styles.btn__text}>See More</span>
          </button>
        </div>
      </div>

      <div className={styles.carousel}>
        <div style={{ display: 'grid' }}>
          <Swiper
            style={{ minWidth: 0, width: '100%', height: '100%' }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              384: { slidesPerView: 1, spaceBetween: 20 },
              480: { slidesPerView: 1, spaceBetween: 20 },
              576: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 1, spaceBetween: 20 },
              992: { slidesPerView: 2, spaceBetween: 20 },
              1200: { slidesPerView: 2, spaceBetween: 20 },
              1400: { slidesPerView: 3, spaceBetween: 20 },
              1920: { slidesPerView: 4, spaceBetween: 20 }
            }}>
            <SwiperSlide>
              <ReusableHtmlVideo />
            </SwiperSlide>
            <SwiperSlide>
              <ReusableHtmlVideo />
            </SwiperSlide>
            <SwiperSlide>
              <ReusableHtmlVideo />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

ReusableShowCaseVideo.inStorybook = true;
