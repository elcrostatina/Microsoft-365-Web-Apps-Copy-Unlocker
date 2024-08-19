document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('notifyButton')
    
    button.addEventListener('click', function() {
        toggleButtonText(button)
        toggleDefender(button.innerText !== 'Start')
    })
})

/**
 * Toggles the defender on the current tab.
 *
 * @param {boolean} disable
 */
const toggleDefender = (disable) =>
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { disable })
    })

const toggleButtonText = (button) => 
    button.innerText = button.innerText === 'Start' ? 'Stop' : 'Start'
