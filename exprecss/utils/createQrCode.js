// 生成二维码

const QrCode = require('qrcode');
const path = require('path');

const qrCodePath = path.resolve(__dirname, '../public/img', 'qrcode.jpg');


QrCode.toFile(qrCodePath, 'hsz my all!', {
    color: {
        dark: '#0ff',
        light: '#000',
    }
}, (error) => {
    console.log(error)
})