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