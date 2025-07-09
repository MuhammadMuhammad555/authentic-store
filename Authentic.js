 AOS.init({
      duration: 600,
      once: false,
      mirror: true,
    });



 const text = "New arrivals";
  const heading = document.getElementById("heading-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      heading.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100);
    } else {
      heading.style.borderRight = "none";
    }
  }

  window.onload = type;




   let item = document.querySelectorAll('.slider .item');
        let next = document.getElementById('next');
        let previous = document.getElementById('previous');


        let active = 3;

         function loadshow() {
            let stt = 0;
             item[active].style.transform = `none`;
             item[active].style.zIndex = 1;
             item[active].style.filter = `none`;
             item[active].style.opacity = 1;
            for( var i = active + 1; i < item.length; i++){
                stt++;
                item[i].style.transform = `translateX(${ 120 * stt}px) scale(${1- 0.2*stt}) perspective(16px) rotateY(-1deg)`;
                item[i].style.zIndex = -stt;
                 item[i].style.filter = `blur(5px)`;
                  item[i].style.opacity = stt > 2 ? 0: 0.6;
            }
            stt = 0;
            for( var i = active - 1; i >= 0; i--){
                stt++;
                item[i].style.transform = `translateX(${-120 * stt}px) scale(${1- 0.2*stt}) perspective(16px) rotateY(1deg)`;
                item[i].style.zIndex = -stt;
                 item[i].style.filter = `blur(5px)`;
                  item[i].style.opacity = stt > 2 ? 0: 0.6;
            }
        }
        loadshow();

        next.onclick = function(){
            active =  active + 1 < item.length ? active + 1 : active;
             loadshow();
        }
        previous.onclick = function(){
            active =  active - 1 >= 0 ? active - 1 : active;
             loadshow();
        }


        const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
