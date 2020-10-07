// 时钟和检查deadline部分
var a = function() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    if(month < 10) {
        month = "0" + month1;
    }
    var date = time.getDate();
    if(date < 10) {
        date = "0" + date;
    }
    var hour = time.getHours();
    if(hour < 10) {
        hour = "0" + hour;
    }
    var minute = time.getMinutes();
    if(minute < 10) {
        minute = "0" + minute;
    }
    var second = time.getSeconds();
    if(second < 10) {
        second = "0" + second;
    }
    var text = $('p.time');
    text.text(hour + ':' + minute + ':' + second);

    $('.hand4').css(
        'transform', function(){
            return "rotate(" + 6*second + "deg)";
        }
    )
    $('.hand3').css(
        'transform', function(){
            return "rotate(" + (30*hour+minute/2) + "deg)";
        }
    )
    $('.hand2').css(
        'transform', function(){
            return "rotate(" + 6*minute + "deg)";
        }
    )

    var checktime = function() {
        var wholeTime = year + '-' + month + '-' + date + 'T' + hour + ':' + minute;
        var box = $(this);
        if(wholeTime == box.val()) {
            $(this).prev().animate({
                opacity: 0
            }, 500);
            $(this).prev().animate({
                opacity: 1
            }, 500);
        }
    }

    var checkevery = function() {
        for (i=0; i<$('input[type=datetime-local]').length; i++){
            var timelist = $('input[type=datetime-local]')[i];
            timelist.check = checktime;
            timelist.check();
        }
    }
    checkevery();
}
setInterval(a, 1000);

// 增加/删除任务部分
var addfunction = function(){
    var jq = $(this);
    var box1 = jq.find('input[type=checkbox]');
    box1.change(function(){
        if(box1.prop('checked')==true) {
            jq.animate({opacity: 0.2}, 3000)
        } else {
            jq.animate({
                opacity: 1
            }, 3000)
        }
    })
    var del = jq.find('input[value=delete]');
    del.click(function(){
        jq.remove();
    })
}

var list = $('span.tasklist')
var createNewMission = function() {
    var a = document.createElement('span');
    a.innerHTML = '<input type="checkbox"> <input type="text" size="5"> <input type="datetime-local"> <input type="botton" value="delete"><br>';
    list.append(a);
    a.af = addfunction;
    a.af();
}
var add = $('input[value="add"]');
add.on('click', createNewMission);

var fm = $('.firstmission');
fm.af = addfunction;
fm.af();
// 缓存部分
var storespannumber = function() {    
    var spannumber = list.children('span').length;
    sessionStorage.setItem('spannumber', spannumber);
}

var restoreall = function() {
    for (i=0; i<list.children('span').length; i++) {
        var eachspan = list.children('span')[i];
        var cboxvalueeach = 'cboxvalue' + i;
        var textvalueeach = 'textvalue' + i;
        var timeeach = 'time' + i;
        var restoreeach = function() {
            var cboxval = sessionStorage.getItem(cboxvalueeach);
            var textval = sessionStorage.getItem(textvalueeach);
            var timeval = sessionStorage.getItem(timeeach);
            if (cboxval=='true'){
                $(this).find('input[type=checkbox]').prop('checked', true);
            } else {
                $(this).find('input[type=checkbox]').prop('checked', false);
            }
            $(this).find('input[type=text]').val(textval);
            $(this).find('input[type=datetime-local]').val(timeval)
        }
        eachspan.re = restoreeach;
        eachspan.re();
    }
}

var storeall = function(){
    for (i=0; i<list.children('span').length; i++) {
        var storeeach = function() {
            var cboxvalueeach = 'cboxvalue' + i;
            var textvalueeach = 'textvalue' + i;
            var timeeach = 'time' + i;
            if ($(this).find('input[type=checkbox]').prop('checked') == true) {
                sessionStorage.setItem(cboxvalueeach, true);
            } else {
                sessionStorage.setItem(cboxvalueeach, false);
            }
            sessionStorage.setItem(textvalueeach, $(this).find('input[type=text]').val());
            sessionStorage.setItem(timeeach, $(this).find('input[type=datetime-local]').val());
        }
        var eachspan = list.children('span')[i];
        eachspan.storeit = storeeach;
        eachspan.storeit();
    }
}

var store = function() {
    storespannumber();
    storeall();
}

var restore = function() {
    var numbernow = sessionStorage.getItem('spannumber');
    for (i=1; i<numbernow; i++) {
        createNewMission();
    }
    restoreall();
}()

$('input[value="submit"]').on('click', store);

