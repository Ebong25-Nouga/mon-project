<!DOCTYPE html>
<html lang="en">
<!-- views/pages/accueil.php -->
<?php include __DIR__.'/../components/header.php'; ?>

<!-- Copiez ici le contenu <main> de votre ancien accueil.html -->
<div class="container">
    <!-- ...votre contenu existant... -->
</div>

<?php include __DIR__.'/../components/footer.php'; ?>


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="/public/assets/css/accueil.css">
    <title>Document</title>
</head>

<body>
    <header>
        <img src="assets/image/logo.png" alt="">
        <nav>
            <i class="fa-solid fa-boxes-stacked"></i>
            <i class="fa-solid fa-circle-user"></i>
        </nav>
    </header>
    <div class="container">
        <div class="background"></div>
        <main>
            <h3>
                PHARMATRIX-Tous vos produits de sante en un seul clic.Fiabilite,conseils <br>
                et bien etre au coeur de notre engagement.
            </h3>
            <div class="search-bar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Rechercher et trouver vos medicaments ici">
            </div>
            <div class="image">
                <img src="assets/image/para.png" alt="" id="para">
                <img src="assets/image/doli.png" alt="">
                <img src="assets/image/maalox.png" alt="" id="maalox">
                <img src="assets/image/effe.png" alt="" id="effe">
            </div>
        </main>
    </div>
    <footer>
        <section>
            <div>
                <img src="assets/image/logo.png" alt="">
                <p>
                    Conversely, the explicit examination <br>
                    of development sequence provides a <br>
                    strict control over The Availability of <br>
                    Compatible Assistance.
                </p>
            </div>
            <div id="foot">
                <h4>Reseaux</h4>
                <i class="fa-brands fa-google"></i>&nbsp; phamatrix@gmail.com <br>
                <i class="fa-brands fa-facebook-f"></i>&nbsp; pharmatrix_off <br>
                <i class="fa-brands fa-instagram"></i>&nbsp; pharmatrix_off
            </div>
        </section>
        <span>
            copyright &copy; 2025 :YOCR ENTREPRISE
        </span>
    </footer>

</body>

</html>