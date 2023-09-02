const boxs = document.querySelectorAll(".box");
const windowHight = window.innerHeight;

Show_hide_boxs();

window.addEventListener("scroll", Show_hide_boxs);

function Show_hide_boxs() {
  boxs.forEach((box) => {
    let current_box_hight = box.getBoundingClientRect().top;
    if (current_box_hight < (windowHight * 4) / 5) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
}
