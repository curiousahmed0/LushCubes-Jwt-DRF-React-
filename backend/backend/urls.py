from services.views import ServicesView,U_U_ServicesView
from django.contrib import admin
from django.urls import path,include
from patients.views import PatientView,U_PatientView,U_U_PatientView
from lushCubesStats.views import LushCubesStatsView
from api.views import UserView,LoginView,TokenRefreshView,U_get_user,U_U_get_user
from slips.views import SlipsView
from userStats.views import UserStatsView,U_UserStatsView
from cashTally.views import CashTallyView,U_CashTallyView

urlpatterns = [
    path('admin/', admin.site.urls),
     path('api-auth/', include('rest_framework.urls')),
     path('api/services/',ServicesView.as_view()),
     path('api/patients/',PatientView.as_view()),
     path('api/lushCubesStats/',LushCubesStatsView.as_view()),
     path('api/user/',UserView.as_view()),
     path('api/login/',LoginView.as_view()),
     path('api/refresh/',TokenRefreshView.as_view()),
     path('api/slips/',SlipsView.as_view()),
     path('api/userStats/',UserStatsView.as_view()),
     path('api/cashTally/',CashTallyView.as_view()),

#####################################################################
     path('api/u/userStats/',U_UserStatsView),
     path('api/u/patients/<str:pk>/',U_PatientView),
     path('api/u/u/patients/<int:pk>/',U_U_PatientView),
     path('api/getUser/',U_get_user),
     path('api/u/u/services/<int:pk>/',U_U_ServicesView),
     path('api/u/cashTally/',U_CashTallyView),
     path('api/u/getUser/',U_U_get_user)

]
