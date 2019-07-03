export class Internship{
      _id:string;
      internshipfile:string;
      internshipPosition: string;
      description: string;
      qualifications: string;
      subcategory: string;
      tags:[string];
      interns:[{
                  intern:string;
                  status:string;
              }];
      professional:{
			    _id:string;
			    fname: string;
			    lname: string;
			    email: string;
			    password: string;
			    phone: string;
			    role: string;
			    company:{
					    	companyName:string;
					        noEmployees:string;
					    	logo:string;
					    	website:string;
					    	country:string;
					    	industryType: {
					    		name:string;
					    		subcategory:string[];};
					    	address:string;
                        };

}
}