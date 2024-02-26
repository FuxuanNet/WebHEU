## server 后台开启说明

#### `server.py`可以在捕获 http 请求,默认请求端口是`8000` ;目前支持的访问方法包括`GET`和`POST`, 以下为使用方法:

1. **在 win 或者 WSL 里安装 fastapi 和 uvicorn(建议 python>=3.8,可以开个虚拟环境)**

   ```bash
   pip install fastapi uvicorn
   ```

2. **cd 转到 server 目录下,执行启动命令**

   ```
   uvicorn server:app --host 0.0.0.0 --port 8000 --reload
   ```

   **此后会提示一些启动信息.**

   (好吧, 我发现直接双击 server.py 也能运行)

3. **访问方式(前端发送请求)**

   - 传输文件至前端/通过纯网址访问网页(GET 方法):

     当通过网址直接访问项目内任意网页时, 后台能将该网页的 html,css,js,img 文件返回前端.

     比如 `http://127.0.0.1:8000` 返回主页内容, `http://127.0.0.1:8000/UserImage.html`则返回"用户画像"这个网页的内容;

   - 展示百度热搜榜统计图(GET 方法):

     要实现热搜榜功能, 必须按照上述方法开启 server,同时确保安装了**requests**和**bs4**库;

   - 提交用户搜索请求(POST 方法):

     前端发送请求至: `http://127.0.0.1:8000/search`; 提交的数据为 json 格式, 包含`{"keyword":searchTerm}` (具体请求方式请看`search.js`)

     注: 目前后台进行搜索的功能尚未实现, 得根据数据库来设计;

   ​ **提示: 当安装好上述依赖库后, 也可直接点击本目录的`RunServer.bat`开启后台;**

4. **添加了一个`database.json`作为数据库模版(只是建议), 用于搜索查询和数据展示, `writefile.py`可以用来写入这个文件.**
