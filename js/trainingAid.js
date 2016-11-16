$("#header").append();
$("#main").append("Beth Palmer");

var awesomeThoughts = "I am Beth and I am AWESOME!";
console.log(awesomeThoughts);

var email = "beth@udacity.com";
var newEmail = 
	email.replace("udacity", "gmail");
console.log(email);
console.log(newEmail);

var funThoughts =
	awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);

// CHALLENGE
// we need to turn "audacity" into "Udacity". hint: using .slice()

var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    s = s[1].toUpperCase() + s.slice(2);
    
    
    return s;
};

console.log(udacityizer(s));

// CHALLENGE END

var skills = 
["Programming", "HTML", "CSS", "JavaScript", "Trouble-shooting", "Problem solving", "Creative thinking"];
$("#main").append(skills);
$("#main").append(skills[0]);
console.log(skills.length);

// CHALLENGE: Increment the last number in an array, by 1.

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}

// CHALLENGE: Camelcase first name and Capitalize surname.
// My solution: which does give the correct answer - BUT ONLY WORKS ON THIS ONE EXAMPLE :(
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
  
    var firstName = oldName[0].toUpperCase() + oldName.slice(1, -8).toLowerCase();
    var surname = oldName.slice(-8).toUpperCase();
 
    finalName = firstName + surname;

    return finalName;
};
console.log(nameChanger(name));

// ANSWER
function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;

}




var name = "Beth Palmer";
var role = "Front-end Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#main").append(HTMLmobile.replace("%data%", bio.contact.mobile));
$("#main").append(HTMLemail.replace("%data%", bio.contact.email));
$("#main").append(HTMLtwitter.replace("%data%", bio.contact.twitter));
$("#main").append(HTMLgithub.replace("%data%", bio.contact.github));
$("#main").append(HTMLblog.replace("%data%", bio.contact.blog));
$("#main").append(HTMLlocation.replace("%data%", bio.contact.location));

$("#main").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#main").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));

$("#main").append(HTMLskillsStart);
var skills = bio.skills.toString();
$("#main").append(HTMLskills.replace("%data%", skills));


// NOTE: FOR...IN LOOPS ARE NOW NOT CONSIDERED TO BE BEST PRACTICE AS THEY CAN GIVE UNPREDICTABLE OUTCOMES.
// DO NOT USE!
for (jobs in work) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work[jobs].employer);
	var formattedJobTitle = HTMLworkTitle.replace("%data%", work[jobs].title);
	var formattedEmployerAndJobTitle = formattedEmployer + formattedJobTitle;
	$(".work-entry:last").append(formattedEmployerAndJobTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work[jobs].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work[jobs].location);
	$(".work-entry:last").append(formattedLocation);	
	var formattedDescription = HTMLworkDescription.replace("%data%", work[jobs].description);
	$(".work-entry:last").append(formattedDescription);		
};


// Apart from apparently this one... which is fine...? Fucking course!
function locationizer(work_obj) {
    var locations = [];
    for (job in work_obj.jobs) {
        var newLocations = work_obj.jobs[job].location;
        locations.push(newLocations);
    }
    return locations;
}
console.log(locationizer(work));



$(document).click(function(loc) {
	var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

// function displayWork() {
//  for (jobs in work) {
//      $("#workExperience").append(HTMLworkStart);
//      var formattedEmployer = HTMLworkEmployer.replace("%data%", work[jobs].employer);
//      var formattedJobTitle = HTMLworkTitle.replace("%data%", work[jobs].title);
//      var formattedEmployerAndJobTitle = formattedEmployer + formattedJobTitle;
//      $(".work-entry:last").append(formattedEmployerAndJobTitle);

//      var formattedDates = HTMLworkDates.replace("%data%", work[jobs].dates);
//      $(".work-entry:last").append(formattedDates);
//      var formattedLocation = HTMLworkLocation.replace("%data%", work[jobs].location);
//      $(".work-entry:last").append(formattedLocation);    
//      var formattedDescription = HTMLworkDescription.replace("%data%", work[jobs].description);
//      $(".work-entry:last").append(formattedDescription);     
//  };
// };

// displayWork();

console.log(Object.keys(bio));
console.log(Object.keys(bio).length);




// DON'T KNOW HOW MUCH OF THIS IS RIGHT, BUT DIDN'T WANT TO DELETE IT FROM RESUME.JS, BUT WANTED TO GET RID OF IT, SO DUMPED IT HERE!!

// $("#header").append(HTMLskillsStart);
// var skills = bio.skills.toString();
// $("#header").append(HTMLskills.replace("%data%", skills));


// function displaySkills2() {
//  for (var i=0; i < bio.skillsAlt.length; i++) {
//  var formattedSkill = HTMLskills.replace("%data%", bio.skillsAlt[i]);
//  $("#skills").append(formattedSkill);
// };
// };



// $(function(){
//  $("#skills").hover(function(){
//      $("#skills").attr('src', 'images/liveWell.JPG');
//      },
//  function(){
//      $("#skills").val(displaySkills1)
//  })
//  });

// $("#skills").hover(function(){
//  $(this).replaceWith(displaySkills2);
// }, function() {
//  $(this).replaceWith(displaySkills1);
// });



//  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
//  $("#skills").append(formattedSkill);
//  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//  $("#skills").append(formattedSkill);
//  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
//  $("#skills").append(formattedSkill);
//  var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
//  $("#skills").append(formattedSkill);
//  var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
//  $("#skills").append(formattedSkill);
//  var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
//  $("#skills").append(formattedSkill);
//  var formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
//  $("#skills").append(formattedSkill);
//  var formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
//  $("#skills").append(formattedSkill);
//  var formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
//  $("#skills").append(formattedSkill);
//  var formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
//  $("#skills").append(formattedSkill);
// };


//  "display" : function() {
//      bio.skills.forEach(function(skillsInfo) {
//          $("#header").append(HTMLskillsStart);
//          var i = 0;
//          var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
//          $("#skills").append(formattedSkill);;
//          i++;
//      })
//  }

    // "detail" : ["Leading a project to create and implement a £100k CRM system to replace the legacy databse and customer portals, moving from MS SQL to MySQL and .NET to Ruby on Rails.",
    //              "Leading a project to virtualise the internal infrastructure replacing an array of outdated servers.",
    //              "Office wide desktop upgrades to Windows 7 and MS Office 2010",
    //              "Redefinition of comprehensive back up and DR strategy"]

        // "skillsAlt" : ["Adept at juggling demands in quickly changing environments, prioritising on the fly and maximising positive outcomes (aka, a Mother)",
    //             "Master of self-care, and kindness to myself and others", "Creative, Open-minded, Centered and Self aware", "Highly skilled at competative pairs ;)"]

// function displaySkills1() {
//  for (var i=0; i < bio.skills.length; i++) {
//  var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
//  $("#skills").append(formattedSkill);
// };


// for (var i=0; i < workInfo.detail.length; i++) {
            //  var workDetail = HTMLworkDetail.replace("%data%", workInfo.detail[i]);
            //  $(".work-entry:last").append(workDetail);
            // };

// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);


