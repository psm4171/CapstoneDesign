# CapstoneDesign

##리액트 게시판 개발 중 사용한 라이브러리 

Redux란?
리덕스는 가장 사용률이 높은 상태관리 라이브러리로써
리액트의 복잡한 컴포넌트 구조속에서 보다 간편하게
모든 컴포넌트들이 state 를 쉽게 공유할 수 있게 해주는 방식
예를 들어, A->B->C->D에서 역으로 D->C->B->A 순이 아닌
D->Store->A 순으로 효율적 접근이 가능  
즉, 여러 컴포넌트를 거치지 않고 손쉽게 State를 전달하기 위해 혹은 분리해서 중앙화하기 위해 Redux를 사용

## Redux 라이브러리 내장 요소 

-action: state 에 어떤 변화가 필요할 때 우린 액션이란 것을 발생시키며 이는 하나의 객체
단어 그대로 어떤 동작에 대해 선언되어진 객체

-action creator:  Action 을 생성해 실제로 객체로 만들어주는 함수

-reducer: State 에 변화를 일으키는 함수. 쉽게 말해 위에 만들어진 Action 등의 일거리를 
직접 수행하는 역할 

-store: State 와 Reducer 함수, 앱의 상태 트리 전체를 보관하는 Redux 저장소

 State 를 수시로 확인해 View 한테 변경된 사항을 알려주는 역할 

-dispatch: 스토어의 내장 함수 중 하나로 리듀서에게 Action 을 발생하라고 시키는 것
 스토어가 리듀서 함수를 실행해 리듀서 함수가 넘긴 액션을 처리해 새로운 상태를 만들어 줌
dispatch(action)
 
-subscribe: 구독, 스토어의 내장 함수 중 하나로 함수 형태의 값을 인자로 받는데,
액션이 디스패치 될 때 마다 전달해준 함수를 호출


## Redux-Persist 사용하여 Store 유지하기

-npm i redux-persist

머무르고 있는 페이지에서, useSelector로 store 상태만 가져와 사용하여 개발하던 도중, 새로 고침하면 기존의 store가 초기화되는 문제를 겪음

해결 방법으로 LocalStorage와 SessionStorage의 storage를 redux에서 사용하게 해주는 Redux-Persist 라이브러리를 사용하여 해결

JWT: JSON Web Token의 약자로 전자 서명된 URL-safe의 JSON
JWT는 로그인, 회원가입같이 인증이 필요한 정보를 검증할 때 사용되는 토큰
로그인을 하고, 로그인 정보가 맞다면,
우리가 deconstruct한 token이
'jwtToken'이라는 key로 local storage에 저장됨


-게시판 페이지와 내 게시물 페이지에서 하나를 선택해서 클릭했을 때 
해당 글의 상세 보기 페이지로 이동
-상세보기 페이지에는 작성자, 작성일자, 제목, 내용, 수정, 삭제 버튼이 포함
-로그인을 한 사용자의 jwt-token에서 user의 ID를 추출한 후, board(해당 글)의 작성자(user의 id)를 비교했을 때 같으면 수정, 삭제 버튼이 보이게 한다. id는 DB에 저장되어 있는 유저의 고유 번호

Nilili/src/components/main/AfterRecent.tsx

## Yup;

npm install yup --save
yup 라이브러리는 스키마 유효성 검증이 목적이다.-> Yup은 Form validation을 위한 라이브러리이다.
실제로는 서버쪽(Node.js) 에서 더 많이 사용된다.
React 기준으로는 react-hook-form 과 함께 사용하고 있다.
클라이언트는 검증된 데이터를 보내야하고, 서버는 검증된 데이터를 응답해야한다.
클라이언트는 검증된 데이터를 받아야하고, 서버는 검증된 데이터를 처리해야한다.
-->결국은 모두 유효성 검증 측면은 필수적인 기능

## Formik;

npm install formik --save
수 많은 useState와 handler들이 만들어지는데, 이러한 것들을 좀 더 편리하고 깔끔하게 해주는 
redux-form, react-hook-form, Formik 라이브러리

Formik : 리액트에서 form control을 보다 편하게 할 수 있게 해주기 위해서 만들어진 라이브러리.

회원가입 처리 등 여러가지 form을 예외처리와 함께 다뤄야 하는 경우에 매우 쉽고 깔끔하게 사용

Formik 생성하기

Formik은 컴포넌트 모양으로 생성해낼 수도, useFormik을 사용해서 변수에 담아 사용할 수도 있다.

initialValues : form에서 관리할 값들을 모아놓는 객체
validate : validation 확인 로직을 담아둔다
onSubmit : submit 이벤트 발생 시 실행할 로직 기재
formik를 사용하면서 validation도 Yup을 이용해 깔끔하고 처리를 하는 것과, 에러 메세지 같은 경우에도 좀 더 간결하게 처리







