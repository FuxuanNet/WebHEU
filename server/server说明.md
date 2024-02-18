## server后台开启说明

#### `server.py`可以在server目录下捕获http请求,默认请求端口是`8000` ;目前支持的访问方法包括`GET`和`POST`, 使用方式如下:

1. **在win或者WSL里安装fastapi和uvicorn(建议python>=3.8)**

   ```bash
   pip install fastapi uvicorn
   ```

2. **cmd转到server目录下,执行启动命令**

   ```
   uvicorn server:app --host 0.0.0.0 --port 8000 --reload
   ```

   **此后会提示一些启动信息.**

3. **访问方式(前端发送请求)**

   - 提交用户搜索请求: `http://127.0.0.1:8000/search` ;请求方法为POST;提交的数据为json格式, 包含`{"keyword":searchTerm}`(具体请求方式请看`search.js`)

     注: 目前后台进行搜索的功能尚未实现, 得根据数据库来设计;

   - 获取其他文件或数据:

      由于网页中不允许js访问本地文件(除非弹出提示框让用户选择),  我们可以先在`server`路径下存放一些文件,然后在前端发送请求到:`http://127.0.0.1:8000/lib` , 方法支持GET和POST

     (目前只是做个框架,尚未完善) 