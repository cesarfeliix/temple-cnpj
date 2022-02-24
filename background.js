var contextMenuItem = {
    "id": "cnpj",
    "title": "Temple CNPJ",
    "contexts": ["editable"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function() {
    chrome.windows.create({url: "index.html"});
    
});