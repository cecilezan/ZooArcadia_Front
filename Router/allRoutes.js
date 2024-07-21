import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/habitats", "Les Habitats", "/pages/habitat.html", [],"/js/habitat.js"),
    new Route("/signin", "Connexion","/pages/auth/signin.html",["disconnected"],"/js/auth/signin.js"),
    new Route("/account", "Mon compte","/pages/auth/account.html",["admin"],"/js/auth/signin.js"),
    new Route("/CrrVeto", "Compte Rendu Vétérinaires","/pages/CRR/allCRR.html",["admin", "employe", "veto"]),
    new Route("/nouveauCRR", "Nouveau compte rendu de visites","/pages/CRR/newCRR.html",["admin","veto"]),
    new Route("/maintenance", "Partie en maintenance","/pages/maintenance.html",[]),
    new Route("/admin", "Interface Administrateur","/pages/auth/interfaceAdmin.html",["admin"]),
    new Route("/registration", "Nouvel Utilisateur","/pages/auth/signup.html",["admin"],"/js/auth/signup.js"),
    new Route("/contact", "Nous contacter","/pages/contact.html",[]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";

