var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '網頁載入於 ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
});

var app3_1 = new Vue({
  el: '#app-3_1',
  data: {
    seen: false,
    message: 'hehehehehehe'
  },
  methods: {
    toggleEle: function () {
      this.seen = !this.seen
    }
  }

})

var app3_2 = new Vue({
  el: '#app-3_2',
  data: {
    message: 'hehehehehehehehe'
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{
        text: '學習 JavaScript'
      },
      {
        text: '學習 Vue'
      },
      {
        text: '整個項目'
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


Vue.component('header-items', {
    props: ['header'],
    // template: '<a href={{ header.url }}>{{ header.text }}</a>'
    template: '<li><a :href="`${header.url}`">{{header.text}}</a></li>'
  })
var app_header = new Vue({
    el: '#header',
    data: {
        List: [
            { id: 0, text: 'Home', url: '/Vue.js' },
            { id: 1, text: 'Netflow', url: '/Vue.js/netflow' },
        ]
    }
})


function toggle_seen(element) {
  app3.seen = !app3.seen
}