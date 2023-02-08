var censoredWords=["sad","bad","mad"];
var customCensoredWords=[];
function censor(inStr)
{
    for(idx in censoredWords)
    {
        inStr=inStr.replace(consoredwords[idx],"****");

    }
    for(_idx in customCensoredWords)
    {
        inStr=inStr.replace(customCensoredWords[idx],"****");
    }
    return inStr;
}
function addCensoredWord(word)
{
    customCensoredWords.push(word);
}
function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}
exports.censore =censore;
exports.addCensoredWord=addCensoredWord;
exports.getCensoredWords=getCensoredWords