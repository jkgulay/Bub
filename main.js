$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

$(document).ready(function () {
  setTimeout(function () {
    $("#preloader").fadeOut("slow");
  }, 3000);

  const envelope = $("#envelope");
  const openBtn = $("#openBtn");
  const resetBtn = $("#resetBtn");
  const messageModal = new bootstrap.Modal(
    document.getElementById("messageModal")
  );

  const valentineMessage = `grabe ka, wa jud ko nag-expect ug flowers, but you did that. 😭 you always find a way to make me feel special, in ways nga di nako ginapangayo pero ginahatag nimo wholeheartedly. i never thought i'd be the type to receive flowers, but here i am, smiling like an idiot kay kabalo ko nga gikan saimoha. so i made this simple digital coded letter to appreciate you. 😚 this is my way of giving back sa gamay lang nga paagi, kay gusto nako ipakita how much i cherish everything you do for me. every effort, every moment nga imohang gi-spend para sa akoa, it all means so much more than you think.

thank you, bub, not just for today but for always making me feel loved in ways nga di lang words but through actions, through the small and big things nga ginabuhat nimo para sa akoa. you don’t know how much i appreciate you, how much i cherish having you in my life.

you make every day feel like valentine’s day, bub. di lang karon, di lang sa mga special occasions, but in the way you love me every single day. and i hope you know nga i’ll always do the same for you. ikaw ra, bub. always.`;

  $(".message-content").text(valentineMessage);

  function openEnvelope() {
    envelope.removeClass("close").addClass("open");
    openBtn.text("Close");

    setTimeout(() => {
      messageModal.show();
    }, 1000);
  }

  function closeEnvelope() {
    envelope.removeClass("open").addClass("close");
    openBtn.text("Open");
  }

  openBtn.click(function () {
    if (envelope.hasClass("close")) {
      openEnvelope();
    } else {
      closeEnvelope();
    }
  });

  resetBtn.click(function () {
    closeEnvelope();
    messageModal.hide();
  });

  $(".heart").each(function (index) {
    $(this).css({
      animation: `float ${5 + index}s ease-in-out infinite`,
      "animation-delay": `${index * 0.1}s`,
    });
  });
});

const style = document.createElement("style");
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
    }
`;
document.head.appendChild(style);


function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
  }
  
  setInterval(createHeart, 300);