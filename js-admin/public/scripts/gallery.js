$(document).ready(function () {

    const counter = $('#galleryCounter');

    if($('#galleryRow').length > 0) {
        
        fetchImages();

        function fetchImages() {
            $.ajax({
                url: `${apiPath}/api/gallery/fetchImages.php`,
                type: 'POST',
                dataType: 'json',
                beforeSend: function () {
                    $('#galleryRow').empty();
                },
                success: function (data) {
                    if(data[0].message !== 'no records found!') {
                        counter.html(data.length)
                        $.each(data, function (key, value) {
                            $('#galleryRow').append(`
                            <div class="col-lg-6 card-col">
                                <div class="card">
                                    <img src="${data[key].src}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h4>Beskrivelse</h4>
                                        <hr />
                                        <p>${data[key].caption}</p>
                                    </div>
                                    <button class="btn btn-primary remove-image float-right" data-id="${data[key].id}">Fjern billede</button>
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

        $('body').on('click', '.remove-image', function() {
            const id = $(this).data('id');

            $.ajax({
                url: `${apiPath}/api/gallery/deleteImage.php`,
                type: 'POST',
                data: {
                    id: id
                },
                success: function (data) {
                    if(data === 'deleted') {
                        fetchImages();
                    }
                }
            })
        })
    }

    if($('#imageAdd').length > 0) {
        $('#addForm').on('submit', function(e) {
            e.preventDefault();

            var formData = new FormData(this);

            $.ajax({
                type: 'POST',
                url: `${apiPath}/api/gallery/addImage.php`,
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
    }

})