document.getElementById("about-btn").addEventListener("click", function() {
    // Show the About Me section and hide the Technologies section
    document.getElementById("about-section").style.display = "block";
    document.getElementById("technologies-section").style.display = "none";
  });
  
  document.getElementById("technologies-btn").addEventListener("click", function() {
    // Show the Technologies section and hide the About Me section
    document.getElementById("about-section").style.display = "none";
    document.getElementById("technologies-section").style.display = "block";
  });
  