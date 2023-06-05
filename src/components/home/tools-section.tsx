import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { register } from 'swiper/element';
import { AIWorks, Work } from '../../types/work';

register();

type TagListProps = {
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
};

const TagList = ({ selectedTag, setSelectedTag }: TagListProps) => {
  return (
    <div className="order-2 mt-4 w-full gap-6 xl:order-none xl:mt-0 xl:w-auto">
      <ul className="flex overflow-x-scroll scrollbar-hide">
        {[
          '全部',
          '問答服務',
          '虛擬客服',
          '生活應用',
          '程式知識',
          '翻譯助手',
          '行銷文案',
        ].map((tag) => (
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
        ))}
      </ul>
    </div>
  );
};

const ToolCards = ({ data }: { data: Work[] }) => {
  return (
    <ul className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <li
          key={index}
          className="col-span-1 rounded-2xl border border-black-20"
        >
          <Link to={item.link}>
            <div className="group">
              <div className="overflow-clip rounded-2xl">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full rounded-t-2xl duration-700 group-hover:scale-105 group-hover:transform"
                />
              </div>
              <div className="border-b border-black-20 px-8 py-5">
                <h3 className="mb-3 font-bold">{item.title}</h3>
                <p className="h-[72px]">{item.description}</p>
              </div>
              <div className="flex justify-between border-b border-black-20 px-8 py-5">
                <p className="font-bold">AI 模型</p>
                <p>{item.model}</p>
              </div>
              <div className="flex justify-between px-8 py-5">
                <p>{`#${item.type}`}</p>
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
  const [aiWorks, setAIWorks] = useState<AIWorks | null>(null);

  const apiPath = 'https://2023-engineer-camp.zeabur.app/api/v1/works';
  const getTools = useCallback(async () => {
    try {
      const { ai_works } = (
        await axios.get(
          ` ${apiPath}?sort=${sort}&page=${page}&${
            type !== '全部' ? `type=${type}&` : ''
          }${search ? `search=${search}` : ''}`
        )
      ).data;
      setAIWorks(ai_works);
    } catch (error) {
      console.log(error);
    }
  }, [sort, page, type, search]);

  useEffect(() => {
    getTools();
  }, [getTools]);

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
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <ToolCards data={aiWorks?.data ?? []} />
      </div>
      <ul className="ml-auto flex gap-1">
        {Array(aiWorks?.page.total_pages)
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
