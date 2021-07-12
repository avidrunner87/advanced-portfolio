// ------------- Assignment Code -------------
const githubUsername = "avidrunner87";

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
    $sideNavBarNetworkAccHead.text("Network");

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
    $sideNavBarNetworkDivGithubA.attr("href", `https://github.com/${githubUsername}`);
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
}

// Create the main and title
function renderMain() {

    $("main").html("");

    let $mainDiv = $("<div>");
    $mainDiv.addClass("navbar-fixed mainContent");

    // let $mainDivContainer = $("<div>");
    // $mainDivContainer.addClass("container");

    // $mainDiv.append($mainDivContainer);
    $("main").append($mainDiv);
}

function renderHome() {
    $("#pageTitle").text("Home");

    // Clear the page content
    $(".mainContent").html("");
}

function renderAboutMe() {
    $("#pageTitle").text("About Me");

    // Clear the page content
    $(".mainContent").html("");
}

function renderPortfolio() {
    $("#pageTitle").text("Portfolio");

    // Clear the page content
    $(".mainContent").html("");

    // Add portfolio intro
    let $portfolioIntro = $("<div>");
    $portfolioIntro.text("Please take a look at my work below. Unless stated, all the work was completed by me.")
    $(".mainContent").append($portfolioIntro);

    // Create an array to store the repos
    let dataRepos = [];

    // Get Github Pinned Repos
    let requestUrl = `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${githubUsername}`;

    fetch(requestUrl)
    .then(handleAPIErrors)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(repo => {
            // Get Github Repo Details
            requestUrl = `https://api.github.com/repos/avidrunner87/${repo.repo}`;

            fetch(requestUrl)
            .then(handleAPIErrors)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let newEntry = {
                    "name": data.name,
                    "created_at": data.created_at,
                    "description": data.description,
                    "homepage": data.homepage,
                    "html_url": data.html_url
                }
                dataRepos.push(newEntry);
            })
            .catch(function(error) {
                console.log(error);
            })
        });
    })
    .then(function() {
        console.log(dataRepos.length);
    })
    .catch(function(error) {
        console.log(error);
    })

    
    // Sort the repos by date created
    // dataRepos.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1);
    // dataRepos.reverse();
    // console.log(dataRepos);

    // for (let i = 0; i < dataRepos.length; i++) {
    //     console.log(dataRepos[i].created_at);

    //     let $repoDiv = $("<div>");
    //     $repoDiv.addClass("row");

    //     let $repoColCreated = $("<div>");
    //     $repoColCreated.addClass("col s1 grey-text text-italic");
    //     $repoColCreated.text(dayjs(dataRepos[i].created_at).format("YYYY MMM").toUpperCase());

    //     $repoDiv.append($repoColCreated);
    //     $(".mainContent").append($repoDiv);  
    // } 
}

function handleAPIErrors(response) {
    if (!response.ok) {
        M.toast({html: `${response.status} error occurred. Please see the console for more information.`});
    }
    return response;
}

function testGitHubAPIs() {
    let requestUrl = "";

    // Get Github Pinned Repos
    requestUrl = "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=avidrunner87";

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        console.log(data);
    })

    // Get Github All Repos
    requestUrl = "https://api.github.com/users/avidrunner87/repos";

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        console.log(data);
    })

    // Get Github Repo Topics Content
    requestUrl = "https://api.github.com/repos/avidrunner87/daily-planner/topics";

    fetch(requestUrl, {
        headers: {
            "Accept": "application/vnd.github.mercy-preview+json"
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}

// Calls init to retrieve data and render it to the page on load
init();

// ------------- Event Listeners -------------
$("#sideNavLeft").click(function(event) {
    if ($(event.target).is("a") === true || $(event.target).parent().is("a") === true) {
        const id = event.target.id || event.target.parentNode.id;
        if(id != "") {
            switch (id) {
                case "homeMe":
                    renderHome();
                    break;
                case "aboutMe":
                    renderAboutMe();
                    break;
                case "portfolioMe":
                    renderPortfolio();
                    break;

                default:
                    break;
            }
        }
    }
})