/**
 * commander - 指挥官
 */
var commander = (function (global, doc, undef) {
    var commandList = ['launch', 'stop', 'rate', 'destroy'];

    $('.panel-list-item').click(function (e) {
        var event = e || window.event,
            target = event.target || event.srcElement;

            console.log(target.class);
        if (target.nodeName.toLowerCase() == "button") {
        }
    });

    function _create() {

    }

    return {
        create: _create
    };
}(window, document));
