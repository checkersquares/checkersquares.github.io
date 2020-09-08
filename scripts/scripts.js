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
function toggleActive(id = "")
{
    var old = document.getElementsByClassName("active");
    [].slice.call(old).forEach(element => {
        element.classList.remove("active");
    });
    if (id !== "") 
    {
        var el = document.getElementById(id);
        el.classList.add("active");
        scroll(-50, 0);
    }
}