const ratings = document.querySelectorAll('.label');
const card = document.querySelector('.card');
const cardBack = document.querySelector('.back-side');
const ratingMessage = document.getElementById('rating-selected');
const form = document.querySelector('.form')

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (ratingMessage.textContent === "") {
      alert('olá')
    } else {
      cardBack.classList.remove('hidden');
      card.classList.add('hidden');
    }
  });

  ratings.forEach((item) => {
    item.addEventListener("click", () => {
      ratingMessage.innerHTML = item.innerHTML;
      console.log(item.innerHTML)
    });
  });
    

