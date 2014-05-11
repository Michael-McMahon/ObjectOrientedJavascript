function SortableList(){
	this.list = [];
	this.listType = "Sortable List";
}

SortableList.prototype.add = 
function(v){
	this.list.push(v);
};
		
SortableList.prototype.sortList = 
function(){
	var helper = [];
	mergeSort(this.list, helper, 0, this.list.length - 1);
};
		
SortableList.prototype.getList = 
function(){
	return this.list;
};
		
SortableList.prototype.getListType = 
function(){
	return this.listType;
};