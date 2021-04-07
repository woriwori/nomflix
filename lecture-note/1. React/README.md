
### React Router
- React Native, DOM 에서도 사용 가능
- Router, Route 생성
- BrowserRouter vs HashRouter
    - BrowserRouter : History API 사용
    - HashRouter : browser hash를 사용
    - 참고 링크 : https://happy-coding-day.tistory.com/128
- Route에 설정한 컴포넌트에서는 `this.props`로 `location`, `match` 등의 라우팅 정보에 접근할 수 있다.

### CSS
- `*.module.css`로 사용하면 개발자도구로 봤을 때 클래스 이름 뒤에 random한 텍스트가 붙음
    - `navList-blahblah..`
- `styled-components`를 사용하면 `sc-blahblah..`
- `styled-reset`
    - `styled-components`가 설치되어있어야 한다.
    - 브라우저 별로 디폴트 css가 있기 때문에 브라우저 환경과 상관없이 동일하게 보여지기 위해서 css를 reset해야한다.
        - 참고 링크 : https://wonit.tistory.com/295?category=794664
    - styled-components는 기본적으로 로컬하게 동작하기 때문에 styled-components의 `createGlobalStyle`을 사용해서 전역적으로 css를 reset할 것이다.

### withRouter
- `withRouter`로 감싸면 props에 router 관련 정보들이 넘어온다.

### API 연동
- API 키 : fda3e97aacb5071d7149afd44d3d13d0
    - https://www.themoviedb.org/settings/api

### axios
- `axios.create({}).get('tv/popular')`
    - `/tv/popular` 처럼 하면 절대경로로 접근하는거고 그럴 경우 baseURL을 절대경로(`/tv/popular`)가 덮어씌운다.
    - 항상 상대경로(`tv/popular`)를 사용해야한다.
      (1) / (Homepage) https://api.coinpaprika.com/v1/tickers
      (2) /exchanges https://api.coinpaprika.com/v1/exchanges
      (3) /coins https://api.coinpaprika.com/v1/coins
      Homepage: Show the name of the coin, the symbol and price.
      Exchanges: Show the name of the exchange, description and website link.
      Coins: List the coins and sort them by rank.
