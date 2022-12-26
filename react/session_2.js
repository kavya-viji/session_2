	// ---4---
	// let age = [23,45,78,13,29];
	// var x=age.filter(function(value)
	// {
	// 	return value>=25
	// });
	// document.write(x);
	//
	// ----5-filter----
	// var num = [0,1,2,3,4,5,6,7,8,9];
	// let even = num.filter(function(value)
	// {
	// 	return value %2==0
	// });
	//
	// let odd = num.filter(function(value)
	// {
	// 	return value %2!==0
	// });
	// document.write("Even nos:",even)
	// document.write("<br>")
	// document.write("Odd nos:",odd);
	//
	// ---6-find---
	// var num = [11,17,2,3,4,5,6,7,8,9];
	// let even = num.findIndex(function(value)
	// {
	// 	return value %2==0
	// });
	//
	// let odd = num.findIndex(function(value)
	// {
	// 	return value %2!==0
	// });
	// document.write("Even nos:",even)
	// document.write("<br>")
	// document.write("Odd nos:",odd);
	//
	// ---7-map---
	// var a = [1,2,3,4,5,6,7];
	// var x = a.map(function(value)
	// {
	// 	return value*5;
	// });
	// document.write(x);
	//
	// -----prime--------
	// var a = parseInt(prompt("enter"));
	// if(a>1)
	// {
	// 	for(i=2;i<a;i++)
	// 	{
	// 		if(a%i==0)
	// 		{
	// 			break;
	// 		}
	// 	console.log("Prime")
	// 	}
	// }
	// else
	// {
	// 	console.log("Not Prime")
	// }
	//
	// ---8-Synchronous---
	// document.write("Hi"); // First
// 	document.write("<br>");
//
// 	document.write("kavzz") ;// Second
// 	document.write("<br>");
//
// 	document.write("How are you"); // Third
	//
	// ----synchronous----
	// function synchronous()
// 	{
// 		var a = 10;
// 		var b = 20;
// 		document.write(a)
// 		document.write("<br>")
// 		document.write(b)
// 	 document.write("<br>")
// 		document.write(a+b);
// 	}
// 	 synchronous()
	//
	// ---9-Asynchronous---
	// function asynchronous()
// 	{
// 		var a = 10;
// 		var b = 20;
// 		console.log(a)
// 		setInterval(function()
// 		{
// 		 console.log(b);
// 		},1000);
// 		console.log(a+b);
// 	}
// 	asynchronous()
	//
	//---10-setTimeout---one time execution
	
   	 		// console.log("c")
// 	        setTimeout(function()
// 	    	{
// 	    		console.log("a")
// 	    	},5000);
// 	    		console.log("b")

	// ----11-setInterval----
		// setInterval(function(name)
	// 	{
	// 		console.log('a',name);
	//
	// 	},1000,"kavya");
	//
	// ---12-both---
	// function hello()
// 	{
// 		document.write("heloo");
// 		document.write("<br>")
// 	}
	//setTimeout(hello,4000);
	//setInterval(hello,2000)
	
	//localStorage.setItem("animal","dog")
	//sessionStorage.setItem("animal","dog")
	
	
	//---object---
	var obj={
		a:"b",
		c:"d",
	};
	var obj1=obj;
	obj1.a="e";
	console.log(obj);
	console.log(obj1);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
