/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
   "name" : "Scott Heffner",
   "role" : "Network and Systems Administrator",
   "contacts" : {
     "mobile" : "(978) 503-2705",
     "email" : "scott.thomas.heffner@gmail.com",
     "github" : "sctthffnr",
     "location" : "Gardner, Massachusetts"
   },
   "welcomeMessage" : "Experienced IT Professional",
   "skills" : ["Programming Lanaguages: HTML, CSS, Javascript, Ruby, Bash",
               "Platforms: Linux, Windows, OS X, iOS",
               "Networking: TCP/IP, 802.11 protocols"],
   "biopic" : "images/biopic.jpg",
   "display" : function() {
     $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
     $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
     $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
     $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
     $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
     $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
     $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
     $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
     $('#header').append(HTMLskillsStart);
     bio.skills.forEach(function(skill){
       $('#skills-h3:last').append(HTMLskills.replace('%data%', skill));
     });
   }
 };

 var education = {
   "schools": [
     {
       "name": "Pennsylvania State University",
       "location": "State College, PA",
       "degree": "Bachelor of Science",
       "majors": ["Music Education"],
       "dates": "1996 - 2000",
       "url": "www.psu.edu"
     },
     {
       "name": "University of Massachusetts Lowell",
       "location": "Lowell, MA",
       "degree": "Bachelor of Science",
       "majors": ["Information Technology"],
       "dates": "2009",
       "url": "www.uml.edu"
     }
   ],
   "onlineCourses": [
     {
        "title": "Beginning Ruby",
        "school": "Udacity",
        "date": "2016",
        "url": "www.udacity.com"
     }
   ],
   "display": "placeholder"
 };

 var work = {
   jobs: [
     {
       "employer": "Town of Northborough",
       "title": "Technology Specialist",
       "location": "Northborough, MA",
       "dates": "2010-2015",
       "description": "Provided support for end-user devices, networking equipment, servers, and applications"
     },
     {
       "employer": "Town of Carlisle",
       "title": "Network and Systems Administrator",
       "location": "Carlisle, MA",
       "dates": "in progress",
       "description": "Manage network and systems for the Carlisle School district"
     }
   ],
   "display": "placeholder"
 };

 var projects = [
   {
     "title" : "Survivor Simulation",
     "dates" : "2016",
     "description" : "A simulation of the television show survivor, " +
                     "written in Ruby",
    "images" : ["https://github.com/sctthffnr/survivor"]
   }
 ];

bio.display();

 function displayWork() {
   work.jobs.forEach(function(job) {
     $('#workExperience').append(HTMLworkStart);
     formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
     formattedTitle = HTMLworkTitle.replace('%data%', job.title);
     formattedDates = HTMLworkDates.replace('%data%', job.dates);
     formattedLocation  = HTMLworkLocation.replace('%data%', job.location);
     formattedDescription = HTMLworkDescription.replace('%data%', job.description);

     var $work_entry = $('.work-entry:last');
     $work_entry.append(formattedEmployer + formattedTitle);
     $work_entry.append(formattedDates);
     $work_entry.append(formattedLocation);
     $work_entry.append(formattedDescription);
   });
 }

 displayWork();

$('#main').append(internationalizeButton);

function inName() {
  $('#header').append(HTMLheaderName);
  var names = bio.name.split(" ");
  return names[0] + " " + names[1].toUpperCase();
}

projects.display = function() {
  projects.forEach(function(project) {
    $('#projects').append(HTMLprojectStart);
    formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
    formattedDates = HTMLprojectDates.replace('%data%', project.dates);
    formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
    formattedImage = HTMLprojectImage.replace('%data%', project.images);

    var $projects = $('.project-entry:last');
    $projects.append(formattedTitle);
    $projects.append(formattedDates);
    $projects.append(formattedDescription);
    $projects.append(formattedImage);
  });
};

projects.display();

$('#mapdiv').append(googleMap);
