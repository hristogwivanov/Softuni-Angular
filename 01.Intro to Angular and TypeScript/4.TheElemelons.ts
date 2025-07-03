abstract class Melon {
    public weight: number;
    public melonSort: string;
    public elementIndex: number;
    constructor(weight: number, melonSort: string) {
        this.melonSort = melonSort;
        this.elementIndex = weight * melonSort.length;
    }
}

class Watermelon extends Melon {
    public toString(): string {
        return `Element: Water \n Sort: ${this.melonSort} \nElement Index: ${this.elementIndex} `
    }
}

class Firemelon extends Melon {
    public toString() {
        return `Element: Fire \n Sort: ${this.melonSort} \nElement Index: ${this.elementIndex} `
    }
}

class Earthrmelon extends Melon {
    public toString() {
        return `Element: Earth \n Sort: ${this.melonSort} \nElement Index: ${this.elementIndex} `
    }
}

class Airmelon extends Melon {
    public toString() {
        return `Element: Air \n Sort: ${this.melonSort} \nElement Index: ${this.elementIndex} `
    }
}

class Melolemonmelon extends Watermelon {
    private elements: string[] = ['Water', 'Fire', 'Earth', 'Air'];
    private currentElementIndex: number = 0;

    public morph(): void {
        this.currentElementIndex = (this.currentElementIndex + 1) % this.elements.length;
    }

    public toString(): string {
        const element = this.elements[this.currentElementIndex];
        return `Element: ${this.elements[this.currentElementIndex]} \n Sort: ${this.melonSort} \nElement Index: ${this.elementIndex} `
    }

}



let watermelon = new Watermelon(15, 'abcstring');
console.log(watermelon.toString());
let firermelon = new Firemelon(65, 'teststring');
console.log(firermelon.toString());
let specialmelon = new Melolemonmelon(22, 'alabala');
console.log(specialmelon.toString());
specialmelon.morph();
console.log(specialmelon.toString());
specialmelon.morph();
console.log(specialmelon.toString());

// let test : Melon = new Melon(100, "Test");
//Throws error

let watermelon2 : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon2.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100
