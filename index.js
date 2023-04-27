console.log('1. reduce 문법 \n recude() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤 하나의 결과를 반환함 \n reducer의 형태: (accumulator, currentValue) => (반환값) \n - 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당함 \n - 반환값은 그 이후의 원소에 대하여 accumulator에 저장됨')

let data = [5, 2, 9, 8, 4];
// minValue 구하기 예제
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue);

// 원소의 합계 구하기 예제
let summary = data.reduce((a, b) => a + b);
console.log(summary);

console.log('\n2. 배열 초기화');
let arr = new Array(5).fill(0);
console.log(arr);

console.log('\n3. 집합 자료형, 집합 객체 - 특징: 중복된 원소 포함하지 않음');
let mySet = new Set();
mySet.add(3);
mySet.add(3);
mySet.add(7);
console.log(`원소의 개수: ${mySet.size}`);
console.log(`원소 7을 포함하는가? ${mySet.has(7)}`);
console.log('원소 하나씩 출력');
for (let item of mySet) console.log(item);

console.log('\n 4. x.toFixed(2) 소수점 둘째자리까지 반올림')

console.log('\n5. 파일 불러올 때, fs.readFileSync 사용');
let fs = require('fs');
let text = fs.readFileSync('text.txt').toString().split('\n');
console.log(text);

console.log('\n6. javascript에서 콘솔 입출력 받을 때 readline 사용');
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
  // Enter입력할 때마다 호출
  input.push(line);
}).on('close', () => {
  // 종료 시 (Ctrl+C, Ctrl+D)
  console.log(input);
  process.exit();
});

