<?php 
$page = 'arrangements';
include 'nav.php'; 
?>

<div class="container main">
    <div class="row">
        <div class="col-lg-12 col-header">
            <div class="sub-header">
                <h1>Arrangementer</h1>
                <span class="badge badge-primary ml-2" id="arrangementsCounter">0</span>
            </div>
            <a href="<?=$path ?>/views/arrangement_add.php" class="btn btn-primary">Tilføj nyt arrangement</a>
        </div>
    </div>
    <div class="row presentation" id="arrangementRow"></div>
</div>


<?php include 'footer.php'; ?>