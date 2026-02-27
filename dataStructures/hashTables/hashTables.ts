class hashTable<T> {
    private data: Array<Array<[string,T]>>;
    private size:number = 0

    constructor(size:number = 50){
        this.size = size
        this.data = new Array(size).fill(null).map(()=>[]);
    }

    // so hash function gets parameter key
    // then we create 2 variables total which is 0 we start from 0
    // and prime which is 31. in hashTables hashing 31 is said that its preventing collisions mostly
    // then we make for loop we create variable i which is 0
    // then while i is less then Math.min(key.length,100) formula we increase i
    // then inloop we create charCode variable that equals parameter.charCodeAt(i) - 96
    // so that charCode gives ASCII number by that key.charCodeAt(i) function and - 96
    // then we make assign formula to total
    // total = (total X PRIME X charCode) % size. size of hashTable
    // and we return total
    hash(key: string){
        let total = 0;
        const PRIME = 31
        for(let i=0;i<Math.min(key.length,100);i++){
            const charCode = key.charCodeAt(i) - 96;
            total = (total * PRIME * charCode) % this.size
        }
        return total;
    }

    
}