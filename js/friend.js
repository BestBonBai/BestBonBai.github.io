// author by removef
// https://removeif.github.io/
$(function () { //获取处理友链数据
    $.getJSON("../json_data/friend.json", function (data) {

        // var data0 = data[0];
        $('.links-content').html("");

        // 随机排序过滤失效的
        let notValid = data.filter((item, a, b) => item.valid == 0);
        data = data.filter((item, a, b) => item.valid != 0).sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
        $('.links-content').append("<div class='friend-title-item'><br>Big Geeks<br><br><hr></div>");
        $.each(data, function (i, e) {
            var html = "<div class=\"friend-card-item\">";
            if (e.src == undefined) {
                html += "    <img class=\"ava\" src=\"/img/links/nopic.jpg\" title=\"unvalid photo link, use default link\">";
            } else {
                html += "    <img class=\"ava\" src=\"" + e.src + "\">";
            }
            html +=
                "<div class='text-desc' title=\""+e.desc+"\">    site：<a href=\"" + e.url + "\" target=\"_blank\">" + e.name + "</a>" +
                "    <br>visite time：" + e.date +
                "<br>description：" + e.desc + "</div>" +
                "    </div>";

            $('.links-content').append(html);
        });

        // 过期的
        if (notValid.length > 0) {
            $('.links-content').append("<div class='friend-title-item'><br>Unusual Geeks<br><br><hr></div></div>");
            $.each(notValid, function (i, e) {
                var html = "<div class=\"friend-card-item\">";
                html += "    <img class=\"ava\" src=\"/img/links/nopic.jpg\" title=\"unvalid photo link, use default lin\">";
                html +=
                    "<div class='text-desc' title=\""+e.desc+"\">    site：<a href=\"" + e.url + "\" target=\"_blank\">" + e.name + "</a>" +
                    "    <br>visite time：" + e.stopTime +
                    "<br>description：" + e.desc + "</div>" +
                    "    </div>";

                $('.links-content').append(html);
            })
        }

        $('.links-content').append("</div>");
    })
});
