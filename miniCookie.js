/****************************************
			miniCookie.js
		Created by Jo Colina
			@jsmrcaga

			with love
				2015
***************************************/
var miniCookie = {
	get : function(cname) {
		//credit of this to : function W3Schools
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	    }
	    return "";
	},

	getAll : function (argument) {
		return document.cookie;
	},

	modify : function (cName, cVal, expires) {
		var cookie = this.make(cName, cVal, expires);
		this.set([cookie]);
	},

	delete : function (cName) {
		var date = new Date();
		date.setTime(date.getTime() - 1000);
		var cookie = this.make(cName, "", "expires=" + date.toUTCString());
		this.set([cookie]);
	},

	set : function (cookies) {
		if(typeof cookies == "undefined"){
			throw new Error("Cookies is a required parameter and must be an array of objects with syntax,[{cName, cVal, exDays},{cName, cVal, exDays},...]");
		}
		var date = new Date();
		var expires = "";
		for (var i=0; i<cookies.length; i++){
			date.setTime(date.getTime() + (cookies[i].exDays*24*60*60*1000));
			expires = "expires="+ date.toUTCString() || "";
			document.cookie = cookies[i].cName + "=" + cookies[i].cVal + "; " + expires;
		}

		return 1;
	},

	make : function (cookieName, cookieVal, expirationDays) {
		return {cName: cookieName, cVal: cookieVal, exDays: expirationDays};
	}
}