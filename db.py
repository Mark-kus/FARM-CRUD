from motor.motor_asyncio import AsyncIOMotorClient
from models import Task

from config.prod import DATABASE_URL

ID = "_id"
client = AsyncIOMotorClient(DATABASE_URL)
database = client.taskdatabase # Database name

""" Database collections """
tasks_collection = database.tasks

async def get_one_task(id):
    return await tasks_collection.find_one({ID: id})

async def get_many_tasks():
    tasks = []
    cursor = tasks_collection.find({})
    async for document in cursor:
        tasks.append(Task(**document))
    return tasks

async def create_one_task(task):
    new_task = await tasks_collection.insert_one(task)
    created_task = await get_one_task(new_task.inserted_id)
    return created_task

async def update_one_task(id: str, task):
    await tasks_collection.update_one({ID: id}, {"$set": task})
    return await get_one_task(id)

async def delete_one_task(id: str):
    return await tasks_collection.delete_one({ID: id})
