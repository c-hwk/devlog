---
title: Hash(해쉬)
category: Data Structure
---

## 해쉬

`해쉬 함수(hash function)`는 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다. 이 함수에 의해 변환된 값들을 해쉬 값, 해쉬 코드, 해쉬라고 한다.
해쉬 함수를 $h$, 변환 될 키 값을 $k$, 함수를 이용해 매핑된 값을 $x$라 하면 다음과 같이 나타낼 수 있다.

> $h(k) = x$

`해쉬(hash)`는 고기나 채소등을 다져 요리한 것이라고 하는데 이는 프랑스어 [`잘게 다져진(hache)`](https://dict.naver.com/frkodict/#/entry/frko/0ea3595080d34603b3c9490736129a44)와 [`잘게 베다(hacher)`](https://dict.naver.com/frkodict/#/entry/frko/5fccc1d068f64632be854d27254d199f)에서 유래되었다.

![origin of hash](https://ssl.gstatic.com/onebox/dictionary/etymology/en/desktop/5d3133485c354626d474a9f1ad1beb5a98ac071b82600b764df022745c67baf5.png)

그렇게 다져진 재료들을 놓고 보면 원래의 형태가 어떤지 알 수가 없을 것이다. 마찬가지로 해쉬 함수에 의해 생성되는 해쉬 값들은 계산적으로 충돌을 찾아내는 것이 불가능 해야한다. 해쉬는 결국 입력 값이 같으면 항상 같은 값을 뱉어내기 때문에 암호학적으로 역 해쉬가 가능하다면 값을 찾아낸 것이 가능하기 때문이다.

## 해쉬 테이블

`해쉬 테이블(hash table)`은 해쉬 함수 
$h$를 키 $k$를 테이블 $T$인 $T[h(k)]$에 저장하는 것. 일반적으로 해쉬 테이블은 하나의 1차원 배열로 만든다. 이용해서  일반적으로 탐색, 삽입, 삭제의 시간이 $O(1)$이고 최악의 경우 $Θ(n)$이다.

## 해쉬의 충돌

두 개 이상의 키가 동일한 위치로 해슁 되는 경우, 즉 서로 다른 키 $k_{1}$과 $k_{2}$가 동일한 해쉬 값을 가지는 문제가 발생하는데 이를 `충돌(collision)`이라고 한다. 이를 해결 하는 대표적 방법으로 `chaining`과 `open addressing`이 있다.

### Chaining

체이닝의 경우 `연결 리스트(linked-list)`를 이용해서 새로운 노드를 생성해서 충돌한 값의 맨 앞에 추가한다.

### Open Addressing

- 모든 키를 해쉬 테이블 자체에 저장
- 테이블의 각 칸(slot)에는 1개의 키만 저장
- 해결 기법
    1. Linear probing
    2. Quadratic probing
    3. Double hashing
    4. ETC.

#### Linear probing

$h(k)$, $h(k)+1$, $h(k)+2$, ... $h(k)+n$ 순서로 검사하여 처음으로 빈 슬롯에 저장하는 것. 테이블의 끝에 도달하면 처음 슬롯부터 돌아가며 circular하게 작동한다.

- 장점

- 단점
    - primary cluster - key 값들이 분산되어 있지 않고 밀집 되어 있는 경우가 많다.

#### Quadratic probing

충돌이 발생시 $h(k)+1^2$, $h(k)+2^2$, $h(k)+2^2$, ... 순서로 시도하는 것.

#### Double hashing
서로 다른 두 해쉬 함수 $h_1$과 $h_2$를 이용하여 충돌이 생긴 경우 다른 해쉬 함수를 이용하는 방식이다.

#### 키의 삭제

linear probing으로 같은 해쉬 값을 갖는 키 값 일부를 삭제하면 문제가 생긴다.