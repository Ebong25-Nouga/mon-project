<header class="app-header">
    <div class="container">
        <a href="/" class="brand">
            <img src="/public/assets/images/logo.png" alt="Pharmatrix" width="180">
        </a>
        
        <?php include __DIR__.'/../ui/search_bar.php'; ?>
        
        <nav class="user-menu">
            <?php if ($isLoggedIn): ?>
                <a href="/mon-compte"><i class="fas fa-user-circle"></i></a>
            <?php else: ?>
                <a href="/connexion" class="btn-outline">Connexion</a>
            <?php endif; ?>
        </nav>
    </div>
</header>