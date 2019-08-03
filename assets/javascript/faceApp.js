function PreviewImage() {
    var age;
    var fileReader = new FileReader();
    fileReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    fileReader.onload = async function (fileReaderEvent) {
        var response = await $.ajax({
            url: 'https://api-us.faceplusplus.com/facepp/v3/detect',
            method: "POST",
            data: {
                api_key: '2Enaf2_TbEt5jqt3eRPTQ3VhgeE7FWx7',
                api_secret: 'txBjyMf6ovNgpNxqdT56mi96YrvUpza_',
                image_base64: fileReaderEvent.target.result,
                return_attributes: 'emotion,gender,age',
            }
        })
        age = response.faces[0].attributes.age.value;
        //check if age is 21 over then it would go to home page of our site


        if (age >= 21) {
            window.location.href = 'main.html';
        } else {
            alert("You are not a grown up so here, enjoy this video!")
            window.location.href = 'https://www.youtube.com/watch?v=XqZsoesa55w';
        }
        //else statement 20 or younger alert you are not allowed to accesss out website

    }

};

$("#verifyBtn").click(function (event) {
    event.preventDefault();
    PreviewImage();
});




