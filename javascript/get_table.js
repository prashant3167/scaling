var d={};
var cd;
async function get_table(file_name){
    d3.text(file_name, function(data) {
                var parsedCSV = d3.csv.parseRows(data);
        // d[file_name]=parsedCSV;
	ab=parsedCSV[0];
	parsedCSV=parsedCSV.slice(1,parsedCSV.length)
		var abc=d3.select("table")
		    .append("thead")
		    .append("tr")
                    .selectAll("th")
                        .data(ab).enter()
			.append("th")	
                        .text(function(d) { return d; });
                        // alert(.data(parsedCSV))
	var col_1=[];
	for( var i=0;i<parsedCSV.length;i++)
	{
		col_1.push(parsedCSV[i][0]);
		parsedCSV[i]=parsedCSV[i].slice(1,parsedCSV[i].length);
	}
	   var abcd=d3.select("table")
                    .append("tbody")
                    .selectAll("tr")
                        .data(col_1).enter()
			.append('tr')
                        .append("th")
                        .text(function(d) { return d; });
		cd=parsedCSV;
		c=document.getElementsByTagName("table").item(0).tBodies.item(0);
		len=c.getElementsByTagName("tr").length;
		for (var i=0;i<len;i++)
		{
			// for (var j=0;j<10;j++)
			c.getElementsByTagName("tr")[i].innerHTML=c.getElementsByTagName("tr")[i].innerHTML+"<td>"+cd[i][0]+"</td><td>"+cd[i][1]+"</td>";
		}
			});
			// a();
}
function select_trigger(){
var file=document.getElementsByTagName("select")[0].value;
file="files/"+file+".csv";
document.getElementById("exceltable").innerHTML="";
get_table(file);
}
