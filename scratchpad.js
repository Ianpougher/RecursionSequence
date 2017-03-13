/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
function fibHelper(n) {
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib");

	// leaf nodes aka. base case
	if (n < 2) {
		if (n === 0) {
			value = 0;
		} 
		else if (n === 1) {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p)
	} 
	else {
		var left = fibHelper(n - 1);
		var clas = left.html.getAttribute("class");
		left.html.setAttribute("class", clas + " fib-left");
		
		var right = fibHelper(n - 2);
		clas = right.html.getAttribute("class");
		right.html.setAttribute("class", clas + " fib-right");

		value = left.value + right.value;
		 p = document.createElement('p');
		p.textContent = 'Fib(' + n + ') = ' + value;
		div.appendChild(p);

		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return { 'value': value, 'html': div };
}
function pellHelper(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "pell");
    if (n < 2) {
        if (n === 0) {
            value = 0;
        }
        else if (n === 1) {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'pell(' + n + ') = ' + value;
        div.appendChild(p);
    }
    else
    	{
    		var left=pellHelper(n - 1);
			var clas=left.html.getAttribute("class");
            left.html.setAttribute("class", clas + " pell-left");

            var right = pellHelper(n - 2);
            clas = right.html.getAttribute("class");
            right.html.setAttribute("class", clas + " pell-right");

            value=2*left.value+right.value;
             p=document.createElement('p');
            p.textContent='Pell('+n+') = '+value;
            div.appendChild(p);
            div.appendChild(left.html);
            div.appendChild(right.html);
        }
		return{'value': value,'html': div};
}
function tribHelper(n) {
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "trib");
    if (n < 3) {
        if (n === 0) {
            value = 0;
        }
        else if (n === 1) {
            value = 0;
        }
        else if(n===2){
        	value = 1;
		}
		else if(n===3)
		{
			value = 1;
		}
        var p = document.createElement('p');
        p.textContent = 'trib(' + n + ') = ' + value;
        div.appendChild(p);
    }
    else
    {
        var left=tribHelper(n - 1);
        var clas=left.html.getAttribute("class");
        left.html.setAttribute("class", clas + " trib-left");

        var center = tribHelper(n - 2);
        clas = center.html.getAttribute("class");
        center.html.setAttribute("class", clas + " trib-center");

        var right = tribHelper(n - 3);
        clas = right.html.getAttribute("class");
        right.html.setAttribute("class", clas + " trib-right");

        value=left.value+center.value+right.value;
         p=document.createElement('p');
        p.textContent='trib('+n+') = '+value;
        div.appendChild(p);
        div.appendChild(left.html);
        div.appendChild(center.html);
        div.appendChild(right.html);
    }
    return{'value': value,'html': div};
}
var fib = function (n, node) {
	var tree = fibHelper(n);
		node.appendChild(tree.html);
		node.style = "display: inline-block;";
	  node.setAttribute("id", "fib");
};
//TODO finish pell wrapper class in the style of fib
var pell = function(n, node) {
	var tree=pellHelper(n);
	node.appendChild(tree.html);
    node.style = "display: inline-block;";
	node.setAttribute("id", "pell");
};
var trib=function (n,node){
	var tree=tribHelper(n);
	node.appendChild(tree.html);
	node.style= "display: inline-block;";
	node.setAttribute("id", "trib");
};
var hyperL=function(link,title)
{
    var link = link;
    var element = document.createElement("a");
    element.setAttribute("href", link);
    element.innerHTML = title;

    document.body.appendChild(element);
    document.write("<br>")
};
var style = document.createElement('style');
style.textContent =

	"#fib {" +
	"	display: inline-block;" +
	"	width: 20000px;" +
	"}" +
	"" +
    "#pell {" +
    "	display: inline-block;" +
    "	width: 20000px;" +
    "}" +
    "" +
    "#trib {" +
    "	display: inline-block;" +
    "	width: 60000px;" +
    "}" +
    "" +
	".fib {" +
	"	background-color: rgba(0,0,255,0.1);" +
	"}" +
	"" +
	".fib-left {" +
	"	float: left;" +
	"	display: inline-block;" +
	"	margin-right: 4px;" +
	"}" +
	"" +
	".fib-right {" +
	"	float: right;" +
	"	display: inline-block;" +
	"	margin-left: 4px;" +
	"}" +
	"" +
    ".pell {" +
    "	background-color: rgba(255,175,0,0.2);" +
    "}" +
    "" +
    ".pell-right {" +
    "	float: right;" +
    "	display: inline-block;" +
    "	margin-left: 4px;" +
    "}" +
    "" +
    ".pell-left {" +
    "	float: left;" +
    "	display: inline-block;" +
    "	margin-right: 4px;" +
    "}" +
    "" +
    ".trib {" +
    "	background-color: rgba(0,0,0,0.2);" +
    "}" +
    "" +
    ".trib-right {" +
    "	float: right;" +
    "	display: inline-block;" +
    "	margin-left: 4px;" +
    "}" +
    "" +
    ".trib-center {" +
    "	float: center;" +
    "	display: inline-block;" +
    //"	margin-left: 4px;" +
    "}" +
    "" +
    ".trib-left {" +
    "	float: left;" +
    "	display: inline-block;" +
    "	margin-right: 4px;" +
    "}" +
    "" +
	".shadowed {" +
	"	text-shadow: 1px 1px 2px black;" +
	"	color:       white;" +
	"}" +
	".stuff-box {" +
	"	font-family: 'helvetica neue', helvetica, sans-serif;" +
	"	letter-spacing: 1px;" +
	"	text-transform: capitalize;" +
	"	text-align: center;" +
	"	padding: 3px 10px;" +
	"	margin: 10px;" +
	"	cursor: pointer;" +
	"	border-radius: 10px;" +
	"	border-width: 2px;" +
	"	border-style: solid;" +
	"}" +
	"" +
	".red {" +
	"	border-color: rgb(255,0,0);" +
	"	background:   rgb(180,60,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
	"}" +
	"" +
	".yellow {" +
	"	border-color: rgb(255,255,0);" +
	"	background:   rgb(180,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
	"}" +
	"" +
	".blue {" +
	"	border-color: rgb(0,0,255);" +
	"	background:   rgb(60,60,180);" +
	"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
	"}" +
	"" +
	".green {" +
	"	border-color: rgb(0,255,0);" +
	"	background:   rgb(60,180,60);" +
	"	box-shadow: 1px 1px 2px rgba(0,200,0,0.4);" +
	"}";

