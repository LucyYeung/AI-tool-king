import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="py-20">
        <Link to="/">
          <div className="mb-10 block h-6 w-[147px] bg-logo bg-contain bg-no-repeat md:mb-0 md:ml-auto md:h-10 md:w-[244px]"></div>
        </Link>
        <nav className="text-heading01 font-bold md:text-display03">
          <ul>
            <li>
              <Link to="/">首頁</Link>
            </li>
            <li>
              <Link to="/price">定價</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
      <div className="flex flex-wrap justify-between py-8 font-bold">
        <p className="md:mr-[100px]">AI工具王 © 2023</p>
        <ul className="order-1 mt-9 flex w-full gap-5 md:order-none md:mt-0 md:w-auto">
          <li>
            <Link to="">Facebook</Link>
          </li>
          <li>
            <Link to="">Twitter</Link>
          </li>
          <li>
            <Link to="">Instagram</Link>
          </li>
        </ul>
        <button
          type="button"
          className="ml-auto flex items-center gap-3"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <p>Back to top</p>
          <i className="material-icons text-icon-small">arrow_upward</i>
        </button>
      </div>
    </footer>
  );
}
