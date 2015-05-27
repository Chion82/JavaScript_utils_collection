//	Author: @Chion82
//	Created on 5/27/2015
//	https://github.com/Chion82
//	Copyright 2015 Chion82
//	Released under the MIT license

//Convert unix time stamp to readable date-time string
//param: (integer)unix time stamp
//Return value: (string)date-time string
var get_string = function(unixTimestamp) {
	var time = new Date(unixTimestamp*1000);
	var now = new Date();
	var date_str = '';
	if (time.getFullYear()==now.getFullYear() && time.getMonth()==now.getMonth() && time.getDate()==now.getDate()) {
		date_str = '今天';
		//date_str = 'Today';
	} else if (time.getFullYear()==now.getFullYear() && time.getMonth()==now.getMonth() && time.getDate()==now.getDate()-1) {
		date_str = '昨天';
		//date_str = 'Yesterday';
	} else {
		date_str = time.getFullYear() + '/' + (time.getMonth()+1) + '/' + time.getDate();
	}
	time_str = String(time.getHours()) + ":" + String(time.getMinutes());
	return date_str + ' ' + time_str;
};

//Generate random integer limited by given minimum & maximum value
//param: (integer) minimum value, 
//		 (integer) maximum value
//Return value: random integer
var get_random_int = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Get URL GET param specified by key
//param: (string)key to the URL GET param
//Return: (string)param value
//Sample:
//		Current URI: /index.html?action=login&token=123456
//		get_param('action') returns "login"
//		get_param('token') returns "123456"
var get_param = function(par){
	//获取当前URL
	var local_url = document.location.href; 
	//获取要取得的get参数位置
	var get = local_url.indexOf(par +"=");
	if(get == -1){
		return false;   
	}   
	//截取字符串
	var get_par = local_url.slice(par.length + get + 1);    
	//判断截取后的字符串是否还有其他get参数
	var nextPar = get_par.indexOf("&");
	if(nextPar != -1){
		get_par = get_par.slice(0, nextPar);
	}
	return decodeURIComponent(get_par);
};

//Escape string using html-encoding
//param: (string)source string to encode
//Return: (string)html-encoded string
function escape_html(string) {
	var entityMap = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': '&quot;',
		"'": '&#39;',
		"/": '&#x2F;'
	};
	return String(string).replace(/[&<>"'\/]/g, function (s) {
		return entityMap[s];
	});
}

