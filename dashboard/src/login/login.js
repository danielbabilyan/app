document.title = 'Dashboard - Login';

require('./login.scss');

const template = require('./login.html');

module.exports = {
    template,
    data: function () {
        return {
            msg: {
                classType: '',
                text: ''
            }
        }
    },
    methods: {
        login: function () {
            var self = this;
            $.ajax({
                type: 'POST',
                url: '/login',
                dataType: 'json',
                data: {
                    user: $('input#user').val(),
                    pass: $('input#pass').val()
                },
                success: function (data) {
                    if (data == 'failed') {
                        self.msg.classType = 'uk-alert-danger'
                        self.msg.text = 'Login failed, please try again.'
                    }
                    else if (data == 'empty') {
                        self.msg.classType = 'uk-alert-danger'
                        self.msg.text = 'Please fill in your details.'
                    }
                    else {
                        self.msg.classType = 'uk-alert-success'
                        self.msg.text = 'Login successful!'
                        data = JSON.stringify(data, "", 2);
                        alert(data);
                    }
                }
            });
        }
    }
};