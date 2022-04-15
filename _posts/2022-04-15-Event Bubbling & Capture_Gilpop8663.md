---
title: Event Bubbling && Event Capture
date: 2022-04-15 12:00
category: Javascript
icon: js
tags: [Javscript]
---

## 본문에 들어가기 전

이벤트 등록에 대해 알아야 합니다. 이벤트 등록이란 웹 애플리케이션에서 사용자의 입력을 받기 위해 필요한 기능입니다.

```html
<button>plus one</button>
```

```js
var button = document.querySelector('button')
button.addEventListener('click', plusItem)

let x = 0

function plusItem(event) {
  console.log(event)
  return x++
}
```

plus one이라는 간단한 버튼을 만들어 클릭했을 때 plusItem 함수를 실행시키는 코드입니다. 버튼을 클릭하고 나면 plusItem 함수가 실행되고 plusItem 함수에 event 인자가 넘어옵니다. event 인자를 콘솔에 출력해보면 이벤트와 관련된 정보를 확인할 수 있습니다.

이처럼 addEventListener() 웹 API는 웹 개발자들이 화면에 동적인 기능을 추가하기 위해 자연스럽게 접하게 되는 기본적인 기능입니다. 사용자의 입력에 따라 추가 동작을 구현할 수 있는 방법이죠. 여기서 브라우저는 어떻게 이벤트의 발생을 감지했을까요? 브라우저가 이벤트를 감지하는 방식 2가지를 아래에서 알아보겠습니다.

## 1. 이벤트 버블링 - Event Bubbling

특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성을 의미합니다.

<img src="https://user-images.githubusercontent.com/80146176/163515971-d53bdc71-29d4-43fc-9c87-10a74cb3ad35.png" alt="bubbling">

하위의 클릭 이벤트가 상위로 전달되어 가는 그림

### - 상위의 화면 요소란?

HTML 요소는 기본적으로 트리 구조를 갖습니다. 여기서는 트리 구조상으로 한 단계 위에 있는 요소를 상위 요소라고 하며 body 태그를 최상위 요소라고 부릅니다.

```html
<body>
  <div class="one">
    <div class="two">
      <div class="three"></div>
    </div>
  </div>
</body>
```

```js
var divs = document.querySelectorAll('div')
divs.forEach(function (div) {
  div.addEventListener('click', logEvent)
})

function logEvent(event) {
  console.log(event.currentTarget.className)
}
```

위 코드는 세 개의 div 태그에 모두 클릭 이벤트를 등록하고 클릭했을 때 logEvent 함수를 실행시키는 코드입니다. 여기서 위 그림대로 최하위 div 태그 <div class="three"> </div>를 클릭하면 아래와 같은 결과가 실행됩니다.

<img src="https://velog.velcdn.com/images%2Fsoulee__%2Fpost%2Fc77e2c0a-d4c8-4016-971f-35a9d1971a91%2Fimage.png" alt="trhe">

div 태그 한 개만 클릭했을 뿐인데 왜 3개의 이벤트가 발생되는 걸까요? 그 이유는 브라우저가 이벤트를 감지하는 방식 때문입니다.

브라우저는 특정 화면 요소에서 이벤트가 발생했을 때 그 이벤트를 최상위에 있는 화면 요소까지 이벤트를 전파시킵니다. 따라서, 클래스 명 three -> two -> one 순서로 div 태그에 등록된 이벤트들이 실행됩니다. 마찬가지로 two 클래스를 갖는 두 번째 태그를 클릭했다면 two -> one 순으로 클릭 이벤트가 동작하겠죠.

여기서 주의해야 할 점은 각 태그마다 이벤트가 등록되어 있기 때문에 상위 요소로 이벤트가 전달되는 것을 확인할 수 있습니다. 만약 이벤트가 특정 div 태그에만 달려 있다면 위와 같은 동작 결과는 확인할 수 없습니다.

이와 같은 하위에서 상위 요소로의 이벤트 전파 방식을 이벤트 버블링(Event Bubbling)이라고 합니다.

## 2. 이벤트 캡쳐 - Event Capture

이벤트 캡쳐는 이벤트 버블링과 반대 방향으로 진행되는 이벤트 전파 방식입니다.

<img src="https://user-images.githubusercontent.com/80146176/163516003-d8e30868-2282-4faf-b1e1-34fe5360609a.png" alt="capture">

위 그림처럼 특정 이벤트가 발생했을 때 최상위 요소인 body 태그에서 해당 태그를 찾아 내려갑니다. 그럼 이벤트 캡쳐는 코드로 어떻게 구현할 수 있을까요?

```html
<body>
  <div class="one">
    <div class="two">
      <div class="three"></div>
    </div>
  </div>
</body>
```

```js
var divs = document.querySelectorAll('div')
divs.forEach(function (div) {
  div.addEventListener('click', logEvent, {
    capture: true, // default 값은 false입니다.
  })
})

function logEvent(event) {
  console.log(event.currentTarget.className)
}
```

addEventListener() API에서 옵션 객체에 capture:true를 설정해주면 됩니다. 그러면 해당 이벤트를 감지하기 위해 이벤트 버블링과 반대 방향으로 탐색합니다.

따라서, 아까와 동일하게 <div class="three"></div> 를 클릭해도 아래와 같은 결과가 나타납니다.

<img src="https://joshua1988.github.io/images/posts/web/javascript/event/event-capture-log.png" alt="caputre">

## 결론

### 1. 이벤트 버블링은 이벤트가 발생되었을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성을 의미합니다.

### 2. 이벤트 캡쳐는 이벤트가 발생되었을 때 해당 이벤트가 더 하위의 화면 요소들로 전달되어 가는 특성을 의미합니다.

특이하게도 addEventListenr() 의 capture 속성의 default 값인 true 값을 false로 바꾸면 사용이 가능합니다.

### 3. 이 외에도 event.stopPropagation() , 이벤트 위임 - Event Delegation 등이 있으나 나중에 더 알아보겠습니다.

---

### 참고 자료

- https://velog.io/@soulee__/JavaScript-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81-%EC%BA%A1%EC%B3%90-%EC%9C%84%EC%9E%84
- https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
