import Mock from "mockjs";
import avatarUrl from "@/assets/images/head.jpeg";
import qqUrl from "@/assets/images/qq.jpg";
import weixinUrl from "@/assets/images/weixin.jpg";
import favicon from "@/assets/images/favicon.jpg";

Mock.mock("/api/setting", 'get', {
    code: 0,
    msg: "",
    data: {
        avatar: avatarUrl,
        siteTitle: "筱",
        github: "https://github.com/135xyq",
        qq: "242.711995",
        qqQrCode: qqUrl,
        weixin: "xyq010305",
        weixinQrCode: weixinUrl,
        mail: "xyq135@gmail.com",
        icp: "筱专属",
        githubName: "xyq135",
        favicon: favicon,
    }
})