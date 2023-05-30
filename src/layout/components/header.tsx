import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="container fixed left-1/2 top-0 z-10 w-full -translate-x-1/2 bg-black">
      <div className="flex items-center justify-between py-5 font-bold">
        <Link to="/">
          <h1 className="block h-6 w-[147px] overflow-hidden whitespace-nowrap bg-logo bg-contain bg-no-repeat indent-[101%] md:h-10 md:w-[244px]">
            AI 工具王
          </h1>
        </Link>
        <ul className="hidden gap-5 md:flex">
          <li key="home">
            <Link to="/">首頁</Link>
          </li>
          <li key="price">
            <Link to="/price">定價</Link>
          </li>
        </ul>
        <button
          className="h-6 w-6 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <i className="material-icons">{isMenuOpen ? 'close' : 'menu'}</i>
        </button>
      </div>
      <hr />
      {isMenuOpen && (
        <div className="h-screen w-full bg-black">
          <div className="flex h-full flex-col items-center justify-center">
            <ul className="flex flex-col gap-5 text-display03 font-bold">
              <li key="home">
                <Link to="/">首頁</Link>
              </li>
              <li key="price">
                <Link to="/price">定價</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
