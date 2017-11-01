module.exports = {
	decodePost : function(str){
		var val =  str.split("=");
		if(val[0].split("?")[1]==="name")
			return { "name" : val[1]};
		else
			return { "" : "" };
	},

	decodeGet : function(str){
		var val =  str.split("/");
		var parsed = {};
        var position = parsed;
        for(var j = 0; j < val.length; j++) {
            if(val[j] !== "") {
                if(typeof position[val[j]] === 'undefined')
                    position[val[j]] = {};
                position = position[val[j]];
            }
        }
	    return parsed;
	}
}