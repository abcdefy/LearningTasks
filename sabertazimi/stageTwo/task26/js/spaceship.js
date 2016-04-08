function spaceship(orbit) {
    var obj = {
        isFly: falsem,
        isGone: false,
        leftEnergy: 100,
        restoreSpeed: 5,
        consumeSpeed: 10,
        flySpeed: 1,
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
            messageReceiver: function (msg) {
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
