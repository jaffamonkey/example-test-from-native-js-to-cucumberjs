var app = angular.module('testwebsite', []);

app.controller('MainCtrl', function($scope, $compile) {
  
});

app.directive('pageContents', function($compile){
  return {
    link: function(scope, element, attrs){
      var html = '<h1>Example use of [h1] element tag</h1><p>Example use of [p] element tag</p><h3>A basic form</h3><!-- Simple form example --><form action="https://duckduckgo.com/"><!-- A text entry field definition --><input type="text" name="q"><!-- Add a value that will be processed with your search terms entered in previous field --><input type="hidden" name="sites" value="github.com"><!-- Add a button element with label text, to submit the form --><button id="searchButton" type="submit">Search github.com using DuckDuckGo</button></form><!-- Insert a line (carriage-return) --><br><h3>Example use of [h3] element tag</h3><!-- A basic text hyperlink --><a href="https://duckduckgo.com">Duck Duck Go</a><br>';
  
      var matches = html.match(/href="(.+?)"/g);
      
      matches.forEach(function(href){
        var url = href.match(/href="(.+?)"/)[1]
        
        html = html.replace(href, 'ng-click="loadPage(\''+url+'\')"')
      });
      
      var pageEl = $compile(html)(scope);
      element.append(pageEl);
      
      scope.loadPage = function(url){
        scope.clicked = 'clicked ' +url;
      };
    }
  };
});