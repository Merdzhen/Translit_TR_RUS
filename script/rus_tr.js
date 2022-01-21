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
  let RusTr = {
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "Yo",
    Ж: "J",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "Ts",
    Ч: "Ç",
    Ш: "Ş",
    Щ: "Şç",
    Ъ: "",
    Ы: "I",
    Ь: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };

  const translit = (str) => {
    let result ="";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase() && str[i].toUpperCase() in RusTr) {
        result += RusTr[str[i]];
      } else if (str[i] === str[i].toLowerCase() && str[i].toUpperCase() in RusTr) {
        result += RusTr[str[i].toUpperCase()].toLowerCase();
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
