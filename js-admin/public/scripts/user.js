$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        
        $.ajax({
            url: `${apiPath}/api/user/loginUser.php`,
            type: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function (res) {
                if(res.status === 'success') {
                    $.ajax({
                        url: `${path}/sessionstorage/setSession.php`,
                        type: 'POST',
                        data: {
                            userid: res.id,
                            username: res.user
                        },
                        success: function(session) {
                            if(session === 'success') {
                                window.location.replace(`${path}/ships.php`);
                            }
                        }
                    })
                } else {
                    $('#loginMessage').html(res.message);
                }
            }
        })
    })
})