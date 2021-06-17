
function testCycle(n){
let flag = "Простое число";
for (let i = 2; i < n; i++) {
	if (n % i == 0) {
		flag = "Составное число";
		break; // выйдем из цикла
	}
}
console.log(flag);
}

testCycle(13)