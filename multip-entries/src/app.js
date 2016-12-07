var $ = require('jquery')
var list = ['pageA', 'pageB']
var $ul = $('<ul></ul>').appendTo('body')

$.each(list, function (page) {
  $ul.append('<li><a>' + page + '</a></li>')
})
