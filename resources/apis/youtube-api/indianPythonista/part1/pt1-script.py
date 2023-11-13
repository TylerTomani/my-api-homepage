from googleapiclient.discovery import build
api_key = 'AIzaSyDoVmGn11RbYZEIaFIuvCpLumzBeyvDmWM'

youtube = build('youtube','v3',developerKey=api_key)
req = youtube.search().list(
    q='Indian Pythonista',
    part='snippet',
    type='channel'
    )
response = req.execute()


print(response['items'][0])
