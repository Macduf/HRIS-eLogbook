import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../providers/user";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';


/**
 * Generated class for the DomainConditionsExposed page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-domain-conditions-exposed',
  templateUrl: 'domain-conditions-exposed.html',
})
export class DomainConditionsExposed {	

public currentUser : any;
public eLogrgUnit : any;
public organisationUnits: any;
public dataElements: any;

	headers: Headers;
    options: RequestOptions; 

 constructor(public navCtrl: NavController, public navParams: NavParams, public user: User,
 private http:Http ) {
this.headers = new Headers({ 'Content-Type': 'application/json'});
	 
 this.headers.append('Authorization', 'Basic ' +
      btoa('admin:district'));	 
this.options = new RequestOptions({ headers: this.headers });
this.organisationUnits = [];	
this.dataElements = []; 
  }
 

  
  ngOnInit() { 
  let fields = "fields=[:all],userCredentials[userRoles[name,dataSets[id,name],programs[id,name]]";
 let  url = "https://elogbook.dhis.dhmis.org/staging/api/dataElements?fields=:all&filter=dataElementGroups.id:in:[yCyaYnRMKZd]";
 
 this.getUserDataFromServer(url)
// .then(result =>console.log(result))  
.then(result => this.dataElements =result.dataElements)  
.catch(error => console.log(error));	
    }; 
 
  getUserDataFromServer(url: string): Promise<any> {
  return this.http
      .get(url, this.options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }  
  
  
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
	
	
	    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
	

  
}
