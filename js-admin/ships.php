<?php 
$page = 'ships';
include 'nav.php'; 
?>

<div class="container main">
    <div class="row">
        <div class="col-lg-12 col-header">
            <div class="sub-header">
                <h1>Skibe</h1>
                <span class="badge badge-primary ml-2" id="shipsCounter">0</span>
            </div>
            <a href="<?=$path ?>/views/ship_add.php" class="btn btn-primary">Tilføj nyt skib</a>
        </div>
    </div>
    <div class="row presentation" id="shipRow"></div>
</div>

<?php include 'footer.php'; ?>