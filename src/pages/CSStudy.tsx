import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// 샘플 CS 공부 데이터
const csStudyData = [
  {
    id: 1,
    title: '자료구조: 배열과 연결 리스트',
    date: '2023-05-15',
    content: `
# 배열과 연결 리스트

## 배열(Array)
배열은 메모리 상에 연속적으로 데이터를 저장하는 자료구조입니다.

### 특징
- 인덱스를 통한 빠른 접근(O(1))
- 크기가 고정되어 있음
- 삽입/삭제 연산이 비효율적(O(n))

## 연결 리스트(Linked List)
연결 리스트는 각 노드가 데이터와 포인터를 가지고 한 줄로 연결되어 있는 자료구조입니다.

### 특징
- 동적 크기 조정 가능
- 삽입/삭제 연산이 효율적(O(1))
- 임의 접근이 불가능(O(n))
    `,
  },
  {
    id: 2,
    title: '운영체제: 프로세스와 스레드',
    date: '2023-06-10',
    content: `
# 프로세스와 스레드

## 프로세스(Process)
프로세스는 실행 중인 프로그램의 인스턴스입니다.

### 특징
- 독립된 메모리 공간
- 다른 프로세스와 자원 공유 불가
- 프로세스 간 통신(IPC)을 통해 통신

## 스레드(Thread)
스레드는 프로세스 내에서 실행되는 흐름의 단위입니다.

### 특징
- 프로세스 내의 자원 공유
- 스레드 간 통신이 쉬움
- 동시성 문제 발생 가능
    `,
  },
];

const CSStudy = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [posts] = useState(csStudyData);

  const handlePostClick = (id: number) => {
    setSelectedPost(id);
  };

  const selectedPostData = posts.find((post) => post.id === selectedPost);

  return (
    <div className='container'>
      <h1 className='text-2xl font-bold text-primary mb-2'>CS 공부</h1>
      <p className='text-gray-600 mb-8'>
        컴퓨터 과학 관련 공부 내용을 정리한 글들입니다.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
        <div className='lg:col-span-1'>
          <div className='bg-white rounded-lg shadow-md p-4'>
            <h2 className='text-lg font-semibold text-primary mb-4'>글 목록</h2>
            <ul className='space-y-2'>
              {posts.map((post) => (
                <li
                  key={post.id}
                  className={`p-3 rounded cursor-pointer transition-colors ${
                    selectedPost === post.id
                      ? 'bg-blue-50 border-l-4 border-primary'
                      : 'hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                  onClick={() => handlePostClick(post.id)}
                >
                  <h3 className='font-medium'>{post.title}</h3>
                  <span className='text-sm text-gray-500'>{post.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='lg:col-span-3'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            {selectedPostData ? (
              <div>
                <h2 className='text-xl font-bold text-primary mb-2'>
                  {selectedPostData.title}
                </h2>
                <div className='text-sm text-gray-500 mb-6'>
                  {selectedPostData.date}
                </div>
                <div className='markdown-content'>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {selectedPostData.content}
                  </ReactMarkdown>
                </div>
              </div>
            ) : (
              <div className='flex justify-center items-center h-64 text-gray-500'>
                <p>왼쪽에서 글을 선택해주세요.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSStudy;
