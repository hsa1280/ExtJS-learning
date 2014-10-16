/**
 * @class Client
 * @extends Ext.Base
 * @autor Crysfel Villa
 * @date Wed Nov 23 22:33:40 CET 2011
 *
 * The Client class
 *
 *
 **/

Ext.define("MyApp.Client",{		//Step 1
	name		: "John",	//Step 2
	lastName	: "Doe",
	
	constructor	: function(config){	//Step 3
        
        Ext.apply(this,config || {}); //Step 4

		console.log("I'm a new client!");
	}
});