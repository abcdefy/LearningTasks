module.exports = (function ( window, doc, undef ) {

    var pubsubz ={};

    var topics = {},
        subUid = -1;

    pubsubz.publish = function ( topic, args ) {

        // undefined check
        if (!topics[topic]) {
            return false;
        }

        setTimeout(function () {
            var subscribers = topics[topic],
                len = subscribers ? subscribers.length : 0;

            while (len--) {
                subscribers[len].func(topic, args);
            }
        }, 0);

        return true;

    };

    pubsubz.subscribe = function ( topic, func ) {

        // undefined check
        if (!topics[topic]) {
            topics[topic] = [];
        }

		// add observer to observerlist(topics)
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };

    pubsubz.unsubscribe = function ( token ) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return false;
    };

    return pubsubz;
}( this, this.document, undefined ));