import { Component, OnInit,TemplateRef } from '@angular/core';
import { Location } from '@angular/common'; 
import { ActivatedRoute, Params } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import {HeaderService, UtilService, CommonService,BreadCrumbService,ResortService,UserService,AlertService} from '../../services';
import {VideosTrendVar} from '../../Constants/videostrend.var';
import { CommonLabels } from '../../Constants/common-labels.var'
import { query } from '@angular/animations';

@Component({
  selector: 'app-expiretrenddetails',
  templateUrl: './expiretrenddetails.component.html',
  styleUrls: ['./expiretrenddetails.component.css']
})
export class ExpiretrenddetailsComponent implements OnInit {
  courseId;
  roleId;
  resortId;
  CourseTrendList;
  resortList = [];
  divisionList = [];
  departmentList = [];
  empList = [];
  filterResort = null;
  filterDivision = null;
  filterDept = null;
  filterUser = null;
  enableFilter= false;
  selectedEmp = [];
  modalRef;
  modalConfig;
  showReporters = null;
  hideReporters = 'hide';
  trendType ;
  reportingMangerList = [];
  reporter = [];
  reportingError = false;
  comments ; 
  // typeSet1='toAllEmployee';
  // typeSet2='toAllReportManager';

  reportSettings = {
    singleSelection: false,
    idField: 'userId',
    textField: 'userName',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableCheckAll: false,
    itemsShowLimit: 8,
    allowSearchFilter : true,
    searchPlaceholderText : "Search",
    clearSearchFilter : true
}

  constructor(   public trendsVar: VideosTrendVar ,
    private commonService: CommonService,
    private utilService: UtilService,
    public location :Location,
    public commonLabels:CommonLabels,
    private breadCrumbService :BreadCrumbService,
    private headerService : HeaderService,
    private resortService :ResortService,
    private userService : UserService,
    private activatedRoute : ActivatedRoute,
    private modalService: BsModalService,
    private alertService : AlertService) { 
      this.activatedRoute.params.subscribe((params: Params) => {
        this.courseId = params['id'];
      });
      this.activatedRoute.queryParams.subscribe((params) => {
        this.trendType = params.type;
        // this.courseId = params['id'];
      });
    }
    

  ngOnInit() {
    this.headerService.setTitle({title: this.commonLabels.labels.expiringTrend, hidemodule: false});
    this.breadCrumbService.setTitle([]);
    this.roleId = this.utilService.getRole();
    this.resortId = this.utilService.getUserData().ResortUserMappings.length ? this.utilService.getUserData().ResortUserMappings[0].Resort.resortId : '';
    this.filterResort = this.resortId;
    this.getExpireTrendList('')
    this.getResortList();
  }

  getExpireTrendList(filter){
    let query =  this.resortId  ? '&resortId='+this.resortId : '';
    if(filter){
        query = query+filter
    }
    this.commonService.getExpireTrendList(query,this.courseId,this.trendType).subscribe(resp=>{
      if(resp && resp.isSuccess){
        this.trendsVar.employeeList = resp.data.rows;
      }
    })
  }

