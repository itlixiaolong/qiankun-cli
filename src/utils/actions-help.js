const actionsMap = {
    create: { // 创建模板
        description: 'create project',
        alias: 'cr',
        examples: [
            'long-cli create <template-name>',
        ]
    },
    config: { // 配置配置文件
        description: 'config info',
        alias: 'c',
        examples: [
            'long-cli config get <k>',
            'long-cli config set <k> <v>',
        ],
    },
    '*': {
        description: 'command not found',
    },
};
module.exports ={
    actionsMap
} 