var bubblesortv2 = function (arr) {
    var _a;
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var swapped = false;
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                swapped = true;
            }
        }
        if (!swapped) {
            console.log("Sorted early at pass ".concat(i + 1));
        }
    }
    return arr;
};
