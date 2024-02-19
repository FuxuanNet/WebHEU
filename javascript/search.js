

//添加一个监视器,当点击提交时将搜索词发送至后台
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    var searchTerm = document.getElementById('searchInput').value.trim(); //去除两端空格
    //提交数据到本地后台(数据不为空)

    if (searchTerm) {
      fetch("http://127.0.0.1:8000/search", {
        method: "POST",
        headers: {

            'Content-Type': 'application/json' // 指定请求头中的 Content-Type
        },
        body: JSON.stringify({ "keyword": searchTerm }) // 设置请求体，需要将数据转换为 JSON 字符串
    })
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then(data => {
            // 示例：显示搜索结果
            console.log(data);
            var searchResultsElement = document.getElementById('searchResults');
            searchResultsElement.innerHTML = "<p>Result:" + searchTerm + "</p>";

        })
        .catch((error) => {
          console.error("There was an error:", error);
        });
    }
  });
