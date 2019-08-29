import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CommonLabels{
        
    labels = {

        "create"            :  "Create",
        "createdBy"         :   "Create By",
        "createdOn"         :   "Created On",
        "lastModifiedOn"    :   "Last Modified On",
        "noOfTrainingClass" :   "No. of Training Class",
        "noOfContentFiles"  :   "No. of Content Files",
        "noOfEmployee"      :   "No. of Employees",
        "fileSize"          :   "File Size",
        "file"              :   "Files",       
        "count"             :   "Count:",
        "edit"              :   "Edit",
        "editView"         :    "View / Edit",
        "viewQuiz"          :   "View Quiz",
        "video"             :   "Video(s)",
        "document"          :   "Document(s)",
        "filter"            :   "Filter",                
        "deleteDoc"         :   "Delete Document",
        "deleteCourse"      :   "Delete Course",
        "deleteDocConfirmation": "Are you sure you want to delete this document?",
        "upload"            :   "Upload",
        "uploadQuiz"        :   "Upload Quiz",
        "cancel"            :   "Cancel",
        "cmsLibrary"        :   "Resource Library",
        "certificate"       :   "Certificate",
        "course"            :   "Course",
        "class"             :   "Class",
        "trainingClass"     :   "Training Class",
        "className"         :   "Training Class Name",
        "videos"            :   "Videos",
        "documents"         :   "Documents",
        "notification"      :   "Notification",
        "quiz"              :   "Quiz",
        "selectUsers"       :   "User",
        "recentlyDelete"    :   "Recently Deleted",
        "duplicate"         :   "Duplicate",        
        "saveAsNew"         :   "Save As New Version",
        "desktop"           :   "Desktop",
        "fileName"          :   "File Name",
        "description"       :   "Description",
        "isRequired"        :   "is Required",
        "fileisRequired"    :   "File is required",         
        "type"              :   "Type",
        "length"            :   "Length",
        "noofEmp"           :   "No.of Emp.",
        "permission"        :   "Permission",
        "action"            :   "Action",
        "select"            :   "Select" ,
        "courseName"        :   "Course Name",
        "contentName"       :   "Content Name",
        "contentType"       :   "Content Type",
        "approverName"      :   "Approver Name",
        "videoTitle"        :   "Video Title",       
        "uploadVideos"      :   "Upload Videos",
        "active"            :   "Active",
        "resort"            :   "Site",
        "division"          :   "Division",
        "department"        :   "Department",
        "employees"         :   "All Employees",       
        "deleteVideo"       :   "Delete Video",
        "coursedeleteConfirmation": "This file will be deleted from all courses, do you still want to  continue?",
        "courseDelConfirmation": "Are you sure you want to delete this course?", 
        "courseUndoConfirmation": "Are you sure you want to restore this course?", 
        "selectopt"         :   "--Select Training Class--",
        "selectcourse"      :   "--Select Course--",
        "selectcoursestatus":   "--Select Course Status--",
        "selectTemplate"    :   "--Select Certificate--",
        // "video"           : "Video",
        "assignTo"          :   "Assign To",
        "questionType"      :   "Question Type",
        "question"          :   "Question",
        "options"           :   "Options",
        "answer"            :   "Answer",
        "true"              :   "True",
        "false"             :   "False",
        "weightage"         :   "Weightage",
        "totalNoOfQuestions":   "Total No of Question(s)",
        "deleteCertificate" :   "Delete Certificate",
        "delConfirmCertificate" : "Are you sure you want to delete this template?",
        "deleteQuiz"        :   "Delete Quiz",
        "deleteConfirmation":   "Are you sure you want to delete this quiz question?",
        "a"                 :   "A",
        "b"                 :   "B",
        "c"                 :   "C",
        "d"                 :   "D",
        "selectptdivision"  :   "--Select Parent Division--",
        "selectptdpmt"      :   "--Select Parent Department --",
        "selectchildresort" :   "--Select Child Site--",
        "selectchilddivi"   :   "--Select Child Division--",
        "selectchilddpmt"   :   "--Select Child Department --",
        "selectcreateuser"  :   "--Select Created By --",
        "selectcoursestoschedule" : "Select courses to Schedule a training",
        "selectclasstoschedule" : "Select Training Classes to Schedule a training",
        "selectNotificationtoschedule" : "Select Notification to Schedule a training",
        "userName"          :   "User Name",
        "role"              :   "Job Title",        
        "mobile"            :   "Mobile",
        "homeNumber"        :   "Home Number",
        "reportingTo"       :   "Reporting to",
        "defaultSetting"    :   "Default Setting",
        "email"             :   "Email",
        "employeeId"        :   "Emp ID",
        "updateRestrictMsg" :   "Unable to perform update user",
        "addRestrictMsg"    :   "Unable to perform add user",
        "mandatoryFields"   :   "Fill all user data fields",
        "emailError"        :   "Please enter valid mail id",
        "mobileError"       :   "Please enter valid mobile number",
        "userUpdated"       :   "User updated successfully",
        "userAdded"         :   "User added successfully",
        "removeUser"        :   "removed from the list",
        "deleteUser"        :   "Delete User",
        "deleteDivision"    :   "Delete Division",
        "deleteConfirmuser" :   "Are you sure you want to delete this user?",
        "deleteRole"        :   "Delete Job Title",
        "deleteRoleConfirmation": "Are you sure you want to delete this job title?",
        "deleteDivisionConfirmation": "Are you sure you want to delete this division?",       
        "noData"            :   "No Data",
        "addDivision"       :   "Add Division",
        "editDivision"      :   "Edit Division",
        "addRole"           :   "Add Job Title",
        "editRole"          :   "Edit Job Title",
        "userManagement"    :   "User Management",
        "hierarchy"         :   "Hierarchy",
        "listofRole"        :   "Job Title",
        "rolesPermission"   :   "Roles & Permission",
        "divisionName"      :   "Division Name",
        "entertheDepartment":   "Enter the Department",
        "resortName"        :   "Site Name",
        "location"          :   "Location",      
        "utilizedSpace"     :   "Utilized Space",
        "numberOfUser"      :   "No.of Users",
        "status"            :   "Status",            
        "deleteResort"      :   "Delete Site",
        "deleteResortConfirmation" : "Are you sure you want to delete this site?",       
        "subscribTyp"       :   "Subscription Type",
        "totalStorage"      :   "Total Storage Space",       
	    "roles"             :   "Roles",	    
	    "menu"              :   "Menu",
	    "view"              :   "View",	 
	    "editdele"          :   "Edit / Delete",
        "web"               :   "Web",
        "webOrmobile"       :   "Web / Mobile",
        "addModule"         :   "Add Program",
        "editModule"        :   "Edit Program",
        "editCourse"        :   "View / Edit Course",
        "accessTo"          :   "Access To",
        // "topics"            :   "Topic",
        "coursesAdded"      :   "Training Class Added",
        "addCourseTitle"    :   "Add New Training Class",
        "editCourseTitle"   :   "Edit Training Class",
        "trainingClassName" :   "Training Class Name",    
        "showAll"           :   "Show All",
        "videoAddedToast"   :   "Course files added successfully",
        "videoUpdatedToast" :   "Course files updated successfully",       
        "moduleCreateMsg"   :   "Course Created Successfully",
        "moduleUpdateMsg"   :   "Course Updated Successfully",
        "moduleCreateError" :   "Unable to create course",
        "courseError"       :   "Minimum one training class is required*",
        "noDatacreate"      :   "No Training Classes Created Yet",
        "activeMsg"         :   "is Activated",
        "deactiveMsg"       :   "is Deativated",
        "moduleNameValidation": "Program Name already taken",
        "addCourseSuccess"  :   "Training Class added successfully",
        "updateCourseSuccess":  "Training Class updated successfully",
        // "removeVideoSuccess" : " removed from the file list",
        "topicName"         :   "Topic Name",        
        "contentFiles"      :   "Content Files",
        "createNotification":   "Create Notification",
        "scheduleTraining"  :   "Schedule A Training",
        "createCourse"      :   "Create Course",      
        "acceptedFileTypes" :   "Accepted file types: TXT, MP4, JPG, DOC, MPEG, AVI",
        "acceptedhtmlTypes" :   "(Accept only HTML file)",
        "from"              :   "Assigned Date",
        "to"                :   "Due Date",
        "batchName"         :   "Training Schedule Name",        
        "module"            :   "Program",
        "mandatory"         :   "Mandatory",
        "optional"          :   "Optional",
        "percentage"        :   "Pass %",
        "courses"           :   "Courses",
        "regNote"           :   "Send Notification Every",
        "invalidModule"     :   "Invalid Program Selection",
        "calendarView"      :   "Calendar View",
        "forumName"         :   "Forum Name",
        "empCount"          :   "Emp count",
        "activeInActive"    :   "Active / Inactive",
        "lastactivedate"    :   "Last Active Date",
        "editForum"         :   "Edit Forum",
        "createForum"       :   "Create Forum",
        "forum"             :   "Forum",
        "topics"            :   "Topics",
        // empName     : 'Department',
        "admin"             :   "Admin",
        "selDept"           :   "Select Department",
        "selDiv"            :   "Select Division",
        "selEmp"            :   "Select Employee",
        "selAdmin"          :   "Select Admin",
        "star"              :   "*",
        "votes"             :   "Votes",
        "batch"             :   "Batch",      
        "template"          :   "Template",
        "tempName"          :   "Template Name",      
        "fileUpload"        :   "Upload your HTML File",
        "fileUploadPop"     :   "Upload your File",
        "chooseFile"        :   "Choose File",
        "badge"             :   "Badge",
        "gold"              :   "Gold",
        "silver"            :   "Silver",
        "bronze"            :   "Bronze",
        "diamond"           :   "Diamond",
        "platinum"          :   "Platinum",
        "subName"           :   "Subscription Name",
        "allocatedSpace"    :   "Allocated Space",
        "availableSpace"    :   "Available Space",
        "maxcourse"         :   "Max no of Courses",
        "license"           :   "No of Licenses",
        "tenure"            :   "Tenure",
        "year"              :   "Years",
        "month"             :   "Months",
        "actFrom"           :   "Active From",
        "expOn"             :   "Expire On",
        // "selectUsers"       :   "Select User",        
        "application"       :   "Application",
        "query"             :   "Query",
        "complaint"         :   "Complaint",
        "compliment"        :   "Compliment",
        "task"              :   "Task",
        // select = 'Program';
        "avgWeekly"         :   "Average weekly",
        "avgQualification"  :   "Average Qualification",
        "totEmp"            :   "Total Employee",
        "emp"               :   "Employees",
        "selectResort"      :   "Select Site",
        "weeklyGrowth"      :   "Weekly Growth",
        "cloudy"            :   "CLOUDY",
        "temp"              :   "-4",
        "degree"            :   "o",
        "celcius"           :   "C",
        "monthDropdown"     :   "This Month",
        "employeeTabLabel"  :   "Employee",        
        "recentComment"     :   "Recent Comment",
        "wishes"            :   "Good Morning",        
        "notificationdash"  :   "You have ",
        "notifyAlert"       :   " notification(s) alert.",
        "totalCourses"      :   'Total Courses',
        "availableCourses"  :   'Assigned Courses',
        "completedCourses"  :   'Completed Courses',
        "inProgress"        :   'In Progress',
        "videosTrend"       :   'Course Trend',
        "employeeProgress"  :   "Employee Progress",
        "totalNoOfBadges"   :   "Total No. of Badges",
        "empCertificationTrend":   "Employee Certification Trend",
        "resCertificationTrend" : "Site Certification Trend",
        "topEmployees"      :   "Top 5 Employees",
        "topCourses"        :   "Top Rated Training Classes",
        "keyStats"          :   "Key Stats",
        "name"              :   "Name",    
        "score"             :   "Score",
        "visitors"          :   "Visitors",
        "staff"             :   "Staff",
        "feedbackRating"    :   "Feedback & Rating",
        "visitorsByResort"  :   "Visitors By Site",
        "reservationByResort":  "Reservation By Site",
        "topResorts"        :   "Top 5 Sites",
        "badges"            :   "Badges",
        "certification"     :   "Certification",
        "totalDivision"     :   "Total Division",
        "totalDept"         :   "Total Department",
        "allresort"         :   "All Site",
        "strgUtili"         :   "Storage Utilisation",
        "welcome"           :   "Welcome,",
        "subStatus"         :   "Subscription Status",
        "resortCertif"      :   "Site Certificate Trend",
        "peakResort"        :   "Peak Site!",
        "dashprtdatamsg"       :   "Please select the parent Site to view the data",
        "dashchilddatamsg"     :  "Please select the child Site to view the data",
        "parentresort"      :   "Parent Site",
        "summary"           :   "Summary",
        "uploadtxt"         :   "File Upload",
        "editFile"          :   "Edit File",      
        "videotext"         :   "Video",
        "pending"           :   "Pending",
        "approved"          :   "Approved",
        "rejected"          :   "Rejected",
        "approvalSetting"   :   "Approval Setting",
        "requestor"         :   "Requestor",
        "receivedOn"        :   "Received On",
        "employeeContent"   :   "Employee Content Upload",
        "deleteTraining"    :   "Delete Training Files",
        "archiveData"       :   "Archive Data After",
        "delData"           :   "Delete Data After",
        "nodataFound"       :   "No Data Found",
        "pleaseaddCourse"   :   "Please add the Course name",
        "empList"           :   "Employees List",
        "employeeName"      :   "Employee Name",
        "completeDate"      :   "Completed Date",
        "fileType"          :   "File Type",
        "empId"             :   "Employee ID",
        "designation"       :   "Designation",
        "dob"               :   "DOB",
        "oldPassword"       :   "Old Password",
        "newPassword"       :   "New Password",
        "confirmPassword"   :   "Confirm Password",        
        "quizSelection"     :   "How do you want to add Quiz?",
        "fromCMSLibrary"    :   "Upload from Resource Library",
        "addNew"            :   "Add new Quiz",
        "pwdMissmatchMsg"   :   "Password Mismatch",
        "subject"           :   "subject",
        "totxt"             :   "to",
        "cc"                :   "cc",
        "takeTour"          :   "Take a Tour",
        "contentFile"       :   "Content Files",
        "totalNoEmp"        :   "Total No. of Employees enrolled:",
        "totalNoCert"       :   "Total No. of Certificate:",
        "assigned"          :   "Assigned",
        "inprogress"        :   "In Progress",
        "completed"         :   "Completed",
        "answers"           :   "Answers",
        "assignToCourse"    :   "Assigned to a course",
        "signature"         :   "Signature required by employee",
        "nonSignature"      :   "No Signature required",
        "selectfile"        :    "Select File",
        "allRoles"          :    "All Roles",
        "totalNoOfCourses"  :   "Total No. of courses",
        "childResort"       :   "Child Site"  ,
        "resetPassword"     :   "Reset password",
        "createClasses"     :   "Create Classes",  
        "createQuiz"        :   "Create Quiz",
        "editClasses"       :   "View / Edit Classes",
        "duplicateCourse"  :   "Duplicate Course",
        "editQuiz"          :   "View / Edit Quiz",
        "editNotification"  :   "View / Edit Notification",
        "editVideo"         :   "View / Edit Video",
        "editDocument"      :   "View / Edit Document",
        "trainingSchedule"  :   "Training Schedule",
        "schedule"          :   "Schedule",
        "performanceReport" :   "Performance Report",
        "resortDetails"     :   "Site Details",
        "certifiTrend"      :   "Certification Trend",
        "resourceLibrary"   :   "Resource Library",
        "showMore"          :   "Show more",
        "showLess"          :   "Show less",
        "quizName"          :   "Quiz Name",
        "selectQuiz"        :   "Select Quiz",
        "uploadedDate"      :   "Uploaded Date",
        "modifiedDate"      :   "Modified Date",
        "noOfResorts"       :   "No. of Resorts",           
        "createNewClass"    :   "Create New Class",
        "createNewNotif"    :   "Create New Notification",
        "createNewCourse"   :   "Create New Course",
        "createNewQuiz"     :   "Create New Quiz",
        "usageStats"        :   "Usage Stats",
        "availablecourse"   :    "Total Course:",
        "availableNotification" : "Total Notification:",
        "availableQuiz"     :   "Total Quiz:",
        "availabletrainingclass" : "Total Training Class:",
        "avaliablevideos"   :    "Total Videos:",
        "avaliabledocument" :    "Total Document:",
        "addDepartment"     :   "Add Department",
        "addArchieve"       :   "Add Purge Settings",
        "updateArchieve"    :   "Update Purge Settings",
        "deleteConfirm"     :   "Delete Confirmation",
        "rejectConfirm"     :   "Reject Confirmation",
        "approvalConfirm"   :   "Approval Confirmation",
        "notifyConfirm"     :   "Notification Confirmation",
        "approvalConfirmation" : "Are you sure you want to send it for approval?",
        "approveStatusConfirm" : "Did you need second level approval?",
        "rejectStatusConfirm"  : "Are you sure you want to reject?",
        "archieveDelete"    :   "Are you sure you want to delete this Purge?",
        "scheduleDelete"    :   "Are you sure you want to delete this Schedule?",
        "fileDelete"        :   "Are you sure you want to delete this file from class list?",
        "permissionSet"     :   "Permission Set",
        "userList"          :   "User List",
        "firstName"         :   "First Name",
        "lastName"          :   "Last Name",
        "courseList"        :   "Course List",
        "statusList"        :   "Course Status details",
        "expiringTrend"     :   "Expiring Trend",
        "sendToAll"         :   "Send to all employee",
        "sendToReporter"    :   "Send only to reporting persons",
        "reportingError"    :   "Please select minimum one reporting manager",
        "totalNoOfScheduleCourses"  :   "Total no. of scheduled courses -",
        "mobileAdmin"       :   "Mobile Admin",
        "webOrMobileAdmin"  :   "Web/Mobile Admin",
        "fullAccess"        :   "Full Access",
        "approvalAccess"    :   " Required Content Approval",
        "noOfDays"          :   "No.Of Days",    
        "classTrend"        :   "Training Class Trend",
        "notificationTrend" :   "Notification Trend",
        "scheduleName"      :   "Schedule Name",
        "saveAsNewVersion"  :   "Save as new version"
    };

    btns = {
        "ok"                :   "Ok",
        "update"            :   "Update",
        "cancel"            :   "Cancel",
        "save"              :   "Save",
        "print"             :   "Print",
        "workinProgress"    :   "Work in Progress",
        "scheduleTraining"  :   "Schedule a Training",
        "createNotification":   "Create Notification",
        "editNotification"  :   "View / Edit Notification",
        "createCourse"      :   "Create Course",
        "add"               :   "Add",
        "addNew"            :   "Add New",
        "assign"            :   "Assign",
        "yes"               :   "Yes",
        "no"                :   "No",
        "create"            :   "Create",
        "set"               :   "Set",
        "addvideocourse"    :   "Add Video to Course",
        "addQuiz"           :   "Add Quiz",
        "apply"             :   "Apply",
        "clearFilter"       :   "Clear Filter",
        "uploadEmp"         :   "Bulk Upload",
        "addUser"           :   "Add User",
        "editUser"          :   "Edit User",
        "next"              :   "Next",
        "publish"           :   "Publish",       
        "today"             :   "Today",
        "previous"          :   "Previous",
        "month"             :   "Month",
        "week"              :   "Week",
        "day"               :   "Day",
        "back"              :   "Back",
        "renewPlan"         :   "Renew Plan",
        "availPlan"         :   "Available Plan",
        "go"                :   "Go",
        "editTasks"         :   'Edit Tasks',
        "quickTasks"        :   'Quick Tasks',
        "openCalendar"      :   'Open Calendar',
        "clear"             :   "clear",
        "reject"            :   "Reject",
        "approve"           :   "Approve",
        "exporttoExcel"     :   "Export to Excel",
        "editProfile"       :   "Edit Profile",
        "addSign"           :   "Add Signature",
        "send"              :   "Send",
        "login"             :   "Log in",   
        "submit"            :   "Submit",
        "forgetPassword"    :   "Forgot Password?",
        "exportTo"          :   "Export To",
        "excel"             :   "Excel",
        "pdf"               :   "PDF",
        "start"             :   "Start",
        "addSchedule"       :   "Add Schedule",
        "recentDelete"      :   "Recently Deleted",
        "editQuiz"          :   "Edit Quiz",
        "sendNotification"  :   "Send Notification",
       
        
       
    };

    titles = {
        "cmsLibrary"        :  "Resource Library",
        "userManagement"    :  "User Management",
        "resortmanagement"  :  "Site Management",
        "addresortmagnt"    :  "Add Site Management",
        "rolepermission"    :  "Roles & Permissions",
        "calendarTitle"     :  "Training Schedule Calendar",
        "editTitle"         :  "Edit New Training Schedule",
        "addTitle"          :  "Add New Training Schedule",
        "forumtitle"        :  "Forum",
        "certificate"       :  "Certificates",
        "certiTempl"        :  "Certificates Templates",
        "subscription"      :  "Subscription Model" ,
        "dashboard"         :  "Dashboard",
        "purgeSettings"     :  "Purge Settings",
        "approvalRequests"  :   "Approval Requests",  
        "calendar"          :  "Calendar",
        "feedback"          :  "Feedback",
        "profile"           :  "Profile",
        "settings"          :  "Settings",
        "logintitle"        :  "Login",
        "videoTitle"        :  "Video List",
        "docTitle"          :  "Document List",
        "courseTrend"       :  "Course Trend"

    };

    imgs = {
        "profile"       :   "assets/images/Add_Profile_Picture.png",
        "close"         :   "assets/images/close.png",
        "close1"        :   "assets/images/Close-1.png",
        "ok"            :   "assets/images/Done.png",
        "cancel"        :   "assets/images/cancel2.png",
        "cancel1"       :   "assets/images/cancel-icon.png",
        "calendar"      :   "assets/images/cal.png",
        "user1"         :   "assets/images/user-icon1.png",
        "user2"         :   "assets/images/user-icon2.png",
        "good"          :   "assets/images/good_selicn.png",
        "average"       :   "assets/images/avg_selicn.png",
        "poor"          :   "assets/images/poor_selicn.png",
        "cool"          :   "assets/images/cool@2x.png", 
        "text"          :   "assets/images/txt-icon.png",
        "ppt"           :   "assets/images/ppt-icon.png",
        "pdf"           :   "assets/images/pdf-icon.png",
        "dashboard"     :   "assets/images/menu1.png",
        "subscription"  :   "assets/images/Subscription.png",
        "resort"        :   "assets/images/Resort.png",
        "cms"           :   "assets/images/CMS.png",
        "archival"      :   "assets/images/Approval.png",
        "user"          :   "assets/images/UserManagement.png",
        "calMenu"       :   "assets/images/Calendar.png",
        "forum"         :   "assets/images/Forum.png",
        "certificates"  :   "assets/images/Certificates.png",
        "feedback"      :   "assets/images/feedback.png",
        "filezip"       :   "assets/images/file-zip-icon.png",
        "excel"         :   "assets/images/excel-icon.png",
        "doc"           :   "assets/images/doc-icon.png",
        "bunny"         :   "assets/videos/images/bunny.png",
        "email"         :   "assets/images/email.png",
        "pwd"           :   "assets/images/password.png",
        "upload"        :   "assets/images/upload-button.png"




    };

    mandatoryLabels = {
        "videoTitle"        :  "Video Title is required",
        "courseName"        :  "Course Name is required",
        "description"       :  "Description is required",   
        // "selectDept"     :  "Department is required.",
        "selectResort"      :  "Site is required.",
        "selectEmp"         :  "Employee is required.",
        "selectAssignTo"    :  "Select Assign To",
        // "selectDivision" :  "Division is required." ,
        "courseRequired"    :  "Course is required." ,
        "trainingClassrequired" : "Training Class is required.",
        "quizNameRequired"  : "Quiz Name is required",
        "videoName"         :  "Video name is required",
        "isRequired"        :  " is required",
        "empId"             :  "Employee Id is required",
        "empIdExist"        :  "User ID already exist",
        "empName"           :  "Employee name is required",
        "dept"              :  "Department is required.",
        "designation"       :  "Designation is required",
        "emailId"           :  "Email Id is required",
        "emailInvalid"      :  "Invalid Email",
        "mobNo"             :  "Mobile number is required",
        "invalidMobNo"      :  "Invalid Mobile Number",
        "invalidHomeNo"     :  "Invalid Home Number",
        "reportingTo"       :  "Reporting is required",
        "division"          :  "Division is required",
        "divisionName"      :  "Division",
        "department"        :  "Department",
        "locationRequired"  :  "Location is required",
        "resortRequired"    :  "Site Name is required",
        "statusRequired"    :  "Status is required",  
        "roles"             :  "Job Tilte is required",
        "mandatFieldsmiss"  :  "mandatory fields missing",
        "courseNameError"   :  "Training Class name is required",
        "videoError"        :  "Minimum one file data required", 
        "from"              :  "Assigned date is required.",
        "to"                :  "Due date is required.",
        "batchName"         :  "Training Schedule is required.",     
        "dateValidate"      :  "From date should be less than To Date.",
        "passpercentage"    :  "Pass Percentage is required.",
        "dateLimitError"    :  "Assigned date should be less than due date"  ,
        "minCountError"     :  "Minutes value should be less than 60",
        "hourCountError"    :  "Hours value should be less than 24",
        "notificationError" :  "Valid notification reminder count is required",  
        "forumRequired"     :  "Forum Name is required",
        "topicRequired"     :  "Topic is required",          
        "adminRequired"     :  "Admin is required" ,
        "tempNameMandatory" :  "Template Name is required.",
        "tempFileMandatory" :  "Template File is required.",
        "quizName"          : "Quiz Name is mandatory",
        "uploadErrMsg"      :  "Template File is mandatory",
        "badgepercentageError" : "Badge pass percentage already assigned",
        "badgeRequiredMsg"  :  "Select All Badge Percentages",
        "assignErrMsg"      :  "Invalid Batch Selection",
        "subsRequired"      :  "Subscription Name is required",
        "storageSpace"      :  "Total Storage Space is required",
        "MaxcourseRequired" :  "Max no of Courses is required",
        "licenseRequired"   :  "No of Licenses is required",
        "tenureYear"        :  "Year is required",
        "tenureMonth"       :  "Month is required",
        "accessTo"          :  "Access To is Required",
        "roleName"          :  "Job Title is Required",
        "users"             :  "User is required",
        "filenameRequired"  :   "File name is required",
        "passPercentageError" : "Pass Percentage is Required",
        "courseError"       :   "Please fill the course field",
        "courseScheduleError" : "Course Already added for this schedule",
        "classScheduleError" : "Training class Already added for this schedule",
        "notificationScheduleError" : "Notification Already added for this schedule",
        "fileformate"       :  "Please add the valid file format" ,
        "minimumQuiz"       :  "Minimum one quiz is mandatory",
        "deptName"          :  "Department name is mandatory",
        "diviName"          :  "Division name is mandatory", 
        "lower(forumName::text) must be unique": 'Forum Name should be unique',
        "minlength"         :  "Minimum length is 8",
        "maxlength"         :  "Maximum length is 12",
        "oldPasswordReq"    :  "Old password is required",
        "newPasswordReq"    :  "New password is required",
        "confirmPasswordReq":  "Confirm Password is required",
        "oldPwdRequired"    :  "Old Password is Mandatory",
        "subRequired"       :  "Subject data is required",
        "addressMand"       :  "To address is mandatory", 
        "forgetPasswordTitle" : "Forgot password",
        "forgetPasswordMsg" :  "Please enter your email ID to reset your password",   
        "passwordError"     :  "Password is Required",
        "rememberMe"        :  "Keep me logged in",
        "invalidPassword"   :  "Invalid Password",
        "profileMandatory"  :  "Please fill the mandatory fields",
        "badgeDataFound"    :  "No badge data found",
        "permissionError"   :  "Please select data for all the fields",
        "courseUnique"      :  "Certificate already assigned for selected course",
        "selectCourse"      :  "Please select the course",
        "employeeId"        :   "Employee Id is required",
        "confirmPasswordError"     :  "Confirm password is Required",
        "employeeNullError" :   "Please select valid employee",
        "quizAnswer"        :   "Please fill the answer fields",
        "quizOption"        :   "Please fill the MCQ question option fields",
        "scheduleCourse"    :   'Minimum one course is required',
        "optionDuplicate"   :   "Same option value already enter for this question",
        "optionSelect"      :   "Please enter the option data before select answer",
        "approverError"     :   "Please select the second level approver",
        "agreeTerms"        :   "Agree terms & conditions"
    };

     modaltitle ={
        "addnewtrainingschedule" : "Add New Training Schedule",
        "editTrainingschedule"   : "Update Training Schedule",
        "editVideo"              : "Edit Video",
        "addcertTemplate"        : "Add Certificate Template",
        "editcertTemplate"       : "Edit Certificate Template",
        "notifiUpload"           : "Notification Upload", 
     }
     msgs = {
        "rolesuccessMsg"    :   "Roles & Permissions Saved Successfully",
        "updateSuccessMsg"  :   "Forum updated successfully",
        "addSuccessMsg"     :   "Forum created Successfully",
        "nameUniqueErr"     :   "Forum Name is already exist.",
        "uploadSuccessMsg"  :   "Certificate Template uploaded successfully",
        "assignSuccessMsg"  :   "Template Assigned Successfully",
        "badgeSuccessMsg"   :   "Badges Selected Successfully",
        "generalNotifi"     :   "Is this a general notification?",
        "publishmsg"        :   "Do you want to publish this content in the Resource Library?",
        "fileRemoved"       :   "File removed successfully",
        "videoUpdate"       :   "Video updated successfully",
        "designation"       :   "Designation updated successfully",
        "designationAdd"    :   "Designation added successfully",
        "diviDeleted"       :   "Division deleted successfully",
        "designDelete"      :   "Designation deleted successfully",
        "diviUpdate"        :   "Division updated successfully",
        "profilesuccess"    :   "Profile saved Successfully",
        "pwdUpdateSuccess"  :   "Password updated successfully",
        "mailSuccess"       :   "Mail sent successfully to",
        "warnMsg"           :   "No members available in selected department",
        "pwdUpdate"         :   "Password update link sent to your mail id",
        "regisEmail"        :   "Please enter registered email id",
        "loginSuccess"      :   "Login successfully",
        "tokenExpStatusText":   "Forbidden",
        "tokenExpErrorMsg"  :   "Session expired, Please Sign out and Continue.",
        "fileExist"         :   "File already exist"

    }
    symbols = {
        "comma": ',',
        "apostrophe": '!',
        "percentage": '%'
  
     };

}