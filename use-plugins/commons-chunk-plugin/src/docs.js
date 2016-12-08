var $ = require('jquery')
var _ = require('underscore')
var utils = require('./utils')

var arr = [1, 5, 16, 4]
var html = ''
$.each(_.sort(arr), function (index, val) {
  html += '<p>' + val + '</p>'
});
$('#docs').html(html)
