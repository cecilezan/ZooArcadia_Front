import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/habitats", "Les Habitats", "/pages/habitat.html", []),
    new Route("/signin", "Connexion","/pages/auth/signin.html",["disconnected"],"/js/auth/signin.js"),
    new Route("/account", "Mon compte","/pages/auth/account.html",["admin", "employe"]),
    new Route("/CrrVeto", "Compte Rendu Vétérinaires","/pages/CRR/allCRR.html",["admin", "employe", "veto"]),
    new Route("/nouveauCRR", "Nouveau compte rendu de visites","/pages/CRR/newCRR.html",["veto"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";

