<?php
$page = 'gallery';
include '../nav.php';
?>

<div class="wrapper">
    <div class="container view">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="row">
                    <div class="col-lg-12 col-header">
                        <h1>Tilføj nyt billede</h1>
                    </div>
                </div>

                <form id="addForm" enctype="multipart/form-data" method="post">
                    <div class="row presentation" id="imageAdd">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label for="title">Beskrivelse</label>
                                <input type="text" required id="imageDesc" class="form-control" name="caption" />
                            </div>
                            <div class="form-group">
                                <label for="title">Upload billede</label>
                                <input type="file" required id="imageUpload" accept="image/png, image/jpeg"
                                    class="form-control-file" name="image" />
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
    </div>
</div>
<?php include '../footer.php'; ?>