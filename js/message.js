!function () {
    // var view = document.querySelector('section.message')
    var model = Model({ resourceName: 'Message' })

    var view = View('section.message')



    // var model = {
    //     // 获取数据
    //     initAV: function () {
    //         var APP_ID = 'fYbTwH7zLi4sG1XDxhUfb4Jg-gzGzoHsz';
    //         var APP_KEY = 'E6tzYjA2zxbRiixYO2s8OVAJ';
    //         AV.init({
    //             appId: APP_ID,
    //             appKey: APP_KEY
    //         });
    //     },
    //     fetch: function () {
    //         var query = new AV.Query('Message');
    //         query.find()
    //         return query.find()  //Promise 对象
    //     },
    //     //创建数据
    //     save: function (name, content) {
    //         var Message = AV.Object.extend('Message')
    //         var message = new Message()
    //         return message.save({   //Promise 对象
    //             'name': name,
    //             'content': content
    //         })
    //     }
    // }

    var controller = Controller({
        // view: null,
        // model: null,
        messageList: null,
        form: null,
        init: function (view, controller) {
            // this.view = view
            // this.model = model

            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            // this.model.initAV()
            this.loadMessages()
            // this.bindEvents()
        },
        loadMessages: function () {
            this.model.fetch()
                .then(
                    (messages) => {
                        let array = messages.map((item) => item.attributes)
                        array.forEach(function (item) {
                            let li = document.createElement('li')
                            li.innerText = `${item.name}：${item.content}`
                            // let messageList = document.querySelector('#messageList')
                            this.messageList.appendChild(li)
                        })
                    },
                    function (error) {
                        alert('提交失败，请稍后再试。')
                    }).then(() => { }, (error) => {
                        console.log(error)
                    });
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let name = myForm.querySelector('input[name=name]').value
            let content = myForm.querySelector('input[name=content]').value
            this.model.save({'name': name, 'content': content}).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}：${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                // myForm.querySelector('input[name=name]').value = ""
                myForm.querySelector('input[name=content]').value = ""
            })
        }
    })
    controller.init(view, model)
}.call()



// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })
