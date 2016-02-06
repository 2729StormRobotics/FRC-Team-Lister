var numPages = 13;
var out = ""
var precent;
var on = true;
var URL = new Array(numPages);
var nRequest = new Array(numPages);
var teams = new Array();
var response = new Array(numPages)
function req(){
  //  document.getElementById("blank2").innerHTML = "Loading...";
 
    for (var i = 0; i < numPages; ++i) {
        response[i] = false;
    }
 
    for (var i = 0; i < numPages; ++i) {
        (function(i) {
            URL[i] = "http://thebluealliance.com/api/v2/teams/" + i + "?X-TBA-App-Id=mrmoko:number-scraper:v02";
            nRequest[i] = new XMLHttpRequest();
            nRequest[i].open("GET", URL[i], true);
            nRequest[i].onreadystatechange = function (oEvent) {
                if (nRequest[i].readyState === 4) {
                    if (nRequest[i].status === 200) {
                        response[i] = true;
                        numFind(JSON.parse(nRequest[i].responseText));
                    } else {
                        console.log("Error", nRequest[i].statusText);
                    }
                }
            };
            nRequest[i].send(null);
        })(i);
    }
}
 
function sortNumber(a,b) {
    return a - b;
}
 
function numFind(arr) {
    for(var x = 0; x < arr.length; ++x) {
        teams.push(parseInt(arr[x].team_number));
    }
 
    var responseCount = 0;
    for (var i = 0; i < numPages; ++i) {
        if (response[i]) ++responseCount;
    }
 
    if (responseCount == numPages) {
        teams.sort(sortNumber);
        out = teams[0].toString();
        for (var i = 1; i < teams.length; ++i) {
            out += ", " + teams[i].toString();
        }
        document.getElementById("blank").innerHTML = out;
		document.getElementById("blank2").innerHTML = " ";
    } else {
		if ( responseCount == numPages-1) {
			precent = 100
			$('.progress-bar').css('width', precent+'%').attr('aria-valuenow', precent);
			console.log(responseCount + "/" + numPages + "*100 = " + responseCount/numPages*100)
			setTimeout(function bye(){
			$('#leBar').css('display', 'none'); on = false; console.log(on)}, 1000);
		}
		else {
			precent = Math.round(responseCount/numPages*100)
			$('.progress-bar').css('width', precent+'%').attr('aria-valuenow', precent);
			console.log(responseCount + "/" + numPages + "*100 = " + responseCount/numPages*100)
		}
    }
}

function bar(){
	if (on == true){
		req()
	}
	else {
		$('#leBar').css('display', 'block');
		document.getElementById('blank').innerHTML = "";
		$('.progress-bar').css('width', '0%').attr('aria-valuenow', precent);
		out = "";
		teams.length = 0;
		console.log(teams.toString())
		setTimeout(req(), 1000);
		console.log(out)
	}
}
