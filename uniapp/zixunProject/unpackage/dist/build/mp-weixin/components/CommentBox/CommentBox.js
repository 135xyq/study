(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/CommentBox/CommentBox"],{"191a":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){Promise.resolve().then(function(){return resolve(e("5fa5"))}.bind(null,e)).catch(e.oe)},u={name:"CommentBox",props:{commentData:Object,isReply:{type:Boolean,default:!1}},components:{CommentBox:o},methods:{commnetReply:function(n){n.isReply&&(n.comment.reply_id=n.comment.comment_id,n.comment.comment_id=this.commentData.comment_id),this.$emit("commnetReply",n)}}};t.default=u},"5fa5":function(n,t,e){"use strict";e.r(t);var o=e("8748"),u=e("a38a");for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e("cfb8");var c,r=e("f0c5"),i=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=i.exports},8748:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var o={uniDateformat:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat")]).then(e.bind(null,"791a"))},CommentBox:function(){return Promise.resolve().then(e.bind(null,"5fa5"))}},u=function(){var n=this,t=n.$createElement;n._self._c},a=[]},a38a:function(n,t,e){"use strict";e.r(t);var o=e("191a"),u=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=u.a},cfb8:function(n,t,e){"use strict";var o=e("d8e6"),u=e.n(o);u.a},d8e6:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/CommentBox/CommentBox-create-component',
    {
        'components/CommentBox/CommentBox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5fa5"))
        })
    },
    [['components/CommentBox/CommentBox-create-component']]
]);
