<?php 
$page = 'login';
include 'header.php'; 
?>

<div class="wrapper">
    <div class="container">
        <form id="loginForm" method="post">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 login">
                    <div class="col-lg-12">
                        <h1>Admin Login</h1>
                        <hr />
                        <div class="form-group">
                            <label for="title">Brugernavn</label>
                            <input type="text" required class="form-control" name="username" />
                        </div>
                        <div class="form-group">
                            <label for="title">Password</label>
                            <input type="password" required class="form-control" name="password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                        <p id="loginMessage"></p>
                    </div>
                </div>
        </form>
    </div>
</div>

<?php include 'footer.php'; ?>