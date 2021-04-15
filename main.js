
function currentTime() {
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date-time").innerHTML = m + "/" + d + "/" + y;
    console.log(n);
}