  getResortList(){
    if(this.roleId != 1){
        this.commonService.getResortForFeedback(this.resortId).subscribe(item=>{
            if(item && item.isSuccess){
                this.resortList = item.data && item.data.rows.length ? item.data.rows : [];
                this.filterSelect(this.filterResort,'resort')
            } 
        })
    }
    else{
        this.commonService.getAllResort('').subscribe(item=>{
            if(item && item.isSuccess){
                this.resortList = item.data && item.data.length ? item.data : [];
                // this.filterSelect(this.filterResort,'resort')
            } 
        })
    }
}

filterSelect(value,type){
    this.resortId = '';
    if(type == "resort"){
        this.filterDivision =null;
        this.filterDept = null;
        this.filterUser = null;
        this.resortService.getResortByParentId(this.filterResort).subscribe((result) => {
            if (result.isSuccess) {
                this.divisionList = result.data.divisions;
                let query = "&resortId="+this.filterResort;
                this.getExpireTrendList(query);
            }
        })

    }
    else if(type == "division"){
        this.filterDept = null;
        this.filterUser = null;
        let obj = { 'divisionId': this.filterDivision };
        this.commonService.getDepartmentList(obj).subscribe((result) => {
            if (result.isSuccess) {
                this.departmentList = result.data.rows;
                let query = "&resortId="+this.filterResort+"&divisionId="+this.filterDivision;
                this.getExpireTrendList(query);
            }
        })
    }
    else if(type == "dept"){
        this.filterUser = null;
        let data = { 'departmentId': this.filterDept, 'createdBy': ' ' };
        this.roleId != 1 ? data.createdBy =  this.utilService.getUserData().userId : delete data.createdBy;
        this.userService.getUserByDivDept(data).subscribe(result => {
            if (result && result.data) {
                this.empList = result.data;
                let query = "&resortId="+this.filterResort+"&divisionId="+this.filterDivision+"&departmentId="+this.filterDept;
                this.getExpireTrendList(query);
            }

        })
    }
    else if(type == "emp"){
        let query = "&resortId="+this.filterResort+"&divisionId="+this.filterDivision+"&departmentId="+this.filterDept+"&userId="+this.filterUser;
        this.getExpireTrendList(query);
    }

}

resetFilter(){
    this.filterDivision =null;
    this.filterDept = null;
    this.filterUser = null;
    this.resortId = this.utilService.getUserData().ResortUserMappings.length ? this.utilService.getUserData().ResortUserMappings[0].Resort.resortId : '';
    this.filterResort = this.resortId;
    this.getExpireTrendList('');
}

ngOnDestroy(){
  this.trendsVar.employeeList = [];
}
getListArray(data,type){
  if(data.length){
    let arr = [];
    if(type == 'division'){
      let details = data.map(item=>{
        let div = item.Division ? item.Division.divisionName : '';
        return div
      })
      arr = Array.from(details.reduce((m, t) => m.set(t, t), new Map()).values());
    }
    else if(type == 'dept'){
      let details = data.map(item=>{
        let dept = item.Department ? item.Department.departmentName : '';
        return dept;
      })
      arr = Array.from(details.reduce((m, t) => m.set(t, t), new Map()).values());
    }
    return arr
  }
  else{
    return ''
  }
}

getCalculateDue(expireTrend){
  let DaysDiff;
  if(expireTrend && expireTrend.TrainingSchedule && expireTrend.TrainingSchedule.dueDate){
    let currentDate = new Date();
    let dueDate = new Date(expireTrend.TrainingSchedule.dueDate);
    let timeDiff = dueDate.getTime() - currentDate.getTime();
    DaysDiff = timeDiff / (1000 * 3600 * 24);
    DaysDiff =  Math.round(DaysDiff);
    console.log(DaysDiff);
  }else{
    DaysDiff = '-';
  }
  return DaysDiff;
}

selectEmployee(data,checked){
  if(checked){
    this.selectedEmp.push(data.userId);
  }
  else{
    let index = this.selectedEmp.findIndex(d=>d == data.userId);
    this.selectedEmp.splice(index,1);
  }
}

openNotificationModel(template : TemplateRef<any>){
  if(this.selectedEmp.length){
    this.reportingError = false;
    this.showReporters = null;
    this.hideReporters = 'hide';
    this.reportingMangerList = [];
    this.reporter = [];
    this.modalRef = this.modalService.show(template, this.modalConfig);
  }else{
    this.alertService.error('Please select minimum one employee');
  }
}

reportersSelect(type){
  this.showReporters = type;
  if(this.showReporters == 'show'){
    this.getReporterList();
    this.hideReporters = null;
  }
  else{
    this.reportingMangerList = [];
    this.reporter = [];
    this.showReporters = null;
  } 
}

getReporterList(){
  let query =  {userIds:[]};
  query.userIds = this.selectedEmp;
  this.commonService.getReportingManager(query).subscribe(resp=>{
    if(resp && resp.isSuccess){
      let arr =  resp.data.map(item=>{
        let obj ;
        if(item.reportDetails){
          obj = {
            userId : item.reportDetails.userId,
            userName : item.reportDetails.userName 
          }
        }
        else{
          obj = '';
        }
        return obj;
      })
      this.reportingMangerList = arr.filter(function(x){
        return (x != "");
      });
    }
  })
}

  sendNotification(){
    let params={
      userIds : [],
      typeSet : '',
      createdBy : this.utilService.getUserData().userId,
      courseId : '',
      trainingClassId : '',
      comments : this.comments
    }
    if(!this.showReporters || this.showReporters != 'show' || this.showReporters =='show' && this.reporter.length){
      this.reportingError = false;
      if(this.showReporters == 'show'){
        params.userIds = this.reporter.map(item=>{ return item.userId});
        params.typeSet = 'toAllReportManager';
      }
      else{
        params.userIds = this.selectedEmp;
        params.typeSet = 'toAllEmployee';
      }
      if(this.trendType == 'course'){
        params.courseId = this.courseId;
        delete params.trainingClassId; 
      }
      else{
        params.trainingClassId = this.courseId;
        delete params.courseId; 
      }
      this.commonService.sendExpireNotification(params).subscribe(resp=>{
        if(resp && resp.isSuccess){
          this.resetData();
          this.alertService.success(resp.message)
        }
      },err=>{
        this.resetData();
        this.alertService.error(err.error.error)
      })
    }
    else{
      this.reportingError = true;
      // this.alertService.error('Please select minimum one reporting manager')
    }
  }

  resetData(){
    this.showReporters = null;
    this.hideReporters = 'hide';
    this.reportingMangerList = [];
    this.selectedEmp = [];
    this.reporter = [];
    this.comments = '';
    this.modalRef.hide();
    this.getExpireTrendList('');
  }
}
