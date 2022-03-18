const Admin = require('./Admin');
const Article = require('./Article');
const ArticleImages = require('./ArticleImages');
const Comments = require('./Comments');

Admin.hasMany(Article);
Article.belongsTo(Admin);

Article.hasMany(ArticleImages);
ArticleImages.belongsTo(Article);

Article.hasMany(Comments);
Comments.belongsTo(Article);