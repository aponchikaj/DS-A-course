class ArrayStack<T>{
    private items:T[] = [];

    push(data:T){
        this.items.push(data);
    }

    pop(){
        if(this.items.length === 0){
            return "stack underflow !";
        }
        return this.items.pop()!
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length ===0 ? true : false
    }

    size(){
        return this.items.length;
    }
}