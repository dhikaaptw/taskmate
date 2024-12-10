// Variabel elemen penting
const form = document.getElementById("form-tugas");
const judulTugas = document.getElementById("judul-tugas");
const tanggalTugas = document.getElementById("tanggal-tugas");
const listTugas = document.getElementById("list-tugas");

// Event listener untuk menambahkan tugas
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const tugas = {
        id: Date.now(),
        judul: judulTugas.value,
        tanggal: tanggalTugas.value,
        selesai: false
    };

    addTaskToList(tugas);
    form.reset();
});

// Menambahkan tugas ke daftar
function addTaskToList(tugas) {
    const li = document.createElement("li");
    li.dataset.id = tugas.id;

    const span = document.createElement("span");
    span.textContent = `${tugas.judul} - ${tugas.tanggal}`;

    const btnSelesai = document.createElement("button");
    btnSelesai.textContent = "Selesai";
    btnSelesai.classList.add("done");
    btnSelesai.addEventListener("click", function() {
        toggleCompleteTask(tugas.id);
    });

    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.classList.add("edit");
    btnEdit.addEventListener("click", function() {
        editTask(tugas.id);
    });

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Hapus";
    btnDelete.classList.add("delete");
    btnDelete.addEventListener("click", function() {
        deleteTask(tugas.id);
    });

    li.appendChild(span);
    li.appendChild(btnSelesai);
    li.appendChild(btnEdit);
    li.appendChild(btnDelete);
    listTugas.appendChild(li);
}

// Menghapus tugas
function deleteTask(id) {
    const tugasElement = document.querySelector(`li[data-id='${id}']`);
    tugasElement.remove();
}

// Menandai tugas selesai
function toggleCompleteTask(id) {
    const tugasElement = document.querySelector(`li[data-id='${id}']`);
    tugasElement.classList.toggle("done");
}

// Mengedit tugas
function editTask(id) {
    const tugasElement = document.querySelector(`li[data-id='${id}']`);
    const span = tugasElement.querySelector("span");
    const newTitle = prompt("Edit Tugas:", span.textContent);
    if (newTitle) {
        span.textContent = newTitle;
    }
}
