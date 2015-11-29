var resumeApp = angular.module('resumeApp', ['ngSanitize']);

resumeApp.controller('ResumeCtrl', function ($scope) {
  $scope.jobs = [
    {"job_title": "Cofounder, CFO , Operations manager",
     "job_dates": "April 2012 – September 2015",
     "job_company":"Aborigens - Local food insiders",
     "job_description":"Co-founder of a local food tourism startup in Barcelona. During this time I learnt what is to start and run a business, which was something totally new for me. Thanks to this now I can relate to the business side of software engineering, as I gained many new skills in finances, budget planning, working for goals and objectives, negotiation or customer care. My main roles where business oriented and divided in 2 main categories:",
 	 "columns" : "2",
 	 "column_one" : "As CFO:<br> <ul><li>Finances and legal needs</li><li>Progress and annual shareholders reporting</li><li>Product pricing</li><li>Budgets, wages and cash flow</li></ul>",
 	 "column_two" : "As Operation manager and CTO:<br> <ul><li>Defining all processes and operational metodologies for the company</li><li>Choosing tools to support daily operational needs</li><li>Mantain server infrastructure</li><li>Website and ticket sales development</li></ul>"

 },
 	{"job_title": "WordPress ninja",
     "job_dates": "Secretary Plus",
     "job_company":"January 2012 – April 2012",
     "job_description":"A merging company assembled a small team to create a new website before the merge would happen. The main goal of the website was to offer secretaries a place to train and to find jobs. <br/>The website was decided to be implemented in wordpress with custom plugins. My main roles in the team were:",
     "columns" : "1",
     "column_one" : "<ul><li>Lead a team of a web designer and another programmer for the task</li><li>Design and develop the advanced plugins for the different functionalities we needed, like: Job offers for companies,  Candidates filtering and selection, and Training offers</li><li>Schedule and demo the releases</li></ul>"
 	},
 	{"job_title": "Freelance developer",
     "job_dates": "January 2012 – April 2012",
     "job_company":"Self-employed",
     "job_description":"Worked in several web projects combining frontend and backend development:",
    	"columns" : "1",
     "column_one" : "<ul><li>Taking over and finishing a website that the previous developer left abruptly unfinished for a tech startup: <a href='http://dexmatech.com' target='_blank'>Dexmatech</a></li><li>Athletes and championship management plugin for a athletism club website: <a href='http://fondistepenedes.com' target='_blank'>Fondistes Penedès</a></li></ul>" 
 	}
 	,
 	{"job_title": "Analyst / Lead Developer",
     "job_dates": "September 2008 – February 2011",
     "job_company":"keepU",
     "job_description":"Online Marketing agency that had as a main client Sony and a private Bank in Andorra, and now is currently out of business. During time I played different roles:",
"columns" : "1",
     "column_one" : "<ul><li>Lead Developer of interactive marketing projects, featuring PHP, Flash, JQuery</li><li>Teleconference app in flash</li><li>IT strategy and creativity for new projects.</li></ul>" 
 	},

 	{"job_title": "Analyst / Developer",
     "job_dates": "June 2007 – August 2008",
     "job_company":"Nextret",
     "job_description":"Worked 1 year as an analyst / developer at CCRTVI (http://www.ccrtv.cat/entitats/entitat_ccrtvi_cat.htm) developing and mantaining the website: www.super3.cat, and taking part in websites like www.tv3.cat / www.3cat24.cat. Technologies used: XML/XSL, Java, Oracle Also worked for a project for Gencat (www.gencat.cat) using J2EE, struts, hibernate and spring. (Canigó framework)"
 	}
 	,
 	{"job_title": "Analyst / Developer J2EE",
     "job_dates": "June 2005 – June 2007 ",
     "job_company":"Getronics",
     "job_description":"Working for AXA/Winterthur with J2EE + Struts + Oracle in maintenance and development of the main webapp used by insurance agents"
 	}
 	 	,
 	{"job_title": "Developer",
     "job_dates": "April 2004 – December 2004",
     "job_company":"GEC (Open univesity of Catalunya group)",
     "job_description":" Web app developer using ASP, PHP, J2EE + Struts + Hibernate"
 	},
 	{"job_title": "Developer",
     "job_dates": "January 2002 – January 2003",
     "job_company":"Hewlett-Packard",
     "job_description":"Developing a document management software using Oracle PL-SQL , Unix, ASP"
 	},
 	{"job_title": "Analyst / Developer",
     "job_dates": "February 2000 – June 2001",
     "job_company":"Ajuntament de Vilafranca (Local administration) ",
     "job_description":" Plan and implement an intranet from scratch using Oracle, Ms-Access and ASP"
 	}
  ];
});