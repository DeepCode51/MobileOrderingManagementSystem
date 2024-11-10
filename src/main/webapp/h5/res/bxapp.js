var theme = 'ios';
if (location.href.indexOf('theme=md') >= 0) theme = 'md';
var plugin = {
    params: {
        theme: theme,
        root: '#app',
    }
};
if (Framework7.use) Framework7.use(plugin);
else if (Framework7.Class && Framework7.Class.use) Framework7.Class.use(plugin);


var app = new Framework7({
        // App root element
        root: '#app',
        lazy: {
            threshold: 300,
            sequential: false,
        },
        // App Name
        name: '服务',
        // App id
        id: 'com.myapp.test',
        // Enable swipe panel
        panel: {
            swipe: 'left',
        },
        // Add default routes
        routes: [
        {
            path: '/my-policy-detail/',
            url: 'my-policy-detail.html',
        },
        ]
});
var $$ = Dom7;