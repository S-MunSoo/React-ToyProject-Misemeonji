# React ToyProject Misemeonji


[데모](https://preeminent-biscuit-026a18.netlify.app/)

https://user-images.githubusercontent.com/102017296/185797181-07f5651e-d8fd-4ecd-abc1-a2729176dad4.mov

## 공공데이터를 활용한 미세먼지 알리미App

- 한국환경공단 : https://www.data.go.kr/data/15073861/openapi.do
- 리액트 토이프로젝트 이며, 툴킷과 썽크를 활용하여 제작 하였습니다
- 셀렉박스를 통해 해당 지역의 미세먼지 현황을 알려줍니다.

### 요구사항

- 미세먼지 정보를 표시하기 위한 카드 형태의 컴포넌트 제작
- 공공데이터 api 받아오기
- 카드 컴포넌트에 즐겨찾기 등록/해제를 위한 버튼을 만들고, 즐겨찾기 등록 여부에 따라 버튼의 형태가 달라지도록 제작
- 지역을 변경하기 위한 드롭다운 메뉴 형태의 컴포넌트 제작 (지역을 변경하면 화면에 표시되는 카드의 미세먼지 지역/수치 등의 정보도 변경에 지역에 맞추어서 달라져야함)
- 기본 지역 보기 / 전체 보기 / 즐겨찾기 지역 보기를 전환할 수 있도록 화면 하단에 탭 컴포넌트 제작
- 기본 지역 보기 / 전체 지역 보기 / 즐겨찾기 지역 보기 페이지 각각 구현
- react-redux를 활용해서 즐겨찾기 등록/해제 액션에 따라 즐겨찾기 데이터가 변경되도록 하고, 즐겨찾기 데이터는 어떤 컴포넌트에서든 불러올 수 있도록 제작
- redux-toolkit과 createAsyncThunk를 활용, 내 위치 및 즐겨찾기에 대한 상태를 전역적으로 관리 하였습니다.

### 사용기술

- React
- Redux-toolkit
- Sass
- tailwindcss

#### npm 프로젝트 구성요소

- Redux : yarn add react-redux
- Redux-toolkit : yarn add @reduxjs/toolkit
- 라우터 : yarn add react-router-dom@6
- Prettiter,Eslint : yarn add --dev prettier eslint-config-prettier
- Sass : yarn add node-sass
- tailwindcss
- axios : yarn add axios
- React-icon
