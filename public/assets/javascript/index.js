$(".nav-btn").hide();

let loadIndex = () => {
    let i = 0;
    let txt = 'This is J-Mo; he writes stuff.  Mostly code, but sometimes sonnets.  Connect with him, so he can write something for you.'; 
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("text-area").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
      }
  
      if (i >= txt.length) {
        $(".nav-btn").show("puff", 300);
      }
    }
  
    typeWriter();
  }

loadIndex();