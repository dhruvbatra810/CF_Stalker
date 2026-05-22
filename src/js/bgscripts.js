chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.todo === "appendHTML") {
        fetch(chrome.runtime.getURL('src/peek.html'))
            .then(res => res.text())
            .then(html => sendResponse({ htmlResponse: html }))
            .catch(() => sendResponse({ htmlResponse: '' }));
        return true;
    }
});
