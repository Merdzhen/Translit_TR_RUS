let inputText = document.getElementById('input-form')
let addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', event => {
  event.preventDefault();
  
  //left side
  let inputTextValue = inputText.value;
  let vocabularyTextRus = document.createElement('div');
  vocabularyTextRus.textContent = `${inputTextValue}`;
  vocabularyTextRus.style.overflowX = 'hidden';
  vocabularyTextRus.style.textOverflow = 'ellipsis'; //Release7

  let vocabularyRus = document.getElementById('vocabulary-rus');
  vocabularyRus.append(vocabularyTextRus);

  //right side
  let trRus = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "j",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "ts",
    ч: "ç",
    ш: "ş",
    щ: "şç",
    ъ: "",
    ы: "ı",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  const translit = (str) => {
    let result ="";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase() && str[i].toLowerCase() in trRus) {
        result += trRus[str[i]];
      } else if (str[i] === str[i].toUpperCase() && str[i].toLowerCase() in trRus) {
        result += trRus[str[i].toLowerCase()].toUpperCase();
      } else {
        result += str[i];
      }
    }
    return result;
  };

  let vocabularyTextEn = document.createElement('div');
  vocabularyTextEn.textContent = `${translit(inputTextValue)}`;
  vocabularyTextEn.style.overflowX = 'hidden';
  vocabularyTextEn.style.textOverflow = 'ellipsis';

  let vocabularyEn = document.getElementById('vocabulary-en');
  vocabularyEn.append(vocabularyTextEn);

});
