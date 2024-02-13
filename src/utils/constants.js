const GOOGLE_API_KEY = "AIzaSyBbUuJfIamY3NNj-FQsI7R-zGpaw4rS5Rs";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const CATEGORIES_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key= " +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&hl=en&q=";

export const WATCH_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const SEARCH_RESULT_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

export const LIVE_CHAT_COUNT = 20;

export const USER_PROFILE =
  "https://cdn-icons-png.flaticon.com/128/9686/9686199.png";

export const DEFAULT_PROFILE =
  "https://img.freepik.com/free-icon/user_318-504048.jpg?t=st=1692424418~exp=1692425018~hmac=bede93fb24b4fc5cd4b9abe4a6146b8b037c3be765c706bba5586b36f8813427";
