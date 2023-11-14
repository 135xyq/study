const os = require('os');

console.log(os.EOL); // 换行

console.log(os.arch()); // 架构名

console.log(os.cpus().length); // 获取cpu内核

console.log(os.freemem() / 1024 ** 3); //当前的空闲内存

console.log(os.homedir()); // 用户目录

console.log(os.hostname()); //主机名

console.log(os.tmpdir()); // 操作系统的临时目录


const path = require('path');

console.log(path.basename('dsgn/afsa/sdfas/a.js')); //文件名

console.log(path.sep); //分割符

console.log(path.dirname('abc/def/fh/a.js'));

console.log(path.resolve('index.js'))