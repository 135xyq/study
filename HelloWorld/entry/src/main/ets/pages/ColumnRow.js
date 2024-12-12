import HelloComponent from './HelloComponent';
class ItemData {
    constructor(title, desc) {
        this.title = title;
        this.desc = desc;
    }
}
let iconList = [];
for (let i = 0; i < 10; i++) {
    iconList.push(new ItemData('列表标题' + i, '列表内容' + i));
}
struct Index extends   {
    constructor() { }
    build() {
        ;
    }
}
//# sourceMappingURL=ColumnRow.js.map