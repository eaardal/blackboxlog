# blackboxlog
Hijacks console.log and posts all calls to fiddler proxy (or any web endpoint).

Useful when debugging code on a device where you normally can't see the browser console.

(`console.log` will still work as usual, just with the additional feature of POST-ing what you log to a web endpoint).

## How to use

- [Open blackboxlog.js](./blackboxlog.js)
- Copy either full or minified code into the page you're debugging
- Pass the url to your fiddler proxy using the machine name, not localhost:

Full:
```javascript
(function(fiddlerProxy, logFilter){
  /* ... */
}('http://mymachinename:8888'));
```

Minified:
```javascript
!function(a,b){ /* ... */ }}('http://mymachinename:8888'));
```

- Use console.log as you normally would: `console.log('some', { data: 'here' }, 123, true)`.
- In Fiddler, make sure the proxy is enabled
- When you run your code, you should see requests coming in to the `http://mymachinename:8888` url in Fiddler with the console.log arguments in the request body.
- You should also still see `console.log()` acting just as before in your browser console.

### Using log filter

If you use Fiddler's log filter feature "Show only if URL contains", you can add a second parameter after the fiddler url where the value is equal to that in the log filter box in fiddler. This will just add this phrase to the querystring and thus Fiddler won't exclude it when you have the filter enabled.

```javascript
(function(fiddlerProxy, logFilter){
  /* ... */
}('http://mymachinename:8888', 'mylogfilter'));
```

## Known issues

- You might see `XMLHttpRequest cannot load [URL]. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin '[ORIGIN]' is therefore not allowed access.` when running your application. This will still work regardless of this error, it's just very verbose in your console while debugging.
