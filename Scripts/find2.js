var out = "";

function requestPage(page)
{
    var xmlhttp = new XMLHttpRequest();
    var url = "http://www.thebluealliance.com/api/v2/teams/" + page + '?X-TBA-App-Id=frc2729:scouting-system:v01';

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var myArr = JSON.parse(xmlhttp.responseText);
            numFind(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function req(){
    for(var i = 0; i < 13; ++i) {
        requestPage(i);
    }
}


function numFind(arr) {
    var tmp = "";
    for(var x = 0; x < arr.length; ++x) {out += tmp.concat("," + (arr[x].team_number).toString());}
    document.getElementById("blank").innerHTML = out;
}

//Made my Josh B (FRC 2729), fixed by Andrew Lobos (FRC 225)