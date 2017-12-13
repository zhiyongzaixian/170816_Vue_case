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
