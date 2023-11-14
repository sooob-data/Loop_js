console.clear()
//fuction loop
function table(num){
    for (let i = 1; i <= 10; i++){
        if (i ===3) {
            continue;
        }

        console.log(`${num} x ${i} = ${num*i}`);
    }
}
table(2);

console.log("Reverse")

function reverse(num1){
    if (num1 > 5){
        console.error("......");
        return;
    }
    for (let i = 10; i >= 1; i--){
        if (i <= 3) {
            break;
        }

        console.log(`${num1} x ${i} = ${num1*i}`);
    }
}
reverse(6);
