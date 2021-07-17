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

    renderContent();
}

// Load the page content
function renderContent(id) {
    // Determine if a subsection of the profile should be loaded
    const hash = id || window.location.hash;

    console.log(hash);

    switch (hash) {
        case "#about":
            $("#about").closest("li").addClass("active");
            $("#home").closest("li").removeClass("active");
            $("#portfolio").closest("li").removeClass("active");
            $("#pageTitle").text("About");
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

    let $fullPageDiv = $("<div>");
    $fullPageDiv.addClass("FullPageBackground navbar-fixed");

    let $homeCarouselDiv = $("<div>");
    $homeCarouselDiv.addClass("carousel carousel-slider center");

    let $homeCenteredDiv = $("<div>");
    $homeCenteredDiv.addClass("carousel-fixed-item center");

    let $storyA = $("<a>");
    $storyA.attr("href", "#about");
    $storyA.attr("onclick", "renderContent(\"#about\");");
    $storyA.addClass("btn-large waves-effect white black-text darken-text-2 home-links");
    $storyA.text("My Story");

    let $portfolioA = $("<a>");
    $portfolioA.attr("href", "#portfolio");
    $portfolioA.attr("onclick", "renderContent(\"#portfolio\");");
    $portfolioA.addClass("btn-large waves-effect white black-text darken-text-2 home-links");
    $portfolioA.text("My Work");


    $homeCenteredDiv.append($storyA);
    $homeCenteredDiv.append($portfolioA);
    $homeCarouselDiv.append($homeCenteredDiv);

    let $homeCarouselItm1 = $("<div>");
    $homeCarouselItm1.addClass("carousel-item white-text");

    let $phraseH1 = $("<h1>");
    $phraseH1.html("Hi! I\'m Andrew,<br>and I enjoy the journey.");

    $homeCarouselItm1.append($phraseH1);
    $homeCarouselDiv.append($homeCarouselItm1);
    $fullPageDiv.append($homeCarouselDiv);
    $("main").append($fullPageDiv);

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
}

function renderAboutMe() {
    // Clear the page content
    $("main").html("");

    let $fullPageDiv = $("<div>");
    $fullPageDiv.addClass("navbar-fixed page-Margin");

    let $pageTitle = $("<h1>");
    $pageTitle.addClass("about-Me-Title");
    $pageTitle.text("Me talking about myself...");
    $fullPageDiv.append($pageTitle);

    let $aboutMeText00 = $("<p>");
    $aboutMeText00.text("I have an amazing family that surprises me every day!")
    $fullPageDiv.append($aboutMeText00);

    let $aboutMeText01 = $("<p>");
    $aboutMeText01.text("I live in Houston, but I am not a native Houstonian.")
    $fullPageDiv.append($aboutMeText01);

    let $aboutMeText02 = $("<p>");
    $aboutMeText02.text("I enjoy the Houston rodeo, but I don\'t own any boots. 😲")
    $fullPageDiv.append($aboutMeText02);

    let $aboutMeText03 = $("<p>");
    $aboutMeText03.text("I've lived inside and outside the loop.")
    $fullPageDiv.append($aboutMeText03);

    let $aboutMeText04 = $("<p>");
    $aboutMeText04.text("I am a fan of the Astros, except when they play the Cardinals.")
    $fullPageDiv.append($aboutMeText04);

    let $pageProfession = $("<h3>");
    $pageProfession.addClass("about-Me-Title");
    $pageProfession.text("professionally...");
    $fullPageDiv.append($pageProfession);

    let $aboutMeText05 = $("<p>");
    $aboutMeText05.text("Most of my career has been in oil and gas, but I have also worked in power and utilities and telecom.")
    $fullPageDiv.append($aboutMeText05);

    let $aboutMeText06 = $("<p>");
    $aboutMeText06.text("I have had the opportunity to travel around the world for work.")
    $fullPageDiv.append($aboutMeText06);

    let $aboutMeText07 = $("<p>");
    $aboutMeText07.text("I made the mental mindset shift necessary for Agile.")
    $fullPageDiv.append($aboutMeText07);

    let $aboutMeText08 = $("<p>");
    $aboutMeText08.text("The projects I have been on range from acquisitions and divestments to digital transformation, solution development, big data, and beyond.")
    $fullPageDiv.append($aboutMeText08);

    let $aboutMeText09 = $("<p>");
    $aboutMeText09.text("My strengths are at the intersection of business and technology.")
    $fullPageDiv.append($aboutMeText09);

    let $pageCertifications = $("<h5>");
    $pageCertifications.addClass("about-Me-Title");
    $pageCertifications.text("Certifications");
    $fullPageDiv.append($pageCertifications);

    let $aboutMeCert01A = $("<a>");
    $aboutMeCert01A.attr("href", "https://www.credly.com/badges/b0e067a1-68c7-487d-b6ac-2d85c799fce6/public_url");
    $aboutMeCert01A.attr("target", "_blank");

    let $aboutMeCert01 = $("<img>")
    $aboutMeCert01.attr("src", "./assets/images/SAFe-SPC.png");
    $aboutMeCert01.attr("title", "SAFe SPC Badge");
    $aboutMeCert01.attr("alt", "SAFe SPC Badge");
    $aboutMeCert01.addClass("cert-Badge");
    $aboutMeCert01A.append($aboutMeCert01);
    $fullPageDiv.append($aboutMeCert01A);

    let $aboutMeCert02A = $("<a>");
    $aboutMeCert02A.attr("href", "https://www.credly.com/badges/6134b364-3433-4d81-aa70-9e800d79e500/public_url");
    $aboutMeCert02A.attr("target", "_blank");

    let $aboutMeCert02 = $("<img>")
    $aboutMeCert02.attr("src", "./assets/images/SAFe-LPM.png");
    $aboutMeCert02.attr("title", "SAFe LPM Badge");
    $aboutMeCert02.attr("alt", "SAFe LPM Badge");
    $aboutMeCert02.addClass("cert-Badge");
    $aboutMeCert02A.append($aboutMeCert02);
    $fullPageDiv.append($aboutMeCert02A);

    let $aboutMeCert03A = $("<a>");
    $aboutMeCert03A.attr("href", "https://www.credly.com/badges/50618f9f-3c11-4884-8df5-ed211c00e37f/public_url");
    $aboutMeCert03A.attr("target", "_blank");

    let $aboutMeCert03 = $("<img>")
    $aboutMeCert03.attr("src", "./assets/images/EY-Platinum.png");
    $aboutMeCert03.attr("title", "EY Platinum Badge");
    $aboutMeCert03.attr("alt", "EY Platinum Badge");
    $aboutMeCert03.addClass("cert-Badge");
    $aboutMeCert03A.append($aboutMeCert03);
    $fullPageDiv.append($aboutMeCert03A);

    let $pageContact = $("<h4>");
    $pageContact.addClass("about-Me-Title");
    $pageContact.text("...reach out if you would like to know more!");
    $fullPageDiv.append($pageContact);

    $("main").append($fullPageDiv);
}

function renderPortfolio() {
    // Clear the page content
    $("main").html("");

    // Add portfolio intro
    let $portfolioIntro = $("<div>");
    $portfolioIntro.addClass("navbar-fixed page-Margin");
    $portfolioIntro.text("Please take a look at my work below. Unless stated otherwise, all the work was completed by me.")
    $("main").append($portfolioIntro);

    // Add Page Loading Icon
    let $divSpinner = $("<div>");
    $divSpinner.addClass("navbar-fixed loadingSpinner page-Margin");

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
    $portTimelineDiv.addClass("navbar-fixed portfolioTimeline page-Margin");

    let $portTimelineUl = $("<ul>");

    async function getAPIData() {
        let requestUrl = `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${githubUsername}`;
        let userData = [];
        let repoData = [];
        let reposData = [];
        let contributorData = [];
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

        async function getContributorData(requestUrl) {
            // read our JSON
            let response = await fetch(requestUrl);
            contributorData = await response.json();
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
            $timePrjDivDate.addClass("col s12 l1 timelineProjectDate text-italic");
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

            // Get Github Repo Contributors
            requestUrl = `https://api.github.com/repos/${githubUsername}/${repo.name}/contributors`

            await getContributorData(requestUrl);

            if (contributorData.length > 1) {
                let $timePrjDivCon = $("<div>");
                $timePrjDivCon.addClass("valign-wrapper");

                $timePrjDivCon.html("Additional Contributors:&nbsp;&nbsp;&nbsp;")

                contributorData.forEach(contributor => {
                    if (contributor.login != githubUsername) {
                        let $timePrjDivConA = $("<a>");
                        $timePrjDivConA.attr("href", contributor.html_url);
                        $timePrjDivConA.attr("target", "_blank");

                        let $timePrjDivConImg = $("<img>");
                        $timePrjDivConImg.attr("src", contributor.avatar_url);
                        $timePrjDivConImg.attr("alt", contributor.login);
                        $timePrjDivConImg.attr("title", contributor.login);
                        $timePrjDivConImg.addClass("circle app-contributor");

                        $timePrjDivConA.append($timePrjDivConImg);
                        $timePrjDivCon.append($timePrjDivConA);
                    }
                });

                $timePrjDivOvw.append($timePrjDivCon);
            }

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
            $timePrjImgO.attr("src", `${repo.homepage}assets/images/screenshots/mockup.gif`)
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

        formatAppLaunchBtn();
    }

    getAPIData();
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

function formatAppLaunchBtn() {
    // Create the icon
    let $timePrjDivOvwAppI = $("<i>");
    $timePrjDivOvwAppI.text("launch");

    if ($(window).width() < 600 && window.location.hash === "#portfolio") {
        $timePrjDivOvwAppI.addClass("material-icons");

        $(".app-launch").addClass("btn-floating");
        $(".app-launch").text("");

        $(".app-launch").append($timePrjDivOvwAppI);

    } else {
        $timePrjDivOvwAppI.addClass("material-icons left");

        $(".app-launch").removeClass("btn-floating");
        $(".app-launch").text("Launch App");

        $(".app-launch").append($timePrjDivOvwAppI);

    }
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

// Change the format of the App Launch Buttons
$(window).on("resize", formatAppLaunchBtn);
