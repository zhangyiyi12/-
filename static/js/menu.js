/*---------- Menu ----------*/
var menuTabs = document.querySelector('.menu .menu-btn-tabs'); // Get the menu tabs

// Add a click event listener to the menu tabs container
menuTabs.addEventListener('click', function(e){

    // Check if the clicked element has the class "menu-btn" and doesn't have the class "active"
    if(e.target.classList.contains('menu-btn') && !e.target.classList.contains('active')){
        
        var target = e.target.getAttribute('data-target'); // Get the value of the "data-target" attribute from the clicked element
        menuTabs.querySelector('.active').classList.remove('active'); // Remove the "active" class from the currently active tab
        e.target.classList.add('active'); // Add the "active" class to the clicked tab

        var menuSection = document.querySelector('.menu'); // Get the menu section element
        menuSection.querySelector('.menu-gallery.active').classList.remove('active'); // Remove the "active" class from the currently active menu gallery
        menuSection.querySelector(target).classList.add('active'); // Add the "active" class to the menu gallery corresponding to the clicked tab

    }
});