</body>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src="<?=$path?>/public/scripts/main.js"></script>

<?php 
switch ($page) {
    case "login":
        echo "<script src='$path/public/scripts/user.js'></script>";
        break;
    case "ships":
        echo "<script src='$path/public/scripts/ships.js'></script>";
        break;
    case "arrangements":
        echo "<script src='$path/public/scripts/arrangements.js'></script>";
        break;
    case "gallery":
        echo "<script src='$path/public/scripts/gallery.js'></script>";
        break;
}
?>
</html>