const button = document.getElementById("countButton")
const lettersDiv = document.getElementById("lettersDiv")
const wordsDiv = document.getElementById("wordsDiv") 

function findIndexArr(arr, x){
    if(arr.length==false){
        return false
    }
    for(let i=0;i<arr.length;i++){
        const index = arr[i].indexOf(x)                    
        if(index == 0){            
            return i
        }            
    }
    return false
} 

function countWords(arr){
    let words = []
    words.push([arr[0],0])      
    for(let i=0;i<arr.length;i++){      
        if (words[0][0]==arr[i]){           
            words[0][1] += 1
        } else if (findIndexArr(words, arr[i])==false){
           words.push([arr[i],1])      
        } else {
            words[findIndexArr(words, arr[i])][1] += 1
        }       
    }
    if(words[(words.length-1)][0]===""){
        words.pop
    }
    return words
}

button.addEventListener("click", function() {      
    let typedText = document.getElementById("textInput").value 
    typedText = typedText.toLowerCase();    
    typedText = typedText.replace(/[^a-z'\s]+/g, "")
    const mainWordsArr = typedText.split(" ")
    const mainLettersArr = typedText.split("")
    const letterCounts = countWords(mainLettersArr)
    const wordCounts = countWords(mainWordsArr)

    const elementPLetters = document.createElement("p")
    elementPLetters.innerText = ""
    for(let i=0;i<letterCounts.length;i++){
        const currentItem = letterCounts[i]
        elementPLetters.innerText += "\""+currentItem[0]+"\":"+currentItem[1]+", "        
    }
    lettersDiv.appendChild(elementPLetters)   
    elementPLetters.style.textAlign = "justify" 

    const elementPWords = document.createElement("p")
    elementPWords.innerText = ""
    for(let i=0;i<wordCounts.length;i++){
        const currentItem = wordCounts[i]
        elementPWords.innerText += "\""+currentItem[0]+"\":"+currentItem[1]+", "        
    }
    wordsDiv.appendChild(elementPWords)
    elementPWords.style.textAlign = "justify"     
})