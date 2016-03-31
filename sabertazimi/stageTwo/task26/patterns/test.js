var pubsub = require('./pubsubz.js');

(function () {
    // add observer to observerlist
    var testFirstSub = pubsub.subscribe( 'login', function (topic , data ) {
        console.log(topic + ": " + data );
    });

    // subject broadcast/notify, observer update
    pubsub.publish( 'login', 'hello world!' );
    pubsub.publish( 'login', ['test','a','b','c'] );
    pubsub.publish( 'login', [{'color':'blue'},{'text':'hello'}] );

    pubsub.unsubscribe(testFirstSub);

    // permanent subscribe because of not recording sub-token
    pubsub.subscribe('sum', function (topic, data) {
        if (toString.apply(data) !== '[object Array]') {
            console.log('Please input array: * ' + data + ' * is not array!');
        } else {
            var tmp = data.filter(function (item) {
                    return toString.apply(item) === '[object Number]';
                });

            if (tmp.length) {
                var sum = tmp.reduce(function (previous, current) {
                    return previous + current;
                }, 0);
                console.log('sumof ' + data + ' : ' + sum);
            } else {
                console.log('Please input number array: * ' + data + ' * is not number array!');
            }
        }

        return this;
    });

    pubsub.publish( 'login', 'hello again!' );
    pubsub.publish('sum', 'hello again!');
    pubsub.publish('sum', [1, 2, 3, 4, 5]);
    pubsub.publish('sum', ['a', 'b', 'c', 'd', 'e']);

    // extend subscribe
    pubsub.subscribe('login/extend', function (topic, name, age, date) {
        console.log(topic + ": " + name+" - " + age + " - "  + date);
    });

    pubsub.publish('login/extend', 'sabertazimi', 17, new Date());
}());
