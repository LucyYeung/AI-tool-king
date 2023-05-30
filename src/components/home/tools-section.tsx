import { useState } from 'react';
import { Link } from 'react-router-dom';

import { register } from 'swiper/element';

register();

type TagListProps = {
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
};

const TagList = ({ selectedTag, setSelectedTag }: TagListProps) => {
  return (
    <div className="order-2 mt-4 w-full gap-6 lg:order-none lg:mt-0 lg:w-auto">
      <ul className="flex overflow-x-scroll scrollbar-hide">
        {['全部', '聊天', '影像辨識', '翻譯', '行銷', '客服', '生產力'].map(
          (tag) => (
            <li key={tag} className="whitespace-nowrap">
              <button
                onClick={() => setSelectedTag(tag)}
                className={`rounded-2xl px-4 py-2 ${
                  tag === selectedTag
                    ? 'bg-black-20 text-black'
                    : 'bg-none text-black-60'
                }`}
              >
                {tag}
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

const ToolCard = () => {
  return (
    <ul className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
      {[
        {
          title: 'Chatbot Builder',
          description:
            '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
          model: '卡卡',
          tag: '聊天',
        },
        {
          title: 'Image Recognition Platform',
          description: '專業的圖像識別平台，識別圖像、分類、標記等。',
          model: '杰杰',
          tag: '影像辨識',
        },
        {
          title: 'Language Translation API',
          description:
            '專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。',
          model: '琪琪',
          tag: '翻譯',
        },
        {
          title: 'Sentiment Analysis API',
          description:
            '自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。',
          model: '昊昊',
          tag: '行銷',
        },
        {
          title: 'Fraud Detection Platform',
          description: '預防詐騙活動，適用於銀行、金融、電商等。',
          model: '卡卡',
          tag: '客服',
        },
        {
          title: 'Voice Assistant SDK',
          description:
            '通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。',
          model: '杰杰',
          tag: '生產力',
        },
      ].map((item, index) => (
        <li
          key={index}
          className="col-span-1 rounded-2xl border border-black-20"
        >
          <Link to="">
            <div className="group">
              <div className="overflow-clip rounded-2xl">
                <img
                  src={`tool${index + 1}.png`}
                  alt={item.title}
                  className="w-full rounded-t-2xl duration-700 group-hover:scale-105 group-hover:transform"
                />
              </div>
              <div className="border-b border-black-20 px-8 py-5">
                <h3 className="mb-3 font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="flex justify-between border-b border-black-20 px-8 py-5">
                <p className="font-bold">AI 模型</p>
                <p>{item.model}</p>
              </div>
              <div className="flex justify-between px-8 py-5">
                <p>{`#${item.tag}`}</p>
                <i className="material-icons text-icon-small">share</i>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const ToolsSection = () => {
  const [sort, setSort] = useState(0);
  const [page, setPage] = useState(1);
  const [type, setType] = useState('全部');
  const [search, setSearch] = useState('');

  return (
    <section className="mt-[120px] grid grid-cols-1 rounded-2xl bg-white px-3 py-20 text-black md:mt-40">
      <p className="mb-8 text-center text-heading03 font-bold xl:mb-20 xl:text-display03">
        這些超酷的應用， 都來自 AI工具王
      </p>
      <div className="mb-4 flex h-16 w-full items-center justify-between gap-3 rounded-2xl bg-black-20 px-5 py-3 text-black-60 md:px-10 md:py-5">
        <i className="material-icons text-icon-medium">search</i>
        <input
          className="h-full w-full bg-black-20 outline-none"
          placeholder="輸入關鍵字搜尋"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mb-8 grid w-full grid-cols-1 place-items-center md:mb-10">
        <div className="col-span-1 flex w-full flex-wrap items-center justify-between">
          <button
            type="button"
            className="flex gap-3 rounded-2xl border border-black-20 px-10 py-5"
          >
            <span className="">篩選</span>
            <i className="material-icons text-icon-medium">filter_alt</i>
          </button>
          <TagList selectedTag={type} setSelectedTag={setType} />
          <select
            name="select"
            id="select"
            className="rounded-2xl border border-black-20 px-10 py-5"
            value={sort == 0 ? '由新到舊' : '由舊到新'}
            onChange={(e) => setSort(e.target.value === '由新到舊' ? 0 : 1)}
          >
            {['由新到舊', '由舊到新'].map((option) => (
              <option key={option} value="由新到舊">
                {option}
              </option>
            ))}
          </select>
        </div>
        <ToolCard />
      </div>
      <ul className="ml-auto flex gap-1">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              <button
                type="button"
                className={`h-12 w-12 ${
                  page === index + 1
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                } rounded-2xl`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}{' '}
      </ul>
    </section>
  );
};
