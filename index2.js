///TOZMA MASALALAR

//1-masala izox
// var a = 1;
//  function outer(){
//     var b = 2;
//     function inner(){
//         var c = 3;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     inner();
//  }
//  outer();

 /**
  * BUnda var a uzgatuvchi si bn outer uzgaruvchisi bir hil joyda yani Global scope da bun hosting bolib hamma 
  * raqamlar chiqadi chunchi log da outer global scope da turibdi  agar outerni olib tashlasak consolda hechnima 
  * chiqmaydi
  */

//2-masala Izox
// console.log(x);
// var x = 5;
// console.log(x);

/**
 * bunda va uzgaruvchisi bolgani sababli ozgaruvchini pasidagi consol ishlaydi va yuqorisida undifind beriladi
 * hostinga uchrab
 */


///3-MASALA IZOX
//  //console.log(y);
// const y = 10;
// console.log(y);

/**
 * BU holatda js da bizda ozgaruvchidan oldin y ni consolda chiqarmasligimisni aytadi 
 * va hatolik beradi. Agar oazgaruvchidan oldingi consolni comment qilsak javob chiqadi 
 * va hato chiqishini sababi js da hosting orqali ishlagani sabab boladi
 * yani pasdan yuqoriga qarab ozini scopiga borishi tupayli
 */

//4-masala
// console.log(z);
// let z = 15;
// console.log(z);

/**
 * bunda tdz yani olik zoan mavjud masalan ozgaruvchidan yuqorisi olik zona boladi
 */

//5-masala Izox 

// const student = {
//     name: 'Aloce',
//     age: 25,
//     course: 'Computer Sciner'
// };
// for (let key in student){
//     console.log(key + '; ' + student[key]);
// };
/**
 * BUnda for in obeklar uchun ishlanadi va ular uchun qulay boshqa joylarda ham ishlanadi lekin obek uchun canfort
 * for va undan keyin let/const ishlatamin va hohlagan ozgaruvchini kiritamin yani atributni 
 */

// const grades = [90,85,88];

// for (const grade of grades){
//     console.log(grade);
// }

/** bunda for of yordamida massivlarni va sitringalarni aylantirsa boladi
 * 
 * 
 */

