var sortLists = [];
var currList;
var hint ="<p class=\"Hint\">Click the \"Add to List\" button to add values.</p>"

$(document).ready(function(){
	//Create instances of the list object
	sortLists.push(new SortableList);
	sortLists.push(new SortableList);
	sortLists.push(new SummableList);
	
	//Setup the UI
	setListSelectListener();
	setTitle();
	setAddListener();
	setSortButtonListener();
});

//Set title to sorting algoritm used
function setTitle(){
	$("#sortTitle").text(currList.getListType());
}

//Sort list on click
function setSortButtonListener(){
	$("#sortButton").click(function(){
		currList.sortList();
		updateListText();
	});
}

//Add number to list on click
function setAddListener(){
	$("#MSaddButton").click(function(){
		//Add value to list
		var newVal = parseInt($("#MS_ValueAdd").val());
		currList.add(newVal);
		//Update UI
		updateListText();
		updateSumDisplay();
	});
}

//Update list display
function updateListText(){
	var listElm = $("#listContent");
	var list = currList.getList();
	var len = list.length;
	var text = "";
	var i;
	
	listElm.removeClass();
	if(len == 0)
	{
		text = "Use the \"Add to List\" button to add values.";
		listElm.addClass("Hint");
	}
	else
	{
		text += list[0];
	}
	
	for(i = 1; i < len; i++)
	{
		text += ", ";
		text += list[i];
	}
	
	listElm.text(text);
}

function setListSelectListener()
{
	var list1 = $("#listRadio1");
	
	list1.click(function(){changeList(0);});
	$("#listRadio2").click(function(){changeList(1);});	
	$("#listRadio3").click(function(){changeList(2);});
	
	//Set first list as selected
	list1.click();
}

function changeList(listNum)
{
	currList = sortLists[listNum];
	updateListText();
	updateSumDisplay();
}

function updateSumDisplay(){
	if(currList instanceof SummableList){
		$("#sumDisplay").text(currList.getSum());
	}
	else{
		$("#sumDisplay").text("Not an instance of SummableList");
	}
}