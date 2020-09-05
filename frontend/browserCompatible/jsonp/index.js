

function createJsonp({url, method, param, callback}) {
    let script = document.createElement('script');
    let params = Object.keys(param).map(function(key){
        return `${key}=${param[key]}`;
    });
    script.src = `${url}?method=${method}&${params.join('&')}&callback=${callback}`;
    document.body.appendChild(script);
}