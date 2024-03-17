/*100.Quyidagi namunani kuzatgan holda funksiya yasang.
Namuna:
Namuna("div*2") => "<div></div><div></div>"
Namuna("p*1")  =>"<p></p>"
Namuna("li*3") => "<li></li><li></li><li></li>"
*/

// let tags = prompt("Tag kirit, masalan div");
// let n = +prompt("Lyuboy son kiriting");

// function multiply(tag,t) {
//     let mul = '';
//     for(i=1;i<=t;i++){
//         mul+=`<${tag}></${tag}>`
//     }; 
//     return mul;
// };

// console.log(multiply(tags,n));
//===============================================================================================================



/*101.Funksiya butun son qabul qilsa, 1dan ushbu butun
songacha bo’lgan sonlar yig’indisini qaytarsin.
Namuna:
namuna(3) = 6
// 1 + 2 + 3 = 6*/

// let number = +prompt("Son kiriting");

// function summ(n){
//     let sum = 0;
//     for(i=1;i<=n;i++){
//       sum+= i;
//     }
//     return sum;
// }

// console.log("Har bir sonni summasi : ", summ(number));
//================================================================================================================



/*102.Funskiya son va object qabul qiladi. Objectni ichida min va
max degan propertilar mavjud. Agar ushbu son min va maxni
oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
Namuna:
Namuna(4, { min: 0, max: 5 }) => true
Namuna(4, { min: 4, max: 5 }) => true
Namuna(4, { min: 6, max: 10 }) => false*/

// let number = +prompt("Son kiriting");

// function compare(n,obj){
//     return n >= obj.min && n <= obj.max;
// }

// console.log(compare(number,{ min: 6, max:10}));
//================================================================================================================



/*103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng bo’lsa funksiya true qaytarsin, aks holda false.
Namuna:
Namuna(1) => true
Namuna(3) => false
// 3^2 = 9
Namuna(6) => true
// 6^2 = 36 (ends with 6)
Namuna(95) => false
// 95^2 = 9025 (does not end with 95) */


// let number = +prompt("Son kiriting: ");

// function check(num){
//   return num**2 % 10 == num;
// }

// console.log(check(number));
//================================================================================================================

/*104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi massiv qaytarsin.
Namuna:
Namuna([0, 0, 0, 0, 0]) => [0, 1, 2, 3, 4]
Namuna([1, 2, 3, 4, 5]) => [1, 3, 5, 7, 9]
Namuna([5, 4, 3, 2, 1]) => [5, 5, 5, 5, 5]
*/

// let arr = [0,0,0,0,0];

// function check(ar){
//     ar.forEach( function(el,ind){
//         ar[ind] = el + ind;
//     });
//     return ar;

// }

// console.log(check(arr));
//================================================================================================================



/* 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida shakari bor ichimliklar ro’yxati: cola fanta
Namuna:
Namuna(["fanta", "cola", "water"]) => ["water"]
Namuna(["fanta", "cola"]) => []
Namuna(["lemonade", "beer", "water"]) => ["lemonade","beer", "water"]*/

// let arr = ["lemonade", "beer", "water","tea","cola","fanta"];

// function check(ar){
//    return ar.filter(element => element !== 'cola' && element !== 'fanta');
// }

// console.log(check(arr));
//================================================================================================================



/*106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta raqam borligini qaytarsin.
Namuna:
Namuna(123) => 3
Namuna(56) => 2
Namuna(7154) =>4
Namuna(61217311514) => 11
Namuna(0) => 1*/

// let number = prompt("Son kiriting: ");

// function check(num){
//     return num.length;
// }

// console.log(check(number));
//================================================================================================================



/*107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
bo’lgan sonni qaytarsin.
Namuna:
Namuna(123) => 321
Namuna("001") => 100
Namuna(999) => 999*/

// let number = +prompt("Son kiriting :");

// function maxNumber(num){
//   let sortedDigit = String(num).split('').sort((a,b)=> b-a);
//  return parseInt(sortedDigit.join(''));
// }

//  console.log(maxNumber(number));
//==============================================================================================================



/*108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
oraliqdan bironta random son qaytarsin.
Namuna:
Namuna(5, 9) => 7
Namuna(5, 9) => 9
Namuna(5, 9) => 5*/

// let num1 = +prompt("1-son kiriting: ");
// let num2 = +prompt("2-son kiriting: ");

// function rand(n1, n2) {
//     return (Math.random() * (n2 - n1) + n1).toFixed(0);
// }

// console.log(rand(num1, num2));
//================================================================================================================



/* 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son degani sonning har bir raqamini sonning uzunligi miqdorida darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
Namuna:
Namuna(153) => true
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
Namuna(370) => true
Namuna(1652) => false*/

// let number = +prompt("Son kiriting: ");

// function narissistik(num){
//     let naris = String(num).split('').map(Number);
//     let sum = 0;
    
//     for(let digit of naris){
//           sum+= digit**3;
//     }

//     return sum === num;
// }

// console.log(narissistik(number));
//================================================================================================================



/*110.Funksiya string qabul qiladi.Funksiya ushbu stringda nechta katta harf ishtirok etganin qaytarsin.
Namuna:
Namuna("fvLzpxmgXSDrobbgMVrc") => 6
Namuna("JMZWCneOTFLWYwBWxyFw") => 14*/

// let letters = prompt('Kotta kichik harflar yozing: ');

// function checkCapitalLetters(str){
//     let massive = str.split('');
//     let capitalLetters = massive.filter(function(el){
//         return (el === el.toUpperCase());
//     });
//     return capitalLetters.length;
// }
//     console.log(checkCapitalLetters(letters));
