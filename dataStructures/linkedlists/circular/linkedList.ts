class SinglyCircularNode<T>{
    data:T
    next: SinglyCircularNode<T> | null = null

    constructor(data:T){
        this.data = data
    }
}

class SinglyCircularLinkedList<T>{
    head:SinglyCircularNode<T> | null = null;

    traverse(){
        if(!this.head || this.head === null){
            console.log("Invalid List.")
            return;
        }

        let current = this.head;
        while(true){
            console.log(`${current} -> `)
            current = current.next!
            if(current == this.head ) break;
        }

        console.log(" Done ! ");
    }

}