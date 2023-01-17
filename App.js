let input = document.getElementById('input')
// let btn = document.getElementById('btn')
let def = document.getElementById('def')
let def1 = document.getElementById('def1')
let syn = document.getElementById('syn')
let word = document.getElementById('word')
let part = document.getElementById('part')
let part1 = document.getElementById('part1')
let phonetic = document.getElementById('phonetic')
let phonetic1 = document.getElementById('phonetic1')





let dictionary = [
    {
        word:'Man',
        def:'First creature on earth',
        syn:'okurin,daddy'
    },
    {
        word:'Sapa',
        def:'act of being broke',
        syn:'shege,wahala,'
    },
    {
        word:'Bumbum',
        def:'the backside of a female',
        syn:'yansh,bunda,idi'
    },
    {
        word:'Goat',
        def:'greatest of all time',
        syn:'ronaldo,suiii'
    },
    {
        word:'Floor',
        def:'where we match',
        syn:'ground'
    },
]

btn.addEventListener('click',()=>{
 


    // let result = dictionary.find((dict)=>dict.word.toLocaleLowerCase() == inputVal)
    // if (result) {
    //     word.textContent = result.word
    //     def.textContent = result.def
    //     syn.textContent = result.syn   
    // }
    


})



function Search() {
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

    let inputVal = String(input.value ).trim().toLocaleLowerCase()
    if (inputVal == '') {
       alert('input cant be empty')
    }

    fetch(`${url}${inputVal}`)
    .then(response => response.json())
    .then(data =>{ 
        console.log(data)
        def.textContent = data[0].meanings[0].definitions[0].definition 
        part.textContent = data[0].meanings[0].partOfSpeech
        syn.textContent = data[0].meanings[0].synonyms
        word.textContent = data[0].word
        phonetic.textContent = data[0].phonetic

    });
}

