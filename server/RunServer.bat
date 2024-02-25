@echo off

rem 切换到当前目录
cd /d %~dp0

:loop
rem 启动Server
uvicorn server:app --host 0.0.0.0 --port 8000

goto loop

