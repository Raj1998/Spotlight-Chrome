/**
 * Class that has methods for the
 * Popup file and the Options page
 */
class OptionsClass {

    /**
     * Function to fetch currently set
     * keyboard shortcut to launch the 
     * Zap-Search
     */
    getCurrentLaunchShortcut() {
        let commands = chrome.commands;
        if (commands) {
            chrome.commands.getAll(function (a) {
                for (var b = 0; b < a.length; b++)
                  if ('launch-spotlight' == a[b].name){
                      document.querySelector("#curr-shortcut").innerHTML = a[b].shortcut
                  }
              });
        }
    }
    
    /**
     * Function to set click listener 
     * to launch chrome's extension shortcuts
     * 
     * We cannot directly call window.open(url)
     * in this script.
     */
    setClickListener() {
        let extShortcut = document.querySelector("#ext-shortcut");
        if (extShortcut) {
            extShortcut.addEventListener("click", () => {
                chrome.runtime.sendMessage(
                    {
                    action: 'shortcuts'
                    },
                    function () {}
                );
            })
        }
    }
    
}


const myObj = new OptionsClass()
myObj.getCurrentLaunchShortcut()
myObj.setClickListener()