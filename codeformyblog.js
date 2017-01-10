function getSourceLinkLeader() {
  var leaderArray = ["http://www.abc.net/placeholder-123?target=_blank&mouseover=N",
  "http://www.abc.net/placeholder-456?target=_blank&mouseover=N",
  "http://www.abc.com/placeholder-789?target=_blank&mouseover=N"]; 
  
  return leaderArray[Math.floor(Math.random() * leaderArray.length)];
}

function displayMemberCJContent() {
  var script = document.createElement("script");
  script.language="javascript";
  script.src = "http://www.abcdef.com/placeholder-ABCDEF?target=_top&mouseover=N";
  document.write(script.outerHTML);
}
