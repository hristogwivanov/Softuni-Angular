class KeyValuePair<T, U> {
    private key: T;
    private val: U; 
    setKeyValue(key: T, value: U): void{
        this.key = key;
        this.val = value; 
    }
    display(){
        console.log(`key = ${this.key}, value = ${this.val}`)
    }
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();