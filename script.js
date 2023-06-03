const searchInput = document.getElementById("search");
const apiKey = "AIzaSyBeLHDDhdPkQzk9rGH4OZiNXTMcBaNQsKo";
const container = document.getElementById("container");
/**https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=nrendramodi&key=AIzaSyAVvIhLP89lod5lzMzZXV3MSVkAb8j4LoY */
/**'https://youtube.googleapis.com/youtube/v3/search?part=snippet&forMine=true&maxResults=25&q=fun&type=video&key=[YOUR_API_KEY] */
function searchVideos() {
  let searchValue = searchInput.value;
  // fetch the list of video for this search value;
  fetchVideos(searchValue);
}

async function fetchVideos(searchValue) {
  let endpoint = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&forMine=true&maxResults=25&q=${searchValue}&type=video&key=${apiKey}`;
  try {
    let response = await fetch(endpoint); // response is instance of response class
    let result = await response.json();
    showThumbnail(result.items);
    console.log(result);
  } catch (error) {
    alert("something went wrong");
  }
}

function showThumbnail(items) {
  for (let i = 1; i < items.length; i++) {
    let videoItem = items[i];
    let imageurl = videoItem.snippet.thumbnails.high.url;
    let videoElement = document.createElement("div");
    const videoChildren = `
    <img src="${imageurl}"/>
    <p class="title"> ${videoItem.snippet.title}</p>
    <p class="channelTitle"> ${videoItem.snippet.channelTitle}</p>
    
    `;
    videoElement.innerHTML = videoChildren;
    container.append(videoElement);
  }
}

/** 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&forMine=true&maxResults=25&q=fun&type=video&key=[YOUR_API_KEY]'  */
