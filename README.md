![Simple Thumbnail](https://user-images.githubusercontent.com/76866137/221538427-c0b8389c-b005-426c-a1b4-619d3de3b4a7.png)

🎨 3초만에 만드는 나만의 썸네일  
https://simple-thumbnail.com

> 이 서비스는 테오의 **스프린트 14기** 활동에서 만들어졌어요.  
> 스프린트 진행 과정을 자세히 볼 수 있어요. 👉🏻 [2023 스프린트 문서](./README.archive-2023.md)

<br/>

## 📌 주요 기능

빠르고 간단하게 썸네일을 만들고, 이미지로 저장할 수 있는 웹 앱입니다.

- **배경**: 단색/그라데이션, 이미지(업로드), Unsplash 랜덤 이미지
- **비율**: `1:1`, `4:3`, `16:9`
- **텍스트**: 레이아웃 선택, 폰트/두께/색상 설정
- **다운로드**: 미리보기 영역을 이미지로 저장
- **반응형**: Mobile / Tablet / Desktop 대응

<br />

## 🧱 기술 스택

- **React + TypeScript**
- **Vite**
- **Tailwind CSS**
- **Recoil**
- **ESLint / Prettier**

<br />

## 🚀 로컬 실행

```bash
npm install
npm run dev
```

- 기본 포트: `http://localhost:3000`

<br />

## 🏗️ 빌드 / 프리뷰 / 린트

```bash
npm run build
npm run preview
npm run lint
```

<br />

## 🌍 배포 메모 (옵션)

이 프로젝트는 빌드 결과물이 `dist/`에 생성되며, `wrangler.jsonc`에는 `dist`를 정적 에셋으로 서빙(SPA)하는 설정이 포함되어 있습니다.

- **빌드**: `npm run build`
- **배포**: `wrangler`를 사용하는 환경이라면 `wrangler deploy`로 배포할 수 있습니다.
