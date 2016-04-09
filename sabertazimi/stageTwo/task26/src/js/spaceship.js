/**
 *  spaceship  factory
 */
var shipFactory = (function (global, doc, undef) {

    // spaceship prototype
    function spaceship(options) {
        var obj = {
            orbit: options.orbit || 0,
            isFly: false,
            isGone: false,
            leftEnergy: 100,
            flySpeed: options.flySpeed || 1,
            restoreSpeed: options.flySpeed || 5,
            consumeSpeed: options.consumeSpeed || 10,
            angle: 0,

            driveSys: {
                launch: function () {
                    if (obj.leftEnergy > 0) {
                        obj.isFly = true;
                        var launchId = setInterval(function(){
                            obj.driveSys.fly();
                            obj.energySys.consume();
                        }, 1000);
                    }
                },
                stop: function () {
                    obj.isFly = false;
                    clearInterval(stopId);
                    var stopId = setInterval(function(){
                        obj.energySys.restore();
                    }, 1000);
                },
                fly: function () {
                    if (obj.isFly) {
                        obj.angle += obj.speed;
                        console.log(obj.angle);
                    }
                    obj.angle %= 360;
                    $('#ship' + obj.orbit).css('transform', 'rotate(' + obj.angle + 'deg)');
                }
            },

            energySys: {
                restore: function () {
                    if (!obj.isFly) {
                        obj.leftEnergy += obj.restoreSpeed;
                    }
                    if (obj.leftEnergy > 100) {
                        obj.leftEnergy = 100;
                    }
                },
                consume: function () {
                    if (obj.isFly) {
                        obj.leftEnergy -= obj.consumeSpeed;
                    }
                    if (obj.leftEnergy <= 0) {
                        obj.isFly = false;
                        obj.leftEnergy = 0;
                    }
                    $('#ship' + obj.orbit).val(obj.leftEnergy);
                }
            },

            destroySys: {
                destroy: function () {
                    obj.isGone = true;
                    setTimeout(function () {
                        $('#ship' + obj.orbit).remove();
                    }, 1000);
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
                            obj.flySpeed = msg.flySpeed;
                            break;
                        case 'destroy':
                            obj.destroySys.destroy();
                            break;
                    }
                }
            }
        };

        return obj;
    }

    function _create(options) {
        if (typeof options === 'object') {
            var obj = new spaceship(options);
            //  开始监测指挥官发来的信号
            mediator.subscribe(obj.orbit, obj);
            setTimeout(function () {
                $('.space').append('<button class="spaceship" type="button" id="ship' + obj.orbit + '">100%</button>');
            }, 1000);
            return obj;
        }
    }

    return {
        create: _create
    };

}(window, document));
