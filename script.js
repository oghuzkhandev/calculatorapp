function deletelastnum(){
    var currentValue = document.getElementById("show").value;
    document.getElementById("show").value = currentValue.slice(0, -1);
}