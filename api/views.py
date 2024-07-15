from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.database import create_user, login_user, create_task, get_tasks, delete_task

# @api_view(['GET'])
# def say_hello(request):
#     name = request.GET['name']
#     return Response({
#         "message": "Hello " + name
#     })

@api_view(['GET'])
def register_account_endpoint(request):
    username = request.GET['username']
    password = request.GET['password']
    create_user(username, password)
    return Response({
        "success": True,
        "message": "Account created successfully"
    })

@api_view(['GET'])
def login_account_endpoint(request):
    username = request.GET['username']
    password = request.GET['password']
    if login_user(username, password):
        return Response({
            "success": True,
            "message": "Login successful"
        })
    return Response({
        "success": False,
        "message": "Invalid credentials"
    })

@api_view(['GET'])
def insert_task_endpoint(request):
    username = request.GET['username']
    task_name = request.GET['task_name']
    if create_task(username, task_name):
        return Response({
            "success": True,
            "message": "Task created successfully"
        })
    return Response({
        "success": False,
        "message": "User does not exist"
    })

@api_view(['GET'])
def get_task_endpoint(request):
    username = request.GET['username']
    tasks = get_tasks(username)
    print(username)
    return Response({
        "success": True,
        "tasks": tasks
    })

@api_view(['GET'])
def delete_task_endpoint(request):
    username = request.GET['username']
    task_id = request.GET['task_id']

    if delete_task(username, int(task_id)):
        return Response({
            "success": True,
            "message": "Task deleted successfully"
        })
    return Response({
        "success": False,
        "message": "User does not exist"
    })

