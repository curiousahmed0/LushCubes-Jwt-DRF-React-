from django.shortcuts import render
from .serializers import ServicesModel,ServicesSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated,IsAdminUser,AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication



class ServicesView(APIView):

    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get(self,request):
        try:
            objs = ServicesModel.objects.all()
            serializer = ServicesSerializer(objs, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"message":"something went wrong"},status=status.HTTP_400_BAD_REQUEST)


    def post(self,request):
        try:
            res = request.data
            serializer = ServicesSerializer(data=res)
            if not serializer.is_valid():
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        
        except Exception as e:
            print(e)
            return Response({"message":"something went wrong"},status=status.HTTP_400_BAD_REQUEST)
        

    def delete(self,request):
        try:
            res = request.data
            obj = ServicesModel.objects.get(id = res['id'])
            obj.delete()
            return Response({"message":"success"},status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"message":"Not Found"},status=status.HTTP_404_NOT_FOUND)
        

    def patch(self,request):
        try:
            res = request.data
            obj = ServicesModel.objects.get(id = res['id'])
            serializer = ServicesSerializer(obj,data=res,partial = True)
            if not serializer.is_valid():
                return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        except Exception as e:
            print(e)
            return Response({"message":"not found or error"},status=status.HTTP_404_NOT_FOUND)

