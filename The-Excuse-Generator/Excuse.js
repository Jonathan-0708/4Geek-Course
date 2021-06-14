window.onload = () => {
    document.querySelector ('#excuse').innerHTML = generateExcuse();
    
}

let generateExcuse =  () => {
    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
    

    let whoindex = Math.floor (Math.random()*who.length);
    let whatindex = Math.floor (Math.random()*what.length);
    let whenindex = Math.floor (Math.random()*when.length);


    return who [whoindex] + '     ' + what [whatindex] + '     ' + when [whenindex];

}