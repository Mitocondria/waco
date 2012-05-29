function setCookie(c_name,value,exdays)
      {
      var exdate=new Date();
      exdate.setDate(exdate.getDate() + exdays);
      var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
      document.cookie=c_name + "=" + c_value;
      }
    
    function getCookie(c_name)
      {
      var i,x,y,ARRcookies=document.cookie.split(";");
      for (i=0;i<ARRcookies.length;i++)
      {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
          {
          return unescape(y);
          }
        }
      }
    
   
    function SetCookieAndReloadHome(cultureparameter)
    {
       setCookie("CurrentLanguage",cultureparameter,7);
      
    var url = location.href;
    var index = url.length;
    var parameter=url.indexOf("/");
    
    //url=url.substring(0,parameter);
    url=window.location.hostname;   
      window.location.href="http://"+url;

    }
    