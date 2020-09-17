const program = require('commander');
const { version } = require('./utils/constants');
const path = require('path')
// const { actionsMap } = require('./utils/actions-help')

const actionsMap = {
    init: {
        alias: 'i',
        description: 'init a project',
        examples: [
            'long-cli init', 
        ]
    },
    notFound: {
        alias: '',
        description: 'command not found',
        examples: []
    }
}
// 循环创建命令
Object.keys(actionsMap).forEach((action) => {
    program
        .command(action) // 命令的名称
        .alias(actionsMap[action].alias) // 命令的别名
        .description(actionsMap[action].description) // 命令的描述
        .action(() => { // 动作
            if (action === 'init') { // 引用对应的动作文件 将参数传入
                require(path.resolve(__dirname, 'utils',action))(...process.argv.slice(3));
            } else { // 如果动作没匹配到说明输入有误
                console.log(actionsMap['notFound'].description);
            }
        });
});

//监听help命令打印帮助信息 
program.on('--help', () => {
    console.log('help Examples');
    Object.keys(actionsMap).forEach((action) => {
        (actionsMap[action].examples || []).forEach((example) => {
            console.log(` ${example}`);
        });
    });
});

//解析用户传入的参数
program.version(version)
    .parse(process.argv);