<?php
return [
    '/' => [
        'view' => 'accueil.php',
        'title' => 'Accueil Pharmatrix'
    ],
    '/connexion' => [
        'view' => 'connexion.php',
        'title' => 'Connexion'
    ],
    '/medicament/{id}' => [
        'view' => 'medicament.php',
        'title' => 'Détail médicament'
    ]
];