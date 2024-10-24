-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 23, 2023 at 03:28 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `21it0550`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `u_id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `nic` int NOT NULL,
  `pass` varchar(10) NOT NULL,
  `conpassword` varchar(10) NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`u_id`, `username`, `name`, `nic`, `pass`, `conpassword`) VALUES
(1, '21IT0550', 'Sandushi', 2147483647, '123', '123'),
(3, '21it0549', 'Thanu', 2147483647, '789', '789'),
(2, '21IT0514', 'Raashid', 2147483647, '456', '456'),
(4, '21IT0547', 'Thakshi', 2147483647, '147', '147'),
(5, '21ET447', 'mihisara', 2147483647, '111', '111');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `delivery_option` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `delivery_option`, `address`, `phone`, `created_at`) VALUES
(11, 'Colombo', 'No 92./4.Paranagama,wettewa', '0761234689', '2023-12-22 05:00:10'),
(12, 'Colombo-Greater', 'No 91/5,Katugasthota', '0784561232', '2023-12-22 05:00:30'),
(13, 'Colombo-Greater', 'No 81/2,Pilimathalawa', '0784561232', '2023-12-22 05:00:44'),
(14, 'Colombo', 'No 124/5,Awisawella', '071456321', '2023-12-22 05:11:28'),
(15, 'Colombo-Greater', 'No 91/5,Mawanalla', '0721234567', '2023-12-22 06:03:28');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
CREATE TABLE IF NOT EXISTS `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `card_number` varchar(16) NOT NULL,
  `expiry_date` varchar(5) NOT NULL,
  `cvv` int NOT NULL,
  `payment_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `card_number`, `expiry_date`, `cvv`, `payment_date`) VALUES
(4, '123456789', '06/27', 741, '2023-12-22 04:52:49'),
(5, '987654321', '12/12', 852, '2023-12-22 04:53:32'),
(8, '987654321', '01/01', 256, '2023-12-22 05:10:43'),
(7, '963852741', '10/05', 321, '2023-12-22 04:54:11');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `name` varchar(10) NOT NULL,
  `price` varchar(10) NOT NULL,
  `description` varchar(255) NOT NULL,
  `customization` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`name`, `price`, `description`, `customization`) VALUES
('Sushi', '$12.45', 'Japanese food', 'Good'),
('Pancake', '$15.23', 'Breakfast', 'Good'),
('Kimbab', '$45.99', 'Korean Food', 'Very Good'),
('Tibokki', '$15.10', 'Korean Street Food', 'Very Popular'),
('Pancake', '$45.99', 'mngf', ',mnjhbg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
