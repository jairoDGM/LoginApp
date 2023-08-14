import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse  } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  constructor(private http: HttpClient) {}
  user: string = 'Hola desde TypeScript';
  pass: string = 'Hola desde TypeScript';


  actualizarDato(user: string, pass: string) {
    this.user = user;
    this.pass = pass;
    console.log("mi usuario es: " + this.user + " mi contraseña es: " + this.pass);

    // Realizar una solicitud POST
    const body = { Password: this.pass };
    this.http.post(`https://16839649-e990-48ff-bd7e-4fa98113d6b2.mock.pstmn.io/userId/${this.user}/login`, body, { observe: 'response' })
    .subscribe((respuesta: HttpResponse<any>) => {
      console.log('Código de estado:', respuesta.status);
      console.log('Cuerpo de la respuesta:', respuesta.body);
    });
  }


}
