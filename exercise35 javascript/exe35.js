function insert() {
  let image = document.querySelector("#image");

  let massage = prompt("Enter your new image URL:");
  image.setAttribute('src', massage);


  massage = prompt("Enter the border color of your image:");
  image.style.border = `2px solid ${massage}`;
  massage = prompt("Enter your image width in pixels:");
  image.style.width = `${massage}px`;
  massage = prompt("Enter your image height in pixels:");
  image.style.height = `${massage}px`;
    massage = prompt("Enter your image border radius in pixels:");
    image.style.borderRadius = `${massage}px`;

}
