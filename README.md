<!DOCTYPE html>
<html lang="fr" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monster Monster Graphisme - Services de Design</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* ------------------------------------------- */
        /* THEMES (Clair/Sombre) */
        /* ------------------------------------------- */
        :root {
            /* Couleurs Sombre (Dark Mode) */
            --bg-color: #1a1a2e;
            --text-color: #e4e4e4;
            --primary-color: #ff6b6b; /* Accent rouge */
            --secondary-color: #4a4e69; /* Gris foncé pour header/footer */
            --card-bg: #2b2e4a; /* Fond des cartes/sections */
            --border-color: #4a4e69;
        }

        [data-theme="light"] {
            /* Couleurs Clair (Light Mode) */
            --bg-color: #f4f7f6;
            --text-color: #333;
            --primary-color: #ff6b6b;
            --secondary-color: #b8c0ff;
            --card-bg: #ffffff;
            --border-color: #ccc;
        }

        /* ------------------------------------------- */
        /* STYLES GÉNÉRAUX ET LAYOUT */
        /* ------------------------------------------- */

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: Arial, sans-serif;
            margin: 0;
            transition: background-color 0.3s, color 0.3s;
        }

        header {
            background-color: var(--secondary-color);
            color: var(--text-color);
            padding: 15px 0;
            text-align: center;
        }

        header nav a {
            color: var(--text-color);
            margin: 0 15px;
            transition: color 0.3s;
        }

        header nav a:hover {
            color: var(--primary-color);
        }

        a {
            color: var(--primary-color);
            text-decoration: none;
        }

        .container {
            display: flex;
            max-width: 1200px;
            margin: 0 auto;
            padding-top: 50px;
        }

        .sidebar {
            flex: 0 0 250px;
            padding: 20px;
            background-color: var(--card-bg);
            border-right: 1px solid var(--border-color);
        }

        .sidebar ul {
            list-style: none;
            padding: 0;
        }

        .sidebar ul li {
            margin-bottom: 10px;
        }

        .content {
            flex-grow: 1;
            padding: 20px;
        }

        section {
            margin-bottom: 40px;
        }

        /* Section Histoire */
        #histoire-mission {
            background-color: var(--card-bg);
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            border-left: 5px solid var(--primary-color);
        }
        
        /* Conteneurs de Cartes (Services) */
        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            transition: transform 0.2s;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .card h3 {
            color: var(--primary-color);
        }
        
        /* --- Styles de la GALERIE d'IMAGES (Nouvelle section #projets) --- */
        
        /* Conteneur de la grille d'images (3 colonnes minimum) */
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        /* Style de chaque élément dans la galerie */
        .gallery-item {
            background-color: var(--card-bg);
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            text-align: center;
            border: 1px solid var(--border-color);
        }

        /* L'image elle-même */
        .gallery-item img {
            width: 100%;
            height: auto;
            max-height: 300px;
            object-fit: contain;
            border-radius: 4px;
            border: 1px solid var(--border-color);
        }
        
        /* Titre du projet */
        .gallery-item h2 {
            font-size: 1.1em;
            color: var(--primary-color);
            margin-top: 10px;
            margin-bottom: 0;
        }
        
        /* --- Fin Styles Galerie --- */


        .price {
            font-size: 1.5em;
            font-weight: bold;
            margin-top: 10px;
        }

        /* Formulaires */
        .form-card {
            background-color: var(--card-bg);
            padding: 20px;
            border-radius: 8px;
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        /* Ajout des IDs pour le JS */
        #order-form input,
        #order-form select,
        #order-form textarea,
        .form-card input,
        .form-card select,
        .form-card textarea {
            padding: 10px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            background-color: var(--bg-color);
            color: var(--text-color);
        }

        .form-card textarea {
            resize: vertical;
            min-height: 100px;
        }

        /* Boutons CTA */
        .cta-button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 10px;
            text-align: center;
            display: inline-block;
        }

        .cta-button:hover {
            background-color: #e65c5c;
        }

        .secondary-cta {
            background-color: var(--secondary-color);
        }

        .secondary-cta:hover {
            background-color: #3b3e5a;
        }

        /* Paiement */
        .payment {
            margin-top: 30px;
            padding: 20px;
            border: 1px dashed var(--primary-color);
            border-radius: 8px;
            text-align: center;
        }

        .payment h3 {
            color: var(--primary-color);
        }

        .payment-buttons {
            margin-top: 15px;
        }

        .paypal-button {
            background-color: #0070BA;
        }

        .paypal-button:hover {
            background-color: #004F8A;
        }


        /* Bouton de Thème */
        #theme-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            z-index: 1000;
            transition: background-color 0.3s;
        }

        footer {
            text-align: center;
            padding: 20px;
            margin-top: 40px;
            border-top: 1px solid var(--border-color);
            background-color: var(--secondary-color);
            color: var(--text-color);
        }

        /* --- STYLES ADMIN --- */
        .d-none {
            display: none !important;
        }

        #admin-panel {
            background-color: var(--card-bg);
            padding: 20px;
            border-radius: 8px;
            border: 2px solid #ff0000; /* Bordure rouge pour la visibilité */
            margin-top: 30px;
        }

        #admin-panel h2 {
            color: #ff0000;
        }

        #orders-list {
            list-style: none;
            padding: 0;
            margin-top: 15px;
        }

        #orders-list li {
            border-bottom: 1px solid var(--border-color);
            padding: 10px 0;
            margin-bottom: 10px;
        }
        
        /* Style du bouton d'accès visible */
        #admin-access {
            position: fixed;
            top: 20px;
            left: 20px;
            background-color: #ff0000 !important;
            color: white !important;
            border: 1px solid #ff6b6b !important;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            z-index: 1000;
            transition: background-color 0.3s;
            box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
        }

        #admin-access:hover {
            background-color: #cc0000 !important;
        }
        
        /* Style du bouton "Déconnexion" - Mis à jour par JS */
        #admin-access.logout {
             background-color: var(--secondary-color) !important;
             border-color: var(--text-color) !important;
             box-shadow: none !important;
             background-color: #5a5f78 !important; /* Couleur différente pour le statut déconnecté */
        }
        
        #admin-access.logout:hover {
            background-color: #3b3e5a !important; /* Lighter secondary for hover */
        }
        /* --- FIN STYLES ADMIN --- */
    </style>
