function urlToPath(url) {
  var path = require("url").parse(url).pathname;
  var result = "." + decodeURIComponent(path);
    // use of for (;;) is copied from Author's solution
  for (;;) {
    var simplified = result.replace(/(\/|\\)\.\.(\/|\\|$)/, "/");
    if (simplified == result) return result
    result = simplified
  }
}