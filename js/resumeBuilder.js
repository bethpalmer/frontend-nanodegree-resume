var bio = {
	"name" : "Beth Palmer",
	"role" : "Front-end Developer",
	"contact" : {
	"mobile" : "07523257537",
	"email" : "bpalmer360@gmail.com",
	"twitter" : "#notontwitter",
	"github" : "bethpalmer",
	"blog" : "www.bstylee.me.uk",
	"location" : "Brighton, UK"
	},
	"bioPic" : "images/profile.jpg",
	"welcomeMsg" : "Helloooo, welcome to my online resume where I get to tell you a bit about myself whilst also showing off some of my JavaScript skills. Happy you stopped by :)",
	"skills" : ["HTML, CSS, JavaScript, GitHub, Grunt, SQL, MySQL, (some knowledge of) Ruby", "Adobe Illustrator, Advanced MS Offcie, Wordpress, DNS", 
				"Troubleshooting, Problem solving, Creative thinking", "Viewing things holistically, Simplifying, Customer service",
				"Hardware, DHCP, TCP/IP, VMWare, VPN, RDP, Windows, Mac"],
	"display" : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));
		$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
		$("#topContacts").append(HTMLblog.replace("%data%", bio.contact.blog));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

		$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
		$("#header").append(HTMLskillsStart);

			$(function(){
				$(".biopic").hover(function(){
					$(".biopic").attr('src', 'images/liveWellOutlines.jpg');
				},
				function(){
					$(".biopic").attr('src', 'images/profile.jpg')
				})
			});

			function displaySkills1() {
				for (var i=0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
				};
			};

			displaySkills1();
	}
};

