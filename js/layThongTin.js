function layThongTin() {
    var maSVValue = document.getElementById("txtMaSV").value;
    var tenValue = document.getElementById("txtTenSV").value;
    var EmailValue = document.getElementById("txtEmail").value;
    var matKhauValue = document.getElementById("txtPass").value;
    var ngaySinhValue = document.getElementById("txtNgaySinh").value;
    var khoaHocValue = document.getElementById("khSV").value;
    var diemToanValue = document.getElementById("txtDiemToan").value * 1;
    var diemLyValue = document.getElementById("txtDiemLy").value * 1;
    var diemHoaValue = document.getElementById("txtDiemHoa").value * 1;

    var sinhVien = new SinhVien(
        maSVValue,
        tenValue,
        EmailValue,
        matKhauValue,
        ngaySinhValue,
        khoaHocValue,
        diemToanValue,
        diemLyValue,
        diemHoaValue
    );
    return sinhVien;
}
