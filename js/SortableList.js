var SortableList = (function(){
	var list = [];
	
	function mergeSort(list, helper, low, high)
	{
		if(low < high)
		{
			var mid = (low + high) / 2;
			mergeSort(list, helper, low, mid);
			mergeSort(list, helper, mid + 1, high);
			merge(list, helper, low, mid, high);
		}
	}
	
	function merge(list, helper, low, mid, high)
	{
		var i;
		
		for(i = low; i <= high; i++)
		{
			helper[i] = list[i];
		}
		
		var hLeft = low;
		var hRight = mid + 1;
		var curr = low;
		
		while(hLeft <= mid && hRight <= high)
		{
			if(helper[hLeft] <= helper[hRight])
			{
				list[curr] = helper[hLeft];
				hLeft++;
			}
			else
			{
				list[curr] = helper[hRight];
				hRight++;
			}
			curr++;
		}
		
		var rem = mid - hLeft;
		for(i = 0; i <= rem; i++)
		{
			list[curr + i] = helper[hLeft + i];
		}
	}
	
	return {
		add : function(v){
			list.push(v);
		},
		
		sortList : function(){
			var helper = [];
			mergeSort(list, helper, 0, list.length - 1);
		},
		
		getList : function(){
			return list;
		}
	};
})();