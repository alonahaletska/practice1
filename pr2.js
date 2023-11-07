//как работает проверка if

// const value = 1;
// if (value === 10) {
//     console.log('ok');
// }

//как работает проверка if...else

// if (value === 10) {
//     console.log('ok');
// } else {
//     console.log('false')
// }
    
//как работает else...if

// if (value === 10) {
//     console.log("first");
// } else if (value < 10 && value > 5) {
//     console.log('second');
// } else if (value === 10) {
//     console.log('third');
// } else {
//     console.log('default');
// }

//инструкция switch

// const value = 10;
// switch (value) {
//   case 1:
//     console.log("value is 1");
//     break;

//   case 4:
//     console.log("value is 4");
//     break;

//     case 7:
//         console.log("value is 7");
//         break;
    
//     default:
//         console.log("default");
// }


//тернарний оператор

const value = 1;
let message = value > 15 && value < 20 ? "в диапозоне от 15 до 20" : "попробуй еще";
console.log(message);
