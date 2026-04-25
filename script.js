<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NAU Yuma Baja</title>
    <link rel="stylesheet" href="./CSS/styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <!-- Header with navigation bar -->
    <div id="header1" class="header">
        <div id="NavBar">
            <a href="#AboutUsID" class="nav-link">About Us</a>
            <a href="#ProjectInfID" class="nav-link">Project</a>
            <a href="#YMECID" class="nav-link">YMEC</a>
            <a href="#TeamID" class="nav-link">Team</a>
            <a href="#SponsorsID" class="nav-link">Sponsors</a>
            <a href="#ContactID" class="nav-link">Contact</a>
        </div>
    </div>
    <!-- Main body with sections -->
    <div id="MainBody">
        <!-- Banner and introduction-->
        <div id="BannerID">
            <h1 id="BannerTitle">NAU Yuma Baja SAE Team</h1>
            <p class="BodySection">This is the team representing NAU Yuma for the Baja SAE 2026 competition at Washougal, Washington.</p>
        </div>
        <!-- About Us -->
        <div id="AboutUsID" class="BodySection">
            <h2>About Us</h2>
            <p>We are the team graduating from the mechanical engineering program this May 2026. For our capstone project we decided to participate in the Baja SAE 2026 competition. This is the first time a team from Yuma participates in the BAJA SAE competition, and we are glad to represent this city and university. </p>
        </div>

        <!--Project Information-->
        <div id="ProjectInfID" class="BodySection">
            <h2>Project Information</h2>
            <p><a href="https://www.bajasae.net/" target="_blank" class="orgLink">Baja SAE</a> organizes a competition that challenges students to put in practice their engineering skills by designing and building an off-road vehicle that must pass through multiple tests. 
                The goal for the challenge is to mimic a real life situation in which a group of engineers get together to work on a project as a team, in which they will face and overcome multiple challenges in the design and manufacturing process.<br />
            </p>
            <p>
                The team will participate in multiple events to receive points, and they are divided in static and dynamic events.
                For the static events, the team will be evaluated on their presentations. Some selected teams will be chosen to give a presentation in person in front of a new group of judges.
                For the dynamic events, the team will be evaluated on the performance of the vehicle in multiple tests, such as acceleration, hill climb, maneuverability, rock crawl, and endurance.
            </p>
        </div>

        <!--YMEC information-->
        <div id="YMECID" class="BodySection">
            <h2>Yuma Mechanical Engineering Club <br/> (YMEC)</h2>
            <p>For easiness of working on capstone projects, the mechanical engineering students in Yuma decided to create a club.
                The goal for this club was not only to complete this project, but also help in future projects and provide experience and knowledge to other students.
                This club helped in gathering funds and building a social network with other students and sponsors.
            </p>
            <a href="https://linktr.ee/Nauymec?utm_source=linktree_profile_share&ltsid=03553543-b3d9-43aa-acba-28844c1f2906" target="_blank" class="MainBodyPic"><img src="./images/YMECMainLogo.png" id="YMECLogoID" alt="YMEC Logo" width="270px"></a>
        </div>


        <!-- Team Leaders and Members -->
        <div id="TeamID" class="BodySection ListSection">
            <h2>Team</h2>
            <h3>Team Leaders</h3>
            <div id="TeamLeadListID" class="TeamList">
                <div class="MemberCard">
                    <h4 class="CardName">Sample Name</h4>
                    <img class="CardPicture"src="./images/placeholderbanner.png" width="100px">
                    <p class="MemberPosition">Sample Position</p>
                    <p class="MemberTeam">Sample Team</p>
                    <a href="#" class="MemberLink">LinkedIn Sample</a>
                </div>
                <div id="MemberCard2" class="MemberCard">
                    <h4 class="CardName">Sample Name</h4>
                    <img class="CardImage"src="./images/placeholderbanner.png" width="100px">
                    <p class="MemberPosition">Sample Position</p>
                    <p class="MemberTeam">Sample Team</p>
                    <a href="#" class="MemberLink">LinkedIn Sample</a>
                </div>
            </div>
            <h3>Team Members</h3>
            <div id="TeamMembListID" class="TeamList">

            </div>
        </div>

        <!-- Sponsors -->
        <div id="SponsorsID" class="BodySection ListSection">
            <h2>Sponsors</h2>
            <p>Sample content</p>
            <div id="SponsorID" class="SponsorList">
                <div class="SponsorCard">
                    <h4 class="SponsorName">Sample Name</h4>
                    <img class="SponsorImage"src="./images/placeholderbanner.png" width="100px">
                    <p class="SponsorTier">Sample Tier</p>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <!-- YMEC Contact -->
        <div id="ContactID" class="FooterSection">
            <h2>Contact Us</h2>
            <a href="tel:+19282593085" class="phoneNum">(928)-259-3085</a>
            <a href="tel:+19282875617" class="phoneNum">(928)-287-5617</a>
        </div>
    </div>
</body>
</html>
