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

// --- GESTION DU THÈME ---
function updateThemeToggle(currentTheme) {
    if (currentTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Thème Clair';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Thème Sombre';
    }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateThemeToggle(savedTheme);

themeToggle.addEventListener('click', () => {
    let currentTheme = body.getAttribute('data-theme');
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
});

// --- GESTION DES COMMANDES (STOCKAGE TEMPORAIRE) ---
let orders = JSON.parse(localStorage.getItem('tempOrders')) || [];

function saveOrders() {
    localStorage.setItem('tempOrders', JSON.stringify(orders));
}

function activateAdmin() {
    localStorage.setItem('isAdminLoggedIn', 'true'); 
    adminDashboard.classList.remove('d-none');
    adminLink.classList.remove('d-none');
    updateAdminAccessButton(true);
    updateOrdersDisplay(); 
    if (document.getElementById('admin-panel')) {
        document.getElementById('admin-panel').scrollIntoView({ behavior: 'smooth' });
    }
}
 
function adminLogout() {
    localStorage.removeItem('isAdminLoggedIn');
    adminDashboard.classList.add('d-none');
    adminLink.classList.add('d-none');
    updateAdminAccessButton(false);
    alert("Déconnexion réussie du Tableau de Bord Admin.");
}
 
function updateAdminAccessButton(isLoggedIn) {
    if (isLoggedIn) {
        adminAccessButton.innerHTML = '<i class="fas fa-sign-out-alt"></i> Déconnexion';
        adminAccessButton.classList.add('logout'); 
    } else {
        adminAccessButton.innerHTML = '<i class="fas fa-user-shield"></i> Admin';
        adminAccessButton.classList.remove('logout');
    }
}

function markAsProcessed(index) {
    if (index >= 0 && index < orders.length) {
        const processedOrder = orders.splice(index, 1)[0];
        saveOrders();
        updateOrdersDisplay();
        alert(`La commande de ${processedOrder.name} a été marquée comme Traitée et Supprimée du tableau.`);
    }
}

function renderOrder(order, index) {
    const listItem = document.createElement('li');
    let statusColor = 'yellow';
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

function updateOrdersDisplay() {
    ordersList.innerHTML = ''; 
    saveOrders(); 
    
    if (orders.length === 0) {
        noOrdersMsg.style.display = 'block';
    } else {
        noOrdersMsg.style.display = 'none';
        
        for (let i = orders.length - 1; i >= 0; i--) {
            renderOrder(orders[i], i);
        }
    }
    
    document.querySelectorAll('.process-btn').forEach(button => {
        button.addEventListener('click', function() {
            const orderIndex = parseInt(this.getAttribute('data-index'));
            markAsProcessed(orderIndex);
        });
    });
}

updateOrdersDisplay();
 
orderForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('order-name').value;
    const email = document.getElementById('order-email').value;
    const serviceElement = document.getElementById('order-service');
    const serviceFull = serviceElement.options[serviceElement.selectedIndex].text;
    const details = document.getElementById('order-details').value;
    
    const price = SERVICE_PRICES[serviceFull.trim()];

    const newOrder = {
        name: name,
        email: email,
        service: serviceFull.split("—")[0].trim(),
        price: price || 'N/A',
        details: details,
        timestamp: new Date().toLocaleString('fr-FR'),
        status: 'Nouveau' 
    };

    if (serviceElement.value === "") {
        alert("Veuillez choisir un service.");
        return;
    }

    orders.push(newOrder);
    saveOrders();
    
    updateOrdersDisplay();

    alert(`Votre commande pour "${newOrder.service}" (Prix: ${newOrder.price}) a été envoyée ! Je vous recontacterai rapidement.`);
    orderForm.reset(); 
    document.querySelector('.payment').scrollIntoView({ behavior: 'smooth' });
});

// --- GESTION DE LA CONNEXION/DÉCONNEXION ADMIN ---
 
const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
updateAdminAccessButton(isLoggedIn); 

if (isLoggedIn) {
    adminDashboard.classList.remove('d-none');
    adminLink.classList.remove('d-none');
}

adminAccessButton.addEventListener('click', () => {
    const currentlyLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    
    if (currentlyLoggedIn) {
        adminLogout();
    } else {
        const password = prompt("Entrez le mot de passe admin :");
        if (password === ADMIN_PASSWORD) {
            alert("Accès accordé ! Le Tableau de Bord Admin est maintenant visible.");
            activateAdmin();
        } else if (password !== null) {
            alert("Mot de passe incorrect.");
        }
    }
});