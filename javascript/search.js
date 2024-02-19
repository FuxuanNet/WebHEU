//����һ��������,������ύʱ�������ʷ�������̨
document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // ��ֹ����Ĭ���ύ��Ϊ
    var searchTerm = document.getElementById("searchInput").value;
    //�ύ���ݵ����غ�̨(���ݲ�Ϊ��)
    if (searchTerm) {
      fetch("http://127.0.0.1:8000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ָ������ͷ�е� Content-Type
        },
        body: JSON.stringify({ keyword: searchTerm }), // ���������壬��Ҫ������ת��Ϊ JSON �ַ���
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // ʾ������ʾ�������
          console.log(data);
          var searchResultsElement = document.getElementById("searchResults");
          searchResultsElement.innerHTML = "<p>Result:" + searchTerm + "</p>";
        })
        .catch((error) => {
          console.error("There was an error:", error);
        });
    }
  });
