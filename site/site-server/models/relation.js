// 模型之间的关系

const Article = require('./article');
const Category = require('./category');
const Comments = require('./comment');



Article.belongsTo(Category);
Category.hasMany(Article);

Comments.belongsTo(Article);
Article.hasMany(Comments);