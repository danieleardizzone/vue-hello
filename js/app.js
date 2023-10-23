const createApp = Vue.createApp

const param = {
    data: function () {
    return {
        message: 'Vue Hello!'
    }
    }
};

const hello = createApp(param);

hello.mount('h1');