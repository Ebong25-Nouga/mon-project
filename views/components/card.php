<div class="card-medicament">
    <div class="card-image">
        <img src="<?= $imageUrl ?>" alt="<?= $name ?>">
    </div>
    <div class="card-body">
        <h3><?= htmlspecialchars($name) ?></h3>
        <p class="price"><?= number_format($price, 2) ?> €</p>
        <div class="card-actions">
            <button class="btn-primary" data-id="<?= $id ?>">
                <i class="fas fa-shopping-cart"></i> Commander
            </button>
        </div>
    </div>
</div>