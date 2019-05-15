import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from './model/employee';
import {Region} from './model/region';
import {Industry} from './model/industry';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
employees: Employee[];
regions: Region[];
industries: Industry[];

  constructor(private httpclient: HttpClient) {
   }
fileupload(formdata){
	const body = formdata;
	return this.httpclient.post('https://node-rest-piemis.herokuapp.com/internships/upload', body,
  {headers :new HttpHeaders({'Content-Type': 'application/json',
   'X-Requested-With': 'XMLHttpRequest'})});


}
public getIndustries(){
	return this.industries = [
    {name:'Programming & tech', subcategory:['web programming','databases',
    'desktop application', 'mobile application', 'ecommerce', 'security',
    'data science & analysis','cms', 'server administration', 'Graphics & design']},
    {name:'Businnes',  subcategory:['business tips', 'Markert research',
    'Data entry', 'Legal consulting', 'Financial consulting', 'Career advice',
    'Virtual assistant', 'accounts', 'other']},
     {name:'Agriculture',subcategory:['']},
     {name:'Arts', subcategory:['']},
     {name:'Science', subcategory:['']},
     {name:'Architecture & construction', subcategory:['']},
     {name:'EDucation & Training', subcategory:['']}];
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
