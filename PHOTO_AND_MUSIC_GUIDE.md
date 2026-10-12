# How to Add Photos and Music to Your Birthday Website

## Adding Photos to the Gallery

### Method 1: Using URLs (Easiest)
1. Click the **pencil icon** (✎) in the bottom-right corner to open the editor.
2. Go to the **Gallery** tab.
3. Click **+ Add Photo**.
4. A new photo card will appear with two fields:
   - **Image URL**: Paste the direct link to an image (must start with `http://` or `https://`)
   - **Caption**: Write a short caption for the photo

### Where to Get Image URLs

#### Option A: Use Free Stock Photo Sites (No Account Needed)
- **Unsplash**: https://unsplash.com
  - Search for any photo
  - Right-click the photo → Copy link
  - Paste into the Image URL field
  
- **Pexels**: https://www.pexels.com
  - Similar to Unsplash
  - Right-click → Copy image address

- **Pixabay**: https://pixabay.com
  - Free high-quality images
  - Right-click → Copy image address

#### Option B: Upload Your Own Photo to the Web
If you have a photo on your computer:

1. **Free Option - Imgur**:
   - Go to https://imgur.com
   - Click "New Post" (no login required)
   - Drag and drop your photo
   - Right-click the image → Copy image address
   - Paste into the birthday site editor

2. **Free Option - ImgBB**:
   - Go to https://imgbb.com
   - Upload your image
   - Copy the full link
   - Paste into the birthday site editor

3. **Google Drive** (if you have Gmail):
   - Upload photo to Google Drive
   - Right-click → Get link
   - Set to "Anyone with the link can view"
   - Copy the sharing link
   - Modify URL: Replace `/file/d/[FILE_ID]/view` with `/uc?export=view&id=[FILE_ID]`
   - Paste into the birthday site editor

#### Option C: Use Data URLs (For Small Local Photos)
1. On your computer, save a photo as JPEG or PNG
2. Go to https://www.base64-image.de/
3. Upload your photo
4. Copy the entire Base64 string (starts with `data:image/`)
5. Paste into the Image URL field

### How to Edit Gallery Photos
1. Click the **pencil icon** to open the editor
2. Go to **Gallery** tab
3. Click in the caption or URL field to edit
4. Changes appear **instantly** in the preview
5. Click **Save Changes** to keep them

### How to Delete a Photo
1. Open the editor → **Gallery** tab
2. Find the photo you want to remove
3. Click the **Remove** button
4. Click **Save Changes**

---

## Adding Music to the Website

### Method 1: Using an Audio URL (Easiest)
1. Click the **pencil icon** to open the editor
2. Go to the **Basic Info** tab
3. Find these fields:
   - **Music Track URL**: Paste the direct link to an audio file
   - **Music Track Title**: Give the song a name (e.g., "Our Love Song")

### Where to Get Music URLs

#### Option A: Free Music Sites
- **Free Music Archive**: https://freemusicarchive.org
  - Search for royalty-free music
  - Right-click the download link → Copy link address
  - Choose MP3 format

- **Incompetech**: https://incompetech.com/music/
  - Free royalty-free background music
  - Right-click download → Copy link address

- **YouTube Audio Library** (if you have a Google account):
  - Go to https://www.youtube.com/audiolibrary
  - Search for music
  - Click the download icon
  - This downloads the audio file

#### Option B: Upload Your Own Audio File

**Option 1 - Google Drive**:
1. Upload your MP3 or audio file to Google Drive
2. Right-click the file → Get link
3. Set to "Anyone with the link can view"
4. Copy the link
5. Change the URL from `/file/d/[FILE_ID]/view?usp=sharing` to:
   ```
   https://drive.google.com/uc?export=download&id=[FILE_ID]
   ```
   Replace `[FILE_ID]` with the actual ID from your link
6. Paste into the Music Track URL field

**Option 2 - Dropbox**:
1. Upload your MP3 to Dropbox
2. Right-click → Share
3. Get the shared link
4. Modify the URL from `dl=0` to `dl=1` at the end
5. Paste into the Music Track URL field

