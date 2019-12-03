function grades() {

    var hww = convert(document.getElementById("hwweight").value)/100;
    var cww = convert(document.getElementById("csweight").value)/100;
    var tw = convert(document.getElementById("tweight").value)/100;
    var pw = convert(document.getElementById("pweight").value)/100;
    var pow = convert(document.getElementById("poweight").value)/100;

    var fweight = convert(document.getElementById("fweight").value)/100;
    var desired = convert(document.getElementById("desired").value);
    var homework = convert(document.getElementById("hwgrade").value) * hww;
    var classwork = convert(document.getElementById("csgrade").value) * cww;
    var tests = convert(document.getElementById("tgrade").value) * tw;
    var participation = convert(document.getElementById("pgrade").value) * pw;
    var projects = convert(document.getElementById("pograde").value) * pow;
    var grader = (homework + classwork + tests + participation + projects);
    var grad = grader/  ((100 - (fweight * 100))/100);
    if(hww + cww + tw + pw + pow + fweight == 1 && (!isNaN(grad))) {
        document.getElementById("final").innerHTML = "Current Grade:" + grad + "%";
        document.getElementById("c").style.backgroundColor = getcolors(convert(document.getElementById("csgrade").value));
        document.getElementById("t").style.backgroundColor = getcolors(convert(document.getElementById("tgrade").value));
        document.getElementById("p").style.backgroundColor = getcolors(convert(document.getElementById("pgrade").value));
        document.getElementById("h").style.backgroundColor = getcolors(convert(document.getElementById("hwgrade").value));
        document.getElementById("pog").style.backgroundColor = getcolors(convert(document.getElementById("pograde").value));

    }else{
        document.getElementById("final").innerHTML ="Weights do not add up to 100% or an invalid value has been entered, please try again"
    }
    var gradeB = grad*(1-fweight);
    var gradeN= (desired-gradeB)/fweight;
if(hww + cww + tw + pw + pow + fweight == 1 && (!isNaN(grad))) {
    document.getElementById("ngrade").innerHTML = "needed grade:" + gradeN + "%"
}else{
    document.getElementById("ngrade").innerHTML = ""
}
}
function getcolors(grade) {
    if (grade >= 90) {
        return "darkgreen"
    } else if (grade >= 80) {
        return "green"

    } else if (grade >= 70) {
        return "orange"

    } else if (grade >= 60) {
        return "darkorange"
    } else if (grade >= 50|| grade < 50) {
        return "darkred"


    }
}


    function convert(str) {
        var arr = str.split(",");
        var average = 0
        for (var i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
            average = average + arr[i]
        }

        average = average / arr.length;
        return average;

}
