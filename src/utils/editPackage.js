const fs = require('fs')
const chalk = require('chalk')
const editFile = function ({ version, destination, projectName, author, spinner }) {
    // 读取文件
    fs.readFile(`${destination}/package.json`, (err, data) => {
        if (err) throw err;
        // 获取json数据并修改项目名称,版本号,作者
        let _data = JSON.parse(data.toString())
        _data.name = projectName
        _data.author = author
        _data.version = version
        let str = JSON.stringify(_data, null, 4);
        // 写入文件
        fs.writeFile(`${destination}/package.json`, str, function (err) {
            if (err) throw err;
        })
        spinner.color = 'white';
        spinner.text = `${chalk.green(`项目初始化成功\ncd ${projectName}\nyarn install\nyarn start`)} `;
        spinner.succeed();
    });
};
module.exports = editFile