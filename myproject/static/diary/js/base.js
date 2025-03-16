function updateDateTime() {
    const now = new Date();

    // 日時を「YYYY年MM月DD日 HH:mm:ss」の形式に整形
    const formattedDate = now.getFullYear() + '年' +
            ('0' + (now.getMonth() + 1)).slice(-2) + '月' +
            ('0' + now.getDate()).slice(-2) + '日 ' +
            ('0' + now.getHours()).slice(-2) + ':' +
            ('0' + now.getMinutes()).slice(-2) + ':' +
            ('0' + now.getSeconds()).slice(-2);

    // #datetime要素に表示
    document.getElementById('datetime_now').innerText = formattedDate;
}

// 1秒ごとに更新
setInterval(updateDateTime, 1000);

// 初回呼び出し
updateDateTime();