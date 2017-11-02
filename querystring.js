module.exports = {
	decodeGet : function(str){


		//using reg-exp....

		var parsed = {};
		var pairs = str.match(/[a-zA-z]*=[a-zA-Z0-9]*/g);
		if(pairs !== null)
			pairs.forEach(function(pair){
				var key = pair.split("=")[0];
				var val = pair.split("=")[1];
				parsed[key] = val;
			});

		return parsed;


		//ist attempt...
		//without reg-exp...

		/*var parsed = {
			path:{},
			pairs:{}
		};
		if(str.indexOf("?") > -1){
			var pathUrl =  str.split("?");
			var path = pathUrl[0];
			var arg = pathUrl[1];
			if(/.&./.test(arg)){
				var pairs = arg.split("&");

				for (var i = 0; i < pairs.length; i++) {
					var key = pairs[i].split("=")[0];
					var val = pairs[i].split("=")[1];
					parsed.pairs[key] = val;
				}
			}else{
					var key = arg.split("=")[0];
					var val = arg.split("=")[1];
					parsed.pairs[key] = val;
			}
		}
		return parsed;*/

	}
}