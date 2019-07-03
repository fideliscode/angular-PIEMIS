import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map,tap } from 'rxjs/operators';
import { Internship} from './internship.interface';
import { User} from './user.interface';
import { Employee} from './model/employee';
import { Region} from './model/region';
import { Industry} from './model/industry';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InternshipService {
employees: Employee[];
regions: Region[];
industries: Industry[];
internship : Internship;
currentInternship: Internship;
//Apiurl = 'http://localhost:3000';
Apiurl = "https://node-rest-piemis.herokuapp.com/";
internships:Internship[]=[];
proInternships:Internship[]=[];
application:{status: string;
            _id:string;
            intern:User;
            professional:string;
          };
// Apiurl = 'https://node-rest-piemis.herokuapp.com';

  constructor(private httpclient: HttpClient) {
   }

getInternships():Observable<Internship[]>{
      return this.httpclient.get(this.Apiurl+'/internships')
      .pipe(
        map((res: Internship[])=>{
          this.internships = res;
          // console.log(this.internships);
          return res;
        })
      );
    }


getApplications(){
  const id = localStorage.getItem('userid');
    return this.httpclient.get(this.Apiurl+'/applications/notifications/' + id)
    .pipe(
      map((res: any)=>{
        return res;
      })
    );
   
  } 



 applyIternship(intern:string,status:string,theinternship:string, professional:string){
 console.log('5');
  const body = JSON.stringify({intern,status,theinternship, professional});
console.log(body);
  return this.httpclient.post(this.Apiurl+ '/applications', body,
  {headers:new HttpHeaders({'Content-Type':'application/json', 'X-Requested-With': 'XMLHttpRequest' })})
  .pipe( map((res:any)=>{  console.log(res);  return res;}));
}


setInternship(internship: Internship){
     this.currentInternship = internship;
 }

getCurrentInternship(){
return this.currentInternship;
}

public getIndustries(){
	return this.industries = [
    {name:'Computers & Technology', subcategory:['Programming','Database Management',
    'Information Technology', 'Information Systems Development','mobile Development', 'Network Security', 'Network Administration',
    'data analysis','Software Engineering', 'Server Administration', 'Computer Engineering',
    'Information Systems Security']},
    
    {name:'Business & Management',  subcategory:['Accounting', 'Business administration',
    'Economics', 'Entertainment Management', 'Finance', 'Forensic Accounting',
    'Hotel & Restaurant Management', 'Human Resources', 'International Business', 
    'Internet Business', 'Logistics', 'Organisational Leadership', 
    'Project Management', 'Real Estate', 'Retail & Sales', 'Risk Management', 'Sports Management', 
    'Supply Chain', 'Training & Development']},
  
     {name:'Education & Teaching', subcategory:['Online Teaching', 'Music Education', 
     'Child Development', 'Early Childhood education', 'Special Teaching', 'Social education',
     'Language Teaching', 'Curiculum Teaching', 'Educational Administration', 'Coaching']},
  
     {name:'Arts & Design', subcategory:['Animation','Arts & History', 'Creative/Design', 'Fashion',
     'Film', 'Game Design', 'Interior Design', 'Landscape Architecture', 'Multimedia Design',"Jounalism",
     'Photography', 'Visual Communications', 'Web Design']},
  
     {name:'Health & Nursing', subcategory:['Public Health', 'Research', 'Nursing', 
     'Health Education', 'Healthcare & Nutrition', 'Life-care management','Sports & Health',
     'Psychology & Counseling']},
  
     {name:'Science & Engineering', subcategory:['Data science', 'Electronics Engineering', 
     'Engineering Management', 'Environment Management', 'Environmental Science', 'Electical']},
  
     
     {name:'Agriculture',subcategory:['Agribusiness', 'Fisheries', 'Animal Food', 
     'Geneticist', 'Vetenary', 'Agricultural Management']},];
}


public getEmployeesRange(){
	return this.employees = [{range: '1-10'},{range: '11-20'},{range: 'more than 20'}];
}

public getRegions(){
   	return this.regions =[{ region: 'ARUSHA'},{ region: 'DAR ES SALAAM'}, { region: 'DODOMA'},{ region: 'GEITA'},{ region: 'IRINGA'},
    { region: 'KAGERA'},    { region: 'KATAVI'},{ region: 'KIGOMA'},{ region: 'KILIMANJARO'},{ region: 'LINDI'},{ region: 'MANYARA'},
    { region: 'MARA'},{ region: 'MBEYA'},{ region: 'MOROGORO'},{ region: 'MTWARA'},{ region: 'MWANZA'},{ region:'NJOMBE'},
    { region: 'PWANI'},{ region: 'RUKWA'},{ region: 'RUVUMA'},{ region: 'SHINYANGA'},{ region: 'SIMIYU'},{ region: 'SINGIDA'},
    { region:'SONGWE'}, { region: 'TABORA'},{ region: 'TANGA'},{ region: 'UNGUJA'},{ region: 'PEMBA' }];
   }

}
