# JS 异步解决方案的发展历程以及优缺点。 

- 回调函数

  优点: 解决了同步的问题(当某一个任务需要花费大量时间才能执行完时会阻塞后面的代码运行)

   缺点: 回调过多时会形成回调地狱

- promise

  优点: 解决了回调地狱的问题, 可以通过promise.then进行链式处理

  缺点: promise一旦创建就无法被取消, 并且promise内部的错误需要通过回调函数来捕获

- generator

​        特点: 可以控制函数的执行来实现类似于async/await的效果

- async/await 

  优点: 能以同步的方式编写异步代码, 让整个代码逻辑清晰可见

  缺点: 由于await会阻塞后续所有代码的执行, 当多个异步操作之间没有明确的先后顺序时, 使用await会降低异步执行效率

