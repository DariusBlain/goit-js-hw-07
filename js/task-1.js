const categoriesList = document.querySelector('#categories');

const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const title = item.querySelector('h2');
  const subItems = item.querySelectorAll('li');

  console.log(`Category: ${title.textContent}`);
  console.log(`Number of items: ${subItems.length}`);
});
