import json
import asyncio
import uvicorn
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 解除CORS限制,从而接受网页发送的请求
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许所有网址来源访问
    allow_credentials=True,
    allow_methods=["*"],  # 允许所有 HTTP 方法访问，也可以指定特定的方法，如 ["GET", "POST"]
    allow_headers=["*"],  # 允许所有 HTTP 头部访问，也可以指定特定的头部，如 ["X-Custom-Header"]
)


# 请求中间件
@app.middleware("http")
async def ip_limit_middleware(request: Request, call_next):
    client_ip = request.client.host
    method = request.method
    response = await call_next(request)
    return response


# 访问127.0.0.1:8000/search进行用户搜索
# 处理/search下的搜索请求
@app.post("/search")
async def search_data(data: dict):
    keyword = data["keyword"]
    # 这里在数据库中执行搜索,然后返回result
    result = {"result": "No related data found."}
    return result


#/访问127.0.0.1:8000/lib来获取各种依赖文件或数据
# 处理/lib下的GET请求
@app.get("/lib")
async def read_lib():
    with open("./data.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    return data


# 处理/lib下的POST请求
@app.post("/lib")
async def save_lib(data: dict):
    with open("./data.json", "w", encoding="utf-8") as f:
        json.dump(data, f)
    data = {"message": "Data received and saved successfully"}
    return data


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
