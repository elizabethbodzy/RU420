// alert("hi");





$.ajax({
    url: 'https://api-us.faceplusplus.com/facepp/v3/detect',
    method: "POST",
    data: {
        api_key: '2Enaf2_TbEt5jqt3eRPTQ3VhgeE7FWx7',
        api_secret: 'txBjyMf6ovNgpNxqdT56mi96YrvUpza_',
        image_url: 'https://www.armytimes.com/resizer/X-5khefUIa4k4Wlzt_2hUn9q8Gc=/1200x0/filters:quality(100)/arc-anglerfish-arc2-prod-mco.s3.amazonaws.com/public/5LON7K6UGVFPTLMWZHOQBETMPI.jpg',
        return_attributes: 'emotion,gender,age',
    }
}).then(function (response) {
    console.log(response);
});

