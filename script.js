document.addEventListener("DOMContentLoaded", function() {
    var options = {
      strings: ["Frontend Developer"],
      typeSpeed: 100,  // Speed of typing (in ms)
      backSpeed: 50,   // Speed of backspacing (in ms)
      backDelay: 1000, // Delay before starting backspace (in ms)
      startDelay: 500, // Delay before starting the typing effect (in ms)
      loop: true,      // Infinite loop
    };

    var typed = new Typed(".typing", options);
  });