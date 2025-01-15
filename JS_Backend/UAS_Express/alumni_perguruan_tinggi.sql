-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Jan 2025 pada 09.54
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alumni_perguruan_tinggi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `alumni`
--

CREATE TABLE `alumni` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `graduation_year` int(11) DEFAULT NULL,
  `status` enum('Employed','Fresh Graduate','Unemployed') NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `alumni`
--

INSERT INTO `alumni` (`id`, `name`, `phone`, `address`, `graduation_year`, `status`, `company_name`, `position`) VALUES
(1, 'Ahmad Syahrul', '08123456789', 'Jl. Merdeka No.1, Jakarta', 2020, 'Employed', 'PT. Maju Jaya', 'Software Engineer'),
(2, 'Siti Aminah', '08234567890', 'Jl. Pahlawan No.10, Bandung', 2019, 'Employed', 'CV. Sejahtera', 'Marketing Manager'),
(3, 'Budi Santoso', '08345678901', 'Jl. Bahagia No.15, Surabaya', 2021, 'Fresh Graduate', NULL, NULL),
(4, 'Rina Sari', '08456789012', 'Jl. Cinta No.5, Yogyakarta', 2018, 'Employed', 'PT. Inovasi', 'Data Analyst'),
(5, 'Joko Prasetyo', '08567890123', 'Jl. Damai No.3, Medan', 2022, 'Employed', 'PT. Energi Hijau', 'Project Manager'),
(6, 'Dewi Lestari', '08678901234', 'Jl. Harapan No.7, Bali', 2023, 'Fresh Graduate', NULL, NULL),
(23, 'Aldino', '012345910', 'Jln.No 01', 2019, 'Employed', 'PT.Jaya Abadi', 'Backend Engineer'),
(24, 'Al', '012345910', 'Jln.No 01', 2019, 'Employed', 'PT.Jaya Abadi', 'Backend Engineer'),
(25, 'Budi Arip', '3565431', 'Jln.No 12', 2002, 'Unemployed', NULL, NULL),
(26, 'Mursid', '23917291', 'Jln.No 92', 2022, 'Unemployed', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `alumni`
--
ALTER TABLE `alumni`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `alumni`
--
ALTER TABLE `alumni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
