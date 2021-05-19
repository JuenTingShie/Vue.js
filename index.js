var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{
        text: '学习 JavaScript'
      },
      {
        text: '学习 Vue'
      },
      {
        text: '整个牛项目'
      }
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: '我的雲端硬碟'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义 attribute。
  // 这个 prop 名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    List: [{
        id: 0,
        text: 'hehe0'
      },
      {
        id: 1,
        text: 'hehe1'
      },
      {
        id: 2,
        text: 'hehe2'
      },
    ]
  }
})


function toggle_seen(element) {
  app3.seen = !app3.seen
}