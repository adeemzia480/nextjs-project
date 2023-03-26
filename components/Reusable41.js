import cn from 'classnames';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Reusable41.module.scss';

import ReusableSec06 from 'components/ReusableSec06';
import { useCallback, useRef } from 'react';

export default function Reusable41(props) {

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className={cn(styles.section6, 'reusable41')}>
      <div className={styles.flexCol}>
        <h1 className={styles.hero_title2}>What People Say About Us</h1>
        <div className={styles.carousel}>
          <div style={{ display: 'grid' }}>
            <Swiper
              ref={sliderRef}
              style={{ minWidth: 0, width: '100%', height: '100%' }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                384: { slidesPerView: 1, spaceBetween: 20 },
                480: { slidesPerView: 1, spaceBetween: 20 },
                576: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 20 },
                1200: { slidesPerView: 3, spaceBetween: 20 },
                1400: { slidesPerView: 3, spaceBetween: 20 },
                1920: { slidesPerView: 3, spaceBetween: 20 }
              }}>

              <SwiperSlide>
                <ReusableSec06
                  highlights7={`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. `}
                  highlights71={`Lorem Ipsum dolor sit`}
                  icon2={require('assets/3db01a9c6eb517f9f93a22cb94689e79.png')}
                  subtitle={`Robert Smith`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ReusableSec06
                  highlights7={`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. `}
                  highlights71={`Lorem Ipsum dolor sit`}
                  icon2={require('assets/3db01a9c6eb517f9f93a22cb94689e79.png')}
                  subtitle={`Robert Smith`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ReusableSec06
                  highlights7={`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. `}
                  highlights71={`Lorem Ipsum dolor sit`}
                  icon2={require('assets/3db01a9c6eb517f9f93a22cb94689e79.png')}
                  subtitle={`Robert Smith`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ReusableSec06
                  highlights7={`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. `}
                  highlights71={`Lorem Ipsum dolor sit`}
                  icon2={require('assets/3db01a9c6eb517f9f93a22cb94689e79.png')}
                  subtitle={`Robert Smith`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ReusableSec06
                  highlights7={`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. `}
                  highlights71={`Lorem Ipsum dolor sit`}
                  icon2={require('assets/3db01a9c6eb517f9f93a22cb94689e79.png')}
                  subtitle={`Robert Smith`}
                />
              </SwiperSlide>



            </Swiper>
          </div>
        </div>

        <div className={styles.flexRow}>
          <button className={`${styles.nextPrevBtn}`} onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 256 256"><path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6Z"></path></svg>
          </button>
          <button className={`${styles.nextPrevBtn}`} onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 256 256"><path fill="currentColor" d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z"></path></svg>
          </button>

        </div>
      </div>
    </section>
  );
}

Reusable41.inStorybook = true;
