import { Component, OnInit,TemplateRef } from '@angular/core';
import { VideoVar } from '../Constants/video.var';
import { HttpService } from '../services/http.service';
import { HeaderService } from '../services/header.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
    constructor(public videoVar: VideoVar,private modalService:BsModalService,public http: HttpService, private headerService: HeaderService) { }
    modalRef: BsModalRef;
    videoLink;
    ngOnInit() {
        this.getCourses('');
        this.getModuleList();
        this.headerService.setTitle('Videos');
    }

    onChangeModule(){
        this.getCourses(this.videoVar.moduleType);
    }

    getCourses(moduleType) {
        //moduleId to get courses based on selected module type.
        let moduleId= moduleType;
        this.http.get('5c0660b4330000bb4ce81634').subscribe((data) => {
            this.videoVar.courses = data;
            console.log(this.videoVar.courses);
        });
    }

    openModal(template: TemplateRef<any>, videolink) {
        this.videoLink= videolink;
        this.modalRef = this.modalService.show(template);
    }

    getModuleList(){
        this.http.get('5c08da9b2f00004b00637a8c').subscribe((data) => {
          this.videoVar.moduleList= data.ModuleList;
        });
    }

}