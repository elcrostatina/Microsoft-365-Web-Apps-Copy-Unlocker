const MCAS_IFRAME_ID = 'mcas-presence-frame-do-not-remove';
let blockCopyIframe

const disableBlockCopyIframe = (disable) => {
    console.log('Disabling block copy iframe:', disable)
    if (disable) {
        blockCopyIframe = document.getElementById(MCAS_IFRAME_ID);
        blockCopyIframe.remove()
    }
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (typeof request.disable === 'boolean') {
            disableBlockCopyIframe(request.disable)
        }
    }
);