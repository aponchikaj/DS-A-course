class ArrayQueue<T> {
    private data: T[] = [];

    enqueue(data:T){
        this.data.push(data)
    }

    dequeue(){
        this.data.shift()
    }

    peek(){
        return this.data[0];
    }

    size(){
        return this.data.length;
    }
}