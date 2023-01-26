// preloader
const preloader = document.querySelector('.preloader');
const headerItem = document.querySelector('.header-item');
const downloadBtn = document.querySelector('.download-btn');
const portSec = document.getElementById('portfolio');

window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader');
  headerItem.style.display = 'block';
  downloadBtn.style.display = 'block';
  portSec.style.display = 'block';
});

// footer year

const footYear = document.querySelector('.year');

const date = new Date();
const year = date.getFullYear();

footYear.textContent = year;

// scroll

const header = document.querySelector('.header');

const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

const scrollLink = document.querySelectorAll('.scroll-link');

scrollLink.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);

    const element = document.getElementById(id);

    let position = element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// portfolio

const menu = [
  {
    id: 1,
    category: 'HTML/CSS',
    img: './images/tea-station.png',
    title: 'Tea Station',
    site: 'https://comfy-palmier-028786.netlify.app',
    code: 'https://github.com/ebubekeyz/tea-station',
  },
  {
    id: 2,
    category: 'Javascript',
    img: './images/reviews.png',
    title: 'Reviews',
    site: 'https://jazzy-tanuki-aedb40.netlify.app/',
    code: 'https://github.com/ebubekeyz/Basic-Js-Projects',
  },
  {
    id: 3,
    category: 'HTML/CSS',
    img: './images/tour.png',
    title: 'Tour',
    site: 'https://famous-tiramisu-cd1051.netlify.app',
    code: 'https://github.com/ebubekeyz/tour',
  },
  {
    id: 4,
    category: 'Javascript',
    img: './images/videoimg.png',
    title: 'Video',
    site: 'https://melodic-snickerdoodle-c228e1.netlify.app/',
    code: 'https://github.com/ebubekeyz/Basic-Js-Projects',
  },
  {
    id: 5,
    category: 'HTML/CSS',
    img: './images/port.png',
    title: 'Portfolio',
    site: 'https://lucky-crepe-b2d967.netlify.app',
    code: 'https://github.com/ebubekeyz/Portfolio',
  },
  {
    id: 6,
    category: 'Javascript',
    img: './images/todo.png',
    title: 'Todo',
    site: 'https://willowy-florentine-0815ce.netlify.app/',
    code: 'https://github.com/ebubekeyz/Basic-Js-Projects',
  },
];

const portCenter = document.querySelector('.portfolio-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function () {
  displayMenu(menu);
  displayMenuButtons();
});

function displayMenu(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
    <article class="portfolio-item">
            <div class="portfolio-photo">
              <img src= ${item.img} class="portfolio-img" alt="" />
            </div>
            <div class="port-source">
              <a href= ${item.site} class="port-btn port1-btn" target='_blank'>Live Site</a>
              <a href= ${item.code} class="port-btn" target='_blank'>Source Code</a>
            </div>
            <div class="portfolio-text">
              <p> ${item.title} </p>

              <div class="port-menu">
                <span><a href="">${item.category}</a></span>
              </div>
            </div>
          </article>
    `;
  });
  displayMenu = displayMenu.join('');
  portCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join('');

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll('.filter-btn');
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        displayMenu(menu);
      } else {
        displayMenu(menuCategory);
      }
    });
  });
}
