/* Page building */
const page = [];

// Configuration
page.config = {
    "titleSuffix": " | JSONdb"
}

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
    
    // Add header
    new page.Header(document.getElementsByTagName('header')[0])

    // Set title suffix
    document.getElementsByTagName('title')[0].innerText += page.config.titleSuffix
}

window.onload = page.build