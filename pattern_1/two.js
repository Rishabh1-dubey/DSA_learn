var n = 6;
var s = "";
for (var i = 1; i <= n; i++) {
    var stars = i;
    var spaces = n - stars;
    for (var j = 1; j <= spaces; j++)
        s += " ";
    for (var j = 1; j < stars; j++)
        s += "*";
    s += "\n";
}
console.log(s);
