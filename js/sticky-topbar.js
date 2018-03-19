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
    var view = document.querySelector('.topNavBar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
            // this.bindEvnets.bind(this)
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)
}.call()