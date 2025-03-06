import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='container flex justify-between items-center h-16'>
        <h1 className='text-xl font-bold'>
          <Link
            to='/'
            className='text-primary hover:text-primary-dark transition-colors'
          >
            개발 블로그
          </Link>
        </h1>
        <nav>
          <ul className='flex space-x-6'>
            <li>
              <Link
                to='/'
                className='text-gray-700 hover:text-primary hover:bg-blue-50 px-3 py-2 rounded-md transition-colors'
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                to='/cs-study'
                className='text-gray-700 hover:text-primary hover:bg-blue-50 px-3 py-2 rounded-md transition-colors'
              >
                CS 공부
              </Link>
            </li>
            <li>
              <Link
                to='/projects'
                className='text-gray-700 hover:text-primary hover:bg-blue-50 px-3 py-2 rounded-md transition-colors'
              >
                프로젝트
              </Link>
            </li>
            <li>
              <Link
                to='/coding-tests'
                className='text-gray-700 hover:text-primary hover:bg-blue-50 px-3 py-2 rounded-md transition-colors'
              >
                코딩 테스트
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
