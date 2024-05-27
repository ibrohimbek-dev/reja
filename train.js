// 2024-05-25
// MIT 14 TASK-C

// Shop nomli class tuzing, va bu class 3 xil parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!

// --------------------------------------------------------------------------------
console.log("--------------------------------------------------------");
console.log("METHOD ONE");
const moment = require("moment");

const time = moment().format("HH:mm");

class MyShop {
	constructor(bread, laghman, cola) {
		this.bread = bread;
		this.laghman = laghman;
		this.cola = cola;
	}

	storage() {
		if (this.bread <= 0 && this.laghman <= 0 && this.cola <= 0) {
			console.log("All items are sold out, sorry!");
		} else {
			const result = `At this time ${time}, we have only ${
				this.bread <= 0 ? 0 : this.bread
			} breads, ${this.laghman <= 0 ? 0 : this.laghman} laghmans, ${
				this.cola <= 0 ? 0 : this.cola
			} cola`;
			console.log(result);
		}
	}

	sell(item, amount) {
		switch (item.toLowerCase()) {
			case "bread":
				this.bread -= amount;
				break;
			case "laghman":
				this.laghman -= amount;
				break;
			case "cola":
				this.cola -= amount;
				break;
			default:
				console.log(`We do not have this item '${item}' yet :(`);
				break;
		}
	}

	store(item, amount) {
		switch (item.toLowerCase()) {
			case "bread":
				this.bread += amount;
				break;
			case "laghman":
				this.laghman += amount;
				break;
			case "cola":
				this.cola += amount;
				break;
			default:
				console.log(`We do not have this item '${item}' yet :(`);
				break;
		}
	}
}

const shop = new MyShop(4, 5, 2);

// console.log("shop: ", shop);
console.log("-------------------------- shop.storage():");
shop.storage();

console.log("\n-------------------------- shop.sell('bread', 3):");
shop.sell("bReAd", 3);
shop.storage();

console.log("\n-------------------------- shop.store('cola' 4):");
shop.store("CoLa", 4);
shop.storage();

// TASK C - is Completed Here
// 수고 하셨습니다!
