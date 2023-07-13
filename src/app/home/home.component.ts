import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm = '';

  users = [
    { name: 'Usuário 1', photo: 'caminho/para/foto1.jpg' },
    { name: 'Usuário 2', photo: 'caminho/para/foto2.jpg' },
    { name: 'Usuário 3', photo: 'caminho/para/foto3.jpg' }
  ];

  currentUser = { name: 'Usuário Logado', photo: 'caminho/para/foto-logado.jpg' };

  startChat(user: any) {
    console.log('Iniciando chat com', user.name);
  }
}
