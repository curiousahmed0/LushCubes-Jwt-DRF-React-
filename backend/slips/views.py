from rest_framework import status
from .serializers import SlipsSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import SlipsModel


class SlipsView(APIView):


    def post(self,request):
        try:
            res = request.data
            serializer = SlipsSerializer(data=res)
            if not serializer.is_valid():
                return Response(serializer.errors,status= status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        except Exception as  e:
            print(e)
            return Response({"message":"something went wrong"},status=status.HTTP_400_BAD_REQUEST)
        

    def get(self,request):
        try:
            objs = SlipsModel.objects.all()
            serializer = SlipsSerializer(objs, many = True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"message":"something went wrong"},status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self,request):
        try:
            res = request.data
            obj = SlipsModel.objects.get(id = res['id'])
            obj.delete()
            return Response({"message":"success"},status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"message":"not found"},status=status.HTTP_400_BAD_REQUEST)
        

    def patch(self,request):
        try:
            res = request.data
            obj = SlipsModel.objects.get(id = res['id'])
            serializer = SlipsSerializer(obj,data=res,partial = True)
            if not serializer.is_valid():
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        
        except Exception as e:
            print(e)
            return Response({"message":"not found"},status=status.HTTP_400_BAD_REQUEST)

