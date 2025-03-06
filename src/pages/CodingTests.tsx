import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// 샘플 코딩 테스트 데이터
const codingTestsData = [
  {
    id: 1,
    title: '두 수의 합 찾기',
    difficulty: '쉬움',
    category: '배열',
    date: '2023-08-15',
    content: `
# 두 수의 합 찾기

## 문제 설명
정수 배열 nums와 정수 target이 주어졌을 때, nums에서 두 수를 더해 target이 되는 두 수의 인덱스를 반환하세요.

각 입력에 정확히 하나의 해가 있다고 가정하며, 같은 요소를 두 번 사용할 수 없습니다.

## 예시
\`\`\`
입력: nums = [2, 7, 11, 15], target = 9
출력: [0, 1]
설명: nums[0] + nums[1] = 2 + 7 = 9이므로, [0, 1]을 반환합니다.
\`\`\`

## 풀이
\`\`\`typescript
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}
\`\`\`

## 시간 복잡도
- 시간 복잡도: O(n)
- 공간 복잡도: O(n)

## 설명
해시 맵을 사용하여 각 숫자와 그 인덱스를 저장합니다. 배열을 순회하면서 현재 숫자와 더해서 target이 되는 숫자(complement)가 맵에 있는지 확인합니다. 있다면 해당 인덱스와 현재 인덱스를 반환하고, 없다면 현재 숫자와 인덱스를 맵에 저장합니다.
    `,
  },
  {
    id: 2,
    title: '유효한 괄호',
    difficulty: '중간',
    category: '스택',
    date: '2023-09-10',
    content: `
# 유효한 괄호

## 문제 설명
문자열 s가 주어졌을 때, 괄호가 유효한지 확인하세요.

유효한 괄호의 조건:
1. 열린 괄호는 같은 종류의 괄호로 닫혀야 합니다.
2. 열린 괄호는 올바른 순서로 닫혀야 합니다.

## 예시
\`\`\`
입력: s = "()"
출력: true

입력: s = "()[]{}"
출력: true

입력: s = "(]"
출력: false
\`\`\`

## 풀이
\`\`\`typescript
function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (top !== map[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
\`\`\`

## 시간 복잡도
- 시간 복잡도: O(n)
- 공간 복잡도: O(n)

## 설명
스택을 사용하여 열린 괄호를 저장합니다. 문자열을 순회하면서 열린 괄호를 만나면 스택에 푸시하고, 닫힌 괄호를 만나면 스택에서 팝하여 짝이 맞는지 확인합니다. 모든 문자를 처리한 후 스택이 비어있다면 모든 괄호가 올바르게 짝지어진 것입니다.
    `,
  },
];

const CodingTests = () => {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);
  const [problems] = useState(codingTestsData);
  const [filter, setFilter] = useState<string>('all');

  const handleProblemClick = (id: number) => {
    setSelectedProblem(id);
  };

  const filteredProblems =
    filter === 'all'
      ? problems
      : problems.filter(
          (problem) =>
            problem.category === filter || problem.difficulty === filter
        );

  const selectedProblemData = problems.find(
    (problem) => problem.id === selectedProblem
  );

  return (
    <div className='container'>
      <h1 className='text-2xl font-bold text-primary mb-2'>코딩 테스트</h1>
      <p className='text-gray-600 mb-4'>
        알고리즘 문제 풀이와 코딩 테스트 준비 자료입니다.
      </p>

      <div className='flex flex-wrap gap-2 mb-8'>
        <button
          className={`px-3 py-1 rounded-md transition-colors ${
            filter === 'all'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => setFilter('all')}
        >
          전체
        </button>
        <button
          className={`px-3 py-1 rounded-md transition-colors ${
            filter === '쉬움'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => setFilter('쉬움')}
        >
          쉬움
        </button>
        <button
          className={`px-3 py-1 rounded-md transition-colors ${
            filter === '중간'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => setFilter('중간')}
        >
          중간
        </button>
        <button
          className={`px-3 py-1 rounded-md transition-colors ${
            filter === '배열'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => setFilter('배열')}
        >
          배열
        </button>
        <button
          className={`px-3 py-1 rounded-md transition-colors ${
            filter === '스택'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => setFilter('스택')}
        >
          스택
        </button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
        <div className='lg:col-span-1'>
          <div className='bg-white rounded-lg shadow-md p-4'>
            <h2 className='text-lg font-semibold text-primary mb-4'>
              문제 목록
            </h2>
            <ul className='space-y-2'>
              {filteredProblems.map((problem) => (
                <li
                  key={problem.id}
                  className={`p-3 rounded cursor-pointer transition-colors ${
                    selectedProblem === problem.id
                      ? 'bg-blue-50 border-l-4 border-primary'
                      : 'hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                  onClick={() => handleProblemClick(problem.id)}
                >
                  <h3 className='font-medium'>{problem.title}</h3>
                  <div className='flex flex-wrap mt-1 gap-1'>
                    <span className='text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full'>
                      {problem.difficulty}
                    </span>
                    <span className='text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full'>
                      {problem.category}
                    </span>
                    <span className='text-xs text-gray-500'>
                      {problem.date}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='lg:col-span-3'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            {selectedProblemData ? (
              <div>
                <h2 className='text-xl font-bold text-primary mb-2'>
                  {selectedProblemData.title}
                </h2>
                <div className='flex flex-wrap gap-2 mb-6'>
                  <span className='text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full'>
                    {selectedProblemData.difficulty}
                  </span>
                  <span className='text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full'>
                    {selectedProblemData.category}
                  </span>
                  <span className='text-xs text-gray-500'>
                    {selectedProblemData.date}
                  </span>
                </div>
                <div className='markdown-content'>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {selectedProblemData.content}
                  </ReactMarkdown>
                </div>
              </div>
            ) : (
              <div className='flex justify-center items-center h-64 text-gray-500'>
                <p>왼쪽에서 문제를 선택해주세요.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingTests;
