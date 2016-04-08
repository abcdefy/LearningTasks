/**
 * commander - 指挥官
 */
var commander = (function (global, doc, undef) {
    var commandList = ['launch', 'stop', 'rate', 'destroy'];

    $('panel-list').click(function (e) {
        var event = e || window.event,
            target = event.target || event.srcElement;

        alert(target.innerHTML);

        if (target.nodeName.toLowerCase() == "button") {
        }
    });
}(window, document));
