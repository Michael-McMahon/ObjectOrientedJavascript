function mergeSort(list, helper, low, high)
{
	if(low < high)
	{
		//Floor mid to a whole number, because Javascript will cast mid as a float.
		var mid = Math.floor((low + high) / 2);
		mergeSort(list, helper, low, mid);
		mergeSort(list, helper, mid + 1, high);
		merge(list, helper, low, mid, high);
	}
}

function merge(list, helper, low, mid, high)
{
	var i;
	
	//Helper holds a copy of the unsorted list
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