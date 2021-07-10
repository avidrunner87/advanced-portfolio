// ------------- Assignment Code -------------


// ---------------- Functions ----------------
// Run on web page load
function init() {
    $("body").addClass("has-fixed-sidenav");
    renderHeader();
    renderMain();

    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
}

// Create the header and navigation
function renderHeader() {
    let $mainNavBarDiv = $("<div>");
    $mainNavBarDiv.addClass("navbar-fixed");

    let $navBar = $("<nav>");
    $navBar.addClass("navbar white");

    let $navBarWrap = $("<div>");
    $navBarWrap.addClass("nav-wrapper");

    let $navBarTitle = $("<a>");
    $navBarTitle.attr("href", "#!")
    $navBarTitle.attr("id", "pageTitle");
    $navBarTitle.text("Home");
    $navBarTitle.addClass("brand-logo grey-text text-darken-4");

    let $navBarMenu = $("<a>");
    $navBarMenu.attr("href", "#!");
    $navBarMenu.attr("data-target", "sideNavLeft");
    $navBarMenu.addClass("sidenav-trigger left");

    let $navBarMenuI = $("<i>");
    $navBarMenuI.addClass("material-icons black-text");
    $navBarMenuI.text("menu");

    $navBarMenu.append($navBarMenuI);
    $navBarWrap.append($navBarMenu);


    // Append header to the web page
    $navBarWrap.append($navBarTitle);
    $navBar.append($navBarWrap);
    $mainNavBarDiv.append($navBar);
    $("header").append($mainNavBarDiv);

    let $sideNavBarUL = $("<ul>");
    $sideNavBarUL.attr("id", "sideNavLeft");
    $sideNavBarUL.addClass("sidenav sidenav-fixed");

    // Create profile section
    let $sideNavBarProfileLI = $("<li>");

    let $sideNavBarProfileDiv = $("<div>");
    $sideNavBarProfileDiv.addClass("user-view profile");

    let $sideNavBarProfileBg = $("<div>");
    $sideNavBarProfileBg.addClass("background");

    let $sideNavBarProfileBgImg = $("<img>");
    $sideNavBarProfileBgImg.attr("src", "assets/images/nav-background.jpg");

    let $sideNavBarProfileImgA = $("<a>");
    $sideNavBarProfileImgA.attr("href", "#");

    let $sideNavBarProfileImg = $("<img>");
    $sideNavBarProfileImg.addClass("circle profileImage");
    $sideNavBarProfileImg.attr("src", "assets/images/personal-image.jpg");

    let $sideNavBarProfileNameA = $("<a>");
    $sideNavBarProfileNameA.attr("href", "#");

    let $sideNavBarProfileName = $("<span>");
    $sideNavBarProfileName.addClass("white-text name");
    $sideNavBarProfileName.text("Andrew Ronchetto");

    $sideNavBarProfileBg.append($sideNavBarProfileBgImg);
    $sideNavBarProfileDiv.append($sideNavBarProfileBg);
    $sideNavBarProfileImgA.append($sideNavBarProfileImg);
    $sideNavBarProfileDiv.append($sideNavBarProfileImgA);
    $sideNavBarProfileNameA.append($sideNavBarProfileName);
    $sideNavBarProfileDiv.append($sideNavBarProfileNameA);
    $sideNavBarProfileLI.append($sideNavBarProfileDiv);
    $sideNavBarUL.append($sideNavBarProfileLI);

    // Create Home on Navigation

    let $sideNavBarHomeLI = $("<li>");

    let $sideNavBarHomeA = $("<a>");
    $sideNavBarHomeA.attr("id", "homeMe");
    $sideNavBarHomeA.attr("href", "#home");
    $sideNavBarHomeA.addClass("waves-effect");
    $sideNavBarHomeA.attr("tabindex", "0");
    $sideNavBarHomeA.text("Home");
    
    let $sideNavBarHomeI = $("<i>");
    $sideNavBarHomeI.addClass("material-icons left");
    $sideNavBarHomeI.text("home");

    $sideNavBarHomeA.append($sideNavBarHomeI);
    $sideNavBarHomeLI.append($sideNavBarHomeA);
    $sideNavBarUL.append($sideNavBarHomeLI);

    // Create About Me on Navigation

    let $sideNavBarAboutLI = $("<li>");

    let $sideNavBarAboutA = $("<a>");
    $sideNavBarAboutA.attr("id", "aboutMe");
    $sideNavBarAboutA.attr("href", "#about");
    $sideNavBarAboutA.attr("tabindex", "0");
    $sideNavBarAboutA.addClass("waves-effect");
    $sideNavBarAboutA.text("About");
    
    let $sideNavBarAboutI = $("<i>");
    $sideNavBarAboutI.addClass("material-icons left");
    $sideNavBarAboutI.text("person");

    $sideNavBarAboutA.append($sideNavBarAboutI);
    $sideNavBarAboutLI.append($sideNavBarAboutA);
    $sideNavBarUL.append($sideNavBarAboutLI);

    // Create Portfolio on Navigation

    let $sideNavBarPortfolioLI = $("<li>");

    let $sideNavBarPortfolioA = $("<a>");
    $sideNavBarPortfolioA.attr("id", "portfolioMe");
    $sideNavBarPortfolioA.attr("href", "#portfolio");
    $sideNavBarPortfolioA.addClass("waves-effect");
    $sideNavBarPortfolioA.attr("tabindex", "0");
    $sideNavBarPortfolioA.text("Portfolio");
    
    let $sideNavBarPortfolioI = $("<i>");
    $sideNavBarPortfolioI.addClass("material-icons left");
    $sideNavBarPortfolioI.text("apps");

    $sideNavBarPortfolioA.append($sideNavBarPortfolioI);
    $sideNavBarPortfolioLI.append($sideNavBarPortfolioA);
    $sideNavBarUL.append($sideNavBarPortfolioLI);
    
    // Create Networks accordion on Navigation
    let $sideNavBarNetworkLI = $("<li>");

    let $sideNavBarNetworkUL = $("<ul>");
    $sideNavBarNetworkUL.addClass("collapsible collapsible-accordion");

    let $sideNavBarNetworkAccLI = $("<li>");

    let $sideNavBarNetworkAccHead = $("<a>");
    $sideNavBarNetworkAccHead.addClass("collapsible-header");
    $sideNavBarNetworkAccHead.addClass("waves-effect");
    $sideNavBarNetworkAccHead.text("Networks");

    let $sideNavBarNetworkAccHeadI = $("<i>");
    $sideNavBarNetworkAccHeadI.addClass("material-icons left chevron");
    $sideNavBarNetworkAccHeadI.text("chevron_right");

    $sideNavBarNetworkAccHead.append($sideNavBarNetworkAccHeadI);

    let $sideNavBarNetworkAccDiv = $("<div>");
    $sideNavBarNetworkAccDiv.addClass("collapsible-body");

    let $sideNavBarNetworkDivUL = $("<ul>");

    let $sideNavBarNetworkDivLinkedInLI = $("<li>");

    let $sideNavBarNetworkDivLinkedInA = $("<a>");
    $sideNavBarNetworkDivLinkedInA.attr("href", "https://www.linkedin.com/in/andrewronchetto");
    $sideNavBarNetworkDivLinkedInA.attr("target", "_blank");
    $sideNavBarNetworkDivLinkedInA.addClass("waves-effect");
    $sideNavBarNetworkDivLinkedInA.text("LinkedIn");

    let $sideNavBarNetworkDivLinkedInI = $("<i>");
    $sideNavBarNetworkDivLinkedInI.addClass("fab fa-linkedin-in fab-icon");

    $sideNavBarNetworkDivLinkedInA.append($sideNavBarNetworkDivLinkedInI);
    $sideNavBarNetworkDivLinkedInLI.append($sideNavBarNetworkDivLinkedInA);

    let $sideNavBarNetworkDivGithubLI = $("<li>");

    let $sideNavBarNetworkDivGithubA = $("<a>");
    $sideNavBarNetworkDivGithubA.attr("href", "https://github.com/avidrunner87");
    $sideNavBarNetworkDivGithubA.attr("target", "_blank");
    $sideNavBarNetworkDivGithubA.addClass("waves-effect");
    $sideNavBarNetworkDivGithubA.text("Github");

    let $sideNavBarNetworkDivGithubI = $("<i>");
    $sideNavBarNetworkDivGithubI.addClass("fab fa-github fab-icon");

    $sideNavBarNetworkDivGithubA.append($sideNavBarNetworkDivGithubI);
    $sideNavBarNetworkDivGithubLI.append($sideNavBarNetworkDivGithubA);

    $sideNavBarNetworkDivUL.append($sideNavBarNetworkDivLinkedInLI);
    $sideNavBarNetworkDivUL.append($sideNavBarNetworkDivGithubLI);

    $sideNavBarNetworkAccDiv.append($sideNavBarNetworkDivUL);
    $sideNavBarNetworkAccLI.append($sideNavBarNetworkAccHead);
    $sideNavBarNetworkAccLI.append($sideNavBarNetworkAccDiv);
    $sideNavBarNetworkUL.append($sideNavBarNetworkAccLI);
    $sideNavBarNetworkLI.append($sideNavBarNetworkUL);

    $sideNavBarUL.append($sideNavBarNetworkLI);

    // Create Contact Me accordion on Navigation
    let $sideNavBarContactLI = $("<li>");

    let $sideNavBarContactUL = $("<ul>");
    $sideNavBarContactUL.addClass("collapsible collapsible-accordion");

    let $sideNavBarContactAccLI = $("<li>");

    let $sideNavBarContactAccHead = $("<a>");
    $sideNavBarContactAccHead.addClass("collapsible-header");
    $sideNavBarContactAccHead.addClass("waves-effect");
    $sideNavBarContactAccHead.text("Contact");

    let $sideNavBarContactAccHeadI = $("<i>");
    $sideNavBarContactAccHeadI.addClass("material-icons left chevron");
    $sideNavBarContactAccHeadI.text("chevron_right");

    $sideNavBarContactAccHead.append($sideNavBarContactAccHeadI);

    let $sideNavBarContactAccDiv = $("<div>");
    $sideNavBarContactAccDiv.addClass("collapsible-body");

    let $sideNavBarContactDivUL = $("<ul>");

    let $sideNavBarContactDivEmailLI = $("<li>");

    let $sideNavBarContactDivEmailA = $("<a>");
    $sideNavBarContactDivEmailA.attr("href", "mailto:andrew.ronchetto@me.com");
    $sideNavBarContactDivEmailA.addClass("waves-effect");
    $sideNavBarContactDivEmailA.text("Email Me");

    let $sideNavBarContactDivEmailI = $("<i>");
    $sideNavBarContactDivEmailI.addClass("material-icons left");
    $sideNavBarContactDivEmailI.text("email");

    $sideNavBarContactDivEmailA.append($sideNavBarContactDivEmailI);
    $sideNavBarContactDivEmailLI.append($sideNavBarContactDivEmailA);

    let $sideNavBarContactDivTeleLI = $("<li>");

    let $sideNavBarContactDivTeleA = $("<a>");
    $sideNavBarContactDivTeleA.attr("href", "tel:+18322698051");
    $sideNavBarContactDivTeleA.addClass("waves-effect");
    $sideNavBarContactDivTeleA.text("Call Me");

    let $sideNavBarContactDivTeleI = $("<i>");
    $sideNavBarContactDivTeleI.addClass("material-icons left");
    $sideNavBarContactDivTeleI.text("phone_iphone");

    $sideNavBarContactDivTeleA.append($sideNavBarContactDivTeleI);
    $sideNavBarContactDivTeleLI.append($sideNavBarContactDivTeleA);

    $sideNavBarContactDivUL.append($sideNavBarContactDivEmailLI);
    $sideNavBarContactDivUL.append($sideNavBarContactDivTeleLI);

    $sideNavBarContactAccDiv.append($sideNavBarContactDivUL);
    $sideNavBarContactAccLI.append($sideNavBarContactAccHead);
    $sideNavBarContactAccLI.append($sideNavBarContactAccDiv);
    $sideNavBarContactUL.append($sideNavBarContactAccLI);
    $sideNavBarContactLI.append($sideNavBarContactUL);

    $sideNavBarUL.append($sideNavBarContactLI);

    $("header").append($sideNavBarUL);





    // <li><div class="user-view">
    //   <div class="background">
    //     <img src="images/office.jpg">
    //   </div>
    //   <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
    //   <a href="#name"><span class="white-text name">John Doe</span></a>
    //   <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    // </div></li>


    // <ul id="sidenav-left" class="sidenav sidenav-fixed" style="transform: translateX(0px);">
    //     <li><a href="/pages/admin-dashboard" class="logo-container">Admin<i class="material-icons left">spa</i></a></li>
    //     <li class="no-padding">
    //       <ul class="collapsible collapsible-accordion">
    //         <li class="bold waves-effect"><a class="collapsible-header" tabindex="0">Pages<i class="material-icons chevron">chevron_left</i></a>
    //           <div class="collapsible-body">
    //             <ul>
    //               <li><a href="/pages/admin-dashboard" class="waves-effect">Dashboard<i class="material-icons">web</i></a></li>
    //               <li><a href="/pages/admin-fixed-chart" class="waves-effect">Fixed Chart<i class="material-icons">list</i></a></li>
    //               <li><a href="/pages/admin-grid" class="waves-effect">Grid<i class="material-icons">dashboard</i></a></li>
    //               <li><a href="/pages/admin-chat" class="waves-effect">Chat<i class="material-icons">chat</i></a></li>
    //             </ul>
    //           </div>
    //         </li>
    //         <li class="bold waves-effect"><a class="collapsible-header" tabindex="0">Charts<i class="material-icons chevron">chevron_left</i></a>
    //           <div class="collapsible-body">
    //             <ul>
    //               <li><a href="/pages/admin-line-charts" class="waves-effect">Line Charts<i class="material-icons">show_chart</i></a></li>
    //               <li><a href="/pages/admin-bar-charts" class="waves-effect">Bar Charts<i class="material-icons">equalizer</i></a></li>
    //               <li><a href="/pages/admin-area-charts" class="waves-effect">Area Charts<i class="material-icons">multiline_chart</i></a></li>
    //               <li><a href="/pages/admin-doughnut-charts" class="waves-effect">Doughnut Charts<i class="material-icons">pie_chart</i></a></li>
    //               <li><a href="/pages/admin-financial-charts" class="waves-effect">Financial Charts<i class="material-icons">euro_symbol</i></a></li>
    //               <li><a href="/pages/admin-interactive-charts" class="waves-effect">Interactive Charts<i class="material-icons">touch_app</i></a></li>
    //             </ul>
    //           </div>
    //         </li>
    //         <li class="bold waves-effect"><a class="collapsible-header" tabindex="0">Tables<i class="material-icons chevron">chevron_left</i></a>
    //           <div class="collapsible-body">
    //             <ul>
    //               <li><a href="/pages/admin-fullscreen-table" class="waves-effect">Fullscreen with Chart<i class="material-icons">show_chart</i></a></li>
    //               <li><a href="/pages/admin-table-custom-elements" class="waves-effect">Table with Custom Elements<i class="material-icons">settings</i></a></li>
    //             </ul>
    //           </div>
    //         </li>
    //         <li class="bold waves-effect"><a class="collapsible-header" tabindex="0">Calendar<i class="material-icons chevron">chevron_left</i></a>
    //           <div class="collapsible-body">
    //             <ul>
    //               <li><a href="/pages/admin-calendar" class="waves-effect">Calendar<i class="material-icons">cloud</i></a></li>
    //             </ul>
    //           </div>
    //         </li>
    //         <li class="bold waves-effect active"><a class="collapsible-header" tabindex="0">Headers<i class="material-icons chevron">chevron_left</i></a>
    //           <div class="collapsible-body" style="display: block;">
    //             <ul>
    //               <li><a href="/pages/admin-header-tabbed" class="waves-effect active">Tabbed<i class="material-icons">tab</i></a></li>
    //               <li><a href="/pages/admin-header-metrics" class="waves-effect">Metrics<i class="material-icons">web</i></a></li>
    //               <li><a href="/pages/admin-header-search" class="waves-effect">Search<i class="material-icons">search</i></a></li>
    //             </ul>
    //           </div>
    //         </li>
    //         <li class="bold waves-effect"><a class="collapsible-header" tabindex="0">Account<i class="material-icons chevron">chevron_left</i></a>
    //           <div class="collapsible-body">
    //             <ul>
    //               <li><a href="/pages/admin-log-in" class="waves-effect">Log In<i class="material-icons">person</i></a></li>
    //               <li><a href="/pages/admin-settings" class="waves-effect">Settings<i class="material-icons">settings</i></a></li>
    //             </ul>
    //           </div>
    //         </li>
    //       </ul>
    //     </li>
    //   </ul>
}

// Create the main and title
function renderMain() {

    let $mainDiv = $("<div>");
    $mainDiv.addClass("navbar-fixed");

    let $mainDivContainer = $("<div>");
    $mainDivContainer.addClass("container");

    $mainDiv.append($mainDivContainer);
    $("main").append($mainDiv);
}

// Calls init to retrieve data and render it to the page on load
init();

// ------------- Event Listeners -------------
