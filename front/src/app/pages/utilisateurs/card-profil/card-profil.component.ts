import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserCardsComponent } from '../utilisateur/Card-Profil.component';

@Component({
  selector: 'app-carte',
  templateUrl: './card-profil.component.html',
  styleUrls: ['./card-profil.component.scss']
})
export class CardProfilComponent implements OnInit {
 
  user: any = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }


  userForm: FormGroup = this.formBuilder.group({
    nom: ['', Validators.required, Validators.minLength(2)],
    prenom: ['', Validators.required, Validators.minLength(2)],
    email: ['', Validators.required, Validators.email],
    telephone: ['', Validators.required, Validators.minLength(10)],
    entreprise: ['', Validators.required, Validators.minLength(2)]
  });

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  public get form() {
    return this.userForm.controls;
  }

  ngOnInit(): void {
  }

  /**
   * Ajoute un utilisateur à la liste
   */
  private addUser(): void {
    this.user.push(this.userForm.value);
    this.userForm.reset();
    this.submitted = false;
  }

  /**
   * Gère l'envoi du formulaire
   */
  public onSubmit(): void {
    this.submitted = true;
    if (this.userForm.valid) {
      this.addUser();
    } else {
      console.log("Le formulaire non valide")
    }
  }

}







