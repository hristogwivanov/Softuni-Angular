class Box<T>{
    private elements: T[] = [];

    add(element: T):void {
        this.elements.push(element);
    };
    
    remove(): T | undefined{
        return this.elements.pop();
    }

    public getCount() {
        return this.elements.length;
    }
}

let box = new Box<Number>(); 
box.add(1);
box.add(2);
box.add(3);
console.log(box);
console.log(box.getCount());
let box2 = new Box<String>();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.getCount());
console.log(box2);
box2.remove();
console.log(box2);
console.log(box2.getCount());