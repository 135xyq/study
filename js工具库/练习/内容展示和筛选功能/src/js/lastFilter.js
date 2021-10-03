//合并filterArrByText 和 filterArrBySex方法
function combineFilterFunc(config) {
    return function(data) {
        var lastArr = data;
        for (var prop in config) {
            lastArr = config[prop](lastArr, state[prop]);
        }
        return lastArr;
    }
}

var lastFilterFunc = combineFilterFunc({ sex: filterArrBySex, text: filterArrByText });