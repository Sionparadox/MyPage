import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className='bg-primary text-white py-16 mb-12 text-center'>
        <div className='container'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>
            안녕하세요, 개발 블로그에 오신 것을 환영합니다!
          </h1>
          <p className='text-lg max-w-3xl mx-auto'>
            이 블로그는 CS 공부, 프로젝트, 코딩 테스트 문제 풀이를 정리하는
            공간입니다.
          </p>
        </div>
      </section>

      <section className='mb-12'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg'>
              <h2 className='text-xl font-bold text-primary mb-3'>CS 공부</h2>
              <p className='text-gray-600 mb-4'>
                컴퓨터 과학 관련 공부 내용을 정리한 글들을 확인하세요.
              </p>
              <Link to='/cs-study' className='btn'>
                자세히 보기
              </Link>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg'>
              <h2 className='text-xl font-bold text-primary mb-3'>프로젝트</h2>
              <p className='text-gray-600 mb-4'>
                진행했던 프로젝트들의 소개와 개발 과정을 확인하세요.
              </p>
              <Link to='/projects' className='btn'>
                자세히 보기
              </Link>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg'>
              <h2 className='text-xl font-bold text-primary mb-3'>
                코딩 테스트
              </h2>
              <p className='text-gray-600 mb-4'>
                알고리즘 문제 풀이와 코딩 테스트 준비 자료를 확인하세요.
              </p>
              <Link to='/coding-tests' className='btn'>
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
