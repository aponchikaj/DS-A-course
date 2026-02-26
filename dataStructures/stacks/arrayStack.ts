class arrayStack<T> {
    private data:T[] = [];

    push(data:T){
        this.data.push(data);
    }

    pop(){
        return this.data.shift()
    }

    peek(){
        return this.data[this.data.length - 1];
    }

    isEmpty(){
        return this.data.length === 0 ? true : false
    }
}

