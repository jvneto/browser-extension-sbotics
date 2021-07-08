const langSystem = navigator.language;

const language = () => {

};

chrome.storage.sync.set({ langSystem: langSystem.replace("-", "_") }, () => {});





// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.sync.set({ color });
//     console.log('Default background color set to %cgreen', `color: ${color}`);
// });