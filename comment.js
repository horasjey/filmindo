var GISCUS_SESSION_KEY = 'giscus-session';
var script = document.currentScript;
var giscusOrigin = new URL(script.src).origin;
function formatError(message) {
    return "[tegursapa] An error occurred. Error message: \"" + message + "\".";
}
function loadScript(url, callback) {
    var target = document.createElement('script');
    target.setAttribute('src', url);
    target.onload = callback;
    script.insertAdjacentElement('beforeend', target);
}
loadScript('https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.min.js', function () {
    return iFrameResize({ checkOrigin: [giscusOrigin], resizeFrom: 'child' }, '.giscus-frame');
});
// Set up iframe src URL and params
var url = new URL(location.href);
var session = url.searchParams.get('giscus');
var savedSession = localStorage.getItem(GISCUS_SESSION_KEY);
if (session) {
    localStorage.setItem(GISCUS_SESSION_KEY, JSON.stringify(session));
    url.searchParams["delete"]('giscus');
    history.replaceState(undefined, document.title, url.toString());
}
else {
    try {
        session = JSON.parse(savedSession) || '';
    }
    catch (e) {
        session = '';
        localStorage.removeItem(GISCUS_SESSION_KEY);
        console.warn(formatError(e === null || e === void 0 ? void 0 : e.message) + " Session has been cleared.");
    }
}
var attributes = script.dataset;
var params = {};
var ogDescriptionMeta = document.querySelector("meta[property='og:description'],meta[name='description']");
params.origin = location.href;
params.session = session;
params.theme = attributes.theme;
params.reactionsEnabled = attributes.reactionsEnabled || '1';
params.emitMetadata = attributes.emitMetadata || '0';
params.repo = attributes.repo;
params.repoId = attributes.repoId;
params.category = attributes.category || '';
params.categoryId = attributes.categoryId;
params.description = ogDescriptionMeta ? ogDescriptionMeta.content : '';
switch (attributes.mapping) {
    case 'url':
        params.term = location.href;
        break;
    case 'title':
        params.term = document.title;
        break;
    case 'og:title':
        {
            var ogtitleMeta = document.querySelector("meta[property='og:title'],meta[name='og:title']");
            params.term = ogtitleMeta ? ogtitleMeta.content : '';
        }
        break;
    case 'specific':
        params.term = attributes.term;
        break;
    case 'number':
        params.number = attributes.term;
        break;
    case 'pathname':
    default:
        params.term =
            location.pathname.length < 2 ? 'index' : location.pathname.substr(1).replace(/\.\w+$/, '');
        break;
}
var src = giscusOrigin + "/widget?" + new URLSearchParams(params);
// Set up iframe element
var iframeElement = document.createElement('iframe');
var iframeAttributes = {
    "class": 'giscus-frame',
    title: 'Comments',
    scrolling: 'no',
    src: src
};
Object.entries(iframeAttributes).forEach(function (_a) {
    var key = _a[0], value = _a[1];
    return iframeElement.setAttribute(key, value);
});
// Create default style and prepend as <head>'s first child to make override possible.
var style = document.getElementById('giscus-css') || document.createElement('style');
style.id = 'giscus-css';
style.textContent = "\n  .giscus, .giscus-frame {\n    width: 100%;\n  }\n\n  .giscus-frame {\n    border: none;\n    color-scheme: auto;\n  }\n";
document.head.prepend(style);
// Insert iframe element
var existingContainer = document.querySelector('.giscus');
if (!existingContainer) {
    var iframeContainer = document.createElement('div');
    iframeContainer.setAttribute('class', 'giscus');
    iframeContainer.appendChild(iframeElement);
    script.insertAdjacentElement('afterend', iframeContainer);
}
else {
    while (existingContainer.firstChild)
        existingContainer.firstChild.remove();
    existingContainer.appendChild(iframeElement);
}
var suggestion = "Please consider reporting this error at https://github.com/laymonage/giscus/issues/new.";
// Listen to error messages
window.addEventListener('message', function (event) {
    var _a;
    if (event.origin !== giscusOrigin)
        return;
    var data = event.data;
    if (!(typeof data === 'object' && ((_a = data === null || data === void 0 ? void 0 : data.giscus) === null || _a === void 0 ? void 0 : _a.error)))
        return;
    var message = data.giscus.error;
    if (message.includes('Bad credentials') || message.includes('Invalid state value')) {
        // Might be because token is expired or other causes
        if (localStorage.getItem(GISCUS_SESSION_KEY) !== null) {
            localStorage.removeItem(GISCUS_SESSION_KEY);
            console.warn(formatError(message) + " Session has been cleared.");
            delete params.session;
            var src_1 = giscusOrigin + "/widget?" + new URLSearchParams(params);
            iframeElement.src = src_1; // Force reload
        }
        else if (!savedSession) {
            console.error(formatError(message) + " No session is stored initially. " + suggestion);
        }
    }
    else if (message.includes('Discussion not found')) {
        console.warn("[tegursapa] " + message + ". A new discussion will be created if a comment/reaction is submitted.");
    }
    else {
        console.error(formatError(message) + " " + suggestion);
    }
});
