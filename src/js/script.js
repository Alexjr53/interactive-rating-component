const ratings = document.querySelectorAll('.ratings-btn');
const card = document.querySelector('.card');
const cardBack = document.querySelector('.back-side-card');
const ratingMessage = document.getElementById('rating-selected');
const form = document.querySelector('.form')
const errorMessage = document.querySelector('.error-message')

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (ratingMessage.textContent === "") {
      errorMessage.innerHTML = 'Please select feedback rating before submitting *'
      errorMessage.style.display = 'block'
    } else {
      cardBack.classList.remove('hidden');
      card.classList.add('hidden');
      errorMessage.style.display = 'none'
    }
  });

  ratings.forEach((item) => {
    item.addEventListener("click", () => {
      ratingMessage.innerHTML = item.innerHTML;
      console.log(item.innerHTML)
    });
  });
    

