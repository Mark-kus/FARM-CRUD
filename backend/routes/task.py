from fastapi import APIRouter, HTTPException
from models import Task
from schemas import UpdateTask
from db import \
get_many_tasks, \
create_one_task, \
get_one_task_by_title, \
update_one_task, \
delete_one_task

task = APIRouter(
    prefix="/task"
)

@task.get("/get")
async def get_tasks():
    return await get_many_tasks()

@task.get("/get/{title}", response_model=Task)
async def get_task(title: str):
    task = await get_one_task_by_title(title)
    if task:
        return task
    raise HTTPException(404, f"Tarea con title {title} no encontrada")

@task.post("/create/", response_model=Task, status_code=201)
async def post_task(task: Task):    

    taskFound = await get_one_task_by_title(task.title)
    if taskFound:
        raise HTTPException(409, "Ya existe")

    response = await create_one_task(task.model_dump())
    if response:
        return response
    raise HTTPException(400, "Algo salió mal")

@task.put("/update/{title}")
async def update_task(title: str, task: UpdateTask):
    task_existing = await get_one_task_by_title(title)
    print(task_existing)
    if task_existing is None:
        raise HTTPException(404, "No existe")
    return await update_one_task(title, task)

@task.delete("/delete/{title}")
async def delete_task(title: str):
    task = await get_one_task_by_title(title)
    if task is None:
        raise HTTPException(404, "No existe")
    await delete_one_task(title)
    return { "detail": "OK" }