// 파일 저장 기능
window.saveAsFile = function (filename, byteBase64) {
    // Base64 문자열을 바이너리로 변환
    var link = document.createElement('a');
    link.download = filename;
    link.href = "data:application/octet-stream;base64," + byteBase64;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}