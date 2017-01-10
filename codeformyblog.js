function displayMemberCJContent() {
  var script = document.createElement("script");
  script.language="javascript";
  script.src = "The actual link from CJ";
  document.write(script.outerHTML);
}