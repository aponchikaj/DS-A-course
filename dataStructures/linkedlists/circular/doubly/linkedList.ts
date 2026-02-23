class DoublyCircularNode<T>{
    data:T
    next: DoublyCircularNode<T> | null = null
    perv: DoublyCircularNode<T> | null = null

    constructor(data:T){
        this.data = data;
    }
}

