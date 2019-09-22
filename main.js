var endpoint = "https://www.jsonstore.io/8ba4fd855086288421f770482e372ccb5a05d906269a34da5884f39eed0418a1";

function getrandom() {
    var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    return random_string()
}


// // In the geturl function, we first store the value of the input box in the url variable. 
// Then we check if the URL protocols are OK or not. If the protocol doesn’t start with http:// 
// , https:// or ftp:// we add http:// at the beginning of the URL then return the URL.
function geturl() {
    var url = document.getElementById("urlinput").value;
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if (!protocol_ok) {
        newurl = "http://" + url;
        return newurl;
    } else {
        return url;
    }
