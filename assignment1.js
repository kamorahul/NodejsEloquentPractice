var human =function(name,age,sex){
	console.log("My name is :"+name);
	return (function()

	{
		console.log("My age is :"+age);
		return (function()
		{
			console.log("sex:"+sex);
		})();
	})();
}
human("nookesh","21","male");
