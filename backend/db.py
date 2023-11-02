from motor.motor_asyncio import AsyncIOMotorClient
from models.models import Task

from decouple import config

TITLE = "title"
client = AsyncIOMotorClient(config('DATABASE_URL'))
database = client.taskdatabase # Database name

""" Database collections """
tasks_collection = database.tasks

async def get_one_task_by_title(title):
    task = await tasks_collection.find_one({TITLE: title})
    if task is None:
        return None
    return Task(**task)

async def get_many_tasks():
    tasks = []
    cursor = tasks_collection.find({})
    async for document in cursor:
        tasks.append(Task(**document))
    return tasks

async def create_one_task(task):
    await tasks_collection.insert_one(task)
    created_task = await get_one_task_by_title(task['title'])
    return created_task

async def update_one_task(title: str, data):
    task = {k:v for k, v in data.dict().items() if v is not None}
    await tasks_collection.update_one({TITLE: title}, {"$set": task})
    searchBy = title if task.get("title") is None else task.get("title")
    return await get_one_task_by_title(searchBy)

async def delete_one_task(title: str):
    return await tasks_collection.delete_one({TITLE: title})
