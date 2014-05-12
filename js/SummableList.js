/*This object will extend SortableList*/
function SummableList(){
	SortableList.call(this);
}
//Define SummableList as a subclass of SortableList
SummableList.prototype = new SortableList();
//Set SummableList's constructor to not point to SortableList
SummableList.prototype.constructor = SummableList;

//Extend SortableList with summation method
SummableList.prototype.getSum = 
	function(){
		var i = this.list.length;
		var sum = 0;
		
		while(i-- > 0)
		{
			sum += this.list[i];
		}
		
		return sum;
	};