<?php
$page = 'ships';
include '../nav.php';
?>

<div class="wrapper">
    <div class="container view">
        <div class="row">
            <div class="col-lg-12 col-header">
                <h1>Tilføj nyt skib</h1>
            </div>
        </div>

        <form id="addForm" enctype="multipart/form-data" method="post">
            <div class="row presentation" id="shipAdd">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="title">Titel</label>
                        <input type="text" required id="shipTitle" class="form-control" name="title" />
                    </div>
                    <div class="form-group">
                        <label for="title">Pris</label>
                        <input type="number" required id="shipPrice" class="form-control" name="price" />
                    </div>
                    <div class="form-group">
                        <label for="title">Upload billede</label>
                        <input type="file" required id="shipImage" accept="image/png, image/jpeg"
                            class="form-control-file" name="image" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="title">Beskrivelse</label>
                        <textarea rows="11" required id="shipDetails" class="form-control" name="details"></textarea>
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