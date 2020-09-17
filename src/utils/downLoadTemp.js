// node的 util 模块 promisify可以把回调promise化
const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
/**
 * @description: 下载模板
 * @param {type} 
 * @return: 
 */
const downloadTemplate =  async function({ repository }) {
    console.log('down',process.cwd());
    // repository模板地址  projectName项目名称 // clone 是否是克隆
    await download(repository)
};

module.exports=downloadTemplate