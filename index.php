<?php
/**
 * Index.php - Point d'entrée unique de l'application
 * Version : 1.2 (avec gestion des paramètres dynamiques)
 */

// 1. Chargement de la configuration des routes
/* $routes = require __DIR__.'/../routes/web.php';

// 2. Récupération du chemin demandé
$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$requestMethod = $_SERVER['REQUEST_METHOD'];

// 3. Fonction de matching des routes
function matchRoute($requestUri, $routes) {
    foreach ($routes as $route => $config) {
        // Conversion des routes avec paramètres (ex: /medicament/{id})
        $pattern = preg_replace('/\{(\w+)\}/', '(?P<$1>[^/]+)', $route);
        $pattern = "@^" . $pattern . "$@";
        
        if (preg_match($pattern, $requestUri, $matches)) {
            // Extraction des paramètres
            $params = array_filter($matches, 'is_string', ARRAY_FILTER_USE_KEY);
            return ['config' => $config, 'params' => $params];
        }
    }
    return null;
}

// 4. Recherche de la route correspondante
$matchedRoute = matchRoute($requestUri, $routes);

// 5. Gestion des erreurs si route non trouvée
if (!$matchedRoute) {
    http_response_code(404);
    require __DIR__.'/../views/errors/404.php';
    exit;
}

// 6. Traitement de la route
$routeConfig = $matchedRoute['config'];
$routeParams = $matchedRoute['params'];

// 7. Gestion des middlewares (ex: vérification d'authentification)
if (isset($routeConfig['middleware'])) {
    foreach ($routeConfig['middleware'] as $middleware) {
        require __DIR__."/../middlewares/{$middleware}.php";
    }
}

// 8. Définition du titre de la page
$pageTitle = $routeConfig['title'] ?? 'Pharmatrix';

// 9. Chargement de la vue
$viewPath = __DIR__.'/../views/pages/'.$routeConfig['view'].'.php';

if (!file_exists($viewPath)) {
    http_response_code(500);
    die("Erreur : la vue '{$routeConfig['view']}' est introuvable");
}

// 10. Inclusion des composants
require __DIR__.'/../views/components/header.php';

// 11. Passage des paramètres à la vue
extract($routeParams);
require $viewPath;

// 12. Inclusion du footer
require __DIR__.'/../views/components/footer.php';  */



/**
 * Index.php - Routeur principal
 * Version simplifiée mais fonctionnelle
 */



// 1. Chargement des routes
$routesFile = BASE_PATH.'/routes/web.php';
if (!file_exists($routesFile)) {
    abort(500, 'Fichier de routes introuvable');
}

$routes = require $routesFile;

/**
 * Index.php - Routeur principal
 * Placez ce fichier à la racine de votre projet
 */

// 1. Configuration de base
error_reporting(E_ALL);
ini_set('display_errors', 1);

define('BASE_PATH', __DIR__);
define('VIEWS_PATH', BASE_PATH.'/views');
define('PUBLIC_PATH', BASE_PATH.'/public');

// 2. Fonctions utilitaires
function loadView($viewPath, $data = []) {
    extract($data);
    require $viewPath;
}

function abort($code = 404, $message = '') {
    http_response_code($code);
    $errorView = VIEWS_PATH."/errors/{$code}.php";
    
    if (file_exists($errorView)) {
        loadView($errorView, ['message' => $message]);
    } else {
        die("Erreur {$code}: {$message}");
    }
    exit;
}

// 3. Chargement des routes
$routesFile = BASE_PATH.'/routes/web.php';
if (!file_exists($routesFile)) {
    abort(500, 'Fichier de routes introuvable');
}

$routes = require $routesFile;

// 4. Traitement de la requête
$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$requestMethod = $_SERVER['REQUEST_METHOD'];

// 5. Recherche de la route
$matchedRoute = null;
$routeParams = [];

foreach ($routes as $route => $config) {
    // Conversion des routes paramétrées
    $pattern = "#^".preg_replace('/\{(\w+)\}/', '(?P<$1>[^/]+)', $route)."$#";
    
    if (preg_match($pattern, $requestUri, $matches)) {
        $matchedRoute = $config;
        // Extraction des paramètres
        foreach ($matches as $key => $value) {
            if (is_string($key)) {
                $routeParams[$key] = $value;
            }
        }
        break;
    }
}

// 6. Gestion des erreurs
if (!$matchedRoute) {
    abort(404, "Page non trouvée");
}

// 7. Vérification de la vue
$viewFile = VIEWS_PATH.'/pages/'.$matchedRoute['view'];
if (!file_exists($viewFile)) {
    abort(500, "Vue {$matchedRoute['view']} introuvable");
}

// 8. Préparation des données
$pageData = [
    'title' => $matchedRoute['title'] ?? 'Pharmatrix',
    'params' => $routeParams
];

// 9. Chargement des composants
$headerFile = VIEWS_PATH.'/components/header.php';
$footerFile = VIEWS_PATH.'/components/footer.php';

// 10. Affichage
try {
    if (file_exists($headerFile)) {
        loadView($headerFile, $pageData);
    }

    loadView($viewFile, array_merge($pageData, $routeParams));

    if (file_exists($footerFile)) {
        loadView($footerFile);
    }
} catch (Exception $e) {
    abort(500, "Erreur de rendu: ".$e->getMessage());
}