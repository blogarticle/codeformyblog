function getSourceLinkLeader() {
  var leaderArray = ["http://www.abc.net/placeholder-123?target=_blank&mouseover=N",
  "http://www.abc.net/placeholder-456?target=_blank&mouseover=N",
  "http://www.abc.com/placeholder-789?target=_blank&mouseover=N"]; 
  
  return leaderArray[Math.floor(Math.random() * leaderArray.length)];
}

function displayMemberCJContent() {
  var script = document.createElement("script");
  script.language="javascript";
  script.src = getSourceLinkLeader();
  document.write(script.outerHTML);
}

function displayAmazonContent() {
  var iFrame = document.createElement("iframe");
  iFrame.setAttribute("src",getAmazonSrcLinkLeader());
  iFrame.setAttribute("width","728");
  iFrame.setAttribute("height","90");
  iFrame.setAttribute("scrolling","no");
  iFrame.setAttribute("border","0");
  iFrame.setAttribute("marginwidth","0");
  iFrame.setAttribute("style","border:none;");
  iFrame.setAttribute("frameborder","0");

  document.write(iFrame.outerHTML);
}

function getAmazonSrcLinkLeader() {
  var amzLeaderArray = ["//abcd.com/e/cm?o=1&p=48&l=ur1&f=ifr&linkID=123&t=abc-20&tracking_id=abc-20",
  "//abcd.com/e/cm?o=1&p=48&l=ur1&f=ifr&linkID=123&t=abc-20&tracking_id=abc-20",
  "//abcd.com/e/cm?o=1&p=48&l=ur1&f=ifr&linkID=123&t=abc-20&tracking_id=abc-20"]; 
  
  return amzLeaderArray[Math.floor(Math.random() * amzLeaderArray.length)];
}
