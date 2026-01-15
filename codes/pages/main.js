//Add header and footeur

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

fetch('../header/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
});

fetch('../footer/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;

    const button = document.getElementById('emailsubmit');
    button.addEventListener('click', () => {
    button.classList.add('running');
    let userAddress = document.getElementById("emailform").value;

    setTimeout(() => {
      button.classList.remove('running');
      if (validateEmail(userAddress) === true ) {
        Toast.fire({
          theme: "dark",
          icon: "success",
          title: "Email berhasil terdaftar!"
        });
      } else {
        Toast.fire({
          theme: "dark",
          icon: "error",
          title: "Email tidak valid"
        });
      }
    }, 500);
    
    });
});
