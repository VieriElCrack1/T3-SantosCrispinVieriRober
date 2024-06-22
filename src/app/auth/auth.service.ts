import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario : String, password : String) {
    if(usuario != "santos" && password != "12345"){
      sessionStorage.clear();
    }else {
      sessionStorage.setItem("isLogged", 'true');
    }
    
  }

  logout() {
    sessionStorage.clear();
  }

  isLogged() : Boolean {
    return !!sessionStorage.getItem("isLogged");
  }
}
