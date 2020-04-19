<?php 
$page = 'gallery';
include 'nav.php'; 
?>

<div class="container main">
    <div class="row">
        <div class="col-lg-12 col-header">
            <div class="sub-header">
                <h1>Galleri</h1>
                <span class="badge badge-primary ml-2" id="galleryCounter">0</span>
            </div>
            <a href="<?=$path ?>/views/image_add.php" class="btn btn-primary">Tilføj nyt billede</a>
        </div>
    </div>
    <div class="row presentation" id="galleryRow"></div>
</div>

<?php include 'footer.php'; ?>