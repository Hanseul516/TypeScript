[❝ 타입스크립트(Typescript) 내장함수, 메서드, 접근제한자 예시 총정리!
 ❞](https://duseul.tistory.com/101)

# Array
  - `map`: 배열 요소를 변환하여 새로운 배열을 생성합니다.
  - `filter`: 주어진 조건에 맞는 요소들로만 이루어진 새로운 배열을 생성합니다.
  - `find`: 주어진 조건에 맞는 첫 번째 요소를 반환합니다.
  - `forEach`: 배열의 각 요소에 대해 지정된 함수를 실행합니다.
  - `reduce`: 배열 요소들을 이용하여 단일 값으로 축소합니다.
<br>

# String
   - `split`: 문자열을 지정된 구분자를 기준으로 나누어 배열로 반환합니다.

   - `trim`: 문자열의 앞뒤 공백을 제거합니다.

 

   - `toUpperCase`, `toLowerCase`: 문자열을 대문자 또는 소문자로 변환합니다.

 

   - `startsWith`, `endsWith`, `includes`: 문자열이 특정 문자열로 시작하는지, 끝나는지, 포함하는지를 확인합니다.
<br>

 

 

# Object
 - `keys`: 객체의 속성 이름들로 이루어진 배열을 반환합니다.


 - `values`: 객체의 속성 값들로 이루어진 배열을 반환합니다.


 - `entries`: 객체의 속성과 값들로 이루어진 배열의 배열을 반환합니다.
<br>


 

 

 

# 내장 함수
- `parseInt`: 문자열을 정수로 변환합니다.
 

- `parseFloat`: 문자열을 부동 소수점 숫자로 변환합니다.

- `JSON.parse`: JSON 형식의 문자열을 JavaScript 객체로 변환합니다.

 

- `JSON.stringify`: JavaScript 객체를 JSON 형식의 문자열로 변환합니다.

 

- `typeof`: 변수의 타입을 확인합니다.
 

- `instanceof`: 객체가 특정 클래스의 인스턴스인지 확인합니다.
 

- `Array.isArray`: 배열인지 확인합니다.
<br>
 

 

# 접근제한자
- `Public`: 기본적으로 모든 클래스 멤버는 public이며, 외부에서 접근 가능합니다.

- `Private`: 해당 클래스 외부에서 접근할 수 없으며, 클래스 내부에서만 사용 가능합니다.

- `Protected`: 해당 클래스와 해당 클래스를 상속받은 하위 클래스에서 접근 가능합니다.

- `Readonly`: 읽기 전용으로, 값의 변경이 불가능합니다.
<br>
