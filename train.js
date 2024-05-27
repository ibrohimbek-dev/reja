// 2024-05-28
// MIT 14 TASK D

// Ikkita parametra ega function tuzing, va functioning
// berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin

// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.

// ----------------------------------------------------------------
console.log("----------------------------------------------------------------");
console.log("METHOD ONE:");

const checkContent_1 = (match, text) => {
	return text.split("").every((txt) => match.includes(txt));
};

const result_1 = checkContent_1("mitgroup", "gmtiprou");
console.log("Same text? => ", result_1);

// ----------------------------------------------------------------
console.log("----------------------------------------------------------------");
console.log("METHOD TWO:");

const checkContent_2 = (match, text) => {
	return text.split("").filter((txt) => !match.includes(txt)).length > 0
		? false
		: true;
};

const result_2 = checkContent_2("mitgroup", "gmtiprouooooo");
console.log("Same text? => ", result_2);

