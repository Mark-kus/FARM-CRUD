from fastapi import FastAPI
from models import Task
from db import \
get_one_task, \
get_many_tasks, \
create_one_task, \
update_one_task, \
delete_one_task

app = FastAPI()

@app.get("/")
def welcome():
    return {"message": "welcome"}

@app.get("/tasks")
async def get_tasks():
    return await get_many_tasks()

@app.get("/task/{id}")
async def get_task(id: str):
    return await get_one_task(id)

@app.post("/task")
async def post_task(task: Task):
    return await create_one_task(task)

@app.put("/task/{id}")
async def update_task(id: str, task: Task):
    return await update_one_task(id, task)

@app.delete("/task/{id}")
async def delete_task(id: str):
    return await delete_one_task(id)
