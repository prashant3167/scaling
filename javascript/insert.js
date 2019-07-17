async function insert_compare(data,data2){
    console.log(data,data2);
    
    let version_div = document.getElementById("version-columns");
    for (let i=1;i<data.length;i++)
    {
        let top_info='<li class="product"> <div class="top-info"><div class="check"></div>        <h3>';
        top_info=top_info+data2+'<br>'+data[i][0]+'</h3></div><ul class="cd-features-list">';
        for(let k=1;k<data[i].length;k++)
        top_info=top_info+"<li>"+data[i][k]+"</li>";
        top_info=top_info+"</ul></li>";
        version_div.insertAdjacentHTML("beforeend",top_info);
    }
            //  version_div.insertAdjacentHTML("beforeend",'<li class="product"> <div class="top-info"><div class="check"></div>        <h3>Sumsung Series 6 J6300</h3></div><ul class="cd-features-list"><li>$600</li><li class="rate">5/5</li> <li>1080p</li> <li>LED</li><li>47.6 inches</li><li>800000Hz</li><li>2015</li> <li>mpeg4</li><li>1 Side</li> <li>3 Port</li> <li>1 Rear</li></ul></li>');
            //  version_div.insertAdjacentHTML("beforeend",'<li class="product"> <div class="top-info"><div class="check"></div>        <h3>Sumsung Series 6 J6300</h3></div><ul class="cd-features-list"><li>$600</li><li class="rate">5/5</li> <li>1080p</li> <li>LED</li><li>47.6 inches</li><li>800000Hz</li><li>2015</li> <li>mpeg4</li><li>1 Side</li> <li>3 Port</li> <li>1 Rear</li></ul></li>');
            //  version_div.insertAdjacentHTML("beforeend",'<li class="product"> <div class="top-info"><div class="check"></div>        <h3>Sumsung Series 6 J6300</h3></div><ul class="cd-features-list"><li>$600</li><li class="rate">5/5</li> <li>1080p</li> <li>LED</li><li>47.6 inches</li><li>800000Hz</li><li>2015</li> <li>mpeg4</li><li>1 Side</li> <li>3 Port</li> <li>1 Rear</li></ul></li>');
             var keyin=Object.keys(data);
             console.log(keyin);
             for (let i=0;i<files.length;i++)
     {
         let abc="files\/"+files[i]+".csv";
         console.log(d['files/1.0.csv']);
         console.log("jhicd");
     }


}