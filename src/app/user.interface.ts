export class User{
    _id:string;
    fname: string;
    lname: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    internshipName:string;
      bio:string;
        image: string;
        skills: string;
        location:string;
        Institution: string;
    company:{
    	companyName:string;
        noEmployees:string;
    	logo:string;
    	website:string;
    	region:string;
    	industryType: {name:string;subcategory:string[];};
    	address:string;
    };


}
