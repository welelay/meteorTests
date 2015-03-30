describe('testupload', function() {
    var server = meteor();


    var client = browser(server);

    it('should upload', function() {
        return client
            .waitForDOM("#importedFile")
            .__custom__(function(operand, cb) {
                console.log("elementIdValue", operand.browser.elementIdValue);
                console.log("chooseFile", operand.browser.chooseFile);
                console.log("uploadFile", operand.browser.uploadFile);
                operand.browser.uploadFile("../../../runtime/init/pdf/helloworld.pdf", function(error, res) {
                    console.log("res=", arguments);
                    client.sendKeys("#importedFile", res)
                        .then(cb);
                });
            })
            .sleep(100000);
    });
});
