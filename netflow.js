// defines
var root = '/'
if (window.location.host == 'juentingshie.github.io') {
    root = 'https://juentingshie.github.io/Vue.js/'
}

// console.log(window.location.host)
// defines

// headers
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
// headers

Vue.component('ips', {
    props: ['ip'],
    template: '<li><p>{{ ip.ip }}</p> \
                <p><button v-on:click="getflow(this)" :value= "`${ip.ip}`"> Get flow</button> {{ ip.flow }}</p > ',
    methods: {
        getflow: async function () {
            var ip = this.$el.ownerDocument.activeElement.value
            var index
            ipof417.List.forEach(element => {
                if (element.ip == ip) {
                    index = ipof417.List.indexOf(element)
                }
            });
            ipof417.List[index].flow = await caller(ip)
        }
    }
})
var ipof417 = new Vue({
    el: '#ips',
    data: {
        List: [
            // { ip: '140.118.5.xxx', flow: "NaN" },
        ]
    },
    methods: {
        getflow: async function () {
            for (var i = 0; i < this.List.length; i++) {
                // console.log(this.List[i])
                // console.log(this.List[i].ip)
                // console.log(await caller(this.List[i].ip))
                this.List[i].flow = await caller(this.List[i].ip)
            }
            // console.log(this.flow)
        }
    },
    created: async function () {
        this.List.push({ ip: "", flow: "NaN" })

        $.get('https://www.cloudflare.com/cdn-cgi/trace', function (data) {
            // Convert key-value pairs to JSON
            // https://stackoverflow.com/a/39284735/452587
            data = data.trim().split('\n').reduce(function (obj, pair) {
                pair = pair.split('=');
                return obj[pair[0]] = pair[1], obj;
            }, {});
            console.log(data['ip']);
            ipof417.List[0].ip = data['ip']
        });

        var i = 2
        while (i < 254) {
            this.List.push({ ip: '140.118.5.' + i.toString(), flow: 'NaN' })
            i++
        }
    }
    // created: function () {
    //     this.getflow()
    // }
})

async function create_fetch(ip) {
    // var cors = "https://cors-anywhere.herokuapp.com/"
    var cors = "https://api.allorigins.win/get?url="

    var now = new Date(Date.now());

    var today = now.toLocaleDateString("zh-TW")

    var dt = today + "T00:00:00.000"

    // console.log(dt)


    return fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://network.ntust.edu.tw/flowStatistics/getFlowData?ip=" + ip + "&dt=" + dt + "&units=2")}`)
        .then(response => {
            if (response.ok) return response.json()
            throw new Error('Network response was not ok.')
        })
        .then((c) => {
            // console.log(c.contents)
            return JSON.parse(c.contents)
            // jsonData['items'][0]['totflow']
        })
        .then((jsonData) => {
            // console.log(jsonData['items'][0]['totflow'])
            return jsonData['items'][0]['totflow']
        })
}

async function caller(ip) {
    var flow = await create_fetch(ip)

    // console.log(flow)
    return flow
}