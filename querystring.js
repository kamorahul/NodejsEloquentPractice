var param1K,param2K;
function decode(strurl) 
{
	console.log(strurl);
	var path=strurl.match("[a-zA-Z]+[0-9]*?[/a-zA-Z]+[0-9]*?[?]");
	
	//to check for path
	if(path==null) return "invalid ip";
	else	console.log(path[0]);


	//to check for parameter 1
	//to check for param 1 key
	var param1=strurl.match("[?][a-zA-Z]+[0-9]*[=][a-zA-Z]+[0-9]*");
	if(param1==null) return "invalid ip";
	else
	{
		var param1Key=param1[0].match("[a-zA-Z]+[0-9]*");
		param1K=param1Key[0];
		if(param1Key==null) return "invalid ip";
		else
			console.log(param1Key[0]);

		//to check for param 1 Value
		var temp=param1[0].match("[=][a-zA-Z]+[0-9]*");
		if(temp==null) return "invalid ip";
		else{
			var param1Value=temp[0].match("[a-zA-Z]+[0-9]*");
			if(param1Value==null)	return "invalid ip";
			else
				console.log(param1Value[0]);
		}
	}

	//to check for parameter 2

	//to check for param 2 key
	var param2=strurl.match("&[a-zA-Z]+[=][a-zA-Z]+[0-9]*");
	if(param2==null)
	{
		return{
			param1K :param1Value[0]	
		}
	}
	else
	{
		var param2Key=param2[0].match("[a-zA-Z]+[0-9]*");
		//console.log(param2Key[0]);
		param2K=param2Key[0];
		
		//to check for param 2 key
		var temp=param2[0].match("[=][a-zA-Z]+[0-9]*");
		if(temp==null) return "invalid ip";
		else
		{
			var param2Value=temp[0].match("[a-zA-Z]+[0-9]*");
			if(param2Value==null)	return "invalid ip";
			else
				console.log(param2Value[0]);
		}
	}

	//console.log(param1K,param2K);
	return {
		param1K :param1Value[0],
		param2K :param2Value[0]
	}
}

module.exports = {
	decode
};