var myArr =[


{
Namefashion: "BURBERRY",
Designer:"Christopher Bailey",
Born: 1856,
RunwayPhoto: "images/burberry-rtw-fw2014-runway-10_141127541605.jpg",
Labels: "BURBERRY PRORSUM",
Website: "http://us.burberry.com/",
VogueCovers: 5
},


{
Namefashion: "RODARTE",
Designer: "Kate and Laura Mulleavy",
Born: 2004,
RunwayPhoto: "images/rodarte-rtw-fw2014-runway-06_193904905613.jpg",
Labels: "RODARTE",
Website: "http://www.rodarte.net/",
VogueCovers: 7
},


{
Namefashion: "PROENZA SCHOULER",
Designer: "Jack McCollough and Lazaro Hernand",
Born: 2002,
RunwayPhoto: "images/proenza-schouler-rtw-fw2014-runway-22_093039226894.jpg",
Labels: "Proenza Schouler, PS1",
Website: "http://www.proenzaschouler.com/",
VogueCovers: 1
},

{
Namefashion: "MISSONI",
Designer: "Angela Missoni",
Born: 1953,
RunwayPhoto: "images/missoni-rtw-fw2014-runway-01_114708480851.jpg",
Labels: "Missoni, M Missoni, Missoni Sport",
Website: "http://www.missoni.com/",
VogueCovers: 2
},

];

$(document).ready(function(){
  var templateFunction= function(arr, $target){
  var fragment = "";
  for(var i=0; i < arr.length; i++)	
  
  {
			fragment += "<div class= \"fashion\">"
			+ "<img src=\"" + arr[i].RunwayPhoto + "\" alt=\"\">"
			+ "<h3>" + "Namefashion: " + arr[i].Namefashion + "</h3>"
			+ "<ul>"
			+ "<li>" + "Designer: " + arr[i].Designer + "</li>"
			+ "<li>" + "Born: " +  arr[i].born + "</li>"
			+ "<li>" + "Labels: " + arr[i].Labels + "</li>"
			+ "<li>" + "Website: " + arr[i].Website + "</li>"
			+ "<li>" + "VogueCovers: " + arr[i].VogueCovers + "</li>"
			+ "</ul>"
			+ "</div>"
		};
 		$target.append(fragment);
  };

  templateFunction(myArr, $(".container"))



});
