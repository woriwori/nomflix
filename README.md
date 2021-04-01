# Nomflix

## Screens

- [ ] Home
- [ ] TV Shows
  - 목록
- [ ] Search
  - 영화, TV Show 검색
- [ ] Detail
  - 영화, TV Show의 상세 정보

## 강의 메모

- React Router

  - React Native, DOM 에서도 사용 가능
  - Router, Route 생성
  - BrowserRouter vs HashRouter
    - BrowserRouter : History API 사용
    - HashRouter : browser hash를 사용
    - 참고 링크 : https://happy-coding-day.tistory.com/128

- CSS

  - `*.module.css`로 사용하면 개발자도구로 봤을 때 클래스 이름 뒤에 random한 텍스트가 붙음
    - `navList-blahblah..`
  - `styled-components`를 사용하면 `sc-blahblah..`
  - `styled-reset`
    - `styled-components`가 설치되어있어야 한다.
    - 브라우저 별로 디폴트 css가 있기 때문에 브라우저 환경과 상관없이 동일하게 보여지기 위해서 css를 reset해야한다.
      - 참고 링크 : https://wonit.tistory.com/295?category=794664
    - styled-components는 기본적으로 로컬하게 동작하기 때문에 styled-components의 `createGlobalStyle`을 사용해서 전역적으로 css를 reset할 것이다.

- withRouter
  - `withRouter`로 감싸면 props에 router 관련 정보들이 넘어온다.
