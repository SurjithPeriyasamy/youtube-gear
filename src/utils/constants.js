const GOOGLE_API_KEY = "AIzaSyDJbwbfxNRjS2scYESpxi1yDYA-L0HHc1A";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const CATEGORIES_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key= " +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const WATCH_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const SEARCH_RESULT_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

export const LIVE_CHAT_COUNT = 20;

export const USER_PROFILE =
  "https://img.freepik.com/free-icon/user_318-875902.jpg?t=st=1692357062~exp=1692357662~hmac=8cf8277d08b94b679424ab518da76bc8a9b58f40186fbebb1147fee2ae8436d9";

export const DEFAULT_PROFILE =
  "https://img.freepik.com/free-icon/user_318-504048.jpg?t=st=1692424418~exp=1692425018~hmac=bede93fb24b4fc5cd4b9abe4a6146b8b037c3be765c706bba5586b36f8813427";
