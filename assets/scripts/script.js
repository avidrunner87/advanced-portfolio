// ------------- Assignment Code -------------
const githubUsername = "avidrunner87";

// ---------------- Functions ----------------
// Run on web page load
function init() {

    // Remove requires Javascript message on page load
    $(".messageJavascript").remove();

    // Initialize Materialize CSS components
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();

    // Determine if a subsection of the profile should be loaded
    let hash = window.location.hash;

    renderContent(hash);
}

// Create the main and title
function renderMain() {
}

// Load the page content
function renderContent(hash) {
    switch (hash) {
        case "#about":
            $("#about").closest("li").addClass("active");
            $("#home").closest("li").removeClass("active");
            $("#portfolio").closest("li").removeClass("active");
            $("#pageTitle").text("About Me");
            renderAboutMe();
            break;

        case "#portfolio":
            $("#portfolio").closest("li").addClass("active");
            $("#home").closest("li").removeClass("active");
            $("#about").closest("li").removeClass("active");
            $("#pageTitle").text("My Portfolio");
            renderPortfolio();
            break;
    
        default:
            $("#home").closest("li").addClass("active");
            $("#about").closest("li").removeClass("active");
            $("#portfolio").closest("li").removeClass("active");
            $("#pageTitle").text("Home");
            renderHome();
            break;
    }
}

function renderHome() {
    // Clear the page content
    $("main").html("");
}

function renderAboutMe() {
    // Clear the page content
    $("main").html("");
}

