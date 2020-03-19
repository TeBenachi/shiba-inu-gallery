fetch(`https://dog.ceo/api/breed/shiba/images/random`)
  .then(response => response.json())
  .then(data => {
    const { message } = data;

    console.log(message);

    const photo = document.querySelector('.picbox');
    photo.innerHTML = `<img src="${message}" >`
  });