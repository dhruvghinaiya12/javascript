let likeCount = Number(localStorage.getItem("likeCount") || 0);
const likeCountSpan = document.getElementById("LikeCount");
likeCountSpan.innerHTML = likeCount;
document.getElementById("like").addEventListener("click", () => {
  likeCount++;
  likeCountSpan.innerHTML = likeCount;
  localStorage.setItem("likeCount", likeCount);
});

let commentCount = Number(localStorage.getItem("commentCount") || 0);
const commentCountSpan = document.getElementById("CommentCount");
commentCountSpan.innerHTML = commentCount;
document.getElementById("comment").addEventListener("click", () => {
  commentCount++;
  commentCountSpan.innerHTML = commentCount;
  localStorage.setItem("commentCount", commentCount);
});

let shareCount = Number(sessionStorage.getItem("shareCount") || 0);
const shareCountSpan = document.getElementById("ShareCount");
shareCountSpan.innerHTML = shareCount;

document.getElementById("share").addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: 'Swiss Golden Hour at Edinburgh Castle',
      text: 'Check out this amazing post!',
      url: window.location.href
    }).then(() => {
      shareCount++;
      shareCountSpan.innerHTML = shareCount;
      sessionStorage.setItem("shareCount", shareCount);
    }).catch((error) => {
      console.error('Sharing failed', error);
    });
  } else {
    alert('Web Share API is not supported on your device/browser.');
  }
});


let downloadCount = Number(sessionStorage.getItem("downloadCount") || 0);
const downloadCountSpan = document.getElementById("DownloadCount");
downloadCountSpan.innerHTML = downloadCount;

document.getElementById("bookmark").addEventListener("click", () => {
  downloadCount++;
  downloadCountSpan.innerHTML = downloadCount;
  sessionStorage.setItem("downloadCount", downloadCount);
});

document.getElementById('followBtn').addEventListener('click', function() {
  const btn = this;

  if (btn.classList.contains('following')) {
    btn.classList.remove('following');
    btn.innerHTML = 'Follow';
    btn.style.backgroundColor = '#0095f6';
    btn.style.color = '#fff';
  } else {
    btn.classList.add('following');
    btn.innerHTML = 'Following';
    btn.style.backgroundColor = '#e0e0e0';
    btn.style.color = '#000';
  }
});
