export const projectData = [
    {   
        "id" : 1,
        "titleProject": "Création application lightning : Récupération d'enregistrements supprimés",
        "textProject": "<p> Salesforce n'a pas implémenté dans sa nouvelle interface Lightning experience la corbeille.</p><p>Les utilisateurs sont obligés de repartir sur Salesforce classic pour avoir accès à cette fonctionnalité.</p><p>C'est une fonctionnalité qui se retrouve très intéressante lorsque l'on fait des fusions ou du nettoyage de données</p>",
        "tasks" : "<ul><li> Création de plusieurs composants lightning</li><li>Mises-en place des différentes requêtes pour récupérer les enregistrements supprimés</li> <li> Déploiement de l'application sur l'AppExchange</li> </ul><br/><p>Vous pouvez retrouver ce composant ici : </p><br/>AppExchange : Recycle Bin <br/><a ><p>https://appexchange.salesforce.com/listingDetail?listingId=a0N3000000Dq7VmEAJ</p><a/>",
        "toolsUsed" : "Salesforce / Lightning Component / Apex",
        "timeProject": "1 mois",
        "statusProject" : "Terminé",
        "pathImageProject" : "/images/textRecycleBin.png"
    },
    {  
        "id" : 2, 
        "titleProject": "Création d’une interface d’édition de devis dans Salesforce",
        "textProject": "<p> Pour l’édition de ses devis clients, IEC dispose d’un outil interne appelé Deviseur</p>.<p> Avec l’intégration du CRM, il était plus avantageux de mettre en place un outil de création de devis depuis Salesforce.</p>",
        "tasks" : "<ul><li> Interfaçage des devis entre Salesforce et un outil interne (SQL Server)</li><li> Interfaçage des produits installés et sérialisés chez les clients entre Salesforce et Navision (SQL Server) </li> <li> Rédaction des spécifications techniques et fonctionnelles </li>      <li> Interfaçage des commandes de ventes et d’achats entre Navision et MySQL afin d’avoir un suivi complet des transactions</li>        <li> Paramétrage de l’environnement Salesforce : création de champs, d’objets, de données utiles pour le développement, de règles de validation, de processus pour encadrer l’interface de l’utilisateur</li>         <li> Maintenance et évolution des différents outils</li>          </ul>",
        "toolsUsed" : "Salesforce / Talend / Apex / Visualforce / JQuery / Word / Excel / LucidChart",
        "timeProject": "6 mois",
        "statusProject" : "Terminé",
        "pathImageProject" : "/images/logoSalesforce.png"
    },
    {   
        "id" : 3,
        "titleProject": "Analyse d’affaires",
        "textProject": "<p>Pour savoir l’évolution de son chiffre d’affaires, IEC souhaite avoir un outil qui permet de savoir quelle est la marge réalisée sur un projet, l’avancement de la facturation…, ceci en mettant en entrée le numéro d’une commande de vente.</p>",
        "tasks" : "<ul> <li>Interfaçage des données de Navision vers Salesforce </li><li>Contrôle de données</li><li>Design</li><li>Rédaction des spécifications techniques </li></ul>",
        "toolsUsed" : "Salesforce / Talend / Apex / Visualforce / AngularJS / CSS",
        "timeProject": "6 mois",
        "statusProject" : "Terminé",
        "pathImageProject" : "/images/logoSalesforce.png"
    },
    {   
        "id" : 4,
        "titleProject": "Création d’un outil personnalisé de création de devis pour analyse d’affaires",
        "textProject": "<p>Pour savoir l’évolution de son chiffre d’affaires, IEC souhaite avoir un outil qui permet de savoir quelle est la marge réalisée sur un projet, l’avancement de la facturation…, ceci en mettant en entrée le numéro d’une commande de vente.</p>",
        "tasks" : "<ul><li> Importation et interprétation des fichiers depuis Oracle</li> <li>Interfaçage des comptes, des devis, des commandes et les tickets créés d’Oracle vers Salesforce</li> <li>Création d’un outil permettant de rattacher un devis à une opportunité</li></ul>",
        "toolsUsed" : "Salesforce / Talend / Apex / Visualforce",
        "timeProject": "2 mois",
        "statusProject" : "Terminé",
        "pathImageProject" : "/images/logoSalesforce.png"
    },
    {   
        "id" : 5,
        "titleProject": "Gestion du centre d’appels",
        "textProject": "<p> Afin de mieux gérer le travail des téléopérateurs, l’objectif était la mise en place de solutions personnalisées dans Salesforce.</p>",
        "tasks" : "<ul><li>  Importation des fichiers CSV dans Salesforce</li> <li> Mise en place d’un système de partage de tâches en fonction des téléopérateurs</li>        <li> Mise en place d’un outil de création d’échéanciers (pour la gestion des règlements et la visibilité sur les dates de devis)</li></ul>",
        "toolsUsed" : "Salesforce / Talend / Apex / Visualforce",
        "timeProject": "3 mois",
        "statusProject" : "Terminé",
        "pathImageProject" : "/images/logoSalesforce.png"
    },
    {   
        "id" : 6,
        "titleProject": "Création de modules personnalisés dans Salesforce",
        "textProject": "<p>A cause d’un défaut d’espace et surtout dans le but de mieux gérer ses contrats, il a fallu mettre en place des solutions personnalisées pour un meilleur visuel dans Salesforce.</p>",
        "tasks" : "<ul><li> Migration de l’environnement Access vers Salesforce</li>        <li>Création d’interfaces ergonomiques pour l’utilisateur</li>        <li>Réalisation d’interfaces entre les contrats et les consommations des clients dans Salesforce</li>        <li>Exportation au format PDF des factures créées dans Salesforce</li>        <li>Mise en place d’un outil permettant le téléchargement et l’envoi par email de devis</li></ul>",
        "toolsUsed" : "Salesforce / Talend / Apex ",
        "timeProject": "3 mois",
        "statusProject" : "Terminé",
        "pathImageProject" : "/images/logoSalesforce.png"
    },
    {   
        "id" : 7,
        "titleProject": "Création d’un comparateur de prix intégré à Salesforce",
        "textProject": "<p>Permettre à Intelware d’être plus compétitif sur le marché en ayant une visibilité sur les prix de la concurrence, les prix récents d’achat et de vente, pour un produit donné.</p>",
        "tasks" : "<ul><li>Interfaçage des commandes et du catalogue de produits entre Salesforce et SQL Server : récupération des commandes dans Navision et importation dans Salesforce</li></ul>",
        "toolsUsed" : "Salesforce / Talend / Apex",
        "timeProject": "2 mois",
        "statusProject" : "Terminé",
        "pathImageProject" : "/images/logoSalesforce.png"
    },
    {   
        "id" : 8,
        "titleProject": "Datananas",
        "textProject": "<p>Développement d’une API Rest (service web) en apex afin de créer des comptes et des contacts, avec une solution de dédoublonnage dans Salesforce depuis une interface web externe et permettre une synchronisation régulière des informations.</p>",
        "tasks" : "<ul><li>Programmation du service web</li><li> Paramètrage de l'environnement afin d'être appelé a distance </li></ul>",
        "toolsUsed" : "Salesforce / Apex",
        "timeProject": "2 semaines",
        "statusProject" : "Terminé",
        "pathImageProject" : "/images/logoDatananas.png"
    },
    {   
        "id" : 9,
        "titleProject": "JL Consulting – Projet interne",
        "textProject": "<p>Réalisation d’un outil avec le framework Lightning Component afin d’avoir une meilleure visibilité lors de la création de comptes dans Salesforce.</p>",
        "tasks" : "<ul><li>Importation des comptes dans ElasticSearch</li><li> Développement d'un formulaire pour la normalisation d'adresses postales </li></ul>",
        "toolsUsed" : "Apex / Lightning Component / ElasticSearch",
        "timeProject": "1 mois",
        "statusProject" : "En Cours",
        "pathImageProject" : "/images/logoJLC.png"
    }
];
