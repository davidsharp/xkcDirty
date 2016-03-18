var initialRequest = "http://dynamic.xkcd.com/api-0/jsonp/comic/";

var numberOfResults;
var results = [];
var interval;

$.getJSON(initialRequest,
	function(data) {
		numberOfResults=data.num;
		for(var i=1;i<=numberOfResults;i++){ if(i!==404){
			$.getJSON(initialRequest+i,
				function( moreData ) {
					results[i]=moreData.safe_title;
					//$('ul').append("<li>"+moreData.safe_title+"</li>");
					if(i===numberOfResults)listCompleteCallback();
				}
			});}
		}
	}
});

function listCompleteCallback(){
	$('body').append(
			"<ul>"+
				//TODO actually ad the stuff to this here
			"</ul>"
		)
}
