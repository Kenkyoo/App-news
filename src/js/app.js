import * as mdb from 'mdb-ui-kit'; // lib
import 'mdb-ui-kit/css/mdb.min.css';
import { format } from 'date-fns';
window.mdb = mdb;

window.addEventListener('DOMContentLoaded', function () {
  createOptions(categories);
  fetchNews(category);
})

const url_base = 'https://newsapi.org/v2/';
const endpoint = 'top-headlines?';
const api_key = '&apiKey=04b80be27a71435480b00af981af7e6d';
const config = 'country=ar&pageSize=50&';
let category = 'general';

document.getElementById('textSelect').addEventListener('change', function () {
  category = this.value;
  fetchNews(category);
});

function fetchNews(category) {
  document.getElementById('spinner').classList.add('visible')
  fetch(`${url_base}${endpoint}${config}category=${category}${api_key}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('articles-container').innerHTML = '';
      console.log(data);
      data.articles.forEach(article => {
        showArticles(article);
      });
    })
    .finally(() => {
      document.getElementById('spinner').classList.remove('invisible')
      document.getElementById('spinner').classList.add('visible')
    })
}

const categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
];


function createOptions(options) {
  options.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option;
    opt.textContent = option;
    document.getElementById('textSelect').appendChild(opt);
  });
}

function showArticles(article) {
  const date = format(article.publishedAt, 'yyyy-MM-dd');
  let articles = `        
        <tr class="slide-up">
          <td scope="row" class="text-nowrap">

            <a href="#" type="button" data-mdb-ripple-init class="btn btn-outline-dark-green btn-sm p-1 m-0 waves-effect">
              <span class="value">${article.source.name}</span>
            </a>
          </td>
          <td class="text-start">
            <a href="${article.url}" class="font-weight-bold blue-text">
              ${article.title}
            </a>
            <div class="my-2">
              <a href="#" class="blue-text">
                <strong>${article.author}</strong>
              </a>
              <span class="badge bg-secondary mx-1">staff</span><span
                class="badge bg-primary mx-1">pro</span><span class="badge bg-warning mx-1">premium</span>
              <span>${date}</span>
              <div></div>
            </div>
          </td>
          <td>
            <a href="#" class="text-dark">
              <span>0</span>
              <i class="fas fa-comments ml-1"></i>
            </a>
          </td>
        </tr>
      `;
    document.getElementById('articles-container').innerHTML += articles;
    setTimeout(slideUp, 100);
}

function slideUp() {
  var slideUpOptions = {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
    reset: true
  };
  ScrollReveal().reveal('.slide-up', slideUpOptions);
}
