var tr = document.getElementsByTagName('input');
var td = Array.prototype.slice.call(tr);
td.forEach(function(ele, index, self) {
    if (ele.getAttribute('type') == 'radio') {
        console.log(2);
        if (ele.value == '678270A280024E23A605A7DC2BE6F877') {
            console.log(1);
            ele.setAttribute('checked', 'checked');
        }
    }
})

var tr = document.getElementsByTagName('input');
var td = Array.prototype.slice.call(tr);
td.forEach(function(ele, index, self) {
    if (ele.getAttribute('type') == 'radio') {
        console.log(2);
        if (ele.style.checked == 'checked') {
            console.log(1);
            ele.setAttribute('checked', null);
        }
    }
})

var tr = document.getElementsByTagName('input');
var td = Array.prototype.slice.call(tr);
td.forEach(function(ele, index, self) {
    if (ele.getAttribute('type') == 'radio') {
        console.log(1)
        console.log(ele.innerText);
    }
})