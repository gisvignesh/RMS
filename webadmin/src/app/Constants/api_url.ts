import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class API_URL {

  public static URLS = {

   getKeyStat           : "5c04dd7f330000e900d01e32",
   getCourses           : "5c04e5553300005700d01e4e",
   getCoursesList       : "5c18fef82f00006300af133b",
   getTopEmployees      : "5c04e6cf3300002900d01e56",
   getTotalNoOfBadges   : "5c04e7333300007800d01e5d",
   getTopResorts        : "5c04ea753300006a00d01e6e",
   getBadgesAndCertification : '5c04eb4a330000e900d01e70',
   getReservationByResort    : '5c04eba63300007900d01e71',
   getQuiz              : '5c0f73143100002c0924ec31',
   //newgetVideoTrendList    : '5c12603d3300005632998f04',
   getVideoTrendList    : '5c09210a2f0000c21f637c9c',
  // getVideoTrendEmpList : '5c08e0a12f00005400637aa6',
   getVideoTrendEmpList :'5c1355c43400005600ecdf71',
   getModuleList        : '5c18f3502f00002a00af12f9',
   getEmployeeStatus    : '5c1247ee3300009829998e4a',
  // getEmployeeDetails   : '5c124a4d330000bd2a998e64',
   getEmployeeDetails   :'5c135a573400008e00ecdf92',
   getTaskResortChart   : '5c135a3c3400008e00ecdf91',
   getCourseTrendChart  : '5c1362173400007c00ecdfc7',
   getYearList          : '5c1355633400007500ecdf6f',
   moduleCourseList     : '5c18c8502f00006a00af1181',
   getEmployeeList      : '5c0928d52f0000c21f637cd0',
   getForumList         : '5c17879a2f00008200b087a8',
   getTemplateList      : '5c15bed92e00009c0937c6a6',
   getBatchList         : '5c175edf2f00005f00b0862f',
   getPercentageList    : '5c18f1d42f00005900af12e7'

  }

}