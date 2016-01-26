[![js-semistandard-style](https://cdn.rawgit.com/flet/semistandard/master/badge.svg)](https://github.com/Flet/semistandard)

# RSupport React 스터디
- [React](https://facebook.github.io/react/index.html) - A JavaScript library for building user interfaces
- [Electron](http://electron.atom.io/) - Build cross platform desktop apps with web technologies
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) - A mostly reasonable approach to JavaScript
- [JavaScript Standard Style](https://github.com/feross/standard) - One Style to Rule Them All
- [Babel.js](http://babeljs.io/) - Use next generation JavaScript, today.
- [Jest](https://facebook.github.io/jest/) - Painless JavaScript Unit Testing
- [ESLint](http://eslint.org/) - ES6 코딩 스타일 가이드
- [React and ES6](http://egorsmirnov.me/2015/05/22/react-and-es6-part1.html) - [블로그] The usage of React with ECMAScript6
- [React 개요](https://getpocket.com/a/read/995038855) - [블로그] React를 이해하다
- [React Unit Test](https://taegon.kim/archives/5327) - [블로그] React 컴포넌트를 테스트하는 세 가지 방법

## Part 1, 개발 환경 구성 및 프로젝트 생성
- 아톰 설치 - [atom.io](https://atom.io/)
- 노드 설치 - [nodejs.org](https://nodejs.org/en/)
- 파일 구성 및 `package.json` 작성
- 모듈 설치 - `npm install`
- 개발 환경 작동 확인 및 React 컴포넌트 맛보기

## Part 2, ES6 문법과 [React 기본 속성](http://reactkr.github.io/react/docs/component-api-ko-KR.html)
- JSX 이해하기 - [JSX](https://facebook.github.io/react/docs/displaying-data.html)
- ES6 Class 문법
- [React State](http://reactkr.github.io/react/docs/interactivity-and-dynamic-uis-ko-KR.html) 개념
- [React Props](http://reactkr.github.io/react/docs/transferring-props-ko-KR.html) 개념
- [React Refs](http://reactkr.github.io/react/docs/more-about-refs-ko-KR.html) 개념

## Part 3, ES6 문법과 [React 생명주기 메소드](http://reactkr.github.io/react/docs/component-specs-ko-KR.html)
- 추가적인(Optional) 속성들:
    - Statics: 정적 메소드 제공
    - [propTypes](http://reactkr.github.io/react/docs/reusable-components-ko-KR.html): 자체적 Unit 테스트 수행 ES6에서는 사용법이 조금 다름
    - defaultProps: 컴포넌트의 기본 프로퍼티
    - Context: 실험적 고급기능, 전역 변수와 같은 기능, 데이터 흐름을 파악하기 함들어
    - Event Handling: 상호 작용에 대한 이해
- ES6 개발 환경 구성 - [React on ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/)
- ES6 코딩 스타일 가이드 및 환경 구성- [ESLint](http://eslint.org/)
- ES6 Import 문법 사용
- ES6 스프레드 어트리뷰트(`…`) 문법 사용

## Part 4, ES6 문법과 React 응용
### jQuery또는 기존 앱에서 마이그레이션
- DOM event를 DOMd에 직접 바인딩 할 필요 없다. 컴포넌트 Handler 사용
- DOM 선택자 사용할 필요 없다. Virtual DOM 사용
- DOM 스토리지에 의존할 필요가 없다. Props 사용
- show/hide와 같은 상태성 코드를 작성할 필요없다. State 사용
- 컴포넌트의 속성 이름에 (`_`)를 이용하여 Private으로 구분할 필요가 없음, 자체적으로 Private으로 취급함
- 생명주기 메소드는 기존의 UI스크립트와 융합하기 좋은 장소
- HTML 코드를 자바스크립트로 직접 만들어 낼 필요가 없다. Render에 의해 자동화
- 기존 HTML 및 CSS를 Virtual DOM으로 작성하는 습관이 필요함

### React 암묵적 규칙
- React의 Form에 대하여
- Render는 하나의 요소만 반환
- 생명주기 메소드 순서 암기
- React는 state 머신이다
- `props`는 컴포넌트의 데이터이며 부모에 의해 관리된다
- 자식 컴포넌트는 부모의 그 어떠한 것에도 접근 할 수 없다.
- 컴포넌트는 렌더에 정의된 계층에의해 소유관계가 형성된다.
- `state`와 `props`를 잘못 구분해서 사용하면 성능에 큰 영향을 주기 때문에 신중하게 판단
- `state`는 자신이 스스로 값을 변경할 수 있지만, 부모에서 `refs` 속성으로 접근하여 변경할 수도 있다.
- `state`나 `props`가 변경되면 `render` 메소드가 자동으로 호출됨
- ES6과 JSX의 호환성이 좋다. 특히 ES7의 Decorator와 잘 어울린다.
- React 컴포넌트는 우리가 일반적으로 생각하는 클래스와 다름
- React 컴포넌트는 자식들간에 통신할 수 없으며 부모를 통해서만 통신
- `mixins` 기능을 제공하지만 이것은 단순히 공통 메소더를 공유하려는 목적일 뿐
- React 코드를 읽을 때 완벽한 ES6 환경에서 작성된 것인지, 브라우저에서 구현된 ES2015단계에서 작성된 인지, ES5로 작성된 것인지를 인지할 수 있어야 함

### React 생명주기 메소드
- `componentWillMount` - 최초 렌더링이 일어나기 직전에 클라이언트 및 서버에서 한번 호출, ES6에서는 `constructor`에서 처리
- `componentDidMount` - 최초 렌더링이 일어난 다음 클라이언트에서만 한번 호출
- `componentWillReceiveProps` - 컴포넌트가 새로운 `props`를 받을 때 호출, 이 메소드는 최초 렌더링 시에는 호출되지 않음
- `shouldComponentUpdate` - 새로운 `props` 또는 `state`를 받아 렌더링을 하기 전에 호출
- `componentWillUpdate` - 새로운 `props`나 `state`를 받았을 때 렌더링 직전에 호출, 최초 렌더링 시에는 호출되지 않음
- `componentDidUpdate` - 컴포넌트의 업데이트가 DOM에 반영된 직후에 호출, 최초 렌더링 시에는 호출되지 않음
- `componentWillUnmount` - 컴포넌트가 DOM에서 마운트 해제 되기 직전에 호출

## Next... 릴리즈 환경 구성
- ES6 Lint를 통해 배우는 코드 스타일
- Jest를 이용한 유닛 테스트 환경 구성
- Webpack을 이용한 빌드 및 개발 환경 설정
