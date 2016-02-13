var out = "";

function req(){
var x = 0;
var myArr;
for(var i = 0; i < 13; ++i){
console.log(i.toString());
var xmlhttp = new XMLHttpRequest();
var url = "http://thebluealliance.com/api/v2/teams/" + i + '?X-TBA-App-Id=frc2729:scouting-system:v01';

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		myArr = JSON.parse(xmlhttp.responseText);
        numFind(myArr);
    }
};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	}
}

function numFind(arr) {
    var tmp = "";
    var x;
    for(x = 0; x < arr.length; ++x) {out += tmp.concat("," + (arr[x].team_number).toString());console.log("Out: " + out);}
    document.getElementById("blank").innerHTML = out;
}