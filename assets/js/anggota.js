//list anggota langsung
const apikey = 'ab362fa3-9f25-4f9f-abf1-48b7d5fa34c4';
let output=``;
function dataAnggota() {
    fetch(`https://api.kontenbase.com/query/api/v1/`+apikey+`/Anggota?$sort[TahunAngkatan]=1`)
    .then(response => response.json())
    .then(data => {
        data.forEach((user) => {
            output += `
                <tr>
                  <th>${user.Nama}</th>
                    <td>${user.Nim}</td>
                    <td>${user.Fakultas.value}</td>
                    <td>${user.Prodi.value}</td>
                    <td>${user.JenisKelamin.value}</td>
                    <td>${user.TahunAngkatan.value}</td>
                    <td>${user.Jabatan.value}</td>
                </tr>
            `;
        });
        document.getElementById('data').innerHTML = output; 
    })
    .catch(err => {
        console.log(err)
    });
}
dataAnggota();

// search anggota
const input = document.getElementById('inputnim');
const searchButton = document.getElementById('btn-search');
const alertSearch = document.getElementById('alertSearch');
const tempatAlert = document.getElementById('alert-anggota');
searchButton.addEventListener('click', () => {
  const inputValue = input.value;
  tempatAlert.innerHTML = ``;
  if (inputValue===""){
    tempatAlert.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert" id="alertSearch">
                Masukkan NIM Anda!!!!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div
    `
  } else if (inputValue <= 9999999999){
    tempatAlert.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert" id="alertSearch">
                NIM Anda Selalu 11 Digit!!!!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div
    `
  } else{
    output='';
      fetch(`https://api.kontenbase.com/query/api/v1/`+apikey+`/Anggota?Nim=`+inputValue)
        .then(response => response.json())
        .then(data => {
            if (data.length===0) {
                tempatAlert.innerHTML = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert" id="alertSearch">
                            Data Kosong!!!!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div
                `
            }
            data.forEach((user) => {
                output += `
                    <tr>
                      <th>${user.Nama}</th>
                        <td>${user.Nim}</td>
                        <td>${user.Fakultas.value}</td>
                        <td>${user.Prodi.value}</td>
                        <td>${user.JenisKelamin.value}</td>
                        <td>${user.TahunAngkatan.value}</td>
                        <td>${user.Jabatan.value}</td>
                    </tr>
                `;
            });
            document.getElementById('data').innerHTML = output; 
        })
        .catch(err => {
            console.log(err)
        });
  }
});


