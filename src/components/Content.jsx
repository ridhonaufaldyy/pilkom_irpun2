/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaPhone,
  FaBlog,
  FaQuestionCircle,
} from "react-icons/fa";

const Content = ({ activeMenu }) => {
  let content;

  switch (activeMenu) {
    case "Kategori Beasiswa":
      content = (
        <div className="kategori-beasiswa-container">
          <div className="header-kategori">
            <FaHome className="icon-kategori" />
            <span className="nama-kategori">Kategori Beasiswa</span>
          </div>

          <div className="pilihan-beasiswa">
            <div className="card-beasiswa">
              <h3>Beasiswa Prestasi</h3>
              <p>
                Beasiswa ini ditujukan untuk mahasiswa berprestasi akademik.
              </p>
            </div>

            <div className="card-beasiswa">
              <h3>Beasiswa Ekonomi</h3>
              <p>
                Beasiswa ini diperuntukkan bagi mahasiswa dengan keterbatasan
                ekonomi.
              </p>
            </div>
          <button className="submit-button">Submit</button>
          </div>

        </div>
      );
      break;

    case "Identitas Diri":
      content = (
        <div>
          <h2>Identitas Diri</h2>
          <form>
            <label>Nama Lengkap</label>
            <input type="text" placeholder="Masukkan nama Anda" />

            <label>NIK</label>
            <input type="text" placeholder="Masukkan NIK" />

            <label>Alamat</label>
            <textarea placeholder="Masukkan alamat Anda"></textarea>

            <button type="submit">Simpan</button>
          </form>
        </div>
      );
      break;

    case "Pendidikan Terakhir":
      content = (
        <div>
          <h2>Pendidikan Terakhir</h2>
          <form>
            <label>Nama Sekolah / Universitas</label>
            <input
              type="text"
              placeholder="Masukkan nama sekolah atau universitas"
            />

            <label>Jurusan</label>
            <input type="text" placeholder="Masukkan jurusan" />

            <label>Tahun Lulus</label>
            <input type="number" placeholder="Masukkan tahun lulus" />

            <button type="submit">Simpan</button>
          </form>
        </div>
      );
      break;

    case "Persyaratan Substansif":
      content = (
        <div>
          <h2>Persyaratan Substansif</h2>
          <p>Berikut adalah daftar persyaratan yang harus Anda penuhi:</p>
          <ul>
            <li>IPK Minimal 3.0</li>
            <li>Surat Rekomendasi</li>
            <li>Motivasi Studi</li>
            <li>Proposal Penelitian (untuk beasiswa riset)</li>
          </ul>
        </div>
      );
      break;

    case "Dokumen Pendukung":
      content = (
        <div>
          <h2>Dokumen Pendukung</h2>
          <form>
            <label>Upload KTP</label>
            <input type="file" />

            <label>Upload Ijazah</label>
            <input type="file" />

            <label>Upload Transkrip Nilai</label>
            <input type="file" />

            <button type="submit">Unggah</button>
          </form>
        </div>
      );
      break;

    case "Pengumuman":
      content = (
        <div>
          <h2>Pengumuman</h2>
          <p>Berikut adalah pengumuman terkait beasiswa yang Anda lamar:</p>
          <ul>
            <li>Pengumuman seleksi tahap 1</li>
            <li>Pengumuman seleksi wawancara</li>
            <li>Pengumuman final penerima beasiswa</li>
          </ul>
        </div>
      );
      break;

    default:
      content = <p>Pilih kategori dari sidebar untuk melihat konten.</p>;
  }

  return <main className="content">{content}</main>;
};

export default Content;
