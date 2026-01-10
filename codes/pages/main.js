//Add header and footeur

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

    setTimeout(() => {
      button.classList.remove('running');
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
      Toast.fire({
        theme: "dark",
        icon: "success",
        title: "Email berhasil terdaftar!"
      });
    }, 500);
    });
});
