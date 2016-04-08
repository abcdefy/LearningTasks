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

(function (global, doc, undef) {
}(window, document));

/*
    logger - 向右侧信息台输出信息
    pattern - singleton
 */
var logger = (function(global, doc, undef) {
    function _log(msg) {
        if (msg) {
            $('.logger-list').last().append('<li "class="logger-list-item"> - ' + new Date() + ': ' + msg + ' - </li>');
        }
    }

    return {
        log: _log
    };
}(window, document));

/**
 * mediator - 中介者，负责传送指令
 */
var mediator = (function ( global, doc, undef ) {
    var orbits = {},
        subUid = -1,

        subscribe = function (orbit, func ) {
            var token;

            if (!orbits[orbit]) {
                orbits[orbit] = [];
            }

    		// add observer to observerlist(orbits)
            token = (++subUid).toString();
            orbits[orbit].push({
                context: this,
                orbit: orbit,
                token: token,
                callback: func
            });

            return token;
        },
        publish = function (orbit) {
            var args,
                len;

            // undefined check
            if (!orbits[orbit]) {
                return false;
            }

            args = Array.prototype.slice.call(arguments);
            len = orbits[orbit].length;

            for (var i = 0;i < len;i++) {
                var subscription = orbits[orbit][i];
                subscription.callback.apply(subscription.context, args);
            }

            // chain pattern
            return this;
        },
        unsubscribe = function (token) {
            for (var m in orbits) {
                if (orbits[m]) {
                    for (var i = 0, j = orbits[m].length; i < j; i++) {
                        if (orbits[m][i].token === token) {
                            orbits[m].splice(i, 1);
                            return token;
                        }
                    }
                }
            }
            return false;
        };

        return {
            subscribe: subscribe,
            publish: publish,
            unsubscribe: unsubscribe,
        };
}(window, document));

/**
 *  spaceship prototype
 */
function spaceship(orbit) {
    var obj = {
        isFly: falsem,
        isGone: false,
        leftEnergy: 100,
        flySpeed: 1,
        restoreSpeed: 5,
        consumeSpeed: 10,
        angle: 0,

        driveSys: {
            launch: function () {
                if (obj.energy > 0) {
                    obj.isFly = true;
                }
            },
            stop: function () {
                obj.isFly = false;
            },
            fly: function () {
                if (obj.isFly) {
                    obj.angle += obj.speed;
                }
                obj.angle %= 360;
            }
        },

        energySys: {
            restore: function () {
                if (!obj.isFly) {
                    obj.energy += obj.restoreSpeed;
                }
                if (obj.energy > 100) {
                    obj.energy = 100;
                }
            },
            consume: function () {
                if (obj.isFly) {
                    obj.energy -= obj.consumeSpeed;
                }
                if (obj.energy <= 0) {
                    obj.isFly = false;
                    obj.energy = 0;
                }
            }
        },

        destroySys: {
            destroy: function () {
                obj.isGone = true;
                $('#ship' + obj.orbit).remove();
            }
        },

        transferSys: {
            messageReceiver: function (orbit, msg) {
                switch (msg.command) {
                    case 'launch':
                        obj.driveSys.launch();
                        break;
                    case 'stop':
                        obj.driveSys.stop();
                        break;
                    case 'rate':
                        obj.flySpeed = msg.value;
                        break;
                    case 'destory':
                        obj.destroySys.destroy();
                        break;
                    default:
                        logger.log('错误指令!');
                        break;
                }
            }
        }
    };

    return obj;
}