document.querySelector('body').appendChild(style);

// IIFE = Immediately-invoked function expression
// An anonymous function which we create, invoke, then throw away.
// It exists to meet these aims:
//   0) Avoid clobbering an existing variable named "div" in the global namespace. I don't have
//      another variable called "div" today, but this protects my webpage in the event that I
//      later incorporate other JavaScript programs from elsewhere.
//   1) Collect a few related program statements and keep them together in a single unit.
// https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
( function(color, id) {
	var div = document.createElement('div');
	div.setAttribute('class', color + ' shadowed stuff-box');
	div.setAttribute('id', id);
	document.body.appendChild(div);
}('red', 'fib'));

fib(11, document.querySelector('.red'));


// divMakerMaker() is a function which returns a function
// divMakerMaker() takes two arguments and creates a function which requires
// no arguments of its own, but upon invocation "remembers" the functions it
// was created with
var divMakerMaker = function(color, id) {
	return function() {
		var div = document.createElement('div');
		div.setAttribute('class', color + ' shadowed stuff-box');
		div.setAttribute('id', id);
		document.body.appendChild(div);
	}
};

var blueDiv = divMakerMaker('blue', 'fib');
var yellowDiv = divMakerMaker('yellow', 'trib');

blueDiv();
yellowDiv();

pell(11, document.querySelector('.blue'));
trib(11, document.querySelector('.yellow'));
hyperL("https://oeis.org/A000045","fibonacci sequence info");
hyperL("https://oeis.org/A000129","pell sequence info");
hyperL("https://oeis.org/A000073","tribonacci sequence info");