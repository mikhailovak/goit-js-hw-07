//З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

//додати кількість li.item - done
//текст кожного заголовка texContent в консоль
//кількість елементів у категорії в консоль

const cat = document.querySelectorAll(".item");

function getCatDetails() {
    console.log(`Number of categories: ${cat.length}`);    

    cat.forEach(item => {
        const title = item.querySelector(".title")
        console.log(`Category: ${title.textContent}`);
        const subItem = item.querySelector(".sub-item")
        console.log(`Elements: ${subItem.children.length}`);
    });
    
}

getCatDetails();