$(document).ready(function () {

    const counter = $('#shipsCounter');
    
    if ($('#shipRow').length > 0) {
        fetchShips();
        // Fetch all ships on load
        function fetchShips() {
            $.ajax({
                url: `${apiPath}/api/ships/fetchShips.php`,
                type: 'POST',
                dataType: 'json',
                beforeSend: function () {
                    $('#shipRow').empty();
                },
                success: function (data) {
                    if(data[0].message !== 'no records found!') {
                        counter.html(data.length)
                        $.each(data, function (key, value) {
                            $('#shipRow').append(`
                            <div class="col-lg-6 card-col">
                                <div class="card">
                                    <img src="${apiPath}/images/${data[key].image}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${data[key].title}</h5>
                                        <hr>
                                        <p class="card-text">${data[key].short_detail}</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="${path}/views/ship_edit.php?id=${data[key].id}" class="btn btn-primary">Ret information</a>
                                        <button class="btn btn-primary remove-ship float-right" data-id="${data[key].id}">Fjern skip</button>
                                    </div>
                                </div>
                            </div>
                        `)
                        });
                    } else {
                        counter.html(0)
                    }
                    
                }
            })
        }

        $('body').on('click', '.remove-ship', function() {
            const id = $(this).data('id');

            $.ajax({
                url: `${apiPath}/api/ships/deleteShip.php`,
                type: 'POST',
                data: {
                    id: id
                },
                success: function (data) {
                    if(data === 'deleted') {
                        fetchShips();
                    }
                }
            })
        })
    }

    if($('#shipEdit').length > 0) {
        fetchSingleShip();
        
        function fetchSingleShip() {
            const id = parseInt($('#shipId').val());
            $.ajax({
                url: `${apiPath}/api/ships/fetchSingleShip.php?id=${id}`,
                dataType: 'json',
                success: function (data) {
                    if(!data[0].message) {
                        $('#shipTitle').val(data[0].title);
                        $('#shipPrice').val(data[0].price);
                        $('#shipIframe').val(data[0].iframe);
                        $('#defImage').val(data[0].image);
                        $('#shipDetails').val(data[0].details);
                    } else {
                        $('#editForm').html(data[0].message)
                    }
                }
            })
        }

        $('#shipImage').on('change', function() {
            const shipImage = $(this).val();
            const fileName = shipImage.match(/[^\\/]*$/)[0];

            $('#defImage').val(fileName);
        })

        $('#editForm').on('submit', function(e) {
            e.preventDefault();

            var formData = new FormData(this);

            $.ajax({
                type: 'POST',
                url: `${apiPath}/api/ships/editShip.php`,
                data: formData,
                processData: false,
                contentType: false,
                dataType: 'json',
                success: function (data) {
                    $('#message').html(data.message);
                }
            })
        })
    }

    if($('#shipAdd').length > 0) {

        $('#addForm').on('submit', function(e) {
            e.preventDefault();

            var formData = new FormData(this);

            $.ajax({
                type: 'POST',
                url: `${apiPath}/api/ships/addShip.php`,
                data: formData,
                processData: false,
                contentType: false,
                dataType: 'json',
                success: function (data) {
                    if(data.error === true) {
                        $('#message').html(data.message);
                    } else {
                        $('#message').html(data.message);
                        $('#addForm').trigger("reset");
                    }
                }
            })
        })
    }
})