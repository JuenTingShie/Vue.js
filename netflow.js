let root = '/'
if (window.location.host == 'juentingshie.github.io') {
    root = 'https://juentingshie.github.io/Vue.js/'
}

Vue.component('header-items', {
    props: ['header'],
    // template: '<a href={{ header.url }}>{{ header.text }}</a>'
    template: '<li><a :href="`${header.url}`">{{header.text}}</a></li>'
  })
var app_header = new Vue({
    el: '#header',
    data: {
        List: [
            { id: 0, text: 'Home', url: root },
            { id: 1, text: 'Netflow', url: root + 'netflow' },
        ]
    }
})