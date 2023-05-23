import { useEffect, useRef } from 'react';
import { register } from 'swiper/element';
import { FiveStars } from './five-stars';

register();

export const CommentsSwiper = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      pagination: true,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1296: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      injectStyles: [
        `
          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color: red;
            color: white;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init={false}>
      {[
        {
          name: '陳小姐',
          company: 'ABC科技有限公司',
          comment:
            '非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！',
          avatar: 'avatar1',
        },
        {
          name: '劉小姐',
          company: 'XYZ 醫療器材有限公司',
          comment:
            '作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！',
          avatar: 'avatar2',
        },
        {
          name: '黃先生',
          company: 'EFG 銀行',
          comment:
            '我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！',
          avatar: 'avatar3',
        },
      ].map((item) => (
        <swiper-slide>
          <div className="rounded-2xl bg-white bg-opacity-[8%] p-5">
            <FiveStars />
            <p className="mb-5 md:h-[215px]">{item.comment}</p>

            <div className="flex items-center gap-4">
              <img
                className="h-12 w-12 rounded-full"
                src={item.avatar + '.png'}
                alt={item.name}
              />
              <div>
                <p className="mb-1 font-bold">{item.name}</p>
                <p>{item.company}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};
