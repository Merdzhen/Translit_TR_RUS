let inputText = document.getElementById('input-form')
let addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', event => {
  event.preventDefault();
  
  //left side
  let inputTextValue = inputText.value;
  let vocabularyTextRus = document.createElement('div');
  vocabularyTextRus.textContent = `${inputTextValue}`;
  vocabularyTextRus.style.overflowX = 'hidden';
  vocabularyTextRus.style.textOverflow = 'ellipsis'; 

  let vocabularyRus = document.getElementById('vocabulary-rus');
  vocabularyRus.append(vocabularyTextRus);

  //right side
  let trRus = {
    A: "А",
    B: "Б",
    C: "Дж",
    Ç: "Ч",
    D: "Д",
    E: "Е",
    F: "Ф",
    G: "Г",
    Ğ: "",
    H: "Х",
    I: "Ы",
    İ: "И",
    J: "Ж",
    K: "К",
    L: "Л",
    M: "М",
    N: "Н",
    O: "О",
    Ö: "О",
    P: "П",
    R: "Р",
    S: "С",
    Ş: "Ш",
    T: "Т",
    U: "У",
    Ü: "Ю",
    V: "В",
    Y: "Й",
    Z: "З",
    W: "В",
    Q: "Кв",
    a: "а",
    b: "б",
    c: "дж",
    ç: "ч",
    d: "д",
    e: "е",
    f: "ф",
    g: "г",
    ğ: "",
    h: "х",
    ı: "ы",
    i: "и",
    j: "ж",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    ö: "о",
    p: "п",
    r: "р",
    s: "с",
    ş: "ш",
    t: "т",
    u: "у",
    ü: "ю",
    v: "в",
    y: "й",
    z: "з",
    w: "в",
    q: "кв",
  };

  const translit = (str) => {
    let result ="";
    for (let i = 0; i < str.length; i++) {
      if (str[i] in trRus) {
        result += trRus[str[i]];
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
