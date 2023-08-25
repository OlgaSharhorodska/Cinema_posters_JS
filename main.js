// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

// *********************** Кнопка "Load More" ************************** \\

function serviceFilms(currentPage = "1") {
    const params = new URLSearchParams({
        page: currentPage,
        api_key: `345007f9ab440e5b86cef51be6397df1`,
    });
    return fetch(
        `https://api.themoviedb.org/3/trending/movie/week?${params}`
    ).then((resp) => {
        if (!resp.ok) {
            throw new Error("Error")
        };
        return resp.json()

    });

    // fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=345007f9ab440e5b86cef51be6397df1&page=${page}`)
}

// Перевірка на виникнення помилки

// serviceFilms(2)
//   .then((data) => {
//     console.log(data);
//     if ("success" in data && !data.success) {
//       // !data.success => data.success === false
//       throw new Error(data.status_message);
//     }
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

serviceFilms().then(data => console.log(data)).catch(err => console.log(err));




