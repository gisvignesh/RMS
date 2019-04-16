import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Constant } from '../../constants/Constant.var';
import { HttpProvider } from '../../providers/http/http';
import { API_URL } from '../../constants/API_URLS.var';
import { LoaderService } from '../../service/loaderService';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
//import { TrainingPage } from '../training/training';

/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'course-page'
})
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
  providers: [Constant]

})
export class CoursePage implements OnInit {
  showAssigned: boolean = false;
  showProgress: boolean = true;
  showCompleted: boolean = true;
  showSignRequire: boolean = true;
  statusKey;
  userInformation: any = [];
  userAssigned: any;
  userProgress: any;
  userCompleted: any;
  courseList:any =[];
  allCourses: any = [];
  assignedCount;
  assignedCoursesList = [];
  progressCoursesList = [];
  completeCoursesList = [];
  noRecordsFoundMessage;
  paramsData ={};
  currentUser;

  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams, public constant: Constant, public http: HttpProvider, public loader: LoaderService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
            let self = this;
            this.storage.get('currentUser').then((user: any) => {
            if (user) {
             self.currentUser = user;
             this.getCourseStatus('assigned');
             console.log(self.currentUser, "HEHEHEHE");             
            }
        });
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    this.assignedCoursesList = [];
    this.progressCoursesList = [];
    this.completeCoursesList = [];
    this.getCoursesList(); 
  }
  goToNotification() {
    this.navCtrl.setRoot('notification-page');
  }
  
  openTrainingClass(courseId) 
  {
    this.paramsData['courseId'] = courseId;
    this.navCtrl.setRoot('training-page',this.paramsData);
  }

  //getcourse 
  async getCoursesList(){
    this.loader.showLoader();
    await this.getCourse();
    this.loader.hideLoader();
  }
  
  getCourseStatus(status) {
    let self = this;
    this.courseList = [];
    return new Promise(resolve => {
      let userId = this.currentUser.userId;
      this.http.get(API_URL.URLS.trainingCourseAPI + '?status=' + status + '&userId=' + userId).subscribe((res) => {
        if(res['data']['rows']){
          self.courseList    = res['data']['rows'];
          self.assignedCount = res['data']['count'];
        }else{
          self.assignedCount = 0;
          self.noRecordsFoundMessage = res['message'];
        }
        resolve('resolved');
      },(err) => {
        resolve('rejected');
      });
    });
   
  }

  getCourse() {
    return new Promise(resolve => {
      this.http.getData(API_URL.URLS.getCourse).subscribe((data) => {
        this.allCourses = data;
        var self = this;
        this.allCourses.assigned.map(function (value, key) {
          value['expireDate']=self.calculateExpireDays(value.dueDate);
          self.assignedCoursesList.push(value);          
        });
        this.allCourses.inprogress.map(function (value, key) {
          value['expireDate']=self.calculateExpireDays(value.dueDate);
          self.progressCoursesList.push(value);
        });
        this.allCourses.completed.map(function (value, key) {
          self.completeCoursesList.push(value);
        });        
        resolve('resolved');
      }, (err) => {
        console.log('error occured', err);
        resolve('rejected');
      });
    });
  }

  calculateExpireDays(dueDate) {
    const a = moment(new Date());
    const b = moment(new Date(dueDate));
    return a.to(b, true);
  }

  // show tabs
  showData(show) {
    switch (show) {
      case 'assigned':
        this.showAssigned = false;
        this.showProgress = true;
        this.showCompleted = true;
        this.showSignRequire = true;
        break;
      case 'inProgress':
        this.showAssigned = true;
        this.showProgress = false;
        this.showCompleted = true;
        this.showSignRequire = true;
        break;
      case 'completed':
        this.showAssigned = true;
        this.showProgress = true;
        this.showCompleted = false;
        this.showSignRequire = true;
        break;
      case 'signRequired':
        this.showAssigned = true;
        this.showProgress = true;
        this.showCompleted = true;
        this.showSignRequire = false;
        break;

      default:
        this.showAssigned = false;
        this.showProgress = true;
        this.showCompleted = true;
        this.showSignRequire = true;
    }

    this.getCourseStatus(show);

  }

 

}
