// stampo le varie interrogazioni
console.log($('*'));
console.log($('*').length);

console.log($('*:empty'));
console.log($('*:empty').length);

console.log($('p'));
console.log($('p').length);

console.log($('.blueBg'));
console.log($('.blueBg').length);

console.log($('.redBg'));
console.log($('.redBg').length);

console.log($('article.redBg'));
console.log($('article.redBg').length);

console.log($('#test1'))
console.log($('#test1').length);

console.log($('article[name=topFirst]'));
console.log($('article[name=topFirst]').length);

console.log($('article[name!=topFirst]'));
console.log($('article[name!=topFirst]').length);

console.log($('article[name^=top]'));
console.log($('article[name^=top]').length);

console.log($('article[name^=bottom]'));
console.log($('article[name^=bottom]').length);

console.log($('article[name$=Second]'));
console.log($('article[name$=Second]').length);

console.log($('footer > p'));
console.log($('footer > p').length);

console.log($('article[class]'));
console.log($('article[class]').length);

console.log($('article[id]'));
console.log($('article[id]').length);
