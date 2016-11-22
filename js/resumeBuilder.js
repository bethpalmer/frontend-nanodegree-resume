var bio = {
    "name": "Beth Palmer",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "07523257537",
        "email": "bpalmer360@gmail.com",
        "twitter": "#notontwitter",
        "github": "bethpalmer",
        "blog": "www.bstylee.me.uk",
        "location": "Brighton, UK"
    },
    "bioPic": "images/profile.jpg",
    "welcomeMessage": "Helloooo, welcome to my online resume where I get to tell you a bit about myself whilst also showing off some of my JavaScript skills. Happy you stopped by :)",
    "skills": ["HTML, CSS, JavaScript, GitHub, Grunt, SQL, MySQL, (some knowledge of) Ruby", "Adobe Illustrator, Advanced MS Office, Wordpress, DNS",
        "Troubleshooting, Problem solving, Creative thinking", "Viewing things holistically, Simplifying, Customer service",
        "Hardware, DHCP, TCP/IP, VMWare, VPN, RDP, Windows, Mac"
    ],
    "skillsImage": "images/awesomeness.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var email = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(email);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(twitter);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(github);
        var blog = HTMLblog.replace("%data%", bio.contacts.blog);
        $("#topContacts").append(blog);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(location);

        $("#footerContacts").append(email);
        $("#footerContacts").append(twitter);
        $("#footerContacts").append(github);
        $("#footerContacts").append(blog);
        $("#footerContacts").append(location);

        $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

        $(function() {
            $(".biopic").hover(function() {
                    $(".biopic").attr('src', 'images/liveWellOutlines1.jpg');
                },
                function() {
                    $(".biopic").attr('src', 'images/profile.jpg');
                });
        });


        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLskillsStart);

        function displaySkills1() {
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }

        }
        displaySkills1();

        var HTMLskillsImage = '<img src="%data%" class="hide awesome" height = 125px>';

        var image = HTMLskillsImage.replace("%data%", bio.skillsImage);
        $("#skills").append(image);

        $("#skills").mouseover(function() {
            $(".skillstext").removeClass("show").addClass("hide");
            $(".awesome").removeClass("hide").addClass("show");
        });
        $("#skills").mouseout(function() {
            $(".awesome").removeClass("show").addClass("hide");
            $(".skillstext").removeClass("hide").addClass("show");
        });
    }
};

var work = {
    "jobs": [{
        "title": "IT Coordinator",
        "employer": "Concordia Ltd",
        "dates": "2010 - 2014",
        "location": "Portslade",
        "description": "Responsible for managing all aspects of IT provision and support for this organisation of 25. " +
					"This included IT strategy, integral databse, infrastructure, website and online customer portals, and office tech. " +
					"I implemented a program of system upgrades including:<ul class='work'>" +
					"<li>Leading a project to create and implement a £100k CRM system to replace the legacy databse and customer portals, moving from MS SQL to MySQL and .NET to Ruby on Rails.</li>" +
					"<li>Leading a project to virtualise the internal infrastructure replacing an array of outdated servers.</li>" +
      "<li>Office wide desktop upgrades to Windows 7 and MS Office 2010</li>" +
					"<li>Redefinition of comprehensive back up and DR strategy</li></ul>",
        "url": "http://www.concordia.org.uk/"
    }, {
        "title": "Service Desk Operator for the NHS",
        "employer": "Sussex HIS",
        "dates": "2009-2010",
        "location": "Hastings / Durrington",
        "description": "Working on a busy fast-paced service desk providing advice, remote troubleshooting, basic server side administration " +
					"tasks, and escalating cases appropriately for a user base of 30k NHS staff throughout the southeast.",
        "url": "#"
    }, {
        "title": "Hardware Engineer",
        "employer": "Contractor for Fujitsu",
        "dates": "2009",
        "location": "London and South-East",
        "description": "Working on various hardware rollouts and projects for Fujitsu services around London and the South East.",
        "url": "#"
    }],
    "display": function() {
        work.jobs.forEach(function(workInfo) {
            $("#workExperience").append(HTMLworkStart);

            var workEmployer = HTMLworkEmployer.replace("%data%", workInfo.employer).replace("#", workInfo.url);
            var workTitle = HTMLworkTitle.replace("%data%", workInfo.title);
            var workEmployerAndTitle = workEmployer + workTitle;
            $(".work-entry:last").append(workEmployerAndTitle);

            var workDates = HTMLworkDates.replace("%data%", workInfo.dates);
            $(".work-entry:last").append(workDates);

            var workLocation = HTMLworkLocation.replace("%data%", workInfo.location);
            $(".work-entry:last").append(workLocation);

            var workDescription = HTMLworkDescription.replace("%data%", workInfo.description);
            $(".work-entry:last").append(workDescription);
        });

    }
};

