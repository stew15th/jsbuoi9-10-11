var dssv = [];
function kiemTraMaSV(newSV, arrSV) {
    var maNewSV = newSV.ma;
    for (let index = 0; index < arrSV.length; index++) {
        var currentSV = arrSV[index];
        if (currentSV.ma == maNewSV) {
            return false;
        }
    }
    return true;
}

function renderTableSV(dssv) {
    var contentHTML = "";

    for (let index = 0; index < dssv.length; index++) {
        var sv = dssv[index];
        contentHTML += `
            <tr>
                <td>${sv.ma}</td>
                <td>${sv.ten}</td>
                <td>${sv.email}</td>
                <td>${sv.ngaySinh}</td>
                <td>${sv.khoaHoc}</td>
                <td>${sv.tinhDTB()}</td>
                <td><button class="btn btn-success" onclick="suaSV('${
                    sv.ma
                }')">Sửa</button>
                <button class="btn btn-danger" onclick="xoaSV('${
                    sv.ma
                }')">Xóa</button>
                </td>
            </tr>
        `;
    }
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
function luuLocalStorage(arr) {
    var dssvJSON = JSON.stringify(arr);

    localStorage.setItem("dssvLocal", dssvJSON);
}

function themSV() {
    var sinhVien = layThongTin();
    let checkMaSV = kiemTraMaSV(sinhVien, dssv);

    if (checkMaSV) {
        dssv.push(sinhVien);
        luuLocalStorage(dssv);
    }
    renderTableSV(dssv);
}

function timViTri(maSV, arr) {
    var viTri = -1;
    for (let index = 0; index < arr.length; index++) {
        const sv = arr[index];
        if (sv.ma.toString() === maSV.toString()) {
            viTri = index;
        }
    }
    return viTri;
}

function suaSV(maSV) {
    var viTri = timViTri(maSV, dssv);

    if (viTri !== -1) {
        var currentSv = dssv[viTri];
        document.getElementById("txtMaSV").value = currentSv.ma;
        document.getElementById("txtMaSV").disabled = true;
        document.getElementById("txtTenSV").value = currentSv.ten;
        document.getElementById("txtEmail").value = currentSv.email;
        document.getElementById("txtPass").value = currentSv.matKhau;
        document.getElementById("txtNgaySinh").value = currentSv.ngaySinh;
        document.getElementById("khSV").value = currentSv.khoaHoc;
        document.getElementById("txtDiemToan").value = currentSv.toan;
        document.getElementById("txtDiemLy").value = currentSv.ly;
        document.getElementById("txtDiemHoa").value = currentSv.hoa;
    }
}

function capNhat() {
    var sinhVien = layThongTin();
    var viTri = timViTri(sinhVien.ma, dssv);
    if (viTri !== -1) {
        dssv[viTri] = sinhVien;
        renderTableSV(dssv);
    }
}
function xoaSV(maSV) {
    var viTri = timViTri(maSV, dssv);
    if (viTri !== -1) {
        dssv.splice(viTri, 1);
        renderTableSV(dssv);
        luuLocalStorage(dssv);
    }
}
function resetSV() {
    document.getElementById("txtMaSV").disabled = false;
    document.getElementById("txtMaSV").value = "";
    document.getElementById("txtTenSV").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtPass").value = "";
    document.getElementById("txtNgaySinh").value = "";
    document.getElementById("khSV").value = "";
    $("#tbodySinhVien tr td").remove();
    localStorage.clear();
    dssv = [];
}

var dssvJSON = localStorage.getItem("dssvLocal");
var newDssv = JSON.parse(dssvJSON);

if (newDssv) {
    var dssv = newDssv.map(function (item) {
        return new SinhVien(
            item.ma,
            item.ten,
            item.email,
            item.matKhau,
            item.ngaySinh,
            item.khoaHoc,
            item.toan,
            item.ly,
            item.hoa
        );
    });
    renderTableSV(dssv);
}
