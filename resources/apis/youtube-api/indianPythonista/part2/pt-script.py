from googleapiclient.discovery import build
api_key = 'AIzaSyDoVmGn11RbYZEIaFIuvCpLumzBeyvDmWM'

youtube = build('youtube','v3', developerKey=api_key)

request = youtube.search().list(
    q='avengers',
    part='snippet',
    type='video'
)
response = request.execute()

print(response)