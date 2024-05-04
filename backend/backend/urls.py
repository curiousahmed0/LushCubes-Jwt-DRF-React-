from services.views import ServicesView
from django.contrib import admin
from django.urls import path,include
from patients.views import PatientView
from lushCubesStats.views import LushCubesStatsView
from api.views import UserView,LoginView,TokenRefreshView
from slips.views import SlipsView
from userStats.views import UserStatsView
from cashTally.views import CashTallyView

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
     path('api/cashTally/',CashTallyView.as_view())
]
