// Custom javascript code which is run on every page.

var init = function() {
    console.log("This is custom javascript run on every pageload.");
}

window.addEventListener('load', init);
$(document).on('turbolinks:load', init);

