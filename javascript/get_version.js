// function

function get_version() {
 version_list=files; 
  version_list.sort();
  version_list.reverse();
  for (version in version_list)
    {
        if(version_list[version]!="")
            {
                var x = document.createElement("OPTION");
                x.setAttribute("value", version_list[version]);
                var t = document.createTextNode(version_list[version]);
                x.appendChild(t);
                document.getElementsByTagName("select")[0].appendChild(x);
                var div_option=document.createElement("div");
                div_option.setAttribute("class", 'options');
                var text = document.createTextNode("HB "+version_list[version]);
                div_option.appendChild(text);
                document.getElementsByClassName("Comparison")[0].appendChild(div_option);
            }
    }
    var classname = document.getElementsByClassName("options");
    // alert("prashant");
    function changecolor()
    {
        if($("div[id*='selected']").length>1)
        {
            // compare_files();
        }
        console.log($(this).css('background-color'));
        if($(this).css('background-color')=='rgb(46, 168, 121)'){
        $(this).css('background-color', 'black');
        console.log($(this).css('background-color'));
        $(this).attr('id','selected');
        }
        else
        {
            $(this).css('background-color', 'rgb(46, 168, 121)');
            $(this).attr('id','');
        }
    }
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', changecolor, false);
        // classname[i].addEventListener('mos')
    }
}
get_version();
get_table('files/2.0.csv')
