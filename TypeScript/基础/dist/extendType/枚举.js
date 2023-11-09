var gender;
(function (gender) {
    gender["male"] = "\u7537";
    gender["female"] = "\u5973";
})(gender || (gender = {}));
console.log(gender.female);
