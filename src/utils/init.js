
const ora = require('ora')
const inquirer = require('inquirer')
const questions =require('./questions')
const judgelang = require('./judgeLang')
const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const editPackageJson=require('./editPackage')


// init 的所有的逻辑



// 可能还需要用户配置一些数据 来结合渲染我的项目
module.exports = async (projectName) => {
    // // 1) 获取项目的所有模板
    // const spinner = ora('fetching template....')
    // spinner.start()
    // let repos = await fetchRepoList()
    // spinner.succeed()
    // repos = repos.map(item => item.name)
    // console.log(repos)

    // 获取之前 显示loading, 关闭loading
    // 选择模板 inquirer
    inquirer
    .prompt(questions)
    .then( async(answers) => {
        // 获取答案
        const version = answers.version;
        const projectName = answers.projectName;
        const repository = answers.repository||'itlixiaolong/qiankun_config_template';
        const author=answers.author
        const lang=judgelang(answers.lang)
        console.log('lang',lang);
        let destination = `${process.cwd()}/${projectName}`
        //TODO 根据lang进行不同仓库的拉去
        const spinner = ora('fetching template....')  
        spinner.start();
        spinner.color = 'green';
        try {
            // repository模板地址  destination // clone 是否是克隆
            await download(repository, destination)
            editPackageJson({version,destination,projectName,author,spinner})
          
          } catch (error) {
            spinner.color = "red";
            spinner.text = "下载失败";
            spinner.fail();
            console.log(error);
          }
    });
}


