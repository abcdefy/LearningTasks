var pubsub = require('./pubsubz.js'),
    command = require('./command.js');

(function () {
    console.log('');
    console.log('Observer Pattern');
    
    // add observer to observerlist
    var testFirstSub = pubsub.subscribe( 'login', function (topic , data ) {
            console.log( topic + ": " + data );
        });

    // subject broadcast/notify, observer update
    pubsub.publish( 'login', 'hello world!' );
    pubsub.publish( 'login', ['test','a','b','c'] );
    pubsub.publish( 'login', [{'color':'blue'},{'text':'hello'}] );

    setTimeout(function(){
        pubsub.unsubscribe(testFirstSub);
    }, 0);

    // permanent subscribe
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
}());

(function () {
    console.log('');
    console.log('Command Pattern: ');

    console.log(command.execute('isNull', null));             // true
    console.log(command.execute('isNull', 'sabertazimi'));    // true
    console.log(command.execute('isArray', new Array(5)));    // true
    console.log(command.execute('isArray', 'sabertazimi'));   // true
    console.log(command.execute('isString', 'sabertazimi'));  // true
    console.log(command.execute('isString', 14800));
}());
