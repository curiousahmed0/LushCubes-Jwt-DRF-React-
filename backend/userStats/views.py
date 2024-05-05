from rest_framework import status
from .serializers import UserStatsSerializer,UserStatsModel
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated,IsAdminUser,AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication



class UserStatsView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]


    def post(self,request):
        try:
            res = request.data
            serializer = UserStatsSerializer(data=res)
            if not serializer.is_valid():
                return Response(serializer.errors,status= status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        except Exception as  e:
            print(e)
            return Response({"message":"something went wrong"},status=status.HTTP_400_BAD_REQUEST)
        

    def get(self,request):
        try:
            objs = UserStatsModel.objects.all()
            serializer = UserStatsSerializer(objs, many = True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"message":"something went wrong"},status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self,request):
        try:
            res = request.data
            obj = UserStatsModel.objects.get(id = res['id'])
            obj.delete()
            return Response({"message":"success"},status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({"message":"not found"},status=status.HTTP_400_BAD_REQUEST)
        

    def patch(self,request):
        try:
            res = request.data
            obj = UserStatsModel.objects.get(id = res['id'])
            serializer = UserStatsSerializer(obj,data=res,partial = True)
            if not serializer.is_valid():
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        
        except Exception as e:
            print(e)
            return Response({"message":"not found"},status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def U_UserStatsView(request):
    try:
        objs = UserStatsModel.objects.filter( user = request.user)
        serializer = UserStatsSerializer(objs, many = True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({"message":"something went wrong"},status=status.HTTP_400_BAD_REQUEST)