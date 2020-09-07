var primaryColor = "#11b4ff";
var secondaryColor = "#ff5811";

var primaryColorDark = "#1495d1";
var secondaryColorDark = "#cc4202";

function getYear()
{
    var date = new Date();
    return date.getFullYear();
}
function enterTextIntoElement(id, text)
{
    document.getElementById(id).innerHTML = text;
}