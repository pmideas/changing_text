var text = "lorum ipsum source";
// text.charAt(7);
var i = 0;

(function type() {
    //console.log(text.charAt(i)) // l o r u m  i p s u m  s o u r c e
    if (i < text.length) {
        //    i=0;
        // console.log(text.charAt(i)) // l o r u m  i p s u m  s o u r c e
        document.getElementById("letter").innerHTML += text.charAt(i);
        i++;
        //console.log(i) // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
        // console.log(text.charAt(i))
        setTimeout(type, 150);
    }
})();
