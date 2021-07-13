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
            console.log("Load About");
            $("#pageTitle").text("About Me");
            renderAboutMe();
            break;

        case "#portfolio":
            $("#portfolio").closest("li").addClass("active");
            $("#home").closest("li").removeClass("active");
            $("#about").closest("li").removeClass("active");
            console.log("Load Portfolio");
            $("#pageTitle").text("My Portfolio");
            renderPortfolio();
            break;
    
        default:
            $("#home").closest("li").addClass("active");
            $("#about").closest("li").removeClass("active");
            $("#portfolio").closest("li").removeClass("active");
            console.log("Load Home");
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

    // Add initial portfolio timeline DIV and UL
    let $portTimelineDiv = $("<div>");
    $portTimelineDiv.addClass("navbar-fixed portfolioTimeline");

    let $portTimelineUl = $("<ul>");

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
            .then(function (repoData) {
                console.log(repoData);

                let $timePrjLi = $("<li>");
                $timePrjLi.addClass("timelineProject no-padding");

                let $timePrjDiv = $("<div>");
                $timePrjDiv.addClass("row");

                let $timePrjDivDate = $("<div>");
                $timePrjDivDate.addClass("col s12 l1 timelineProjectDate");
                $timePrjDivDate.text(dayjs(repoData.created_at).format("YYYY MMM").toUpperCase());

                $timePrjDiv.append($timePrjDivDate);

                let $timePrjDivDtls = $("<div>");
                $timePrjDivDtls.addClass("col row s12 l11 timelineProjectDetails");

                let $timePrjDivOvw = $("<div>");
                $timePrjDivOvw.addClass("col s12 l5 timelineProjectOverview");

                let $timePrjDivOvwTitle = $("<h5>");
                $timePrjDivOvwTitle.append(titleCase(repoData.name));

                let $timePrjDivOvwAppA = $("<a>");
                $timePrjDivOvwAppA.addClass("waves-effect waves-light btn-small app-launch");
                $timePrjDivOvwAppA.text("Launch App");

                let $timePrjDivOvwAppI = $("<i>");
                $timePrjDivOvwAppI.addClass("material-icons left");
                $timePrjDivOvwAppI.text("launch");
                
                $timePrjDivOvwAppA.append($timePrjDivOvwAppI);
                $timePrjDivOvwTitle.append($timePrjDivOvwAppA);

                let $timePrjDivOvwDes = $("<p>");
                $timePrjDivOvwDes.text(repoData.description);

                $timePrjDivOvw.append($timePrjDivOvwTitle);
                $timePrjDivOvw.append($timePrjDivOvwDes);

                let $timePrjDivOvwDivTopic = $("<div>");
                $timePrjDivOvwDivTopic.addClass("timelineProjectTopics");

                // Get Github Repo Topics Content
                requestUrl = `https://api.github.com/repos/avidrunner87/${repoData.name}/topics`;

                fetch(requestUrl, {
                    headers: {
                        "Accept": "application/vnd.github.mercy-preview+json"
                    }
                })
                .then(handleAPIErrors)
                .then(function (response) {
                    return response.json();
                })
                .then(function (topicData) {
                    console.log(topicData);

                    topicData.names.forEach(topic => {
                        let $timePrjDivOvwTopicS = $("<span>");
                        $timePrjDivOvwTopicS.addClass("badge blue white-text");
                        $timePrjDivOvwTopicS.text(topic);
                        $timePrjDivOvwDivTopic.append($timePrjDivOvwTopicS);
                    });
                })
                .then( function() {
                    $timePrjDivOvw.append($timePrjDivOvwDivTopic);

                    // Append the details to the project list item
    
                    $timePrjDivDtls.append($timePrjDivOvw);
                    $timePrjDiv.append($timePrjDivDtls);
                    $timePrjLi.append($timePrjDiv);
                    console.log($timePrjLi);
                })
                .catch(function(error) {
                    console.log(error);
                })
            })
            .then( function() {
                // Append the project to the list
                $portTimelineUl.append($timePrjLi);
            })
            .catch(function(error) {
                console.log(error);
            })
        });
    })
    .then( function () {
        // Append the portfolio timeline to the page
        $portTimelineDiv.append($portTimelineUl);
        $("main").append($portTimelineDiv);
    })
    .catch(function(error) {
        console.log(error);
    })



    
//         <li class="timelineProject no-padding">
//             <div class="row">
//                 <div class="col s12 l1 timelineProjectDate">2021 JUN</div>
//                 <div class="col row s12 l11 timelineProjectDetails">
//                     <div class="col s12 l5 timelineProjectOverview">
//                         <h5>
//                             Small Talk
//                             <a class="waves-effect waves-light btn-small app-launch"><i class="material-icons left">launch</i>Launch</a>
//                         </h5>
//                         <p>This is a description of the application. It should be short, but clear.</p>
//                         <div class="timelineProjectTopics">
//                             <span class="badge blue white-text">html</span>
//                             <span class="badge blue white-text">css</span>
//                             <span class="badge blue white-text">javascript</span>
//                         </div>
//                     </div>
//                     <div class="col s12 l6 timelineProjectImages">
//                         <img src="https://avidrunner87.github.io/small-talk/assets/images/website_mockup.gif" style="width: 100%;"/>
//                     </div>
//                     <div class="col s12 m12 divider"></div>
//                 </div>

//             </div>
//         </li>
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

