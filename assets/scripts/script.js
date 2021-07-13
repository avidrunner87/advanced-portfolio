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
            console.log("Load About");
            break;

        case "#portfolio":
            console.log("Load Portfolio");
            break;
    
        default:
            console.log("Load Home");
            break;
    }
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

    // Get Github Pinned Repos
    let requestUrl = `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${githubUsername}`;

    fetch(requestUrl)
    .then(handleAPIErrors)
    .then(function (response) {
        return response.json();
    })
    .then(function (userData) {
        userData.forEach(repo => {
            // Get Github Repo Details
            requestUrl = `https://api.github.com/repos/avidrunner87/${repo.repo}`;

            fetch(requestUrl)
            .then(handleAPIErrors)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                let $repoDiv = $("<div>");
                $repoDiv.addClass("row");

                let $repoColCreated = $("<div>");
                $repoColCreated.addClass("col s3 m2 l1 grey-text text-italic portfolio-date");
                $repoColCreated.text(dayjs(data.created_at).format("YYYY MMM").toUpperCase());
                $repoDiv.append($repoColCreated);

                let $repoColDetails = $("<div>");
                $repoColDetails.addClass("col s9 m5 l5");
                
                let $repoColDetailsTitle = $("<h5>");
                $repoColDetailsTitle.text(data.name);

                let $repoColDetailsDesc = $("<p>");
                $repoColDetailsDesc.text(data.description);

                $repoColDetails.append($repoColDetailsTitle);
                $repoColDetails.append($repoColDetailsDesc);
                $repoDiv.append($repoColDetails);

                let $divDivider = $("<div>");
                $divDivider.addClass("col divider s12");
                $repoDiv.append($divDivider);

                $(".mainContent").append($repoDiv);
            })
            .catch(function(error) {
                console.log(error);
            })
        });
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
            renderContent(`#${id}`);
        }
    }
})

