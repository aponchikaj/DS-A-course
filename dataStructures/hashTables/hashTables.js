var hashTable = /** @class */ (function () {
    function hashTable(size) {
        if (size === void 0) { size = 50; }
        this.size = 0;
        this.count = 0;
        this.LOAD_THRESHOLD = 0.75;
        this.size = size;
        this.data = new Array(size).fill(null).map(function () { return []; });
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
    hashTable.prototype.hash = function (key) {
        var total = 0;
        var PRIME = 31;
        for (var i = 0; i < Math.min(key.length, 100); i++) {
            var charCode = key.charCodeAt(i) - 96;
            total = (total * PRIME * charCode) % this.size;
        }
        return total;
    };
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
    hashTable.prototype.set = function (key, value) {
        var index = this.hash(key);
        var data = this.data[index];
        var exists = data.find(function (_a) {
            var k = _a[0];
            return k === key;
        });
        if (exists) {
            exists[1] = value;
        }
        else {
            data.push([key, value]);
        }
        this.count++;
        if (this.count / this.size > this.LOAD_THRESHOLD) {
            this.resize(this.size * 2);
        }
    };
    // resize function - takes newSize as parameter
    // we make variable old and assign table there
    // then we make size variable which is newsize - parameter
    // then we make this.data out table equaled new Array(size).fill(null).map(()=>[])
    // so we make new array
    // then we use for loop get bucket from each table index 
    // then we make nested loop get key and value from bucket
    // then we set key and value to new sized array
    hashTable.prototype.resize = function (newsize) {
        var old = this.data;
        var size = newsize;
        this.data = new Array(size).fill(null).map(function () { return []; });
        for (var _i = 0, old_1 = old; _i < old_1.length; _i++) {
            var bucket = old_1[_i];
            for (var _a = 0, bucket_1 = bucket; _a < bucket_1.length; _a++) {
                var _b = bucket_1[_a], k = _b[0], v = _b[1];
                this.set(k, v);
            }
        }
    };
    // get function gets key as parameter
    // then we get index with hash
    // and get data with that index
    // so we find that key from data index and return value of it but if we didnt found it we return null
    hashTable.prototype.get = function (key) {
        var _a, _b;
        var index = this.hash(key);
        var data = this.data[index];
        return (_b = (_a = data.find(function (_a) {
            var k = _a[0];
            return k === key;
        })) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : null;
    };
    // so delete function has key parameter
    // we get index with hash function
    // and get data[index]
    // then we find item
    // if we didnt find it then it returns false
    // lastly we splice item from data and return true.
    hashTable.prototype.delete = function (key) {
        var index = this.hash(key);
        var data = this.data[index];
        var item = data.findIndex(function (_a) {
            var k = _a[0];
            return k === key;
        });
        if (item === -1)
            return false;
        data.splice(item, 1);
        return true;
    };
    return hashTable;
}());
