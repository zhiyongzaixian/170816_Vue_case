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
    - 标签属性的形式传递数据 :key=value
    - 接收数据的组件需要声明接收： props
    - app --> list ---> item
## 子组件向父组件传递数据
  * 父组件定义方法，声明形参
  * 将方法传递给子组件，子组件调用传入实参
  * 父组件的方法定义methods
  * 子组件做的操作
  
        addComment(){
          // 收集数据
             let username = this.username
             let comment = this.comment
             // 判断数据的合法性
             if(!username || !comment){
               alert('输入的内容不能为空')
               return
             }
     
             // 整理数据
             let commentObj = {username, comment}
             // 将数据传递给app
             this.add(commentObj)
     
             // 清空用户输入的内容
             this.username = ''
             this.comment = ''
           }
         }
## 删除功能
  * 思考： 
    - 删除数组里的某一项
    - 需要的index
    - 提供index的是：item组件
  * 实践： 
    - 将item里的index传递给app组件
    - 在app组件里操作数据
## 分割线
## todo_case
### 1. 拆分组件
  * app: 应用主组件
  * header: 头部组件
  * main: 主体组件
    * item: todo个体组件
  * footer: 底部组件
  * 数据源： app
### 2. 实现静态页面
  