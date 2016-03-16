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
   "welcomeMessge" : "Welcome to Scott's Resume",
   "skills" : ["Wifi design and management", "Windows, OS X, and Linux platforms"],
   "biopic" : "none at the moment"
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

 if (bio.skills) {
   $('#header').append(HTMLskillsStart);
   var skills = HTMLskills.replace('%data%', bio.skills);
   $('#skills').append(skills);
 }

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
