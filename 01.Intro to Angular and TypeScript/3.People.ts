abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string>;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        const currentTask = this.tasks.shift();
        if (currentTask !== undefined) {
            this.tasks.push(currentTask);
            console.log(this.name + currentTask);
        } else {
            console.log(this.name + " has no task");
        }
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    public getSalary(): number {
        return this.salary;
    }
}


class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age)
        this.tasks.push(" is working on a simple class");
    }
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age)

        this.tasks.push(" is working on a complicated task.");
        this.tasks.push(" is taking time off work.");
        this.tasks.push(" is supervising junior workers.");
    }
}

class Manager extends Employee {
    public divident: number = 0;
    constructor(name: string, age: number) {
        super(name, age)
        this.tasks.push(" scheduled a meeting");
        this.tasks.push(" is preparing a quarterly report");
    }
    public getSalary(): number {
        return this.salary + this.divident;
    }
}

let pesho = new Junior('Pesho', 20);
pesho.salary = 1600;
console.log(pesho);

let ivan = new Senior('Ivan', 40);
ivan.salary = 5000;
console.log(ivan);

let kalin = new Manager('Kalin', 50);
kalin.salary = 6700;
kalin.divident = 1000;
console.log(kalin.getSalary());
console.log(kalin);


ivan.work();
ivan.work();
ivan.work();
ivan.work();
kalin.work();
kalin.work();
kalin.work();
pesho.work();
pesho.work();

kalin.collectSalary();
ivan.collectSalary();
pesho.collectSalary();