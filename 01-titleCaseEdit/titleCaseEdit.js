function titleCaseEdit(title) {
  title = title.split(' ');
  let results = [];
  for (let i = 0; i < title.length; i++) {
    let letter = title[i].charAt(0).toUpperCase();
    results.push(letter + title[i].slice(1));
  }
  return results.join(' ');
}
module.exports = titleCaseEdit;
