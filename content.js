
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
   console.log(msg.location);

  trend_box = document.getElementsByClassName('module trends');
  var n = jQuery.extend(true, {}, $('module trends') );
  $('.dashboard-left').append(n);

//n.appendTo('.dashboard-left');

  var trend_box =
    ['<div class="module trends" style="display: block;">',
     'just a test'
    ].join('\n');

  $('.dashboard-left').append(trend_box);
 });

$(".trends-inner").children().filter("div,.flex-module.trend-container").children().filter("div,.flex-module-inner").children().filter("ul,.trend-items.js-trends").children().
            each(function(){
        var x=$(this).attr("data-trend-name");
        var y=[];
        y.push(x);
        console.log(y);
            });
/*

(function(){



});


chrome.extension.sendRequest({cmd: "read_file"}, function(html){
    $("#topbar").html(html);
});


*/

