const scriptURL = 'https://script.google.com/macros/s/AKfycbx4N0NuPF7NNtnQ1y6S1bgh79jxJeAePsTBS5ypNXcb0Y8huWVD_DRGdOUTSmUB-1i-4A/exec'
const form = document.forms['form-daftar']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const tempatAlert = document.querySelector('.alert-form')

form.addEventListener('submit', e => {
  e.preventDefault()
  // tampilkan btn loading, hapus btn kirim
  btnKirim.classList.toggle('d-none')
  btnLoading.classList.toggle('d-none')
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      btnKirim.classList.toggle('d-none')
      btnLoading.classList.toggle('d-none')
      tempatAlert.innerHTML = `
        <div class="alert alert-primary alert-dismissible fade show alert-berhasil" role="alert">
          Data berhasil dikirim!!!!!
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `
      form.reset();
      console.log('Success!', response)
  })
  .catch(error => console.error('Error!', error.message))
})