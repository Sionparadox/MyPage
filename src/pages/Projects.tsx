import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// 샘플 프로젝트 데이터
const projectsData = [
  {
    id: 1,
    title: '개인 블로그 웹사이트',
    date: '2023-07-20',
    tags: ['React', 'TypeScript', 'GitHub Pages'],
    content: `
# 개인 블로그 웹사이트

## 프로젝트 소개
GitHub Pages를 활용한 개인 블로그 웹사이트입니다. CS 공부 내용, 프로젝트, 코딩 테스트 문제 풀이를 정리하기 위해 개발했습니다.

## 사용 기술
- React
- TypeScript
- GitHub Pages
- React Router
- React Markdown

## 주요 기능
- 마크다운 형식의 글 작성 및 렌더링
- 카테고리별 글 분류
- 반응형 디자인

## 개발 과정
1. 프로젝트 기획 및 디자인
2. React 프로젝트 설정
3. 컴포넌트 구조 설계
4. 라우팅 구현
5. 마크다운 렌더링 기능 추가
6. GitHub Pages 배포
    `,
  },
  {
    id: 2,
    title: '할 일 관리 애플리케이션',
    date: '2023-04-05',
    tags: ['React', 'Redux', 'Firebase'],
    content: `
# 할 일 관리 애플리케이션

## 프로젝트 소개
사용자가 할 일을 추가, 수정, 삭제할 수 있는 웹 애플리케이션입니다. Firebase를 활용하여 사용자 인증 및 데이터 저장 기능을 구현했습니다.

## 사용 기술
- React
- Redux
- Firebase (Authentication, Firestore)
- Styled Components

## 주요 기능
- 사용자 회원가입 및 로그인
- 할 일 추가, 수정, 삭제
- 할 일 완료 여부 체크
- 카테고리별 할 일 분류
- 마감일 설정 및 알림

## 개발 과정
1. 요구사항 분석 및 기획
2. UI/UX 디자인
3. Firebase 프로젝트 설정
4. 사용자 인증 기능 구현
5. 할 일 CRUD 기능 구현
6. 상태 관리 로직 구현
7. 배포 및 테스트
    `,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [projects] = useState(projectsData);

  const handleProjectClick = (id: number) => {
    setSelectedProject(id);
  };

  const selectedProjectData = projects.find(
    (project) => project.id === selectedProject
  );

  return (
    <div className='container'>
      <h1 className='text-2xl font-bold text-primary mb-2'>프로젝트</h1>
      <p className='text-gray-600 mb-8'>
        진행했던 프로젝트들의 소개와 개발 과정을 정리한 글들입니다.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
        <div className='lg:col-span-1'>
          <div className='bg-white rounded-lg shadow-md p-4'>
            <h2 className='text-lg font-semibold text-primary mb-4'>
              프로젝트 목록
            </h2>
            <ul className='space-y-2'>
              {projects.map((project) => (
                <li
                  key={project.id}
                  className={`p-3 rounded cursor-pointer transition-colors ${
                    selectedProject === project.id
                      ? 'bg-blue-50 border-l-4 border-primary'
                      : 'hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                  onClick={() => handleProjectClick(project.id)}
                >
                  <h3 className='font-medium'>{project.title}</h3>
                  <div className='mt-1'>
                    <span className='text-sm text-gray-500'>
                      {project.date}
                    </span>
                    <div className='flex flex-wrap mt-1'>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className='text-xs bg-blue-50 text-primary px-2 py-1 rounded-full mr-1 mb-1'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='lg:col-span-3'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            {selectedProjectData ? (
              <div>
                <h2 className='text-xl font-bold text-primary mb-2'>
                  {selectedProjectData.title}
                </h2>
                <div className='mb-4'>
                  <span className='text-sm text-gray-500'>
                    {selectedProjectData.date}
                  </span>
                  <div className='flex flex-wrap mt-2'>
                    {selectedProjectData.tags.map((tag) => (
                      <span
                        key={tag}
                        className='text-xs bg-blue-50 text-primary px-2 py-1 rounded-full mr-1'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='markdown-content'>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {selectedProjectData.content}
                  </ReactMarkdown>
                </div>
              </div>
            ) : (
              <div className='flex justify-center items-center h-64 text-gray-500'>
                <p>왼쪽에서 프로젝트를 선택해주세요.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
