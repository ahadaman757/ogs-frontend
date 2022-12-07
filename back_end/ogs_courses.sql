-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2022 at 01:14 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ogs_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `ogs_courses`
--

CREATE TABLE `ogs_courses` (
  `id` int(11) NOT NULL,
  `title` varchar(5000) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `institute_name` varchar(500) NOT NULL,
  `thumbnail` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ogs_courses`
--

INSERT INTO `ogs_courses` (`id`, `title`, `description`, `institute_name`, `thumbnail`) VALUES
(56, 'asd', 'asd', 'asd', 'Null'),
(57, 'asd', 'asd', 'asd', 'Null'),
(58, 'asd', 'asd', 'asd', 'Null'),
(59, 'asd', 'asd', 'asd', 'Null'),
(60, 'asd', 'asd', 'asd', 'Null'),
(61, 'asd', 'asd', 'asd', 'Null'),
(62, 'asd', 'asd', 'asd', 'Null'),
(63, 'asd', 'asd', 'asd', 'Null'),
(64, 'asd', 'asd', 'asd', '127.0.0.1_5500_MARC-903-BV-Display-checkboxes-phone-search-970x250_.png'),
(65, 'dfgdfg', 'dfgdfg', 'dgdg', '127.0.0.1_5500_MARC-903-BV-Display-checkboxes-phone-search-160x600_.png'),
(66, 'dfgdfg', 'dfgdfg', 'dgdg', '127.0.0.1_5500_MARC-903-BV-Display-checkboxes-phone-search-160x600_.png'),
(67, 'dfg', 'dgdg', 'dgdg', 'Null'),
(68, 'dfg', 'dgdg', 'dgdg', 'Null'),
(69, 'dfg', 'dg', 'dg', '127.0.0.1_5500_MARC-903-BV-Display-checkboxes-phone-search-728x90_.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ogs_courses`
--
ALTER TABLE `ogs_courses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ogs_courses`
--
ALTER TABLE `ogs_courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
