const fs=require('fs')
const {version} = require('./constants')
const questions = [
    {
    type: 'input', // type为答题的类型 
    name: 'projectName', // 本题的key，待会获取answers时通过这个key获取value
    message: 'projectName：', // 提示语
    validate (val) {
        if(!val) { // 验证一下输入是否正确
            return '请输入文件名';
        }
        if(fs.existsSync(val)) { // 判断文件是否存在
            return '文件已存在';
        }else {
            return true;
        };
    }
},
{
    type: 'input',
    name: 'version',
    message: `verson(${version})：`,
    default: version,
    validate (val) {
        return true;
    }
},
{
    type: 'input',
    name: 'author',
    message: 'author',
    default: ' '
},
{
    type: 'checkbox',
    name: 'lang',
    message: '选择你的项目包含的语言类型，只选择一个，默认所有应用是同一种语言',
    choices: [
        { name: 'jsp/php/jquery', value: 'js' },
        { name: 'vue', value: 'vue' },
        { name: 'react', value: 'react' },     
    ],
    validate (val) {
        if(!val.length){
            return '请选怎乾坤应用包含的语言类型';
        }else{
            return true
        }
    }
},
// {
//     type: 'input',
//     name: 'repository',
//     message: 'repository：',
//     default: 'itlixiaolong/config_template'
// }
];

module.exports=questions