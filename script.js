


function search() {
  event.preventDefault(); 
  var query = document.getElementById("searchInput").value;
  alert("Searching for: " + query);
}



function subscribe() {
  event.preventDefault(); 
  var email = document.getElementById("emailInput").value;
  alert("Subscribing email: " + email);
  document.getElementById("subscriptionForm").reset();
}




  var likes = 0;

  function toggleCommentBox() {
      var commentBox = document.getElementById("commentBox");
      if (commentBox.style.display === "none") {
          commentBox.style.display = "block";
      } else {
          commentBox.style.display = "none";
      }
  }

  function like() {
      likes++;
      document.getElementById("likeCount").innerText = likes;
  }


  
function shareFacebook() {
window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href));
}

function shareTwitter() {
window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href));
}


function shareWhatsApp() {
var url = encodeURIComponent(window.location.href);
var message = encodeURIComponent("Check out this link: " + url);
window.open('https://api.whatsapp.com/send?text=' + message);
}


document.getElementById('shareBtn').addEventListener('click', function() {
  if (navigator.share) {
      navigator.share({
          title: document.title,
          url: window.location.href
      }).then(() => {
          console.log('Link shared successfully.');
      }).catch((error) => {
          console.error('Error sharing link:', error);
      });
  } else {
      console.warn('Web Share API not supported.');
  
  }
});



