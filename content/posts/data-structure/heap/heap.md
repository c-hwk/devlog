---
title: 힙(Heap)
category: Data Structure
---

## Heap의 성질

`힙(heap)`은 최댓값 및 최솟값을 빠르게 찾아내기 위한 트리형 자료 구조의 일종이다. 이진 트리의 형태를 갖고 있는데 `루트 노드(root node)`가 최댓값을 갖는 `최대 힙(max heap)`, 최솟값을 갖는`최소 힙(min heap)`이 있다. 힙을 구성하기 위해서는 두 가지 속성을 만족해야 하는데 이를 `힙 성질(heap property)`라 하고 다음과 같다.

1. 각 노드간의 관계는 대소 관계가 성립해야 한다.
    - 최대 힙의 경우 부모 노드의 값이 자식 노드의 값 보다 크다.
    - 최소 힙의 경우 부모 노드의 값이 자식 노드의 값 보다 작다
    - 만약 힙에 같은 원소가 중복되어 있을 경우 `작다` 또는 `크다` 가 `작거나 같다` 와 `크거나 같다`로 변경하면 된다. (이진 탐색 트리에서는 중복된 원소를 허용하지 않는다.)
    - `리프 노드(leaf node)`의 경우 이 성질을 자동으로 만족한다.

2. `완전 이진 트리(complete binary tree)` 형태를 가질 것.

완전 이진 트리는 `꽉 찬 이진 트리(full binary tree)`에서 최하단의 노드들만 꽉 차 있지않은 형태이다. 꽉 찬 이진 트리는 완전 이진 트리이지만 완전 이진 트리라고 해서 꽉 찬 이진 트리는 아니다. 트리 형태를 띄고 있지만 완전 이진 트리와 꽉 찬 이진 트리는 그래프나 연결 리스트를 사용하지 않고 1차원 배열로 나타낼 수 있다. 구현상의 편의를 위하여 대부분 인덱스는 1부터 시작하는 경우가 많다.

- 루트 노드의 경우 `heap[1]`
- `heap[i]`의 부모 = `heap[i/2]`
- `heap[i]`의 왼쪽 자식 = `heap[2i]`
- `heap[i]`의 오른쪽 자식 = `heap[2i + 1]`

## 우선순위 큐

TODO: 우선순위 큐가 어디에 쓰이는가 왜 쓰는건가

`우선순위 큐(priority queue)`는 각 원소들이 우선순위를 갖고 있는 자료형이다. 높은 우선순위 값을 가진 원소는 낮은 우선순위를 가진 원소보다 먼저 처리된다. 같은 우선순위를 가졌다면 큐 자체가 가진 순서에 의해 처리된다.

- 스택(stack) - 후입 선출(LIFO)
- 큐(queue) - 선입 선출(FIFO)

TODO: 힙으로 구현하는게 좋은이유 찾기

우선순위 큐는 일반적으로 스택, 큐, 힙등 으로 구현할 수 있는데 일반적으로 힙으로 구현한다.