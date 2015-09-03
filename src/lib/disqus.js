function enableDisqus(config, sso_config) {
  if (enableDisqus.loaded) {
    window.DISQUS && window.DISQUS.reset({
      reload: true,
      config: function () {
        this.page.url        = config.url;
        this.page.title      = config.title;
      }
    });
  } else {
    var body = "var disqus_shortname  = \"" + config.shortname  + "\";\n" +
      "var disqus_title      = \"" + config.title      + "\";\n" +
      "var disqus_url        = \"" + config.url        + "\";\n";
    if (config.developer) {
      body +=  "var disqus_developer  = 1;\n"
    }
    appendScriptTagWithBody(body);

    (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();

    if (sso_config) {
      var remote_auth_s3 = sso_config.message + " " + sso_config.sig + " " + sso_config.timestamp;
      var body = "var disqus_config = function() {\n" +
        "  this.page.remote_auth_s3 = \"" + remote_auth_s3     + "\";\n" +
        "  this.page.api_key        = \"" + sso_config.api_key + "\";\n" +
        "};\n"
      appendScriptTagWithBody(body)
    }

    enableDisqus.loaded = true;
  }
}

function appendScriptTagWithBody(body) {
  var dso   = document.createElement("script");
  dso.type  = "text/javascript";
  dso.async = true;
  dso.text  = body;
  document.getElementsByTagName('body')[0].appendChild(dso);
}

module.exports = enableDisqus;