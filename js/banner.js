var i = 0;
var max_i = 3;

function displayImage()
{
    var img = document.createElement("img");
    img.setAttribute("width", "100%");
    img.setAttribute("height", "100%");

    img.onload = function () {
        var div = document.getElementById("banner");
        while (div.childNodes.length > 0)
            div.removeChild(div.childNodes[0]);
        div.appendChild(img);
        (i == max_i) ? i = 0: i++;
        window.setTimeout("displayImage();", 2000);
    };
    img.src = "img/banner/totoro/" + i + ".jpg";
}
