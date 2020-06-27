# 结构介绍
Redux解决的根本问题是，如何让组件A和组件B共享一个state。
它给出的解决方案是：
    组件A --connect函数-- Store --connect函数-- 组件B
即实际上所有的state存储在Store内，其他组件通过connect函数来获取/修改该一个state。
假设一个组件A想修改一个组件B里会显示的state S，那么：
* A会通过一个叫做mapDispatchToProps的函数发送一个“action”（以及该action需要的参数）到Store；
* Store收到该action之后会由一个被称为reducer的模块根据action的类别来处理该action；
* 处理完成后，B会通过一个叫做mapStateToProps的函数接受到该修改，并在B内更新S的值。
另外，Redux通过一个“Provider”组件来把Store和整个组件连接起来。
通过使用Redux，我们可以让所有组件共享token（以及其他的内容），这样我们可以在任何页面发出带有token的HTTP请求，使得后端认可前端的操作权限。