class hashTable<T> {
    private data: Array<Array<[string,T]>>;
    private size:number = 0
    private count: number = 0;
    private LOAD_THRESHOLD = 0.75;

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

    // set function takes key and value parameters
    // then we create 3 variables
    // 1 index where we use hash function and pass key as parameter
    // that gives us the total value that was in hash function.
    // then we create data variable that equals data at index of that hash function
    // then we create exists variable where we are searching if we have that key in that index
    // then if it exists it changes value of that array so exists[0] is key and 1 is value
    // and if we dont we push new data to  that index
    // then we increase count by one and if count / size is more then LOAD_THRESHOLD(0.75)
    // then we make size * 2 of table
    // using function resize
    set(key:string,value:T){
        const index = this.hash(key);
        const data = this.data[index]
        const exists = data.find(([k])=>k===key);
        if(exists){
            exists[1] = value
        }else{
            data.push([key,value])
        }

        this.count++
        if(this.count / this.size > this.LOAD_THRESHOLD) {
            this.resize(this.size*2)
        }
    }
    
    // resize function - takes newSize as parameter
    // we make variable old and assign table there
    // then we make size variable which is newsize - parameter
    // then we make this.data out table equaled new Array(size).fill(null).map(()=>[])
    // so we make new array
    // then we use for loop get bucket from each table index 
    // then we make nested loop get key and value from bucket
    // then we set key and value to new sized array
    resize(newsize:number){
        const old = this.data
        const size = newsize
        this.data = new Array(size).fill(null).map(()=>[])

        for(const bucket of old){
            for(const [k,v] of bucket){
                this.set(k,v);
            }
        }
    }

    // get function gets key as parameter
    // then we get index with hash
    // and get data with that index
    // so we find that key from data index and return value of it but if we didnt found it we return null
    get(key:string){
        const index = this.hash(key)
        const data = this.data[index]
        return data.find(([k])=>k===key)?.[1] ?? null;
    }

    // so delete function has key parameter
    // we get index with hash function
    // and get data[index]
    // then we find item
    // if we didnt find it then it returns false
    // lastly we splice item from data and return true.
    delete(key:string){
        const index = this.hash(key);
        const data = this.data[index]
        const item = data.findIndex(([k])=> k === key);
        if(item === -1) return false;
        data.splice(item,1)
        return true
    }
}