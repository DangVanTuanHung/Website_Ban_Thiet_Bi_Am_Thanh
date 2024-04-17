document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (!/^\d+$/.test(username)) {
        document.getElementById("usernameError").innerText = "Tên đăng nhập chỉ được chứa số";
        return;
    } else {
        document.getElementById("usernameError").innerText = "";
    }

    if (!/^[A-Z].{7,}$/.test(password)) {
        document.getElementById("passwordError").innerText = "Mật khẩu phải bắt đầu bằng chữ hoa và có ít nhất 8 kí tự";
        return;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Mật khẩu và xác nhận mật khẩu không khớp";
        return;
    } else {
        document.getElementById("confirmPasswordError").innerText = "";
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Đăng ký thành công!\nTên đăng nhập: " + username);
    window.location.href = "DangNhap.html";

    document.getElementById("registerForm").reset();
});