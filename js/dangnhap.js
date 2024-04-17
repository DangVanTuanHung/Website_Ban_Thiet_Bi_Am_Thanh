$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        event.preventDefault(); 
        var username = $("#username").val();
        var password = $("#password").val();

        if (!/^\d+$/.test(username)) {
            $("#usernameError").text("Tên đăng nhập chỉ được chứa số");
            return;
        } else {
            $("#usernameError").text("");
        }

        if (!/^[A-Z].{7,}$/.test(password)) {
            $("#passwordError").text("Mật khẩu phải bắt đầu bằng chữ hoa và có ít nhất 8 kí tự");
            return;
        } else {
            $("#passwordError").text("");
        }

        var storedUsername = localStorage.getItem("username");
        var storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            alert("Đăng nhập thành công!");
            window.location.href = "index.html";
        } else {
            alert("Tên đăng nhập hoặc mật khẩu không đúng hoặc chưa đăng ký!!!");
        }
    });
});