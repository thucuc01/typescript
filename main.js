var x = 'codegym';
console.log(x);
var arrawFuntio = function () {
    console.log("CodeGym");
};
arrawFuntio();
var Student = /** @class */ (function () {
    function Student(id, name) {
        this._id = id;
        this._name = name;
    }
    return Student;
}());
var student = new Student(1, "Cuc");
console.log(student);
