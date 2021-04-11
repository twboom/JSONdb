/* Page building */
const page = [];

// Page elements
page.Header = class { // Header
    constructor(parent) {
        const elements = [];
        
        // Title
        const title = document.createElement('h1');
        title.setAttribute('class', 'header');
        title.innerText = 'JSONdb';
        elements.push(title)

        // Appending the elements to the page
        page.appendElements(parent, elements);
    }
}

// Auxilary code
page.appendElements = function(parent, objs) {
    for (obj in objs) {
        parent.appendChild(objs[obj])
    }
}

// Build the page
page.build = function() {
    new page.Header(document.getElementsByTagName('header')[0])
}

window.onload = page.build