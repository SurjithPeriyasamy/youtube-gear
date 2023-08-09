const GOOGLE_API_KEY = "AIzaSyDqVlJVfSIrLudoFE_15M0m8WnnVmqvd1w";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const CATEGORIES_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key= " +
  GOOGLE_API_KEY;

export const SUGGEST_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=" +
  GOOGLE_API_KEY;
