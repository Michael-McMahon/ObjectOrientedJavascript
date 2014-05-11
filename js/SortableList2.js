/*This object will extend SortableList*/
var SortableList2 = (function(){
	return{
		//Get the sum of all items in the list
		getSum : function(){
			var i;
			var sum = 0;
			
			for(var i = 0; i < list.length; i++)
			{
				sum += list[i];
			}
			
			return sum;
		}
	}
})();