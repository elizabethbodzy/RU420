function PreviewImage() {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(document.getElementById("uploadImage").files[0]);
    fileReader.onload = function (fileReaderEvent) {
        $.ajax({
            url: 'https://api-us.faceplusplus.com/facepp/v3/detect',
            method: "POST",
            data: {
                api_key: '2Enaf2_TbEt5jqt3eRPTQ3VhgeE7FWx7',
                api_secret: 'txBjyMf6ovNgpNxqdT56mi96YrvUpza_',
                image_base64: fileReaderEvent.target.result,
                return_attributes: 'emotion,gender,age',
            }
        }).then(function (response) {
            console.log(response);
        });

    };
};

