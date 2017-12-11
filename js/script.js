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

function main(){
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
    
    
}