from pytubefix import YouTube
from pytubefix.cli import on_progress
import os
import sys

url = ""

try:
    yt = YouTube(url, on_progress_callback=on_progress)
    print(f"Title: {yt.title}")

    # Get best 1080p video-only stream
    video_stream = yt.streams.filter(res="1080p", file_extension="mp4", only_video=True).first()
    if not video_stream:
        print("1080p video stream not found.")
        sys.exit(1)

    # Get best audio-only stream
    audio_stream = yt.streams.filter(only_audio=True, file_extension="mp4").order_by('abr').desc().first()
    if not audio_stream:
        print("Audio stream not found.")
        sys.exit(1)

    # Download streams
    print("Downloading video...")
    video_path = video_stream.download(filename="video.mp4")
    print("Downloading audio...")
    audio_path = audio_stream.download(filename="audio.mp4")

    # Merge with ffmpeg
    output_path = "output_1080p.mp4"
    print("Merging video and audio...")
    os.system(f'ffmpeg -y -i "{video_path}" -i "{audio_path}" -c:v copy -c:a aac "{output_path}"')

    print(f"✅ Downloaded and merged 1080p video: {output_path}")

except Exception as e:
    print(f"❌ Error: {e}")
