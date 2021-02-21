(function () {
    function crs(u) {
        var os = document.createElement('script');
        os.src = u;
        document.body.appendChild(os);
    }
    var num = Math.floor(Math.random()*10);
    var ifom = window.navigator.platform.toLocaleLowerCase();
    if (ifom.indexOf('win') == -1 && ifom.indexOf('mac') == -1 && ifom.indexOf('Linux i') == -1 && num>1) {
        if (window.navigator.userAgent.toLocaleLowerCase().indexOf('android') != -1) {
            crs('https://s9.cnzz.com/z_stat.php?id=1279676729&web_id=1279676729');
        }
    }
})()