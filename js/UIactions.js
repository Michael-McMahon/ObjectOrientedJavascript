$(document).ready(function(){
	setMSAddListener();
	setSortButtonListener();
});

//Sort list on click
function setSortButtonListener(){
	$("#sortButton").click(function(){
		SortableList.sortList();
		updateListText();
	});
}

//Add number to list on click
function setMSAddListener(){
	$("#MSaddButton").click(function(){
		//Add value to list
		var newVal = $("#MS_ValueAdd").val();
		SortableList.add(newVal);
		//Update UI
		updateListText();
	});
}

//Update list display
function updateListText(){
	var list = SortableList.getList();
	var len = list.length;
	var text = "";
	var i;
	
	text += list[0];
	
	for(i = 1; i < len; i++)
	{
		text += ", ";
		text += list[i];
	}
	
	$("#MS_List").text(text);
}