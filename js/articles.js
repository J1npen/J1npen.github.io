// 复制email地址
function copyEmail() {
    var emailText = "kx180415@gmail.com";
    var tempInput = document.createElement("input");
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Email地址已复制到剪贴板！");
}

document.getElementById("email").addEventListener("click", copyEmail);

