var links = document.getElementsByTagName("a");
var script = document.createElement('script');

var ip, location, country, city, region;

jQuery.get("http://ipinfo.io", function(e) {
    ip = e.ip;
    location = e.location;
    country = e.country;
    city = e.city;
    region = e.region;
});

console.log(ip, location, country, city, region);


console.log(links);
for (var i = 0; i < links.length; i++) {
    console.log(i);
    links[i].addEventListener('click', function(event) {
        console.log(i);
        var target = event.target;
        var href = target.getAttribute('href');

        var form = document.createElement('form');
        form.style.display = 'none';
        form.method = 'get';
        form.action = 'trackurlclicks'

        var inputhref = document.createElement('input');
        inputhref.type = 'hidden';
        inputhref.name = 'redirect';
        inputhref.value = href;
        form.appendChild(inputhref);

        var inputip = document.createElement('input');
        inputip.type = 'hidden';
        inputip.name = 'ip';
        inputip.value = ip;
        form.appendChild(inputip);

        var inputlocation = document.createElement('input');
        inputlocation.type = 'hidden';
        inputlocation.name = 'location';
        inputlocation.value = location;
        form.appendChild(inputlocation);

        var inputcountry = document.createElement('input');
        inputcountry.type = 'hidden';
        inputcountry.name = 'country';
        inputcountry.value = country;
        form.appendChild(inputcountry);

        var inputcity = document.createElement('input');
        inputcity.type = 'hidden';
        inputcity.name = 'city';
        inputcity.value = city;
        form.appendChild(inputcity);

        var inputregion = document.createElement('input');
        inputregion.type = 'hidden';
        inputregion.name = 'region';
        inputregion.value = region;
        form.appendChild(inputregion);

        form.submit();
    });
}