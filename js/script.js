// Drop down navigation

function toggleMenu(){
    var _menu = document.getElementById("dropdownnav");
    var _navicon = document.getElementById("navicon");
    if (_menu.classList.contains("dropdownnavopen")){
     _menu.classList.remove("dropdownnavopen");
    _menu.classList.add("dropdownnavclose");
    _navicon.src="img/hamburger.png";
    } else{
        
        _menu.classList.add("dropdownnavopen");
        _menu.classList.remove("dropdownnavclose");
        _navicon.src="img/hamburgerx.png";
    }
}

// Illustrator

var illpics=[
    
    "animalicon01.png",
    "animalicon02.png",
    "animalicon03.png",
    "macaroon.png"
    
]

// Photoshop

var phopics=[
    
    "oldphoto.png",
    "SpacePoster(1).png",
    "tutorial12(!).png"
    
]

// Code
var codepics=[
    
    "contactcard.png",
    "gallery.png",
    "likebutton.png",
    "tvisbroken.png"
    
]

var codepicslink={
    
    "contactcard.png": "http://www.facebook.com",
    "gallery.png": "http://www.google.com",
    "likebutton.png": "http://www.twitter.com",
    "tvisbroken.png": "http://www.instagram.com"
    
    
    
}

// Photography

var photopics=[
    
    "oldphoto.png",
    "SpacePoster(1).png",
    "tutorial12(!).png"
    
]
    
    


function main(){
    
    // Illustrator
    document.getElementById("illbuttonleft").onclick=function(){
        var tempimage = illpics.pop()
        illpics.unshift(tempimage)
        
        var image=illpics[0]
        document.getElementById("illpics").src="img/graphic/ill/" + image
    }
    
    document.getElementById("illbuttonright").onclick=function(){
        var tempimage = illpics.shift()
        illpics.push(tempimage)
        
        var image=illpics[0]
        document.getElementById("illpics").src="img/graphic/ill/" + image
    }
    
    // Photoshop
    document.getElementById("phobuttonleft").onclick=function(){
        var tempimage = phopics.pop()
        phopics.unshift(tempimage)
        
        var image=phopics[0]
        document.getElementById("phopics").src="img/graphic/pho/" + image
    }
    
    document.getElementById("phobuttonright").onclick=function(){
        var tempimage = phopics.shift()
        phopics.push(tempimage)
        
        var image=phopics[0]
        document.getElementById("phopics").src="img/graphic/pho/" + image
    }
    
    // Coding pics
    document.getElementById("codebuttonleft").onclick=function(){
        var tempimage = codepics.pop()
        codepics.unshift(tempimage)
        
        var image=codepics[0]
        document.getElementById("codepics").src="img/webdev/" + image
        document.getElementById("codepicslink").href=codepicslink[image]
    }
    
    document.getElementById("codebuttonright").onclick=function(){
        var tempimage = codepics.shift()
        codepics.push(tempimage)
        
        var image=codepics[0]
        document.getElementById("codepics").src="img/webdev/" + image
    }
    
    // Photography
    document.getElementById("photobuttonleft").onclick=function(){
        var tempimage = photopics.pop()
        photopics.unshift(tempimage)
        
        var image=photopics[0]
        document.getElementById("photopics").src="img/graphic/pho/" + image
    }
    
    document.getElementById("photobuttonright").onclick=function(){
        var tempimage = photopics.shift()
        photopics.push(tempimage)
        
        var image=photopics[0]
        document.getElementById("photopics").src="img/graphic/pho/" + image
    }
    
    
}


// VIDEOGRAPHY

const _video = document.getElementById('video-player'),
      _play = document.getElementById('play-video'),
      _mute = document.getElementById('play-sound'),
   _list = document.getElementsByClassName('video-list')[0],
   _mp4 = document.getElementById('mp4-source'),
   _webm = document.getElementById('webm-source'),
       _playicon = document.getElementById('playicon'),
       _muteicon = document.getElementById('muteicon');

_play.addEventListener('click', function(e) {
    if (_video.paused) {
      _video.play();
        _playicon.src = "img/video/pausebutton.png";
        
    } else {
      _video.pause();
        _playicon.src = "img/video/playbutton.png";
    }
});

_mute.addEventListener('click', function(e) {
    if (_video.muted) {
      _video.muted = false;
        _muteicon.src = "img/video/unmutedbutton.png";
        
    } else {
      _video.muted = true;
        _muteicon.src = "img/video/mutebutton.png";
    }
});



_list.addEventListener('click', function(e) {
    console.log(e);
    if (e.target.classList.contains("video-list-item")){
         
        let _othervideo = e.target.getAttribute("data-src"),
            _videomp4 = 'video/' + _othervideo + '.mp4',
            _videowebm = 'video/' + _othervideo + '.webm',
            poster = 'img/video/' + _othervideo + '.jpg';
        
        _video.setAttribute('poster', poster);
        _mp4.setAttribute('src', _videomp4);
        _webm.setAttribute('src', _videowebm);
        _playicon.src = "img/video/playbutton.png";
        
        _video.load();
    }

}); 