</head>

<body data-theme="dark">
    <button id="theme-toggle" aria-label="Basculer le thème"><i class="fas fa-sun"></i> Thème Clair</button>

    <button id="admin-access" class="cta-button" aria-label="Accès Administration"><i class="fas fa-user-shield"></i> Admin</button>
    <header>
        <div class="logo-container">
            <h1>Monster Graphisme</h1>
        </div>
        <nav>
            <a href="#projets"><i class="fas fa-image"></i> Projets</a>
            <a href="#services"><i class="fas fa-palette"></i> Services</a>
            <a href="#order"><i class="fas fa-shopping-cart"></i> Commander</a>
            <a href="#contact"><i class="fas fa-envelope"></i> Contact</a>
        </nav>
    </header>

    <div class="container">
        <aside class="sidebar">
            <nav>
                <ul>
                    <li><a href="#histoire-mission">Mon Histoire</a></li>
                    <li><a href="#projets">Mes Projets (Portfolio)</a></li>
                    <li><a href="#services">Présentation des services</a></li>
                    <li><a href="#order">Formulaire de commande</a></li>
                    <li><a href="#contact">Informations de contact</a></li>
                    <li><a href="#admin-dashboard" class="d-none" id="admin-link"><i class="fas fa-lock"></i> Admin Dashboard</a></li>
                </ul>
            </nav>

            <div class="sidebar-contact">
                <h4>Me retrouver</h4>
                <ul>
                    <li><a href="mailto:gdelannoy67@gmail.com"><i class="fas fa-at"></i> Email : gdelannoy67@gmail.com</a></li>
                    <li><a href="https://www.tiktok.com/@sod.monster" target="_blank"><i class="fab fa-tiktok"></i> TikTok</a></li>
                    <li><a href="https://www.instagram.com/monstergraphisme" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
                    <li><span><i class="fab fa-discord"></i> Discord : deadshot_kill</span></li>
                </ul>
            </div>
        </aside>

        <main class="content">
            <section id="histoire-mission">
                <h2><i class="fas fa-rocket"></i> Mon Histoire et Ma Mission</h2>
                <p>Bienvenue ! Je suis un jeune adulte passionné et entièrement dévoué à l'art du graphisme. Ce qui a commencé il y a plusieurs années comme un simple hobby sur mon écran est rapidement devenu une véritable vocation. Je ne fais pas que concevoir des visuels : je donne vie aux idées, aux marques, et aux rêves.</p>
                <p>Aujourd'hui, je souhaite professionnaliser cette passion pour vous accompagner dans tous vos projets. Que vous ayez besoin d'un logo mémorable, d'une affiche percutante ou d'un montage vidéo dynamique, mon objectif est de vous fournir des designs de haute qualité qui font mouche.</p>
                <p>Ma promesse est simple : l'excellence, à des prix accessibles, et surtout, la rapidité. Je sais que dans le monde actuel, le temps est une ressource précieuse. C'est pourquoi je m'engage à vous offrir des délais de remise ultra-courts, sans jamais compromettre la qualité du rendu final.</p>
                <p>Faites-moi confiance pour transformer vos idées en visuels impactants, rapidement et efficacement !</p>
            </section>
            
            <hr>
            
            

            <section id="projets">
    <h2><i class="fas fa-images"></i> Mon Portfolio Complet</h2>
    <p class="section-intro">Découvrez tous mes travaux de graphisme et mon style unique sur une page dédiée. Cliquez ci-dessous pour explorer l'intégralité de mes réalisations.</p>
    
    <div style="text-align: center; margin-top: 30px;">
        <a href="portfolio.html" class="cta-button" style="padding: 15px 30px; font-size: 1.1em;">
            <i class="fas fa-arrow-right"></i> Voir TOUS mes projets (Portfolio)
        </a>
    </div>
    
    <p style="text-align: center; margin-top: 20px;">
        <small>Vous avez déjà vu quelques exemples plus haut dans la section "Mon Histoire".</small>
    </p>
