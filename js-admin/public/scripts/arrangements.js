$(document).ready(function () {

    const counter = $('#arrangementsCounter');

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
                    $.each(data, function (key, value) {
                        $('#shipGroup').append(`
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="ships[]" value="${data[key].id}" id="${data[key].id}" />
                            <label class="form-check-label" for="${data[key].id}">
                            ${data[key].title}
                            </label>
                        </div>
                    `)
                    });
                } else {
                    $('#shipGroup').html(`<p>${data[0].message}</p>`);
                }
                
            }
        })
    }

    if ($('#arrangementRow').length > 0) {
        fetchArrangements();
        // Fetch all ships on load
        function fetchArrangements() {
            $.ajax({
                url: `${apiPath}/api/arrangements/fetchArrangements.php`,
                type: 'POST',
                dataType: 'json',
                beforeSend: function () {
                    $('#arrangementRow').empty();
                },
                success: function (data) {
                    if(data[0].message !== 'no records found!') {
                        counter.html(data.length)
                        $.each(data, function (key, value) {
                            $('#arrangementRow').append(`
                            <div class="col-lg-6 card-col">
                                <div class="card">
                                    <img src="${apiPath}/images/${data[key].image}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${data[key].title}</h5>
                                        <hr>
                                        <p class="card-text">${data[key].short_detail}</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="${path}/views/arrangement_edit.php?id=${data[key].id}" class="btn btn-primary">Ret information</a>
                                        <button class="btn btn-primary remove-arrangement float-right" data-id="${data[key].id}">Fjern arrangement</button>
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

        $('body').on('click', '.remove-arrangement', function() {
            const id = $(this).data('id');
    
            $.ajax({
                url: `${apiPath}/api/arrangements/deleteArrangement.php`,
                type: 'POST',
                data: {
                    id: id
                },
                success: function (data) {
                    if(data === 'deleted') {
                        fetchArrangements();
                    }
                }
            })
        })
    }


    if($('#arrangementAdd').length > 0) {
        $('#addForm').on('submit', function(e) {
            e.preventDefault();

            var formData = new FormData(this);

            $.ajax({
                type: 'POST',
                url: `${apiPath}/api/arrangements/addArrangement.php`,
                data: formData,
                processData: false,
                contentType: false,
                dataType: 'json',
                success: function (data) {
                    $('#message').html(data.message);
                    $('#addForm').trigger("reset");
                }
            })
        })

        fetchShips();
        
    }

    if($('#arrangementEdit').length > 0) {

        $('#editForm').on('submit', function(e) {
            e.preventDefault();

            var formData = new FormData(this);

            $.ajax({
                type: 'POST',
                url: `${apiPath}/api/arrangements/editArrangement.php`,
                data: formData,
                processData: false,
                contentType: false,
                dataType: 'json',
                success: function (data) {
                    $('#message').html(data.message);
                }
            })
        })

        fetchShips();

        fetchSingleArrangement();
        
        function fetchSingleArrangement() {
            const id = parseInt($('#arrangementId').val());
            $.ajax({
                url: `${apiPath}/api/arrangements/fetchSingleArrangement.php?id=${id}`,
                dataType: 'json',
                success: function (data) {
                    if(!data[0].message) {
                        $('#arrangementTitle').val(data[0].title);
                        $('#arrangementDetails').val(data[0].details);
                        $('#defImage').val(data[0].image);
                    } else {
                        $('#editForm').html(data[0].message)
                    }
                    
                }
            })
        }

        $('#arrangementImage').on('change', function() {
            const arrangementImage = $(this).val();
            const fileName = arrangementImage.match(/[^\\/]*$/)[0];

            $('#defImage').val(fileName);
        })

        setTimeout(function(){
            $(".form-check-input").each(function() {
                const id = $(this).val();
                const arrangementId = parseInt($('#arrangementId').val());
                const input = $(this);

                $.ajax({
                    url: `${apiPath}/api/arrangements/fetchArrangements.php?shipId=${id}`,
                    dataType: 'json',
                    success: function (data) {
                        if(data[0].message !== 'no records found!') {
                            $.each(data, function (key, value) {
                                if(data[key].id == arrangementId) {
                                    $(input).prop('checked', true);
                                }
                            })
                        }
                    }
                })
            });
        }, 100);
    }
})