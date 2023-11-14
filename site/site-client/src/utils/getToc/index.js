import toc from "markdown-toc";
import Remarkable from "remarkable"

function transfer(flatArr) {
    const stack = [];
    const result = [];

    var min = 6;
    for (var i of flatArr) {
        if (i.lvl < min) {
            min = i.lvl;
        }
    }

    for (const item of flatArr) {
        const tocItem = createTOCItem(item);
        if (tocItem.level === min) {
            result.push(tocItem);
        }
        handleItem(tocItem);
    }
    return result;

    function createTOCItem(item) {
        return {
            name: item.content,
            anchor: item.slug,
            level: item.lvl,
            children: [],
        };
    }

    function handleItem(item) {
        const top = stack[stack.length - 1];
        if (!top) {
            stack.push(item);
        } else if (item.level > top.level) {
            // 作为其子目录
            top.children.push(item);
            stack.push(item);
        } else {
            stack.pop();
            handleItem(item);
        }
    }
}


function tran(result) {
    let info = {};
    info.toc = transfer(result);

    // 为各个级别标题添加上 id
    // for (var i of result) {
    //     switch (i.lvl) {
    //         case 1:
    //             {
    //                 var newStr = `<h1 id="${i.slug}">`
    //                 info.htmlContent = info.htmlContent.replace('<h1>', newStr);
    //                 break;
    //             }
    //         case 2:
    //             {
    //                 var newStr = `<h2 id="${i.slug}">`
    //                 info.htmlContent = info.htmlContent.replace('<h2>', newStr);
    //                 break;
    //             }
    //         case 3:
    //             {
    //                 var newStr = `<h3 id="${i.slug}">`
    //                 info.htmlContent = info.htmlContent.replace('<h3>', newStr);
    //                 break;
    //             }
    //         case 4:
    //             {
    //                 var newStr = `<h4 id="${i.slug}">`
    //                 info.htmlContent = info.htmlContent.replace('<h4>', newStr);
    //                 break;
    //             }
    //         case 5:
    //             {
    //                 var newStr = `<h5 id="${i.slug}">`
    //                 info.htmlContent = info.htmlContent.replace('<h5>', newStr);
    //                 break;
    //             }
    //         case 6:
    //             {
    //                 var newStr = `<h6 id="${i.slug}">`
    //                 info.htmlContent = info.htmlContent.replace('<h6>', newStr);
    //                 break;
    //             }
    //     }
    // }
    return info;
}


export default tran;