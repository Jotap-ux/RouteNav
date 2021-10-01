import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
//importamos clase Usuario creada en 'model'
import{ Usuario } from '../model/usuario.interfaces';
//para poder enviar mensajes(en este caso de que el usuario o pass esta incorrecta)
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authServ: AuthenticationService,
    private toastCtrl: ToastController
    ) { }

  usuario : Usuario={
    nombre:'',
    password:''
  }
  ngOnInit() {
  }

  loginUser(){
    console.log(this.usuario);
    if(this.usuario.nombre=="tito" && this.usuario.password=="123"){
      this.authServ.login();
    }else{
      this.toastCtrl.create({
        message:"Usuario o pass incorrecta",
        duration: 3000,
        position:"middle"
      }).then((toast)=>{
        toast.present();
      })
    }
    
  }

}
