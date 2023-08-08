const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswer = document.getElementById('poll__answers');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
xhr.responseType = 'json';

xhr.addEventListener('load', e => {
    let title = xhr.response.data.title;
    let answers = xhr.response.data.answers;

    pollTitle.textContent = title;
      
    for (let i = 0; i< answers.length;i++){
        pollAnswer.insertAdjacentHTML(
            "afterBegin",
            `<button class="poll__answer">
            ${answers[i]}
            </button>`
        )
    }

    const pollAnswers = Array.from(document.querySelectorAll(".poll__answer"));    
    
    pollAnswers.forEach(el => {
        el.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        })
    })
      e.preventDefault();
});

xhr.send();