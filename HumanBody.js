function createHuman(name,age,height,weight,gender,bloodGroup)
{
	console.log("Hello!! I'm a brand new human body.\nMy name is ",name)
	//console.log("yo");
	return (function()
	{
		console.log("I'm ",age," years old.");
		return (function()
		{
			console.log("I'm ",height," cm tall");
			return (function()
			{
				console.log("I weigh ",weight," kg");
				return (function()
				{
					console.log("I'm a "+gender);
					return (function()
					{
						console.log("My bloodgroup is "+bloodGroup);
					})();
				})();
			})();
		})();
	})();
}


createHuman("Nookesh","20",'175',55,'male',"B+ve");