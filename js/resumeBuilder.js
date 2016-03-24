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
     $('.bio').children('div:first').prepend(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
     $('.bio').children('div:first').prepend(HTMLheaderRole.replace('%data%', bio.role));
     $('.bio').children('div:first').prepend(HTMLheaderName.replace('%data%', bio.name));
     $('.bio').children('div:last').append(HTMLbioPic.replace('%data%', bio.biopic));

     $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
     $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
     $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
     $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));

     $('.skills').append(HTMLskillsStart);
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
     education.schools.forEach(function(school) {
       $('#education').append(HTMLschoolStart);
       var $edEntry = $('.education-entry:last');
       $edEntry.append(HTMLschoolName.replace('%data%', school.name));
       $edEntry.append(HTMLschoolLocation.replace('%data%', school.location));
       $edEntry.append(HTMLschoolDates.replace('%data%', school.dates));
       $edEntry.append(HTMLschoolDegree.replace('%data%', school.degree));
       school.majors.forEach(function(major) {
         $edEntry.append(HTMLschoolMajor.replace('%data%', major));
       });
     });
     $('.education-entry:last').append(HTMLonlineClasses);
     education.onlineCourses.forEach(function(course){
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
     formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
     formattedDates = HTMLprojectDates.replace('%data%', project.dates);
     formattedDescription = HTMLprojectDescription.replace('%data%', project.description);

     var $projects = $('.project-entry:last');
     $projects.append(formattedTitle);
     $projects.append(formattedDates);
     $projects.append(formattedDescription);
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

function toggleSection(selector) {
  $(selector).on('click', 'h2', function() {
    $(this).closest('div').find('div').slideToggle();
  });
}

$('document').ready(function() {
  $('#skills-h3').click(function() {
    $(this).find('li').slideToggle();
  });
  toggleSection('#workExperience');
  toggleSection('#projects');
  toggleSection('#education');
});

// $('#mapdiv').append(googleMap);
