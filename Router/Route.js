export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.authorize = authorize;
  }
}

/*
constructor(url, title, pathHtml, authorize, pathJS = "")
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs déconnectés
["employe"] -> Réserver aux utilisateurs avec le rôle employe 
["veto"] -> Réserver aux utilisateurs avec le rôle veto
["admin"] -> Réserver aux utilisateurs avec le rôle admin 
["admin", "employe"] -> Réserver aux utilisateurs avec le rôle employe OU admin
["admin", "employe", "veto"] -> Réserver aux utilisateurs connectés

*/