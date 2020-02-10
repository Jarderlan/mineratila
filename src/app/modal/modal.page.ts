import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Platform, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';


@Component({
  //app-modal
  selector: 'modal-page',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit{

  modalTitle: string;
  modalId: number;

  public orcamento = {
    nome: "", //"Jardeson Erlan",
    email: "", //"profjarderlan@gmail.com",
    empresa: "", //"Mineradora Atalaia",
    cpfcnpj: "", //"12345678909",
    fone: "", //"85 99690-2867",
    descricao: "" //"Teste Passagem de Mensagem para o Email Composer"
  };

  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private modalController: ModalController,
    private navParams: NavParams,
    private emailComposer: EmailComposer,
    private myplatform: Platform,
    private alertController: AlertController
    ) {
      this.fGroup = this.fBuilder.group({
        'nome': [this.orcamento.nome, Validators.compose([
          Validators.required,
          Validators.minLength(3)

        ])],
        'email': [this.orcamento.email, Validators.compose([
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        
        ])],
        'empresa': [this.orcamento.empresa, Validators.compose([
          Validators.required,
        
        ])],
        'cpfcnpj':[this.orcamento.cpfcnpj, Validators.compose([
          Validators.required,
        
        ])],
        'fone': [this.orcamento.fone, Validators.compose([
          Validators.required,
        
        ])],
        'descricao': [this.orcamento.descricao, Validators.compose([
          Validators.required,
        
        ])]
      });
    }

    validacpf(strCPF){
      var Soma;
      var Resto;
      Soma = 0;
      var i;

    if (strCPF.length != 11 || strCPF == "00000000000" ||
     strCPF == "11111111111" || 
     strCPF == "22222222222" || 
     strCPF == "33333333333" || 
     strCPF == "44444444444" || 
     strCPF == "55555555555" || 
     strCPF == "66666666666" || 
     strCPF == "77777777777" || 
     strCPF == "88888888888" || 
     strCPF == "99999999999") return false;
       
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
     
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
     
    Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
     
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
      return true;
  }

  ngOnInit(){
    console.table(this.navParams);
    this.modalId = this.navParams.data.paramId;
    this.modalTitle = this.navParams.data.paramTitle;
  }   
  
  submitForm(){

    if(this.validacpf(this.fGroup.value['cpfcnpj'])){
      //alert('CPF Valido');

      let isgmail =
      "Nome: "+this.fGroup.value['nome']+
      "    ||    Email: "+this.fGroup.value['email']+
      "    ||    Telefone: "+this.fGroup.value['fone']+
      "    ||    Empresa: "+this.fGroup.value['empresa']+
      "    ||    CPF/CNPJ: "+this.fGroup.value['cpfcnpj']+
      "    ||    Descrição: "+this.fGroup.value['descricao'];

      let nogmail = 
      "<html>Nome: "+this.fGroup.value['nome']+
      "<br>Email: "+this.fGroup.value['email']+
      "<br>Telefone: "+this.fGroup.value['fone']+
      "<br>Empresa: "+this.fGroup.value['empresa']+
      "<br>CPF/CNPJ: "+this.fGroup.value['cpfcnpj']+
      "<br><br>Descrição: "+this.fGroup.value['descricao']+"</html>";
      
      let email = 
      {
        to: 'sancaoadvocacia@gmail.com',
        bcc: 'profjarderlan@gmail.com',
        subject: 'Orçamento - '+this.fGroup.value['nome'],
        body: isgmail,
        //body: isgmail,
      };

      if(this.myplatform.is("ios")){
        this.emailComposer.open({
          //app:'gmail',
          to: 'sancaoadvocacia@gmail.com',
          bcc: 'profjarderlan@gmail.com',
          subject: 'Orçamento - '+this.fGroup.value['nome'],
          body: nogmail,
          isHtml: true
        });
      }
      if(this.myplatform.is("android")){
        this.emailComposer.open(email)
      }

    }else{
      //alert('CPF Invalido');
      this.cpfinvalido();
    }

    //this.emailComposer.open(email);

    //this.emailComposer.addAlias('Gmail','com.google.android.gm');

    //this.emailComposer.isAvailable('');
  }

  async cpfinvalido(){
    const alert = await this.alertController.create({
      message: 'CPF Invalido!',
      buttons: [{
        text: 'OK',
        cssClass: 'success'
      }]
    });

    await alert.present();
  }

  async closeModal(){
    const onCloseData: string = "WarppedUp!";
    await this.modalController.dismiss(onCloseData);
  }
}
