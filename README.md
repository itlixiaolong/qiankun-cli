# qiankun-cli
一个初始化乾坤应用的脚手架，初始化完成后，会得到一个模板工程
- 项目说明：
main是vue的主项目，app-vue-hash是vue的hash模式路由的子项目，app-vue-history是vue的history模式路由的子项目，app-jquery-*是传统的jquery的多页子项目 
- 主子项目之间的通讯
在主项目和子项目之间的数据通讯是基于vuex来做的，通讯范围也覆盖了jquery的项目
基于vuex实现各应用之间的响应式视图，有任意一个应用更新了数据，都会触发各个应用的视图更新
- 详细内容参见代码

# install
npm i -g qiankun-cli
# usage
qiankun init

