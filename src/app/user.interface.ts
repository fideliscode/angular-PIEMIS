export class User{
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
    	industryType: {name:string;subcategory:string[];};
    	address:string;
    };

   
}