const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

const accountList = document.getElementById('accountList');
accounts.forEach(account => {
    const li = document.createElement('li');
    li.textContent = `Tên đăng nhập: ${account.username}, Mật khẩu: ${account.password}`;
    accountList.appendChild(li);
});