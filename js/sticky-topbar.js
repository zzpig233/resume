// !function () {
//     var view = document.querySelector('#topNavBar')
//     window.addEventListener('scrool', function (x) {
//         if (window.scrollY > 0) {
//             view.classList.add('sticky')
//         } else {
//             view.classList.remove('sticky')
//         }
//     })
// }.call()

!function () {
    // var view = document.querySelector('.topNavBar')
    var view = View('#topNavBar')
    // var model = {
    //     init(){
    //       var APP_ID = 'TsDnap9SEXjSvGSowP7gXXJC-gzGzoHsz'
    //       var APP_KEY = 'rGye31p12mM3wFpNRn9RADu9'
    //       AV.init({ appId: APP_ID, appKey: APP_KEY })
    //     },
    //     fetch: function(){ 
    //       var query = new AV.Query('X');
    //       return query.find() // Promise 对象
    //     },
    //     // 创建数据
    //     save: function(name){
    //       var Message = AV.Object.extend('X');
    //       var message = new Message();
    //       return message.save({  // Promise 对象
    //         'name': name
    //       })
    //     }
    //   }
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
            // this.bindEvnets.bind(this)
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
            //箭头函数没有this
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)
    // controller.init.call(controller, view)
}.call()