var projects = {
    "projects": [{
        "title": "BStylee website",
        "dates": "2014 onwards",
        "description": "My own portfolio website, including illustrator designs and examples of my programming work.",
        "images": ["images/bstylee.co.jpg"],
        "url": "http://www.bstylee.co.uk/"
    }, {
        "title": "Project work Portfolio site",
        "dates": "2016",
        "description": "A single page portfolio site created as project work towards my Udacity nanodegree.",
        "images": ["images/front-end-ninja.jpg"],
        "url": "#"
    }],
    "display": function() {
        projects.projects.forEach(function(projectInfo) {
            $("#projects").append(HTMLprojectStart);

            var projectTitle = HTMLprojectTitle.replace("%data%", projectInfo.title);
            $(".project-entry:last").append(projectTitle);

            var projectDates = HTMLprojectDates.replace("%data%", projectInfo.dates);
            $(".project-entry:last").append(projectDates);

            var projectDescription = HTMLprojectDescription.replace("%data%", projectInfo.description);
            $(".project-entry:last").append(projectDescription);

            for (var i = 0; i < projectInfo.images.length; i++) {
                var projectImage = HTMLprojectImage.replace("%data%", projectInfo.images[i]);
                $(".project-entry:last").append(projectImage);
            }
        });
    }
};

var education = {
    "schools": [{
        "name": "The Ashcombe Secondary School",
        "dates": "1994-1999",
        "location": "Dorking, Surrey",
        "degree": "GCSEs",
        "majors": ["English Lit (A)", "English Lang (B)", "Dual Science (A,A)", "Maths (B)", "French (A)", "Geography (A)", "Graphic Design (A)", "Music (A)"],
        "url": "http://www.ashcombe.surrey.sch.uk/"
    }, {
        "name": "Collyers College",
        "dates": "2000-2002",
        "location": "Horsham, West Sussex",
        "degree": "A-levels",
        "majors": ["Law (B)", "Media Studies (B)", "Graphic Communication (B)"],
        "url": "http://www.collyers.ac.uk/"
    }, {
        "name": "Cerco IT Training Centre",
        "dates": "2009",
        "location": "Crewe",
        "degree": "CCSN (Cerco Certified Systems and Networks) Engineer",
        "majors": ["Hardware and systems"],
        "url": "https://cercoit.co.uk/"
    }],
    "onlineCourses": [{
        "title": "Front-end Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com"
    }, {
        "title": "JavaScript Basics / Introduction to JQuery",
        "school": "Team Treehouse",
        "dates": "2016",
        "url": "https://teamtreehouse.com"
    }],
    "displaySchools": function() {
        education.schools.forEach(function(schoolInfo) {
            $("#education").append(HTMLschoolStart);

            var schoolName = HTMLschoolName.replace("%data%", schoolInfo.name).replace("#", schoolInfo.url);
            var schoolDegree = HTMLschoolDegree.replace("%data%", schoolInfo.degree);
            var nameAndDegree = schoolName + schoolDegree;
            $(".education-entry:last").append(nameAndDegree);

            var schoolDates = HTMLschoolDates.replace("%data%", schoolInfo.dates);
            $(".education-entry:last").append(schoolDates);

            var schoolLocation = HTMLschoolLocation.replace("%data%", schoolInfo.location);
            $(".education-entry:last").append(schoolLocation);

            for (var i = 0; i < schoolInfo.majors.length; i++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", schoolInfo.majors[i]);
                $(".education-entry:last").append(formattedMajor);
            }
        });
    },
    "displayOnlineCourses": function() {

        $("#education").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(courseInfo) {
            $("#education").append(HTMLschoolStart);

            var courseTitle = HTMLonlineTitle.replace("%data%", courseInfo.title).replace("#", courseInfo.url);
            var courseSchool = HTMLonlineSchool.replace("%data%", courseInfo.school);
            var titleAndSchool = courseTitle + courseSchool;
            $(".education-entry:last").append(titleAndSchool);

            var courseDates = HTMLonlineDates.replace("%data%", courseInfo.dates);
            $(".education-entry:last").append(courseDates);

            var courseURL = HTMLonlineURL.replace("%data%", courseInfo.url).replace("#", courseInfo.url);
            $(".education-entry:last").append(courseURL);
        });
    }
};

function inName(name) {
    name = bio.name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

bio.display();
work.display();
projects.display();
education.displaySchools();
education.displayOnlineCourses();

$("#workExperience").prepend(internationalizeButton);

$("#mapDiv").append(googleMap);

console.log("And that's a wrap people!");