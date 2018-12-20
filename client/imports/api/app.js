var app = function() {
    $(function() {
        navToggleRight();
    });

    var navToggleRight = function() {
        $('#toggle-right').on('click', function() {
            $('#sidebar-right').toggleClass('sidebar-right-open');
            $("#toggle-right .fa").toggleClass("fa-indent fa-dedent");
        });
    };
}();
