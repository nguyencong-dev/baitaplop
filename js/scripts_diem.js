window.onload = function () {
  // ANIMATED MENU
  const nav = document.querySelector("nav");
  const hiden_menu = document.querySelector(".hiden_menu");
  const content = document.querySelector(".content");
  hiden_menu.onclick = function () {
    nav.classList.toggle("hide");
    content.classList.toggle("expand");
  };
  // SEARCH
  let input = document.getElementById("search");
  input.onchange = function () {
    let filter = input.value.toUpperCase();
    let table = document.getElementsByClassName("table_data")[0];
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
      let td = tr[i].getElementsByClassName("monhoc")[0];
      if (td) {
        let txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  // DELETE ROW
  let del = document.getElementsByClassName("delete");
  for (let d of del) {
    d.onclick = function () {
      if (confirm("Bạn có chắc chắn muốn xóa điểm môn này không?")) {
        let row = d.closest("tr");
        if (row) {
          row.parentNode.removeChild(row);
        }
      }
    };
  }

  // EDIT
  let editButtons = document.getElementsByClassName("edit");

  for (let ed of editButtons) {
    ed.onclick = function () {
      let row = ed.closest("tr");
      let cells = row.querySelectorAll("td:not(:last-child)");

      cells.forEach((cell, index) => {
        let currentValue = cell.textContent;
        if(index === 3 || index === 5 || index === 6 ||index ===7)
        cell.innerHTML = `<input style="width:100%" type="text" value="${currentValue}">`;
      });
      row.querySelector(".save").style.display = "inline";
      row.querySelector(".cancel").style.display = "inline";
      row.querySelector(".edit").style.display = "none";
      row.querySelector(".delete").style.display = "none";
    };
  }

  // SAVE
  let saveButtons = document.getElementsByClassName("save");
  for (let sav of saveButtons) {
    sav.onclick = function () {
      let row = sav.closest("tr");
      let cells = row.querySelectorAll("td:not(:last-child)");
      let index = 0;
      for (let cell of cells) {
        let currentText = cell.textContent;
        let input = cell.querySelector("input, select");
        if (input) {
          cell.textContent = input.value;
        }
        index++;
      }
      row.querySelector(".edit").style.display = "inline";
      row.querySelector(".delete").style.display = "inline";
      row.querySelector(".save").style.display = "none";
      row.querySelector(".cancel").style.display = "none";
      alert("Lưu thành công")
    };
  }

  // CANCEL
  let cancelButtons = document.getElementsByClassName("cancel");
  for (let can of cancelButtons) {
    can.onclick = function () {
      let row = can.closest("tr");
      let cells = row.querySelectorAll("td:not(:last-child)");
      let index = 0;
      for (let cell of cells) {
        let input = cell.querySelector("input, select");
        if (input) {
          cell.textContent = input.defaultValue;
        }
        index++;
      }
      row.querySelector(".edit").style.display = "inline";
      row.querySelector(".delete").style.display = "inline";
      row.querySelector(".save").style.display = "none";
      row.querySelector(".cancel").style.display = "none";
    };
  }

  // INSERT NEW ROW
  let insertRow = document.getElementById("new_row");
  insertRow.onclick = function () {
    let table = document
      .getElementsByClassName("table_data")[0]
      .getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();

    // Tạo và thêm các ô vào hàng mới với placeholder
    newRow.insertCell(
      0
    ).innerHTML = "2351050016";
    newRow.insertCell(
      1
    ).innerHTML = "Nguyễn Văn Công";
    newRow.insertCell(
      2
    ).innerHTML = "DH23IT01";
    newRow.insertCell(
      3
    ).innerHTML = `<input style="width:100%" type="text" placeholder="Tên môn học">`;
    newRow.insertCell(4).innerHTML = "Học kì 2";
    newRow.insertCell(5).innerHTML = `<input style="width:100%" type="text" placeholder="Điểm quá trình">`;
    newRow.insertCell(
      6
    ).innerHTML = `<input style="width:100%" type="text" placeholder="Điểm cuối kì">`;
    newRow.insertCell(
      7
    ).innerHTML = `<input style="width:100%" type="text" placeholder="Trung bình">`;

    // Tạo các nút "Edit", "Delete", "Save", và "Cancel"
    newRow.insertCell(8).innerHTML = `
      <button style="display: none" class="edit"><i class="fa-solid fa-pen"></i></button>
      <button style="display: none" class="delete"><i class="fa-solid fa-trash"></i></button>
      <button style="display: inline" class="save"><i class="fa-solid fa-floppy-disk"></i></button>
      <button style="display: inline" class="cancel"><i class="fa-solid fa-ban"></i></button>
    `;

    // Gán sự kiện cho các nút "Edit"
    for (let ed of editButtons) {
      ed.onclick = function () {
        let row = ed.closest("tr");
        let cells = row.querySelectorAll("td:not(:last-child)");
  
        cells.forEach((cell, index) => {
          let currentValue = cell.textContent;
          if(index === 3 || index === 5 || index === 6 ||index ===7)
          cell.innerHTML = `<input style="width:100%" type="text" value="${currentValue}">`;
        });
  
        // Hiển thị và ẩn các nút cần thiết
        row.querySelector(".save").style.display = "inline";
        row.querySelector(".cancel").style.display = "inline";
        ed.style.display = "none";
        row.querySelector(".delete").style.display = "none";
      };
    }

    // Gán sự kiện cho các nút "Delete"
    for (let d of del) {
      d.onclick = function () {
        if (confirm("Bạn có chắc chắn muốn xóa điểm môn này không?")) {
          let row = d.closest("tr");
          if (row) {
            row.parentNode.removeChild(row);
          }
        }
      };
    }
    // Gán sự kiện cho các nút "Save"
    for (let sav of saveButtons) {
      sav.onclick = function () {
        let row = sav.closest("tr");
        let cells = row.querySelectorAll("td:not(:last-child)");
        let index = 0;
        for (let cell of cells) {
          let currentText = cell.textContent;
          let input = cell.querySelector("input, select");
          if (input) {
            cell.textContent = input.value;
          }
          index++;
        }
        row.querySelector(".edit").style.display = "inline";
        row.querySelector(".delete").style.display = "inline";
        row.querySelector(".save").style.display = "none";
        row.querySelector(".cancel").style.display = "none";
        alert("Lưu thành công")
      };
    }

    // Gán sự kiện cho các nút "Cancel"
    for (let can of cancelButtons) {
      can.onclick = function () {
        let row = can.closest("tr");
        let cells = row.querySelectorAll("td:not(:last-child)");
        let index = 0;
        for (let cell of cells) {
          let input = cell.querySelector("input, select");
          if (input) {
            cell.textContent = input.defaultValue;
          }
          index++;
        }
        row.querySelector(".edit").style.display = "inline";
        row.querySelector(".delete").style.display = "inline";
        row.querySelector(".save").style.display = "none";
        row.querySelector(".cancel").style.display = "none";
      };
    }
  };
  // refresh
  let ref = document.getElementById("refresh");
  ref.onclick = function () {
    location.reload();
  };
  // sort
  let sortButton = document.getElementById("sort");
  sortButton.onclick = function () {
    let table = document.querySelector(".table_data");
    let tbody = table.querySelector("tbody");
    let rows = Array.from(tbody.rows);
    let columnIndex = 7;
    let sortedRows = rows.sort((a, b) => {
      let scoreA = parseFloat(a.cells[columnIndex].innerText);
      let scoreB = parseFloat(b.cells[columnIndex].innerText);
      return scoreA - scoreB;
    });
    tbody.innerHTML = "";
    sortedRows.forEach((row) => tbody.appendChild(row));
  };
};