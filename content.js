
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
   console.log(msg.location);

  trend_box = document.getElementsByClassName('module trends');
  var n = jQuery.extend(true, {}, $('module trends') );
  $('.dashboard-left').append(n);

//n.appendTo('.dashboard-left');

  var trend_box =
    ['<div class="module trends" style="display: block;">',
     'just a test',
    ].join('\n');

  $('.dashboard-left').append(trend_box);



});

/*

(function(){



});


chrome.extension.sendRequest({cmd: "read_file"}, function(html){
    $("#topbar").html(html);
});


*/

