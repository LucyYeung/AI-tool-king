import { Link } from 'react-router-dom';
import { CommentsSwiper } from '../components/home/comments-swiper';
import { Functions } from '../components/home/function-view';

export const Home = () => {
  return (
    <main>
      <section>
        <h2 className="text-display02 font-bold">
          透過
          <br />
          工具王的
          <br />
          強大模型
          <br />
          讓您的業務更聰明
        </h2>
        <Link to="/">
          <h6 className="mb-[180px] mt-10  inline-block rounded-2xl border border-white px-10 py-5 md:mb-10">
            開始使用
          </h6>
        </Link>
        <ul className="flex w-full place-content-end md:h-[180px]">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <li
                key={index}
                className="aspect-square h-auto w-1/3 bg-deco bg-contain md:w-[180px]"
              />
            ))}
        </ul>
      </section>
      <section className="mt-[120px] md:mt-40">
        <div className="mb-12 grid content-between gap-6 font-bold md:mb-20 md:grid-cols-3">
          <p className="col-span-1 text-heading03">我們的服務</p>
          <h2 className="col-span-2 text-heading03 md:text-heading01">
            我們相信透過 AI 技術，
            <br />
            包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
          </h2>
        </div>
        <div className="mb-[120px] grid gap-x-6 gap-y-3 md:mb-[106px] md:grid-cols-3">
          {[
            {
              title: '快速',
              icon: 'flash_on',
              description:
                '我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。',
            },
            {
              title: '靈活',
              icon: 'auto_awesome',
              description:
                '我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。',
            },
            {
              title: '擴充',
              icon: 'library_add',
              description:
                '我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。',
            },
          ].map((item, index) => (
            <Link key={index} to="/">
              <div className="min-h-full rounded-2xl border border-black-80 px-5 py-10 hover:ring-1">
                <i className="material-icons col-span-1 mb-5 block text-icon-large">
                  {item.icon}
                </i>
                <h3 className="mb-5 text-heading03 font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-[120px] md:mt-40">
        <p className="mb-6 text-heading03 font-bold md:mb-20">來自合作夥伴</p>
        <ul className="mb-12 md:mb-40">
          <li key={1} className="bg-cover` h-10 w-full bg-enterpriseLine1" />
          <li key={2} className="bg-cover` h-10 w-full bg-enterpriseLine2" />
        </ul>
        <CommentsSwiper />
      </section>
      <Functions />
    </main>
  );
};
