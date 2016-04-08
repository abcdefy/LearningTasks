/*
    logger - 向右侧信息台输出信息
    pattern - singleton
 */
var logger = (function(global, doc, undefined) {
    function _log(msg) {
        if (msg) {
            $('.logger-list').last().append('<li "class="logger-list-item"> - ' + new Date() + ': ' + msg + ' - </li>');
        }
    }

    return {
        log: _log
    };
}(window, document));
