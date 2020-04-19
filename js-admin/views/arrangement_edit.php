<?php
$page = 'arrangements';
$arrangement_id = $_GET['id'];
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
            <input type="hidden" id="arrangementId" name="id" value="<?=$arrangement_id?>" />
            <div class="row presentation" id="arrangementEdit">
                <div class="col-lg-12">
                    <div class="form-group">
                        <label for="title">Titel</label>
                        <input type="text" required id="arrangementTitle" class="form-control" name="title" />
                    </div>
                    <div class="form-group">
                        <label for="title">Beskrivelse</label>
                        <textarea rows="11" required id="arrangementDetails" class="form-control" name="details"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="title">Nuværende billede</label>
                        <input type="text" id="defImage" readonly="readonly" class="form-control" name="defimage" />
                        <input type="file" id="arrangementImage" accept="image/png, image/jpeg" class="form-control-file mt-2"
                            name="image" />
                    </div>
                    <div id="shipGroup" class="mb-2">
                        <label>Angiv hvilke skibe arrangementet hører til</label>
                    </div>
                </div>
                <div class="col-lg-12">
                    <button type="submit" class="btn btn-primary">Tilføj</button>
                    <p id="message"></p>
                </div>
            </div>
        </form>
    </div>
    
</div>



<?php include '../footer.php'; ?>