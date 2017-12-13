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
  * 在app中初始化数据
  * 数据流向： app --> main ---> item
  * item接收数据动态展示
### 3. 完成底部全选全不选的功能
  * 根据显示的todoItem 影响全选全不选的按钮的选中状态
    - 全部完成的checkbox.length === todos.length && this.allCompleteTodos
  * 根据全选全不选的按钮影响todoItem的选中状态
    - 拿到全选全不选的按钮的状态： true/false
    - 将该数据交给app
    - 根据传递过来的isChecked更新todoItem的选中状态
### 4. 封装功能模块
    
    // 封装保存读取数据的localStorage功能模块
    // 思考：封装功能模块根据什么封装？
    // 当功能点大于一个的时候耿庄成对象
    const todo_key = 'todo_key'
    export default {
      getData(){// 读取数据
        return JSON.parse(localStorage.getItem(todo_key))
      },
      setData(value){// 当别人调用该方法的时候保存数据
        localStorage.setItem(todo_key, JSON.stringify(value))
      }
    }
### 自定义事件
  * 绑定事件
    * 事件名
    * 回调函数： function(event){}
  * 触发事件
    * 事件名
    * 数据
  * v-on:事件名=事件的回调函数
  * 组件实例对象.$on(事件名， 回调函数)
  * 组件实例对象.$emit(事件名, 数据)
  * <font color=red>以上用的方式只能是相邻的父子组件传递数据，子组件--->父组件</font>
### slot 插槽
  * 父组件--->子组件
  * 传递的数据： 标签页面
  * 需要传递的数据写在对应组件的表前体
  
## 分割线。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
## vue-router
### 1. 引入Vue核心库，vue-router
### 2. Vue.use(VueRouter)
  * 声明使用Vue的插件： VueRouter.install(Vue)
### 3. 注册路由器
    
    export default new VueRouter({
      routes: [
        {
          path: '/about',
          component: about
        },
        {
          path: '/home',
          component: home
        }
      ]
    })
### 4. 使用路由器

      
