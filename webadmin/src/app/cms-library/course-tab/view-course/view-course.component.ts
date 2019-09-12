import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { HeaderService, HttpService, CourseService, CommonService, AlertService, UtilService, BreadCrumbService, FileService,PermissionService } from '../../../services';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TabsetComponent } from 'ngx-bootstrap';
import { CommonLabels } from '../../../Constants/common-labels.var';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  courseId;
  courseDetails = [];
  classId;

  constructor(private headerService: HeaderService,private breadCrumbService: BreadCrumbService, private activatedRoute: ActivatedRoute, private courseService: CourseService, public commonLabels: CommonLabels, private modalService: BsModalService, private commonService: CommonService, private alertService: AlertService, private utilService: UtilService, private route: Router, private fileService: FileService,private permissionService :PermissionService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.courseId = params['id']; 
      //console.log(this.userId)
    });
  }

  ngOnInit() {
    this.headerService.setTitle({title:'Edit', hidemodule:false});
    let breadCrumbTitle = [{ title: this.commonLabels.labels.edit, url: '/cms-library' }, { title: this.commonLabels.labels.course, url: '' }]
    this.breadCrumbService.setTitle(breadCrumbTitle);
    this.courseId && this.getCourseDetails();
  }

  getCourseDetails(){
    this.courseService.getAllCourseDetails(this.courseId).subscribe(resp=>{
      if(resp && resp.isSuccess){
        this.courseDetails = resp.data ? resp.data : [];
        this.classId = this.courseDetails.length && this.courseDetails[0].TrainingClass && this.courseDetails[0].TrainingClass.trainingClassId ? this.courseDetails[0].TrainingClass.trainingClassId : '';
      }
    },err=>{
      this.alertService.error(err.error.error)
    })
  }

  goToCourse(){
    this.route.navigate(['/cms-library'], { queryParams: { type:"create",tab:'course','moduleId':  this.courseId,"preview":true,"previewId":this.classId} });
  }
  classTabSelect(index){
    this.classId = this.courseDetails.length && this.courseDetails[index].TrainingClass && this.courseDetails[index].TrainingClass.trainingClassId ? this.courseDetails[index].TrainingClass.trainingClassId : '';
  }
}
