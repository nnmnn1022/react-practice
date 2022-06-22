# react-practice
react 기초

### script 언어
프로그램이 실행되는 런타임에 코드가 해석됨

컴파일 언어(JAVA, C)는 컴파일이라는 과정을 통해 소스 코드 해석 및 실행 가능한 형태로 변환

### ES6
ECMAScript2015, ES2015
자바스크립트 표준의 발판이 되기 때문에 사용

### 자료형 (Data Type)
일반적인 프로그래밍 언어 : 변수를 선언할 때 결정
Javascript : 변수에 데이터가 대입되는 순간 결정 (동적 타이핑, Dynamic Typing)

#### var, let, const
원래 js에서 사용하던 방식은 var 이지만 위 동적 타이핑의 특성으로 인해
코드가 많아질 경우 어떻게 쓰일지, 값이 바뀌지는 않을지 우려 사항이 있음.

위 이슈로 ES6에서 새로 나온 것이 `let`, `const` 이다.
let은 재할당이 가능하며, `const`는 재할당이 불가능
상수에는 `const`를 쓰고, 재할당이 필요한 변수에는 `let`을 사용
