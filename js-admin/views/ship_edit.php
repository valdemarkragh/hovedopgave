<?php
$page = 'ships';
$ship_id = $_GET['id'];
include '../nav.php';
?>

<div class="wrapper">
    <div class="container view">
        <div class="row">
            <div class="col-lg-12 col-header">
                <h1>Ret information</h1>
            </div>
        </div>

        <form id="editForm" enctype="multipart/form-data" method="post">
            <input type="hidden" id="shipId" name="id" value="<?=$ship_id?>" />
            <div class="row presentation" id="shipEdit">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="title">Titel</label>
                        <input type="text" id="shipTitle" class="form-control" name="title" />
                    </div>
                    <div class="form-group">
                        <label for="title">Pris</label>
                        <input type="number" id="shipPrice" class="form-control" name="price" />
                    </div>
                    <div class="form-group">
                        <label for="title">Nuværende billede</label>
                        <input type="text" id="defImage" readonly="readonly" class="form-control" name="defimage" />
                        <input type="file" id="shipImage" accept="image/png, image/jpeg" class="form-control-file mt-2"
                            name="image" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="title">Beskrivelse</label>
                        <textarea rows="14" id="shipDetails" class="form-control" name="details"></textarea>
                    </div>
                </div>
                <div class="col-lg-12">
                    <button type="submit" class="btn btn-primary">Opdater</button>
                    <p id="message"></p>
                </div>
            </div>
        </form>
    </div>
    
</div>



<?php include '../footer.php'; ?>