function renderPortfolio() {
    // Clear the page content
    $("main").html("");

    // Add portfolio intro
    let $portfolioIntro = $("<div>");
    $portfolioIntro.addClass("navbar-fixed");
    $portfolioIntro.text("Please take a look at my work below. Unless stated, all the work was completed by me.")
    $("main").append($portfolioIntro);

    // Add Page Loading Icon
    let $divSpinner = $("<div>");
    $divSpinner.addClass("navbar-fixed loadingSpinner");

    let $divPreLoader = $("<div>");
    $divPreLoader.addClass("preloader-wrapper active");

    let $divSpinnerLayer = $("<div>");
    $divSpinnerLayer.addClass("spinner-layer spinner-blue-only");

    let $divCircleClipperL = $("<div>");
    $divCircleClipperL.addClass("circle-clipper left");

    let $divCircleL = $("<div>");
    $divCircleL.addClass("circle");
    $divCircleClipperL.append($divCircleL);

    let $divGapPatch = $("<div>");
    $divGapPatch.addClass("gap-patch");

    let $divCircleG = $("<div>");
    $divCircleG.addClass("circle");
    $divGapPatch.append($divCircleG);

    let $divCircleClipperR = $("<div>");
    $divCircleClipperR.addClass("circle-clipper right");

    let $divCircleR = $("<div>");
    $divCircleR.addClass("circle");
    $divCircleClipperR.append($divCircleR);

    $divSpinnerLayer.append($divCircleClipperL);
    $divSpinnerLayer.append($divGapPatch);
    $divSpinnerLayer.append($divCircleClipperR);

    $divPreLoader.append($divSpinnerLayer);
    $divSpinner.append($divPreLoader);

    $("main").append($divSpinner);



    // Add initial portfolio timeline DIV and UL
    let $portTimelineDiv = $("<div>");
    $portTimelineDiv.addClass("navbar-fixed portfolioTimeline");

    let $portTimelineUl = $("<ul>");

    async function getAPIData() {
        let requestUrl = `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${githubUsername}`;
        let userData = [];
        let repoData = [];
        let reposData = [];
        let topicData = [];

        async function getUserData(requestUrl) {
            // read our JSON
            try {
                let response = await fetch(requestUrl)
                .then(handleAPIErrors);
                userData = await response.json();
            } catch (error) {
                console.error(error);
            }            
        }

        async function getRepoData(requestUrl) {
            // read our JSON
            let response = await fetch(requestUrl);
            repoData = await response.json();
        }

        async function getTopicData(requestUrl) {
            // read our JSON
            let response = await fetch(requestUrl, {
                headers: {
                    "Accept": "application/vnd.github.mercy-preview+json"
                }
            })

            topicData = await response.json();
        }

        await getUserData(requestUrl);

        userData.sort((a, b) => (a.cityShortName > b.cityShortName) ? 1 : -1);

        for (let repo of userData) {
            requestUrl = `https://api.github.com/repos/${githubUsername}/${repo.repo}`;

            await getRepoData(requestUrl);

            reposData.push(repoData);
        }

        reposData.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1);
        reposData.reverse();

        for (let repo of reposData) {
            let $timePrjLi = $("<li>");
            $timePrjLi.addClass("timelineProject no-padding");

            let $timePrjDiv = $("<div>");
            $timePrjDiv.addClass("row");

            let $timePrjDivDate = $("<div>");
            $timePrjDivDate.addClass("col s12 l1 timelineProjectDate");
            $timePrjDivDate.text(dayjs(repo.created_at).format("YYYY MMM").toUpperCase());

            $timePrjDiv.append($timePrjDivDate);

            let $timePrjDivDtls = $("<div>");
            $timePrjDivDtls.addClass("col row s12 l11 timelineProjectDetails");

            let $timePrjDivOvw = $("<div>");
            $timePrjDivOvw.addClass("col s12 l5 timelineProjectOverview");

            let $timePrjDivOvwTitle = $("<h5>");
            $timePrjDivOvwTitle.append(titleCase(repo.name));

            let $timePrjDivOvwAppA = $("<a>");
            $timePrjDivOvwAppA.attr("href", repo.homepage);
            $timePrjDivOvwAppA.attr("target", "_blank");
            $timePrjDivOvwAppA.addClass("waves-effect waves-light btn-small app-launch");
            $timePrjDivOvwAppA.text("Launch App");

            let $timePrjDivOvwAppI = $("<i>");
            $timePrjDivOvwAppI.addClass("material-icons left");
            $timePrjDivOvwAppI.text("launch");
            
            $timePrjDivOvwAppA.append($timePrjDivOvwAppI);
            $timePrjDivOvwTitle.append($timePrjDivOvwAppA);

            let $timePrjDivOvwDes = $("<p>");
            $timePrjDivOvwDes.text(repo.description);

            $timePrjDivOvw.append($timePrjDivOvwTitle);
            $timePrjDivOvw.append($timePrjDivOvwDes);

            let $timePrjDivOvwDivTopic = $("<div>");
            $timePrjDivOvwDivTopic.addClass("timelineProjectTopics");

            // Get Github Repo Topics Content
            requestUrl = `https://api.github.com/repos/${githubUsername}/${repo.name}/topics`;
    
            await getTopicData(requestUrl);
    
            topicData.names.forEach(topic => {
                let $timePrjDivOvwTopicS = $("<span>");
                $timePrjDivOvwTopicS.addClass("badge blue white-text portfolioBadge");
                $timePrjDivOvwTopicS.text(topic);
                $timePrjDivOvwDivTopic.append($timePrjDivOvwTopicS);
            });

            $timePrjDivOvw.append($timePrjDivOvwDivTopic);

            let $timePrjDivGit = $("<a>");
            $timePrjDivGit.attr("href", repo.html_url);
            $timePrjDivGit.attr("target", "_blank");
            $timePrjDivGit.addClass("btn-flat");
            $timePrjDivGit.text("Visit Github Repo");

            $timePrjDivOvw.append($timePrjDivGit);

            // Append the details to the project list item
            $timePrjDivDtls.append($timePrjDivOvw);


            let $timePrjDivImgs = $("<div>");
            $timePrjDivImgs.addClass("col s12 l7 timelineProjectImages");

            let $timePrjImgO = $("<img>");
            $timePrjImgO.addClass("responsive-img");
            $timePrjImgO.attr("src", `${repo.homepage}assets/images/website_mockup.gif`)
            $timePrjDivImgs.append($timePrjImgO);

            $timePrjDivDtls.append($timePrjDivImgs);

            let $timePrjDivider = $("<div>");
            $timePrjDivider.addClass("col s12 m12 divider");
            $timePrjDivDtls.append($timePrjDivider);

            $timePrjDiv.append($timePrjDivDtls);
            $timePrjLi.append($timePrjDiv);

            // Append the project to the list
            $portTimelineUl.append($timePrjLi);
        }
        
        // Append the portfolio timeline to the page
        $portTimelineDiv.append($portTimelineUl);
        $("main").append($portTimelineDiv);
        $(".loadingSpinner").remove();
    }

    getAPIData();
}

// Get user data from Github
function getUserData() {
    // Get Github Pinned Repos
    let requestUrl = `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${githubUsername}`;

    return fetch(requestUrl)
    .then(handleAPIErrors)
    .then(function (response) {
        return response.json();
    })
    .then(function (userData) {
        let names = []
        userData.forEach(repo => {
            names.push(repo.repo);
        });

        return names;
    })
    .catch(function(error) {
        console.log(error);
    })
}

// Handle errors from API calls
function handleAPIErrors(response) {
    if (!response.ok) {
        M.toast({html: `${response.status} error occurred. Please see the console for more information.`});
    }
    return response;
}

function titleCase(string) {
    return string.toLowerCase().split('-').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');  
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
            renderContent(`#${id}`);
        }
    }
})