</section>
            <hr>
            <section id="order">
                <h2><i class="fas fa-paper-plane"></i> Commander un service</h2>
                <form class="form-card" id="order-form">
                    <p class="form-description">Remplissez ce formulaire pour lancer votre commande. Je vous recontacterai rapidement.</p>
                    <input type="text" placeholder="Votre nom" required id="order-name">
                    <input type="email" placeholder="Votre email" required id="order-email">
                    <select required id="order-service">
                        <option value="">Choisissez un service</option>
                        <option value="logo">Logo personnalisé — 2 €</option>
                        <option value="fond">Fond d’écran — 3 €</option>
                        <option value="flyer">Flyer / Affiche — 5 €</option>
                        <option value="video">Montage vidéo — 7 €</option>
                        <option value="pack">Pack complet — 10 €</option>
                    </select>
                    <textarea placeholder="Détails de votre demande (couleurs, style, références...)" required id="order-details"></textarea>
                    <button type="submit" class="cta-button">Envoyer la commande</button>
                </form>

                <div class="payment">
                    <h3>Paiement sécurisé <i class="fab fa-cc-paypal"></i></h3>
                    <p>Le paiement se fait via PayPal, un système sécurisé. Finalisez votre commande et choisissez cette méthode pour régler.</p>
                    <div class="payment-buttons">
                        <a href="https://www.paypal.me/GabrielDelannoy748" target="_blank" class="pay-button paypal-button cta-button"><i class="fab fa-paypal"></i> Payer par PayPal</a>
                    </div>
                </div>
            </section>
            <hr>
            <section id="contact">
                <h2><i class="fas fa-comment-dots"></i> Me contacter</h2>
                <div class="form-card">
                    <p>
                        Pour toute question, demande de devis ou pour passer une commande, veuillez me contacter directement via l'un des moyens ci-dessous.
                        Je m'engage à vous répondre dans les plus brefs délais.
                    </p>
                    
                    <p style="font-size: 1.1em; line-height: 1.8;">
                        <i class="fas fa-at"></i> <span style="font-weight: bold;">Email :</span> <a href="mailto:gdelannoy67@gmail.com" style="font-weight: bold;">gdelannoy67@gmail.com</a><br>
                        <i class="fab fa-discord"></i> <span style="font-weight: bold;">Discord :</span> <span style="font-weight: bold;">deadshot_kill</span><br>
                        <i class="fab fa-tiktok"></i> <span style="font-weight: bold;">TikTok :</span> <a href="https://www.tiktok.com/@sod.monster" target="_blank">@sod.monster</a><br>
                        <i class="fab fa-instagram"></i> <span style="font-weight: bold;">Instagram :</span> <a href="https://www.instagram.com/monstergraphisme" target="_blank">@monstergraphisme</a>
                    </p>
                </div>
            </section>

            <section id="admin-dashboard" class="d-none">
                <hr>
                <div id="admin-panel">
                    <h2><i class="fas fa-tools"></i> Tableau de Bord Admin</h2>
                    <p>Liste des commandes à traiter. Les commandes récentes apparaissent ici automatiquement. Cliquez sur **"Marquer comme Traité et supprimer"** pour valider et retirer la commande.</p>

                    <ul id="orders-list">
                        </ul>
                    <p id="no-orders-msg" style="font-style: italic; color: var(--text-color);">Aucune commande en attente pour le moment.</p>
                </div>
            </section>
            </main>
    </div>

    <footer>
        <div class="footer-links">
            <a href="https://www.paypal.me/GabrielDelannoy748" target="_blank" class="footer-paypal-link"><i class="fab fa-paypal"></i> Payer via PayPal</a>
        </div>
        <p>© 2025 Monster Monster Graphisme — Tous droits réservés</p>
    </footer>

    <script>
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const adminAccessButton = document.getElementById('admin-access');
        const adminDashboard = document.getElementById('admin-dashboard');
        const adminLink = document.getElementById('admin-link');
        const orderForm = document.getElementById('order-form');
        const ordersList = document.getElementById('orders-list');
        const noOrdersMsg = document.getElementById('no-orders-msg');
        
        // MOT DE PASSE : Gabrield1008
        const ADMIN_PASSWORD = "Gabrield1008";

        // Map des prix pour faciliter l'ajout du prix dans l'objet commande
        const SERVICE_PRICES = {
            "Logo personnalisé — 2 €": "2 €",
            "Fond d’écran — 3 €": "3 €",
            "Flyer / Affiche — 5 €": "5 €",
            "Montage vidéo — 7 €": "7 €",
            "Pack complet — 10 €": "10 €"
        };

        // Fonction pour mettre à jour l'icône et le texte du bouton du thème
        function updateThemeToggle(currentTheme) {
            if (currentTheme === 'dark') {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i> Thème Clair';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i> Thème Sombre';
            }
        }

        // Initialisation du thème au chargement de la page
        const savedTheme = localStorage.getItem('theme') || 'dark'; // Thème par défaut
        body.setAttribute('data-theme', savedTheme);
        updateThemeToggle(savedTheme);

        themeToggle.addEventListener('click', () => {
            let currentTheme = body.getAttribute('data-theme');
            let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme); // Sauvegarde le choix de l'utilisateur
            updateThemeToggle(newTheme);
        });

        // --- GESTION DES COMMANDES (STOCKAGE TEMPORAIRE) ---
        let orders = JSON.parse(localStorage.getItem('tempOrders')) || [];

        // Sauvegarde les commandes dans le localStorage
        function saveOrders() {
            localStorage.setItem('tempOrders', JSON.stringify(orders));
        }

        // Fonction pour activer l'état Admin
        function activateAdmin() {
            localStorage.setItem('isAdminLoggedIn', 'true'); 
            adminDashboard.classList.remove('d-none');
            adminLink.classList.remove('d-none');
            updateAdminAccessButton(true);
            updateOrdersDisplay(); 
            window.location.hash = 'admin-dashboard'; 
        }
        
        // Fonction de déconnexion
        function adminLogout() {
            localStorage.removeItem('isAdminLoggedIn');
            adminDashboard.classList.add('d-none');
            adminLink.classList.add('d-none');
            updateAdminAccessButton(false);
            if (window.location.hash === '#admin-dashboard') {
                history.replaceState(null, null, ' '); // Nettoie l'URL
            }
            alert("Déconnexion réussie du Tableau de Bord Admin.");
        }
        
        // Fonction pour mettre à jour le bouton d'accès selon le statut
        function updateAdminAccessButton(isLoggedIn) {
            if (isLoggedIn) {
                adminAccessButton.innerHTML = '<i class="fas fa-sign-out-alt"></i> Déconnexion';
                adminAccessButton.classList.add('logout'); 
            } else {
                adminAccessButton.innerHTML = '<i class="fas fa-user-shield"></i> Admin';
                adminAccessButton.classList.remove('logout');
            }
        }

        // FONCTION CLÉ : Marque la commande comme traitée ET la supprime immédiatement
        function markAsProcessed(index) {
            if (index >= 0 && index < orders.length) {
                const processedOrder = orders.splice(index, 1)[0]; // Suppression du tableau
                saveOrders(); // Sauvegarde du nouveau tableau
                updateOrdersDisplay(); // Mise à jour de l'affichage (suppression visuelle)
                alert(`La commande de ${processedOrder.name} a été marquée comme Traitée et Supprimée du tableau.`);
            }
        }

        // Fonction pour afficher une seule commande
        function renderOrder(order, index) {
            const listItem = document.createElement('li');
            let statusColor = 'yellow';
            // Le bouton appelle la fonction de suppression
            let buttonHtml = `<button class="cta-button secondary-cta process-btn" data-index="${index}" style="margin-left: 10px;">Marquer comme Traité et supprimer</button>`;
            
            listItem.innerHTML = `
                <strong>Commande de ${order.service}</strong> (Prix: <span style="color: ${order.price === 'N/A' ? 'red' : 'lightgreen'};">${order.price}</span>)
                <br>Client: ${order.name} (<a href="mailto:${order.email}">${order.email}</a>)
                <br>Détails: "${order.details.substring(0, 100)}..."
                <br>Statut: <span style="color: ${statusColor}; font-weight: bold;">Nouveau - À traiter</span>
                <br><small style="color: #ccc;">Reçu le: ${order.timestamp}</small>
                ${buttonHtml}
            `;
            ordersList.prepend(listItem); 
        }

        // Fonction pour mettre à jour l'affichage de la liste des commandes
        function updateOrdersDisplay() {
            ordersList.innerHTML = ''; 
            
            orders = orders.filter(order => order.status !== 'Traité');
            saveOrders(); 
            
            if (orders.length === 0) {
                noOrdersMsg.style.display = 'block';
            } else {
                noOrdersMsg.style.display = 'none';
                
                for (let i = orders.length - 1; i >= 0; i--) {
                    renderOrder(orders[i], i);
                }
            }
            
            // Ajout des écouteurs d'événements pour les boutons de traitement
            document.querySelectorAll('.process-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const orderIndex = parseInt(this.getAttribute('data-index'));
                    markAsProcessed(orderIndex);
                });
            });
        }

        // Charger et afficher les commandes stockées au démarrage
        updateOrdersDisplay();
        
        // Gestion de l'envoi du formulaire de commande
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            // Récupération des données du formulaire
            const name = document.getElementById('order-name').value;
            const email = document.getElementById('order-email').value;
            const serviceElement = document.getElementById('order-service');
            const serviceFull = serviceElement.options[serviceElement.selectedIndex].text;
            const details = document.getElementById('order-details').value;
            
            // NOUVEAU : Récupération du prix à partir du service sélectionné
            const price = SERVICE_PRICES[serviceFull];

            // Création de l'objet commande
            const newOrder = {
                name: name,
                email: email,
                service: serviceFull.split("—")[0].trim(), // Nettoyage pour ne garder que le nom
                price: price || 'N/A', // Ajout du prix
                details: details,
                timestamp: new Date().toLocaleString('fr-FR'),
                status: 'Nouveau' 
            };

            // Vérification basique pour un service valide
            if (serviceElement.value === "") {
                alert("Veuillez choisir un service.");
                return;
            }

            // Ajout à la liste et mise à jour du stockage local
            orders.push(newOrder);
            saveOrders();
            
            // Mise à jour immédiate du tableau de bord
            updateOrdersDisplay();

            alert(`Votre commande pour "${newOrder.service}" (Prix: ${newOrder.price}) a été envoyée ! Je vous recontacterai rapidement.`);
            orderForm.reset(); 
        });

        // --- GESTION DE LA CONNEXION/DÉCONNEXION ADMIN ---
        
        // 1. État initial au chargement de la page
        const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
        updateAdminAccessButton(isLoggedIn); 

        if (isLoggedIn) {
            adminDashboard.classList.remove('d-none');
            adminLink.classList.remove('d-none');
        }

        // 2. Gestion de l'accès Admin au clic
        adminAccessButton.addEventListener('click', () => {
            // Vérifie l'état actuel juste avant de cliquer
            const currentlyLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
            
            if (currentlyLoggedIn) {
                // Si déjà connecté, le clic déconnecte
                adminLogout();
            } else {
                // Sinon, demande le mot de passe pour la connexion
                const password = prompt("Entrez le mot de passe admin :");
                if (password === ADMIN_PASSWORD) {
                    alert("Accès accordé ! Le Tableau de Bord Admin est maintenant visible.");
                    activateAdmin(); // Met à jour l'état et l'affichage
                } else if (password !== null) {
                    alert("Mot de passe incorrect.");
                }
            }
        });
    </script>
</body>
</html>
