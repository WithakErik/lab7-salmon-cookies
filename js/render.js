function render(array, tabId, rowId) {
    let tab = document.getElementById(tabId);
    while(tab.firstChild) {
        tab.removeChild(tab.firstChild);
    }
    let row = document.createElement('tr');
    row.id = rowId;
    // let temp = document.createDocumentFragment();
    for(let i = 0; i < array.length; i++) {
        console.log('this is i', i);
        let data = document.createElement('td');
        data.innerHTML = array[i];
        row.appendChild(data);
    }
    // It doesn't work if I don't have this!??!
    setTimeout(() => {
        tab.appendChild(row);
    }, 1);
}