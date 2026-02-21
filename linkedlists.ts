// linked list. data structure. lets say we have train (LinkedList) and passengers (Node).
// structure of that train is like : node(data,next)->node(data,next)... and so on...
// next is pointing to next node and data has the data that we added to that node.

class ListNode<T> {
    data:T
    next: ListNode<T> | null = null

    constructor(data:T){
        this.data = data
    }
}

class LinkedList<T> {
    // starting point.
    head: ListNode<T> | null = null;

    // this is add function to add new nodes to list
    // we pass data as parameter and its type is T - T is type of LinkedList
    // then we create newNode variable and assign new ListNode(data)
    // if we dont have starting point of list (head) then we assign head the newNode so newNode is gonna be starting node
    // but if we have head available we start from head and get next to each node till we get to null and then we assign current.next newNode and thats how we add new node to list.
    add(data:T){
        const newNode = new ListNode(data);
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }

    // this is called traversal
    // traversal is to display every data from each node in list.
    // we make current variable which is starting from head - first node in list
    // then we make while loop and check if current is not equaled to null
    // if not then we display current.data and make current equaled to current.next to get to next index
    // if it is then we get console.log displayed all data.
    display(){
        let current = this.head;
        while(current !== null){
            console.log(current.data)
            current = current.next
        }

        console.log("Displayed all data.")
    }

    // delete by value. parameter value and its type is linkedlists type.
    // check if we dont have head (starting node) then console log list is empty
    // if head data is equaled to value then we change head to head.next and its gettin deleted
    // then we make current variable which is equaled to head and make while loop
    // while current.next doesnt equal to null then check if current next.data is equaled to value
    // if it is then current.next = current.next.next and return
    // and at the end we make current=current.next to get to next node
    deleteByVal(value:T){
        if(!this.head) {
            console.log("List is empty.");
            return;
        }
        
        if(this.head.data == value){
            this.head = this.head.next
            return;
        }

        let current = this.head;
        while(current.next !== null){
            if(current.next.data == value){
                current.next = current.next.next
                return;
            }
            current = current.next;
        }
    }

    // delete by index method in linkedlist
    // parameter - index and its type is number.
    // first check if index and this.head is valid. if its not return error or something.
    // second check if index equals to 0 if it does then this.head = this.head.next so this.head is gettig deleted.
    // then lets make 3 variables current;previous;currentIndex;
    // currents type is ListNode<T> or null and equals to this.head
    // previous type is ListNode<T> or null and equals to null
    // currentIndex's type is number and equals to 0
    // then make while loop while current doesnt equal to null and currentIndex is less then index.
    // then check if current equals to null or previous equals to null console.log("index out of bounds")
    // and last previous.next = current.next
    deleteByIndex(index:number){
        if(index < 0 || !this.head){
            console.log("Invalid index or head.")
            return;
        }

        if(index == 0){
            this.head = this.head.next;
            return;
        }

        let current: ListNode<T> | null = this.head;
        let previous: ListNode<T> | null = null;
        let currentIndex = 0;

        while(current !== null && currentIndex < index){
            previous = current;
            current = current.next;
            currentIndex++
        }

        if(current == null || previous == null){
            console.log("Index out of bounds.")
            return;
        }
        previous.next = current.next;
    }


    // so insertat function. parameters data and index data has linkedList's type and index is number
    // if index is less then 0 then its invalid index and return error.
    // then create new node - new ListNode(data) 
    // if index is 0 then newNode.next = this.head and this.head is changed to newNode
    // then we make 2 variables current and count. count is 0 and current is head.
    // then we are taking while loop to get indexed node
    // while current isnot equaled to null and count is less then index - 1
    // current = current.next and count = 0
    // then check if current is equaled to null if it is return "out of bounds"
    // and last handshake. newNode.next=current.next and current.next = newNode.
    insertAt(data:T,index:number){
        if(index < 0) {
            console.log("Invalid index."); 
            return;
        }

        const newNode = new ListNode(data);

        if(index == 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let count = 0

        while(current !== null && count < index - 1){
            current = current.next
            count++
        }

        if(current == null){
            console.log("Out of bounds.")
            return;
        }

        newNode.next = current.next;
        current.next = newNode
    }


    // so this is search function which takes value as parameter and its type is type of linkedList.
    // first is if statement to check if head exists and is valid list.
    // then we make variable named current and assign it this.head 
    // then we have while loop while current doesnt equal to null we go to loop and checking if current.data equals to value
    // if it equals we return message
    // and below if statement we change node
    //after while loop we check if current is null and if current == null then our value wasn't found
    search(value:T){
        if(!this.head) {
            console.log("Invalid list.")
            return;
        }

        let current = this.head;

        while(current !== null){
            if(current.data === value){
                console.log(`${current.data} found.`);
                return;
            }
            current = current.next!;
        }

        if(current == null) {
            console.log("Not found.");
            return;
        }

    }
}

const list = new LinkedList<number>()

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)

list.search(3);

list.display()