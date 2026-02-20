PHOTO / VIDEO GALLERY — Where to upload files
==============================================

PHOTOS:  Put image files in:  public/gallery/photos/
         e.g. public/gallery/photos/launch-day.jpg

VIDEOS:  Put video files in:  public/gallery/videos/
         e.g. public/gallery/videos/launch.mp4

Then edit:  public/gallery/gallery.json
Add one line per item, in the order you want them shown:

  { "type": "photo", "src": "photos/yourfile.jpg" }
  { "type": "video", "src": "videos/yourfile.mp4" }

Supported image formats: jpg, jpeg, png, webp
Supported video format: mp4 (recommended)