**Option 3 - File Transfer Site**:
1. Go to https://transfer.sh/
2. Drag and drop your audio file
3. Copy the download link
4. Paste into the Music Track URL field

#### Option C: Use Data URLs (Small Audio Files Only)
1. For very small audio files, convert to Base64:
   - Go to https://www.base64-image.de/ (also works for audio)
   - Upload your audio file (MP3, WAV, etc.)
   - Copy the Base64 string
   - Paste into Music Track URL field
   
*Note: This only works for small files (< 5MB)*

### How to Test Your Music
1. In the editor, paste the music URL in **Basic Info** tab
2. Click **Save Changes**
3. Scroll down to the **Birthday Music** section
4. Click the **▶** (Play) button
5. If it plays, the URL is working!
6. If it doesn't play, the URL might be invalid or blocked by CORS

### Fixing Music URL Problems

**If the music won't play:**

1. **Test the URL in your browser**:
   - Paste the URL directly in your address bar
   - If it downloads instead of playing, it's a format issue

2. **Try a different hosting site**:
   - Google Drive, Dropbox, or transfer.sh usually work better

3. **Check file format**:
   - Make sure it's MP3, OGG, WAV, or M4A
   - Not all audio formats are supported in browsers

4. **CORS Issue**:
   - Some sites block audio playback from other websites
   - If this happens, re-host the file on a CORS-friendly service like:
     - Google Drive
     - Dropbox
     - transfer.sh

---

## Complete Example: Adding Your First Photo and Song

### Step 1: Add a Photo
1. Click the **pencil icon** (✎)
2. Go to **Gallery** tab
3. Click **+ Add Photo**
4. Paste this URL: `https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80`
5. Caption: "Us at the beach"
6. Click **Save Changes**
7. The photo now appears in the gallery!

### Step 2: Add Music
1. Click the **pencil icon** (✎)
2. Go to **Basic Info** tab
3. Music Track URL: Paste a free music URL from https://freemusicarchive.org
4. Music Track Title: "Our Song"
5. Click **Save Changes**
6. Scroll to **Birthday Music** section
7. Click the **▶** play button

---

## Tips and Tricks

### Organizing Multiple Photos
- The gallery shows photos in the order you added them
- You can rearrange by removing and re-adding photos in your desired order
- Or export to JSON, edit the order manually, and import back

### Using Your Own Photos from Phone
1. Email yourself the photos from your phone
2. Download them to your computer
3. Upload to Imgur or ImgBB
4. Copy the image URL
5. Paste into the birthday site editor

### Preview Before Saving
- As you edit the Image URL, the gallery updates in real-time
- You can see exactly how the photo looks before saving

### Backup Your Content
- Regularly click **Export Content to JSON**
- Save the downloaded file to your computer
- If anything goes wrong, use **Import Content from JSON** to restore

### Using Multiple Music Tracks
- The site currently supports one music track
- If you want to change the song later, just update the Music Track URL in the editor

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Photo shows a broken image | Check the URL starts with `http://` or `https://` |
| Photo loads but looks pixelated | The image URL might be low resolution; try a different size |
| Music won't play | Try a different hosting service like Google Drive or Dropbox |
| Music plays but is very quiet | Some audio files have low volume; adjust in your audio editor before uploading |
| Editor changes don't save | Make sure you click **Save Changes**, not just close the editor |
| Photos disappeared after refresh | Browser LocalStorage was cleared; use your JSON backup to restore |

---

## Best Practices

✅ **Use HTTPS URLs** (starting with `https://` not `http://`)
✅ **Keep image file sizes reasonable** (< 2MB per image)
✅ **Use MP3 format for music** (most compatible with browsers)
✅ **Test each photo URL** before saving to ensure it works
✅ **Export JSON backups** regularly to protect your edits
✅ **Use descriptive captions** for photos

❌ **Don't use local file paths** like `C:\Users\...` (won't work)
❌ **Don't expect old URLs to work forever** (links can break)
❌ **Don't upload very large files** (> 10MB audio will load slowly)
❌ **Don't store sensitive personal info** (it's stored in browser LocalStorage, which can be accessed)

---

That's it! Now you know how to add photos and music to your birthday website. 🎉💕
