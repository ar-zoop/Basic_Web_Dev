"use strict"
function show()
{
    var expr=" "
    for (i=1;i<5;i++)
    {
        for (j=1;j,5,j++)
        expr+= "i ="+i+ " j= "+j+ "<br/>"
    }
    document.getElementById("mul").innerHTML=expr;
}

function show()
{
	var expr="";
    start:for(i=1;i<=5;i++)
    {
        for(j=1;j<=5;j++)
        {
			if(i==3)
				break start;
			expr = expr+" i = "+i+" j= "+j+"<br/>"
		}
		document.getElementById("mul").innerHTML=expr;
	}
}
