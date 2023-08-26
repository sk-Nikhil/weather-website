
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


const submit = (location) => {
  fetch(`http://localhost:3100/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        // console.log(data.error);
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    });
  });
};

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");


weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = search.value;
  messageOne.textContent = "loading..."
  messageTwo.textContent = ''
  submit(location)
});
