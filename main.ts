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


}

const list = new LinkedList<number>()

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)

list.display()