import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-5 font-bold">
        <Link to="/">
          <h1 className="block h-6 w-[147px] overflow-hidden whitespace-nowrap bg-logo bg-contain bg-no-repeat indent-[101%] md:h-10 md:w-[244px]">
            AI 工具王
          </h1>
        </Link>
        <ul className="flex gap-5">
          <li key="home">
            <Link to="/">首頁</Link>
          </li>
          <li key="price">
            <Link to="/price">定價</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};
