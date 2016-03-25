(function () {
    var data = [30, 20 , 30, 40, 10, 30, 70, 40, 80, 15, 20, 47, 88, 100],
        dom = {
            input: document.getElementById('elem'),
            demo: document.getElementById('demo'),
            // convert to event-delegate
            // shift: document.getElementById('shift'),
            // unshift: document.getElementById('unshift'),
            // pop: document.getElementById('pop'),
            // push: document.getElementById('push')
            btn: document.getElementById('btn-group')
        },
        utils = {
            // validate number format
            toNum: function (num) {
                return parseInt(Array.prototype.filter.call(num.toString(10), function (item) {
                    return item >= '0' && item <= '9';
                }).join(''));
            },
            // delay function
            sleep: function (numberMillis) {
                var now = new Date(),
                    exitTime = now.getTime() + numberMillis;
                while (true) {
                    now = new Date();
                    if (now.getTime() > exitTime)
                    return this;
                }
            }
        },
        // render map with data
        templateRender = function template(targetIndex) {
            var helper = [],
            len = data.length;

            for (var i = 0;i < len;i++) {
                helper.push('<a id="block-' + i + '" href="#" ');
                helper.push('class="btn-custom');
                if (i === targetIndex) {
                    helper.push(' inverse" ');
                } else {
                    helper.push('" ');
                }
                helper.push('style="padding: ' + data[i]*1.8 + 'px 0">');
                helper.push('' + data[i] + '');
                helper.push('</a>');
                dom.demo.innerHTML = helper.join('');
            }

            dom.demo.innerHTML = helper.join('');
        },
        // event delegate mechanism
        bindBtnHandle = function bindBtnHandle() {
            function spaceCheck() {
                if (data.length <= 0) {
                    alert('元素不足');
                    return false;
                } else if (data.length >= 60) {
                    alert('元素过多');
                    return false;
                } else {
                    return true;
                }
            }

            function dataCheck(value) {
                if (isNaN(value)) {
                    alert('请输入正整数');
                    return false;
                } else if (value < 10 || value > 100) {
                    alert('超出范围');
                    return false;
                } else {
                    return true;
                }
            }

            dom.btn.onclick = function (e) {
                var event = e || window.event,
                    target = event.target || event.srcElement,
                    len = data.length,
                    value,
                    tmp;

                switch (target.id) {
                    case 'shift':
                        if (spaceCheck()) {
                            data.shift();
                            templateRender(0);
                        }
                        break;
                    case 'unshift':
                        value = utils.toNum(dom.input.value);
                        if (dataCheck(value)) {
                            data.unshift(value);
                            templateRender(0);
                        }
                        break;
                    case 'pop':
                        if (spaceCheck()) {
                            data.pop();
                            templateRender(0);
                        }
                        break;
                    case 'push':
                        value = utils.toNum(dom.input.value);
                        if (dataCheck(value)) {
                            data.push(value);
                            templateRender(0);
                        }
                        break;
                    case 'sort':
                        for (var i = 0;i < len;i++) {
                            for (var j = i + 1; j < len-1;j++) {
                                if (data[j] < data[i]) {
                                    tmp = data[i];
                                    data[i] = data[j];
                                    data[j] = tmp;
                                    templateRender(i);
                                    templateRender(j);
                                }
                            }
                        }
                        break;
                    default:
                        break;
                }
            };
            // dom.shift.addEventListener('click', function () {
            //     if (data.length <= 0) {
            //         alert('元素不足');
            //         return;
            //     } else if (data.length >= 60) {
            //         alert('元素过多');
            //         return;
            //     }
            //     data.shift();
            //     templateRender(data);
            // }, false);
            //
            // dom.unshift.addEventListener('click', function () {
            //     var value = utils.toNum(dom.input.value);
            //     if (isNaN(value)) {
            //         alert('请输入正整数');
            //         return;
            //     } else if (value < 10 || value > 100) {
            //         alert('超出范围');
            //         return;
            //     }
            //     data.unshift(value);
            //     templateRender(data);
            // }, false);
            //
            // dom.pop.addEventListener('click', function () {
            //     if (data.length <= 0) {
            //         alert('元素不足');
            //         return;
            //     } else if (data.length >= 60) {
            //         alert('元素过多');
            //         return;
            //     }
            //     data.pop();
            //     templateRender(data);
            // }, false);
            //
            // dom.push.addEventListener('click', function () {
            //     var value = utils.toNum(dom.input.value);
            //     if (isNaN(value)) {
            //         alert('请输入正整数');
            //         return;
            //     } else if (value < 10 || value > 100) {
            //         alert('超出范围');
            //         return;
            //     }
            //     data.push(value);
            //     templateRender(data);
            // }, false);
        };

    (function () {
        templateRender(0);
        bindBtnHandle();
    }());
}());
