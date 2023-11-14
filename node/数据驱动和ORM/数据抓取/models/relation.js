// 模型之间的关系

const Student = require('./Student');
const Class = require('./Class');

Student.belongsTo(Class);
Class.hasMany(Student);