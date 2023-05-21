import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav className='flex justify-between py-5'>
        <Link to='/'>
          <h1 className=' block overflow-hidden w-[147px] md:w-[244px] h-6 md:h-10 bg-logo indent-[101%] bg-contain bg-no-repeat'>
            AI 工具王
          </h1>
        </Link>
        <ul className='flex gap-5'>
          <li>
            <Link to='/2'>首頁</Link>
          </li>
          <li>
            <Link to=''>定價</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};
