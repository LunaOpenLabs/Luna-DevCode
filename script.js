document.getElementById('code').addEventListener('input', function() {
    const code = this.value;
    const previewFrame = document.getElementById('preview');
    const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
    previewDocument.open();
    previewDocument.write(code);
    previewDocument.close();
});
