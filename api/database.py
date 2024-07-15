import pymongo
import os
from dotenv import load_dotenv
load_dotenv()

MONGO_URI = os.getenv("MONGODB_URI")

client = pymongo.MongoClient(MONGO_URI)

database = client["todolist_app"]
collection = database["users"]

def create_user(username, password):
    post = {
        "username": username,
        "password": password,
        "task_count": 0,
        "tasks": []
    }
    collection.insert_one(post)

def login(username, password):
    user = collection.find_one({"username": username})
    if user and user["password"] == password:
        return True
    return False

def create_task(username, task_name):
    task_count = collection.find_one({"username": username})["task_count"]
    task = {
        "id": task_count,
        "task_name": task_name,
    }
    collection.update_one({"username": username}, {"$push": {"tasks": task}})
    collection.update_one({"username": username}, {"$inc": {"task_count": 1}})
    return True

def get_tasks(username):
    return collection.find_one({"username": username})["tasks"]

def delete_task(username, task_id):
    collection.update_one({"username": username}, {"$pull": {"tasks": {"id": task_id}}})
    return True