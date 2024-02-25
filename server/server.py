import json
import os
import uvicorn
import requests
from fastapi import FastAPI, Request
from bs4 import BeautifulSoup
from starlette.responses import FileResponse


# 切换工作目录到父目录
parent_directory = os.path.dirname(os.getcwd())
os.chdir(parent_directory)

# 构建webApplication
app = FastAPI()


# 请求中间件,获取请求信息
@app.middleware("http")
async def ip_limit_middleware(request: Request, call_next):
    client_ip = request.client.host
    method = request.method
    response = await call_next(request)
    return response


# 爬取热搜榜数据
@app.get("/top-trend")
async def get_trend():
    url = "https://top.baidu.com/board?tab=realtime"
    r = requests.get(url)
    soup = BeautifulSoup(r.text, 'html.parser')
    title_elements = soup.find_all(class_="c-single-text-ellipsis")
    index_elements = soup.find_all(class_="hot-index_1Bl1a")
    top10_titles = list(title_elements)[:5]
    top10_index = list(index_elements)[:5]
    data = {"yAxis": [title.text for title in top10_titles],
            "xAxis": [index.text[:-4] for index in top10_index]}
    return data


# 处理文件获取请求
@app.get("/")
async def index_page():
    return FileResponse("index.html")


# 发送主目录下的文件
@app.get("/{filename}")
async def index_page(filename: str):
    except_files = [".gitattributes", ".gitignore"]
    if "/" not in filename and filename not in except_files:
        # 返回对应文件
        return FileResponse(filename)


# 发送images/下的文件
@app.get("/images/{filename}")
async def index_page(filename: str):
    if "/" not in filename:
        # 返回对应文件
        return FileResponse("images/"+filename)


#发送javascript/下的文件
@app.get("/javascript/{filename}")
async def index_page(filename: str):
    if "/" not in filename:
        # 返回对应文件
        return FileResponse("javascript/"+filename)


# 处理/search下的搜索请求
split_codes = [33, 34, 35, 39, 44, 45, 46, 58, 59, 61, 63, 12290, 65281, 65292, 30340, 26159, 20026]


@app.post("/search")
async def search_data(data: dict):
    keyword: str = data["keyword"]
    # 根据标点符号以及"的","是","为"进行分割
    for code in split_codes:
        if chr(code) in keyword:
            keyword = keyword.replace(chr(code), " ")
    # 在数据库中执行搜索,然后返回result
    words = keyword.strip().split(" ")

    result = {"result": "No related data found."}
    return result


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
