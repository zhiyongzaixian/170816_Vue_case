# 启动Vue项目
## 准备工作
  
    * Vue脚手架初始化项目： vue init webpack webpack-demo
    * cd webpack-demo
    * npm install
    * npm run dev
## 确认组件
  * app：应用主组件
  * add: 添加评论组件
  * list：显示评论组件
  * item: 评论个体
## 搭建静态页面
  * 拆分静态页面
  * 引入第三方css库： bootstrap.css
  * 引入index.css
## 数据动态展现
  * 初始化数据： app
  * 传递数据：
    - 标签属性的形式传递数据
    - 接收数据的组件需要声明接收： props
    - app --> list ---> item