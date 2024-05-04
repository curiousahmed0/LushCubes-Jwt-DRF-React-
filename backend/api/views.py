from .serializers import LoginSerializer,UserSerializer,RefreshTokenSerializer
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response



class UserView(APIView):

    def post(self,request):
        try:
            res = request.data
            serializer = UserSerializer(data=res)
            if not serializer.is_valid():
                return Response(serializer.errors,status= status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        except Exception as  e:
            print(e)
            return Response({"message":"something went wrong"},status=status.HTTP_400_BAD_REQUEST)
        

    def get(self,request):
        try:
            objs = User.objects.all()
            serializer = UserSerializer(objs, many = True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"message":"something went wrong"},status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self,request):
        try:
            res = request.data
            obj = User.objects.get(id = res['id'])
            obj.delete()
            return Response({"message":"success"},status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"message":"not found"},status=status.HTTP_400_BAD_REQUEST)
        

    def patch(self,request):
        try:
            res = request.data
            obj = User.objects.get(id = res['id'])
            serializer = UserSerializer(obj,data=res,partial = True)
            if not serializer.is_valid():
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        
        except Exception as e:
            print(e)
            return Response({"message":"not found"},status=status.HTTP_400_BAD_REQUEST)
        

class LoginView(APIView):

    def post(self,request):
        try:
            res = request.data
            serializer = LoginSerializer(data=res)
            if not serializer.is_valid():
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            response=serializer.get_tokens_for_user(res)
            return Response(response,status=status.HTTP_200_OK)
        
        except Exception as e:
            print(e)
            return Response({"message":"something went wrong"},status=status.HTTP_400_BAD_REQUEST)
        



class TokenRefreshView(APIView):
    def post(self, request):
        try:
            serializer = RefreshTokenSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"message":"something went wrong"},status=status.HTTP_400_BAD_REQUEST)

