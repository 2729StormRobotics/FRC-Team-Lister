function req(){
for(var i = 1; i < 13;){
var xmlhttp = new XMLHttpRequest();
var url = "http://thebluealliance.com/api/v2/teams/" + i + '?X-TBA-App-Id=frc2729:scouting-system:v01';

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        numFind(myArr);
    }
i += 1
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}
}
/*
function numFinder(arr){
	var out = arr[0].team_number + arr[1].team_number.toString() + arr[2].team_number.toString() + arr[3].team_number.toString() + arr[4].team_number.toString() + arr[5].team_number.toString() + arr[6].team_number.toString() + arr[7].team_number.toString() + arr[8].team_number.toString() + arr[9].team_number.toString() + arr[10].team_number.toString() + arr[11].team_number.toString() + arr[13].team_number.toString();
	document.getElementById("blank").innerHTML = out;
}
*/
function numFind(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; ++i) {out += arr[i].team_number + "<br>";console.log(out);}
    document.getElementById("blank").innerHTML = out;
}