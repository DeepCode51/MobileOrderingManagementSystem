jQuery(function($) {
    $('#contactform').validate({
        rules: {
            customerName: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
            }
        },
        messages: {
            customerName: {
                required: "Please enter your name",
            },
            email: {
                required: "Please enter your email"
            },
            message: {
                required: "Please enter your message"
            }
        },

    });
    $('#newsletterform').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },

    });
});