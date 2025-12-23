const ORIGIN_SERVER = 'speech.platform.bing.com'

addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request));
})
async function fetchAndApply(request) {
	let url = new URL(request.url);
    url.host = ORIGIN_SERVER;
    let method = request.method;
	let request_headers = request.headers;
	let new_request_headers = new Headers(request_headers);
	new_request_headers.set('Origin', 'chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold');
	new_request_headers.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0');
	let original_response = await fetch(url.href, {
		method: method,
		headers: new_request_headers
	})
	let connection_upgrade = new_request_headers.get("Upgrade");
	if (connection_upgrade && connection_upgrade.toLowerCase() == "websocket") {
		return original_response;
	} 
    return null;
}