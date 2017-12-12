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