var work = {
	"work" : [
{
	"title" : "IT Coordinator",
	"employer" : "Concordia Ltd",
	"dates" : "2010 - 2014",
	"location" : "Portslade",
	"description" : "Responsible for managing all aspects of IT provision and support for this organisation of 25.\
					This included IT strategy, integral databse, infrastructure, website and online customer portals, and office tech.\
					I implemented a program of system upgrades including:<ul class='work'>\
					<li>Leading a project to create and implement a £100k CRM system to replace the legacy databse and customer portals, moving from MS SQL to MySQL and .NET to Ruby on Rails.</li>\
					<li>Leading a project to virtualise the internal infrastructure replacing an array of outdated servers.</li>\
					<li>Office wide desktop upgrades to Windows 7 and MS Office 2010</li>\
					<li>Redefinition of comprehensive back up and DR strategy</li></ul>",
	"url" : "http://www.concordia.org.uk/"
},
{
	"title" : "Service Desk Operator for the NHS",
	"employer" : "Sussex HIS",
	"dates" : "2009-2010",
	"location" : "Hastings / Durrington",
	"description" : "Working on a busy fast-paced service desk providing advice, remote troubleshooting, basic server side administration\
					tasks, and escalating cases appropriately for a user base of 30k NHS staff throughout the southeast.",
	"url" : "#"
},
{
	"title" : "Hardware Engineer",
	"employer" : "Contractor for Fujitsu",
	"dates" : "2009",
	"location" : "London and South-East",
	"description" : "Working on various hardware rollouts and projects for Fujitsu services around London and the South East.",
	"url" : "#"
}],
	"display" : function() {
		work.work.forEach(function(workInfo) {
			$("#workExperience").append(HTMLworkStart);
			
			var workEmployer = HTMLworkEmployer.replace("%data%", workInfo.employer).replace("#", workInfo.url);
			var workTitle = HTMLworkTitle.replace("%data%", workInfo.title);
			// $(workEmployer).attr("href", "http://www.concordia.org.uk/");
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
	"projects" : [
{
	"title" : "BStylee website",
	"dates" : "2014 onwards",
	"description" : "My own portfolio website, including illustrator designs and examples of my programming work.",
	"image" : "images/bstylee.co.jpg",
	"url" : "http://www.bstylee.co.uk/"
},
{
	"title" : "Project work Portfolio site",
	"dates" : "2016",
	"description" : "A single page portfolio site created as project work towards my Udacity nanodegree.",
	"image" : "images/front-end-ninja.jpg",
	"url" :  "#"
}],
	"display" : function() {
		projects.projects.forEach(function(projectInfo) {
			$("#projects").append(HTMLprojectStart);
			
			var projectTitle = HTMLprojectTitle.replace("%data%", projectInfo.title);
			$(".project-entry:last").append(projectTitle);
		
			var projectDates = HTMLprojectDates.replace("%data%", projectInfo.dates);
			$(".project-entry:last").append(projectDates);

			var projectDescription = HTMLprojectDescription.replace("%data%", projectInfo.description);
			$(".project-entry:last").append(projectDescription);

			var projectImage = HTMLprojectImage.replace("%data%", projectInfo.image);
			$(".project-entry:last").append(projectImage);
		})
	}
};

var education = {
	"schools" : [
{
	"schoolName" : "The Ashcombe Secondary School",
	"dates" : "1994-1999",
	"location" : "Dorking, Surrey",
	"qualifications" : "GCSEs: English Lit (A), English Lang (B), Dual Science (A,A), Maths (B), French (A), Geography (A), Graphic Design (A), Music (A)",
	"url" : "http://www.ashcombe.surrey.sch.uk/"
},
{
	"schoolName" : "Collyers College",
	"dates" : "2000-2002",
	"location" : "Horsham, West Sussex",
	"qualifications" : "A-levels: Law (B), Media Studies (B), Graphic Communication (B)",
	"url" : "http://www.collyers.ac.uk/"
},
{
	"schoolName" : "Cerco It Training Centre",
	"dates" : "2009",
	"location" : "Crewe",
	"qualifications" : "CCSN (Cerco Certified Systems and Networks) Engineer",
	"url" : "https://cercoit.co.uk/"
}],
	"onlineCourses" : [
{
	"onlineTitle" : "Front-end Developer Nanodegree",
	"onlineSchool" : "Udacity",
	"onlineDates" : "2016",
	"onlineURL" : "https://www.udacity.com"
},
{
	"onlineTitle" : "JavaScript Basics / Introduction to JQuery",
	"onlineSchool" : "Team Treehouse",
	"onlineDates" : "2016",
	"onlineURL" : "https://teamtreehouse.com"
}],
	"displaySchools" : function() {
		education.schools.forEach(function(schoolInfo) {
			$("#education").append(HTMLschoolStart);
			
			var schoolName = HTMLschoolName.replace("%data%", schoolInfo.schoolName).replace("#", schoolInfo.url);
			$(".education-entry:last").append(schoolName);
		
			var schoolDates = HTMLschoolDates.replace("%data%", schoolInfo.dates);
			$(".education-entry:last").append(schoolDates);

			var schoolLocation = HTMLschoolLocation.replace("%data%", schoolInfo.location);
			$(".education-entry:last").append(schoolLocation);

			var schoolQualifications = HTMLschoolMajor.replace("%data%", schoolInfo.qualifications);
			$(".education-entry:last").append(schoolQualifications);
		})
	},
	"displayOnlineCourses" : function() {

		$("#education").append(HTMLonlineClasses);
		
		education.onlineCourses.forEach(function(courseInfo) {
			$("#education").append(HTMLschoolStart);

			var courseTitle = HTMLonlineTitle.replace("%data%", courseInfo.onlineTitle).replace("#", courseInfo.onlineURL);
			var courseSchool = HTMLonlineSchool.replace("%data%", courseInfo.onlineSchool);
			var titleAndSchool = courseTitle + courseSchool;
			$(".education-entry:last").append(titleAndSchool);

			var courseDates = HTMLonlineDates.replace("%data%", courseInfo.onlineDates);
			$(".education-entry:last").append(courseDates);

			var courseURL = HTMLonlineURL.replace("%data%", courseInfo.onlineURL).replace("#", courseInfo.onlineURL);
			$(".education-entry:last").append(courseURL);
		})
	}
};



function inName(name){
	name = bio.name.trim().split(" ");
	name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
};

bio.display();
work.display();
projects.display();
education.displaySchools();
education.displayOnlineCourses();

$("#header").append(internationalizeButton);

$("#mapDiv").append(googleMap);

console.log("And that's a wrap people!");

// function liveWell() {
// 	do {
// 		$(".beKind").show();
// 		negativeThoughts.replace(positiveThoughts);
// 		$("#selfExpression").addClass("individuality");
// 		$("#yourNeeds").show("beVulnerable");
// 		$("#oops").error(function(){
// 			alert("I'm sorry. I was wrong")
// 			});
// 	} while (alive === true);
// };