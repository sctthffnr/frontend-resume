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
     var $bioEntry = $('.bio').children('div:first');
     $bioEntry.prepend(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
     $bioEntry.prepend(HTMLheaderRole.replace('%data%', bio.role));
     $bioEntry.prepend(HTMLheaderName.replace('%data%', bio.name));
     $('.bio').children('div:last').append(HTMLbioPic.replace('%data%', bio.biopic));

     var contacts = [$('#topContacts'), $('#footerContacts')];
     contacts.forEach(function(contactItem) {
       contactItem.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
       contactItem.append(HTMLemail.replace('%data%', bio.contacts.email));
       contactItem.append(HTMLgithub.replace('%data%', bio.contacts.github));
       contactItem.append(HTMLlocation.replace('%data%', bio.contacts.location));
     });

     $('#skillsList').append(HTMLskillsStart);
     bio.skills.forEach(function(skill){
       $('#skills').append(HTMLskills.replace('%data%', skill));
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
        "title": "Beginning Ruby Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "www.udacity.com"
     },
     {
       "title": "Front-End Web Developer Nanodegree",
       "school": "Udacity",
       "date": "2016",
       "url": "www.udacity.com"
     }
   ],
   "display": function display() {
     $('#schools').append(HTMLschoolTitle);
     education.schools.forEach(function(school) {
       $('#schools').append(HTMLschoolStart);
       var $edEntry = $('.education-entry:last');
       $edEntry.append(HTMLschoolName.replace('%data%', school.name));
       $edEntry.append(HTMLschoolDegree.replace('%data%', school.degree));
       $edEntry.append(HTMLschoolLocation.replace('%data%', school.location));
       $edEntry.append(HTMLschoolDates.replace('%data%', school.dates));
       school.majors.forEach(function(major) {
         $edEntry.append(HTMLschoolMajor.replace('%data%', major));
       });
     });
     $('#online').append(HTMLonlineClasses);
     education.onlineCourses.forEach(function(course){
       $('#online').append(HTMLschoolStart);
       var $online = $('.education-entry:last');
       $online.append(HTMLonlineTitle.replace('%data%', course.title));
       $online.append(HTMLonlineSchool.replace('%data%', course.school));
       $online.append(HTMLschoolDates.replace('%data%', course.date));
       $online.append(HTMLonlineURL.replace('%data%', course.url));
     });
   }
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
       "description": "Manage configuration, deployment, and management of network and compute systems"
     }
   ],
   "display": function display() {
     work.jobs.forEach(function(job) {
       $('#workExperience').append(HTMLworkStart);
       formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
       formattedTitle = HTMLworkTitle.replace('%data%', job.title);

       var $work_entry = $('.work-entry:last');
       $work_entry.append(formattedEmployer + formattedTitle);
       $work_entry.append(HTMLworkDates.replace('%data%', job.dates));
       $work_entry.append(HTMLworkLocation.replace('%data%', job.location));
       $work_entry.append(HTMLworkDescription.replace('%data%', job.description));
     });
   }
 };

 var projects = {
   "projects" : [
   {
     "title" : "Survivor Simulation",
     "dates" : "2016",
     "description" : "A simulation of the television show survivor, " +
                     "written in Ruby",
    "images" : ["images/survivor-2.jpg", "images/survivor.jpg"]
  },
  {
    "title" : "Online Portfolio",
    "dates" : "2016",
    "description" : "An online portfolio of my Udacity frontend projects",
    "images" : ["images/portfolio-1.jpg", "images/portfolio-2.jpg"]
  }
 ],
 "display" : function display() {
   projects.projects.forEach(function(project) {
     $('#projects').append(HTMLprojectStart);

     var $projects = $('.project-entry:last');
     $projects.append(HTMLprojectTitle.replace('%data%', project.title));
     $projects.append(HTMLprojectDates.replace('%data%', project.dates));
     $projects.append(HTMLprojectDescription.replace('%data%', project.description));
     project.images.forEach(function(image) {
       $projects.append(HTMLprojectImage.replace('%data%', image));
     });
    });
  }
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
