
function onSubmit() {

    var names = new Array(3);
    names[0] = document.getElementById("fname").value;
    names[1] = document.getElementById("sname").value;
    names[2] = document.getElementById("tname").value;

    document.write("---------------The Entered name are---------------<br>")
    // document.write("The First name is : " + names[0] + "<br>");
    // document.write("The Second name is : " + names[1] + "<br>");
    // document.write("The Third name is : " + names[2] + "<br>");
    a = 0;
    for (n in names) {
        a++;
        document.writeln(a, ") name is : ", names[n]);
        document.writeln("<br> ");
    }

    document.write("---------------The names After sorting---------------<br>")
    b = 0
    names.sort();
    for (n_n in names) {
        b++;
        document.writeln(b, ") name is : ", names[n_n]);
        document.writeln("<br> ");
    }
}
