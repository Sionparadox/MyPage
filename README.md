# 개발 블로그

GitHub Pages로 배포된 개인 개발 블로그입니다. CS 공부 내용, 프로젝트, 코딩 테스트 문제 풀이를 정리하는 공간입니다.

## 기능

- **CS 공부**: 컴퓨터 과학 관련 공부 내용을 정리한 글들을 확인할 수 있습니다.
- **프로젝트**: 진행했던 프로젝트들의 소개와 개발 과정을 확인할 수 있습니다.
- **코딩 테스트**: 알고리즘 문제 풀이와 코딩 테스트 준비 자료를 확인할 수 있습니다.

## 기술 스택

- React
- TypeScript
- React Router (HashRouter)
- React Markdown
- GitHub Pages

## 로컬에서 실행하기

```bash
# 저장소 클론
git clone https://github.com/yourusername/MyPage.git
cd MyPage

# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev
```

## 배포하기

이 프로젝트는 GitHub Actions를 사용하여 GitHub Pages에 자동으로 배포됩니다. `main` 브랜치에 변경 사항을 푸시하면 자동으로 배포 워크플로우가 실행됩니다.

수동으로 배포하려면:

```bash
# 빌드
yarn build

# GitHub Pages에 배포 (gh-pages 패키지가 필요합니다)
yarn add --dev gh-pages
yarn deploy
```

## 프로젝트 구조

```
/
├── .github/workflows/   # GitHub Actions 워크플로우
├── public/              # 정적 파일
├── src/
│   ├── components/      # 재사용 가능한 컴포넌트
│   ├── pages/           # 페이지 컴포넌트
│   ├── data/            # 블로그 데이터
│   ├── assets/          # 이미지, 폰트 등
│   ├── App.tsx          # 메인 앱 컴포넌트
│   └── main.tsx         # 진입점
└── package.json         # 프로젝트 의존성 및 스크립트
```

## 라이센스

MIT

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
