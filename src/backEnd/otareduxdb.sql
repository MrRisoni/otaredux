-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2018 at 08:59 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `otareduxdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `ota_airports`
--

CREATE TABLE `ota_airports` (
  `air_id` bigint(10) UNSIGNED NOT NULL,
  `air_code` varchar(4) DEFAULT NULL,
  `air_name` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ota_airports`
--

INSERT INTO `ota_airports` (`air_id`, `air_code`, `air_name`) VALUES
(14541, 'LHR', 'Heathrow'),
(20513, 'EFL', 'Argostoli Arpt');

-- --------------------------------------------------------

--
-- Table structure for table `ota_cities`
--

CREATE TABLE `ota_cities` (
  `cit_id` smallint(5) UNSIGNED NOT NULL,
  `cit_name` varchar(45) NOT NULL,
  `cit_lat` decimal(8,4) NOT NULL,
  `cit_long` decimal(8,4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ota_greekcities`
--

CREATE TABLE `ota_greekcities` (
  `cit_id` smallint(5) UNSIGNED NOT NULL,
  `cit_prefecture_id` tinyint(3) UNSIGNED NOT NULL,
  `cit_title` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ota_greekcities`
--

INSERT INTO `ota_greekcities` (`cit_id`, `cit_prefecture_id`, `cit_title`) VALUES
(1, 1, 'Αθήνα'),
(2, 2, 'Αργοστόλι'),
(3, 3, 'Πάτρα'),
(5, 1, 'Λαμία'),
(6, 1, 'Τρίπολη'),
(8, 1, 'Αλεξανδρουπολη');

-- --------------------------------------------------------

--
-- Table structure for table `ota_greekprefectures`
--

CREATE TABLE `ota_greekprefectures` (
  `pre_id` tinyint(3) UNSIGNED NOT NULL,
  `pre_title` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ota_greekprefectures`
--

INSERT INTO `ota_greekprefectures` (`pre_id`, `pre_title`) VALUES
(1, 'Αττική'),
(3, 'Αχαϊα'),
(4, 'Έβρος'),
(2, 'Κεφαλονιά');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ota_airports`
--
ALTER TABLE `ota_airports`
  ADD PRIMARY KEY (`air_id`),
  ADD KEY `ap_id` (`air_id`);

--
-- Indexes for table `ota_cities`
--
ALTER TABLE `ota_cities`
  ADD PRIMARY KEY (`cit_id`),
  ADD UNIQUE KEY `cit_name` (`cit_name`);

--
-- Indexes for table `ota_greekcities`
--
ALTER TABLE `ota_greekcities`
  ADD PRIMARY KEY (`cit_id`),
  ADD UNIQUE KEY `cit_title` (`cit_title`),
  ADD KEY `cit_prefecture_id` (`cit_prefecture_id`);

--
-- Indexes for table `ota_greekprefectures`
--
ALTER TABLE `ota_greekprefectures`
  ADD PRIMARY KEY (`pre_id`),
  ADD UNIQUE KEY `pre_title` (`pre_title`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ota_airports`
--
ALTER TABLE `ota_airports`
  MODIFY `air_id` bigint(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29586;

--
-- AUTO_INCREMENT for table `ota_cities`
--
ALTER TABLE `ota_cities`
  MODIFY `cit_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ota_greekcities`
--
ALTER TABLE `ota_greekcities`
  MODIFY `cit_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `ota_greekprefectures`
--
ALTER TABLE `ota_greekprefectures`
  MODIFY `pre_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ota_greekcities`
--
ALTER TABLE `ota_greekcities`
  ADD CONSTRAINT `ota_greekcities_ibfk_1` FOREIGN KEY (`cit_prefecture_id`) REFERENCES `ota_greekprefectures` (`pre_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
