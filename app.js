var btn= document.querySelector("#btn");
var txtInput= document.querySelector("#txt-input");
var output= document.querySelector("#output");
var serverURL= "https://api.funtranslations.com/translate/valyrian.json";


function getTranslationURL(text){
  return serverURL+"?"+"text="+ text
}

function errorHandler(error){
  console.log("error occured",error)
  alert("something wrong with server! please try again later")
}

btn.addEventListener("click",function clickEventHandler()
{
var inputText = txtInput.value;

fetch(getTranslationURL(inputText))
  .then(response=> response.json())
  .then(json=>{
    var translatedText = json.contents.translated;
    output.innerText = translatedText;
  })
  .catch(errorHandler)
})
