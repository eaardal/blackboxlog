/*    ===== ORIGINAL ===== */

(function(fiddlerProxy, logFilter){
  var logFilterParam = logFilter !== null ? '?logfilter=' + logFilter : '';
  var originalConsoleLog = console.log;
  console.log = function() {
    var url = fiddlerProxy + logFilterParam;
    var req = new XMLHttpRequest();
    req.open('POST', url);
    req.send(JSON.stringify(arguments));
    return originalConsoleLog.apply(this, arguments);
  }
}());

/*    ===== MINIFIED ===== */

!function(a,b){var c=null!==b?"?logfilter="+b:"",d=console.log;console.log=function(){var b=a+c,e=new XMLHttpRequest;return e.open("POST",b),e.send(JSON.stringify(arguments)),d.apply(this,arguments)}}();
