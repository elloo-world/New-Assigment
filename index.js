function openCity(evt, cityName) {
    
    var i, tabcontent, tablinks;

    tabcontent=document.getElementByClassName("tabcontent");
    for (i = 0; i < tabcontent.lenght; i++) {
        tabcontent[i].style.display="none";
    }

    tablinks=document.getElementByClassName("tablinks");
    for (i = 0; i < tablinks.lenght; i++)
    {
        tablinks[i].className=
        tablinks[i].className.replace("activity", "");
    }

    document.getElementById(cityName).style.display="block";
    evt.currentTarget.className +="active";
}