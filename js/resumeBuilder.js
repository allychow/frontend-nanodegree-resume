/**
 * bio section
 */
var bio = {
    name: "Allison Chow",
    role: "Software Engineer",
    contacts: {
        mobile: "999-999-9999",
        email: "allylchow@outlook.com",
        github: "/allychow",
        twitter: "@allychow",
        location: "Richmond Hill, Ontario"
    },
    welcomeMessage: "welcome to my site",
    skills: ["Absolutely nothing", "Procrastination"],
    biopic: "images/fry.jpg",
    display: function () {
        replaceBioSection();
        $('#header').prepend(HTMLheaderName + HTMLheaderRole);
        $('#topContacts, #footerContacts').append(HTMLmobile + HTMLemail + HTMLgithub + HTMLtwitter + HTMLlocation);
        // $('#footerContacts').append(HTMLmobile + HTMLemail + HTMLgithub + HTMLtwitter + HTMLlocation);
        $('#header').append(HTMLbioPic + HTMLwelcomeMsg);
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            $('#header').append(skill);
        });
    }
};

function replaceBioSection() {
    HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
    HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
    // HTMLcontactGeneric.replace("%data", bio.role);
    HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
    HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    bio.skills.forEach(function (skill) {
        var tempSkill = HTMLskills.replace("%data%", skill);
        bio.skills.splice(bio.skills.indexOf(skill), 1, tempSkill);
    });
}
// end bio section

/**
 * education section
 */
var university = {
    name: "University of Waterloo",
    location: "Waterloo, Ontario",
    degree: "Bachelor's of Applied Sciences",
    majors: ["Computer Engineering"],
    dates: "2016-2021",
    url: "university-url"
};

var course = {
    title: "Front-End Web Developer Nanodegree",
    school: "Udacity",
    dates: "2017",
    url: "https://classroom.udacity.com/nanodegrees/nd001"
};

var education = {
    schools: [university],
    onlineCourses: [course],
    display: function () {
        replaceEducationSection();
        education.schools.forEach(function (school) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(school.name + school.degree + school.dates + school.location);
            school.majors.forEach(function (major) {
                $('.education-entry:last').append(major);
            });
        });
        $('#education').append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(course.title + course.school + course.dates + course.url);
        });
    }
};

function replaceEducationSection() {
    education.schools.forEach(function (school) {
        school.name = HTMLschoolName.replace("%data%", school.name);
        school.degree = HTMLschoolDegree.replace("%data%", school.degree);
        school.dates = HTMLschoolDates.replace("%data%", school.dates);
        school.location = HTMLschoolLocation.replace("%data%", school.location);
        school.majors.forEach(function (major) {
            var tempMajor = HTMLschoolMajor.replace("%data%", major);
            school.majors.splice(bio.skills.indexOf(major), 1, tempMajor);
        });
    });

    education.onlineCourses.forEach(function (onlineCourse) {
        onlineCourse.title = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        onlineCourse.school = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        onlineCourse.dates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        onlineCourse.url = HTMLonlineURL.replace("%data%", onlineCourse.url);
    });
}
// end education section

/**
 * work section
 */
var job = {
    employer: "Microsoft",
    title: "Explore Intern",
    location: "Redmond, Washington",
    dates: "May 2017-August 2017",
    description: "Description of job"
};

var work = {
    jobs: [job],
    display: function () {
        replaceWorkSection();
        work.jobs.forEach(function (job) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(job.employer + job.title + job.dates + job.location + job.description);
        });
    }
};

function replaceWorkSection() {
    work.jobs.forEach(function (job) {
        job.employer = HTMLworkEmployer.replace("%data%", job.employer);
        job.title = HTMLworkTitle.replace("%data%", job.title);
        job.location = HTMLworkLocation.replace("%data%", job.location);
        job.dates = HTMLworkDates.replace("%data%", job.dates);
        job.description = HTMLworkDescription.replace("%data%", job.description);
    });
}
// end work section

/**
 * project section
 */
var project = {
    title: "project title",
    dates: "project date",
    description: "project description",
    images: ["images/197x148.gif", "images/197x148.gif"]
};

var projects = {
    projects: [project],
    display: function () {
        replaceProjectsSection();
        projects.projects.forEach(function (project) {
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(project.title + project.dates + project.description);
            project.images.forEach(function (image) {
                $('.project-entry:last').append(image);
            });
        });
    }
};

function replaceProjectsSection() {
    projects.projects.forEach(function (project) {
        project.title = HTMLprojectTitle.replace("%data%", project.title);
        project.dates = HTMLprojectDates.replace("%data%", project.dates);
        project.description = HTMLprojectDescription.replace("%data%", project.description);
        project.images.forEach(function (image) {
            var tempImage = HTMLprojectImage.replace("%data%", image);
            project.images.splice(project.images.indexOf(image), 1, tempImage);
        });
    });
}
// end project section

function initializePage() {
    bio.display();
    education.display();
    work.display();
    projects.display();
    $('#mapDiv').append(googleMap);
}

initializePage();