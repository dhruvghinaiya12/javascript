let likeCount = Number(localStorage.getItem("likeCount") || 0);
const likeCountSpan = document.getElementById("LikeCount");
likeCountSpan.innerHTML = likeCount;
document.getElementById("like").addEventListener("click", () => {
  likeCount ++;
  likeCountSpan.innerHTML = likeCount;
  localStorage.setItem("likeCount", likeCount);
});

let CommentCount = Number(localStorage.getItem("commentCount")|| 0);
const commentCountSpan = document.getElementById("CommentCount");
commentCountSpan.innerHTML = CommentCount;
document.getElementById("comment").addEventListener("click", () => {
  CommentCount ++;
  commentCountSpan.innerHTML = CommentCount;
  localStorage.setItem("commentCount", CommentCount);
});

let shareCount = Number(sessionStorage.getItem("share")|| 0);
const shareCountSpan = document.getElementById("ShareCount");
shareCountSpan.innerHTML = shareCount;

document.getElementById("share").addEventListener("click", () => {
  shareCount++;
  shareCountSpan.innerHTML = shareCount;
  sessionStorage.setItem("share", shareCount);
});

let downloadCount = Number(sessionStorage.getItem("downloadCount")|| 0);
const downloadCountSpan = document.getElementById("DownloadCount");

downloadCountSpan.innerHTML = downloadCount;

document.getElementById("download").addEventListener("click", () => {
    downloadCount ++;
  downloadCountSpan.innerHTML = downloadCount;
  sessionStorage.setItem("downloadCount", downloadCount);
});