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
    И: "İ",
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
      if (str[i] in RusTr) {
        result += RusTr[str[i]];
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
