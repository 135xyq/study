const Admin = require('./Admin');
const Article = require('./Article');
const ArticleImages = require('./ArticleImages');
const Comments = require('./Comments');


Article.hasMany(ArticleImages);
ArticleImages.belongsTo(Article);