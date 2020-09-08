
(function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
    fnames[3] = 'ADDRESS';
    ftypes[3] = 'address';
    fnames[4] = 'PHONE';
    ftypes[4] = 'phone';
}(jQuery));
var $mcj = jQuery.noConflict(true);

// for validation of bootstrap form

(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    // Submit suggestion form

                    $.ajax({
                        type: "POST",
                        url: "suggest.php",
                        data: {
                            email: $('input[name="email"]').val(),
                            name: $('input[name="name"]').val(),
                            suggest: $('textarea[name="suggest"]').val(),
                            subscribe: $('input[name="subscribe"]').val()
                        },
                        dataType: "JSON",

                        success: function(response){
                            var success = $.parse(response);
                            
                        }
                    });
                    event.preventDefault();
                    setTimeout(function(){$('#suggestion').modal('toggle')}, 1000);
                }

                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();