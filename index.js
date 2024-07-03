//MASSIVLARGA OID MASALALAR

let arr1 = ["salom", "hayir", "nima gaplar", "tel"];

//Masala 1: `map` va `filter` metodlari bilan alifbo tartibini o'zgartirish
//Berilgan massivdagi so'zlardan uzunligi 5 ta belgidan kam bo'lganlarni olib tashlab,
//qolgan so'zlarning har birining bosh harfini katta harfga aylantiruvchi funksiyani yozing

// function deletWords(arr){
//     let res = arr.sort().map(function(valeu, index){
//         return valeu.charAt(0).toUpperCase() + valeu.slice(1);
//     });
//     return res;
// };
// console.log(deletWords(arr1));

//Masala 2: `find` va `map` metodlari bilan talabalarni topish
//Talabalarning ism va yoshlarini o'z ichiga olgan massivdan 20 yoshdan katta bo'lgan birinchi
// talabani topuvchi va uning ismini katta harf bilan qaytaruvchi funksiyani yozing.


// const students = [
//   { name: "ali", age: 18 },
//   { name: "bekzod", age: 22 },
//   { name: "jasur", age: 19 },
// ];

// function findStudents(arr){
//     return arr.map(function(valeu){
//         return {
//             name: valeu.name.toUpperCase(),
//             age: valeu.age > 20
//         }
//     })
// }
// console.log(findStudents(students));

// function findStudents(arr){
//     return arr.find(function(valeu){
//         return {
//             name: valeu.name.toUpperCase(),
//             age: valeu.age > 20
//         }
//     })
// }
// console.log(findStudents(students));


//Masala 3: `filter` va `reduce` metodlari bilan umumiy summani hisoblash
//Berilgan mahsulotlarning narxlari massivini oladigan va faqat 100 dan katta narxlarga ega 
//mahsulotlarning umumiy narxini hisoblaydigan funksiyani yozing.

// let arr2 = [150, 400,500, 32,34];
// function addElementArr(arr){
//     let res = 0;
//    res = arr.filter(function (valeu){
//         return valeu>100;
//     });
//    return  res.reduce(function(a,b){
//     return a+b
//    });
// }
// console.log(addElementArr(arr2));


//Masala 4: `every` va `some` metodlari bilan aniq shartlarni tekshirish
//Berilgan massivdagi sonlarning hammasi musbat ekanligini tekshiring. Agar shunday bo'lsa,
// "Barcha sonlar musbat" degan xabarni, aks holda, "Musbat bo'lmagan sonlar bor" degan xabarni 
//chiqaruvchi funksiyani yozing. Shu bilan birga, agar kamida bitta son 100 dan katta bo'lsa, 
//"Katta son bor" degan xabarni chiqaruvchi shartni ham qo'shing.

// let arr2 = [1,2,3,45,-6, 150]
// function findMusbatAndBigNUmber(arr){
//     let res = arr.every(function(valeu){
//         return valeu > 0 ;
//     });

//     let sum = arr.some(function(valeu){
//         return valeu > 100
//     });

//     if (res){
//         console.log("Barcha sonlar musbat");
//     }else(
//         console.log("Musbat bo'lmagan sonlar bor")
//     );

//     if (sum){
//         console.log('Katta son mavjud');
//     }
    
// };
// console.log(findMusbatAndBigNUmber(arr2));

//Masala 5: `forEach` va `map` metodlari bilan massiv elementlarini transformatsiya qilish
//Berilgan massivdagi har bir elementni kvadratini hisoblab, bu qiymatlarni yangi massivga qo'shish uchun 
//funksiyani yozing. So'ngra, yangi massivdagi elementlarni konsolga chiqaruvchi funksiyani yozing.
// let arr2 = [150, 400,500, 32,34];
// function transformation(arr){
//     let res = [];
//     arr.forEach(function(valeu){
//         res.push(valeu**2)
//     });
//     return res.map(function(valeu){
//         return valeu
//     });
// }
// console.log(transformation(arr2));

// Masala 6: `map`, `filter`, va `reduce` metodlarini birgalikda ishlatish
// Berilgan xodimlarning maoshlarini o'z ichiga olgan massivdan faqat 2000 dan kam bo'lmagan
// maoshlarni tanlab, ularni 10% ko'paytirib, barcha xodimlarning yangi umumiy maoshini hisoblaydigan
// funksiyani yozing.
// const oylik = [
//     {name: 'Otabek', birinchi: 1950},
//     {name: 'Abdujabbor',birinchi: 2656},
//     {name:'barkamol',birinchi: 456}
// ];
// function findHardworker(arr){
//     let res =  arr.filter(function(valeu){
//         return valeu.birinchi >= 2000
//     });
//     let res1 =  res.reduce(function (valeu){
//       return birinchi.valeu * 1,1;
//     })
    
//     return res1;
    
// };
// console.log(findHardworker(oylik));



//Masala 7: `find`, `filter`, va `map` metodlari bilan talabalar ma'lumotlarini qayta ishlash
//Berilgan talabalar ma'lumotlar massividan (ism, yosh, baho) kamida 80 ball olgan birinchi talabaning 
//ismi va yoshini toping, so'ngra barcha 80 dan yuqori ball olgan talabalarni toping va ularning ismlarini
// katta harf bilan qaytaruvchi funksiyani yozing.

// const students = [
//   { name: "ali", ball: 90, age: 18 },
//   { name: "bekzod", ball: 88, age: 20 },
//   { name: "jasur", ball: 80, age: 15 },
// ];
// function findLastGrow(arr){
//   let res =  arr.find(function(valeu){
//     return valeu.ball==80
//   })
//   console.log(res);
//   return arr.filter(function(valeu){
//     return valeu.ball>80
//   })
// };
// console.log(findLastGrow(students));



//STRINGLAR BN ISHLASH

//Masala 1: `toUpperCase` metodi bilan harflarni katta harfga aylantirish
//Berilgan stringdagi barcha harflarni katta harfga aylantiruvchi funksiyani yozing.

// const res = function(str) {
//     return str.toUpperCase()
// };
// console.log(res('salom dunyo'));

//Masala 2: `includes` metodi bilan substringni tekshirish
//Berilgan stringda ma'lum bir substring mavjudligini tekshiruvchi funksiyani yozing.

// const res = function (str, element){
//     return str.includes(element)
// };
// console.log(res('salom dunyo', 'yo'));

//Masala 3: `replace` metodi bilan substringni almashtirish
//Berilgan stringdagi barcha "JavaScript" so'zlarini "JS" so'ziga almashtiruvchi funksiyani yozing.

// const res = function (str, element){
//     return str.replace(str, element)
// };
// console.log(res('JavaScript','JS'));

//Masala 4: `split` va `join` metodlari bilan so'zlarni teskari tartibda qaytarish
//Berilgan stringni so'zlar bo'yicha teskari tartibda qaytaruvchi funksiyani yozing.

// const res = function (str){
//     let res2 = str.split('');
//     return res2.reverse().join('');
// };
// console.log(res('salom dunyo'));

//Masala 5: `trim` metodi bilan bo'sh joylarni olib tashlash
//Berilgan stringning boshida va oxirida bo'sh joylarni olib tashlovchi funksiyani yozing.

// const treamsUse = function (str){
//     return str.trim().toUpperCase();
// };
// console.log(treamsUse('    salom dunyo    '));

















