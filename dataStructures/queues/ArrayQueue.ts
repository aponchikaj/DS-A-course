// this is basic array queue class working with array easy but slower.
class ArrayQueue<T> {
    private data:T[] = []
    
    enqueue(data:T){
        this.data.push(data)
    }

    dequeue(){
        return this.data.shift()
    }

    peek(){
        return this.data[0]
    }

    isEmpty(){
        return this.data.length === 0 ? true : false
    }

    search(data:any){
        for(let i =0;i<this.data.length;i++){
            if(this.data[i] == data){
                return true
            }
        }

        return false
    }
}

