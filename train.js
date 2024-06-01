// 2024-05-28
// MIT 14 TASK D

// Ikkita parametra ega function tuzing, va functioning
// berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin

// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.

// ----------------------------------------------------------------
// console.log("----------------------------------------------------------------");
// console.log("METHOD ONE:");

// const checkContent_1 = (match, text) => {
//   return text.split("").every((txt) => match.includes(txt));
// };

// const result_1 = checkContent_1("mitgroup", "gmtiprou");
// console.log("Same text? => ", result_1);

// // ----------------------------------------------------------------
// console.log("----------------------------------------------------------------");
// console.log("METHOD TWO:");

// const checkContent_2 = (match, text) => {
//   return text.split("").filter((txt) => !match.includes(txt)).length > 0
//     ? false
//     : true;
// };

// const result_2 = checkContent_2("mitgroup", "gmtiprouooooo");
// console.log("Same text? => ", result_2);

// ------------------------------------------------------------------------------------------------
// TASK F is Started from Here

// 2024-06-01:

// TASK F
// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.

// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

console.log("----------------------------------------------------------------");
console.log("TASK F METHOD ONE:");
const word = "hello";

const findDoublers_1 = (text) => {
  const checkText = [];
  const doubledArr = [];

  for (let i = 0; i < text.length; i++) {
    if (!checkText.includes(text[i])) {
      checkText.push(text[i]);
    } else {
      doubledArr.push(text[i]);
    }
  }

  return doubledArr.length > 0
    ? doubledArr.join("")
    : "Takrorlangan so'z mavjud emas!";
};

const result_1 = findDoublers_1(word);
console.log(
  `'${word}' so'zi tarkibida quyidagi so'zlar bir marotaban ko'p takrorlangan: ${result_1}`
);

console.log("----------------------------------------------------------------");
console.log("TASK F METHOD TWO:");

const findDoublers_2 = (text) => {
  const checkText = [];
  const doubledArr = [];

  text.split("").filter((txt) => {
    if (!checkText.includes(txt)) {
      checkText.push(txt);
    } else {
      doubledArr.push(txt);
    }
  });

  return doubledArr.length > 0 ? true : false;
};

const result_2 = findDoublers_2(word);
console.log(
  `'${word}' so'zi tarkibida takroralangan so'z mavjudmi?: ${result_2}`
);

console.log("----------------------------------------------------------------");
console.log("TASK F METHOD THREE:");

const findDoublers_3 = (text) => {
  let result = 0;
  text.split("").reduce((arr, txt) => {
    if (arr[txt] > 0) {
      result += arr[txt];
    } else {
      arr[txt] = 1;
    }

    return arr;
  }, []);

  return result > 0 ? true : false;
};

const result_3 = findDoublers_3(word);
console.log(
  `'${word}' so'zi tarkibida takroralangan so'z mavjudmi?: ${result_3}`
);


// TASK F is completed here!
