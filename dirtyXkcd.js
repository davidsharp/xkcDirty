//var currentXkcd = "http://xkcd.com/info.0.json?callback=";
//var xk = "http://xkcd.com/";
//var cd = "/info.0.json?callback=";

var xk = "http://dynamic.xkcd.com/api-0/jsonp/comic/";

var comicsNo;
var comics = [];
var interval;

/*$.getJSON(currentXkcd, function(data){
		comicsNo=data.num;
		interval=setInterval(function(){if(comics.length==(comicsNo-1))printList();},5000);
		for(var i=1;i<=comicsNo;i++){
			if(i!==404)$.getJSON(xk+i+cd, function(moreData, i){comics.push(moreData.safe_title);});
		}
	});*/

/*function printList(){
	clearInterval(interval);
	for(var j=1;j<=comics;j++){
			$('ul').append("<li>"+comics[j]+"</li>");
		}
}*/



$.ajax({
url: xk,
jsonp: "callback",
dataType: "jsonp",
success: function( data ) {

	comicsNo=data.num;
	//interval=setInterval(function(){if(comics.length==(comicsNo-1))printList();},5000);

	for(var i=1;i<=comicsNo;i++){ if(i!==404){
		$.ajax({
			url: xk+i,
			jsonp: "callback",
			dataType: "jsonp",
			success: function( moreData ) {
				//comics.push(moreData.safe_title);
				$('ul').append("<li>"+moreData.safe_title+"</li>");
				if(i===comicsNo)alert("finished!");
			}
		});}
	}


}
});