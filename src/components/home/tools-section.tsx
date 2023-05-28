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
    <div className="top-4 w-full gap-6 lg:absolute lg:w-auto">
      <ul className="flex overflow-x-scroll">
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
          title: 'Chatbot Builder',
          description:
            '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
          model: '卡卡',
          tag: '聊天',
        },
        {
          title: 'Chatbot Builder',
          description:
            '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
          model: '卡卡',
          tag: '聊天',
        },
        {
          title: 'Chatbot Builder',
          description:
            '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
          model: '卡卡',
          tag: '聊天',
        },
        {
          title: 'Chatbot Builder',
          description:
            '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
          model: '卡卡',
          tag: '聊天',
        },
        {
          title: 'Chatbot Builder',
          description:
            '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
          model: '卡卡',
          tag: '聊天',
        },
      ].map((item, index) => (
        <li className="col-span-1 rounded-2xl border border-black-20">
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
  const [selectedTag, setSelectedTag] = useState('全部');

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
        />
      </div>
      <div className="relative grid w-full grid-cols-1 place-items-center">
        <div className="col-span-1 flex w-full justify-between">
          <button
            type="button"
            className="flex gap-3 rounded-2xl border border-black-20 px-10 py-5"
          >
            <span className="">篩選</span>
            <i className="material-icons text-icon-medium">filter_alt</i>
          </button>
          <select
            name="select"
            id="select"
            className="rounded-2xl border border-black-20 px-10 py-5"
          >
            <option value="由新到舊">由新到舊</option>
            <option value="由舊到新">由舊到新</option>
          </select>
        </div>
        <TagList selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <ToolCard />
      </div>
    </section>
  );
};
