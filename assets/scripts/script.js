// ------------- Assignment Code -------------


// ---------------- Functions ----------------
// Run on web page load
function init() {
    renderHeader();
}

// Create the header and navigation on the page
function renderHeader() {
    let $headerNavBarDiv = $("<div>");
    $headerNavBarDiv.addClass("navbar-fixed");

    let $navBar = $("<nav>");
    $navBar.addClass("navbar white");

    let $navBarWrap = $("<div>");
    $navBarWrap.addClass("nav-wrapper");

    let $navBarTitle = $("<span>");
    $navBarTitle.text("About Me");
    $navBarTitle.addClass("brand-logo grey-text text-darken-4");

    // <a href="#!" class="brand-logo grey-text text-darken-4">Fixed Chart</a>

    // Append header to the web page
    $navBarWrap.append($navBarTitle);
    $navBar.append($navBarWrap);
    $headerNavBarDiv.append($navBar);

    $("header").append($headerNavBarDiv);

    // <a href="#!" class="brand-logo grey-text text-darken-4">Home</a>


}

// Calls init to retrieve data and render it to the page on load
init();

// ------------- Event Listeners -------------
