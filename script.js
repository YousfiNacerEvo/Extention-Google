const googleHerf = document.querySelector("#google-href");
const wikiHref = document.querySelector("#wiki-href");
const input = document.querySelector("input");


googleHerf.addEventListener("click",searchWithGoogle);
wikiHref.addEventListener("click",searchWithWiki);

function searchWithGoogle(){
    let googleUrl = "https://www.google.com/search?q="+encodeURIComponent(input.value);
    chrome.tabs.create({url: googleUrl})

}
function searchWithWiki(){
    let wikiUrl = "https://fr.wikipedia.org/wiki/"+input.value;
    chrome.tabs.create({url: wikiUrl});
}