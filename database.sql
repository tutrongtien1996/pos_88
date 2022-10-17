
--
-- Database: `pos_88`
--

-- --------------------------------------------------------

--
-- Table structure for table `auths`
--

CREATE TABLE `auths` (
  `id` int(11) NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auths`
--

INSERT INTO `auths` (`id`, `token`, `user_id`, `updated_at`) VALUES
(60, 'pVyTDtKjYAst3WZq7G3luv7vcb25AjnkfFWTCkSu3a8DBYs9fDWyDNMWwl9K', 25, NULL),
(61, 'nW8v8egoP8OOXY7JqErXho9ZXouCpA3EDLa3YBd71eQJUeukw67YfL7xYP14', 39, NULL),
(62, 'lg5ItnMpd4SKdSYwmA64514tkRcUmhbpkoGevqsJdhubn5sCDsx73kVJcTKi', 45, NULL),
(63, 'UMTWopPKEVVzEuiOU8ez9Lps3O6sa3J6Fjc1IyC4rGkxOesamvf2a2Ahh3Q1', 53, NULL),
(64, 'oslekYSOkf7TvQYbYCI3xpPSTw1eRSZcsvFutd291qITs0d4Zhk7RvGG9rfi', 53, NULL),
(65, '6Yx7veGhqCy46Ce8kzdiiyoYmxfmbRwbsPx6Pp4niXNkYdCQc2556xKvNkQU', 51, NULL),
(66, 'ssXPHRxD9Tw9iB7mtwvHetLCZKqbVIQplAesRNDGb8xn1Vl4MFqqRtMtdcGr', 47, NULL),
(67, 'RVLnrlLO5H26CA22dHwC5Z7ArBJLpHZ4V0d167w2Y7L2W1ri5XPllDNxzJaM', 26, NULL),
(68, 'cf7rJQ41imPSceNCuqFYBxOzlwnYYdtRrZetz12YWTEOG84ES1wz7GjJoGpU', 40, NULL),
(69, 'mtNQJOn5mWVP0X2axIoZ42QzRFAG8wW4JmoaTTileUHRxfCxVMc4YSToPlIV', 26, NULL),
(70, 'qKMDNO09jaMwtoIR2RChPWiKTAwaICFh4fxGaJnCeaB24oSd2Y6imO1Myh8O', 26, NULL),
(71, 'iuZbuiGdslXsM0GqxMgvRUTUZrtyldHfugcJsnhz0rT5SF4fBaCyAzHEPSwQ', 26, NULL),
(72, 'mmbL2YrqAwxgwbd1OosSrMte9wz5biRkW2JA17xkctsung1RKcHaQsOEv5Qj', 26, NULL),
(73, 'VnRicNN7n4HwfPc2mIPyHCWhlvuzTjAu91jVPooajvRxGPCB0oALCRdDGOKd', 26, NULL),
(74, 'g72r48WCqs0ZVq7zOBBY4pPFzWYTtj2qiFExfQRPHNc13pdyA7PLtlyhLwKb', 26, NULL),
(75, 'GS9PxESCvllFULFz0IpG4KU1M7OEipxjuvUJyS7VFQ9AM0HwGjqRro1NbYaZ', 26, NULL),
(76, 'FPpBeChd4R9HrjUMTa49yIh8UiN9LGAm2fm33H30CCMOzGepiFI2X2GM7p02', 26, NULL),
(77, '2zEpvpgxN1uKzhS76eHsd1vfa1wKWkmb9mH4EpMGPB875pifh2MusjqdpIhw', 26, NULL),
(78, '8PKdfrg2989IJ0idIxt0mVrnY8P8iAqOWsF5o2rjOzA3rlN79wW1J9a5sXJE', 26, NULL),
(79, 'Z6eqnKb3NfXICLyW1wJbkr1uIsOr2z1uXGLUfHDeZ8rOFfunDocz8f3a522o', 26, NULL),
(80, 'kZv0NVbCRhBPcbCQCSVNchGfuynpVIIdFhf5RhOcyRKHVZCOtSQJLicaiyNS', 26, NULL),
(81, 'wtVQFTgf5aR6GIMlGoLfu8Fg9YoVzCCA9YvHbl8hYtPZFhWwl5nmOS3c86oN', 26, NULL),
(82, 'SYvnL2Dz4CzoJkkfEcsrZvIG9Y77PhyW85fnpRq9SeDHm1xatyjZDITDNiIK', 79, NULL),
(83, 'rMnGQjt9VJna8cDxJS88uWbozf7vQCCCJ5x65Tiujm2hwMuOodAoaShCvNuz', 81, NULL),
(84, '583G6oONuhl95KKP7ZG2pydGbEokbHpeL0uPzSb4FuwBz2h9nBpf4vmFpxhR', 82, NULL),
(85, 'kXXTfif6StFJxS26rhpF8Hosbx4ginjfWZWQlros92VRCK6sepvvJ0vprvon', 26, NULL),
(86, 'AVl71fpVGuCdSU0xQvUtdwI6JnIbUtaW7VjwXUFfQO49LJIqeUS9NbupwcL2', 26, NULL),
(87, 'shD7ZJelwMyMn6leeYAjb70nzxCCjABaE1sHJpBmESZ5CqzzoSy26rEJ7qdB', 26, NULL),
(88, 'wihJaO1WU3LEhXcchaNfI3ZdwtU0nk41zuHvLKuP42a7qALhyXzO82vtIk86', 26, NULL),
(89, 'jJIIGMmDhOXP4ZqZXa8wMSgER0cBy28gXlxIwMjT8U1LFNItRda10wekU3vT', 84, NULL),
(90, 'mSrPhNsJtgerI2FMEhYVMAOeq6tt3vNEhADUnzyNUWMrxgg12yDvcurI4AIA', 85, NULL),
(91, 'gBRKKE9WWRC6Oc6sAETY0zQUE1lSs9es0gcST3NgOM7KGPijkPe4DPGfMStJ', 86, NULL),
(92, '5PMZ5Jdfiid8v5wSm4gL7QwFIHmuU6Et93jZXTegNzuazyvD9951DD7szH93', 87, NULL),
(93, 'MrxvufTOaXBGEQ3N5xhQm4qxxtWwqVXTeyhr6BsuRnCcdKSVb3fZuyGDCI02', 89, NULL),
(94, '6dJPe2gIrgZF7QdQD8KtnHvpAkXl6gTyB0fzbv9oCsUBZtBCQtecMiD3wRcw', 87, NULL),
(95, 'FmcORCVE5hYV2KLWVrLOVtwno4hbmoapA3zdyAa7nDcl8rBYhzTpAF5sfxlE', 87, NULL),
(96, 'ez8TBLALmROwmYSZsn18TlkP0bs1gl5ESW0gFKXScyWVma6rQBVIdeEUTroM', 87, NULL),
(97, 'Yj1jE5QBBXCEdc7bERvLwW549IhwIH9N3u0NBv0YZmvtmrIAfsNtVBFfL75P', 87, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `email` varchar(55) DEFAULT NULL,
  `phone_number` varchar(55) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `email`, `phone_number`, `logo`, `created_at`, `updated_at`) VALUES
(1, 'SAMSUNG', 'samsung@gmail', '111111111', 'samsung.jpg', '2022-09-08 10:11:13', '2022-09-22 17:34:16'),
(2, 'APPLE', 'apple@gmail', '222222222', 'apple.jpg', '2022-09-08 10:11:13', '2022-09-22 17:34:16'),
(3, 'SONY', 'sony@gmail', '333333333', 'sony.jpg', '2022-09-08 10:11:38', '2022-09-22 17:34:16'),
(4, 'LG', 'lg@gmail', '444444444', 'lg.jpg', '2022-09-08 10:11:38', '2022-09-22 17:34:16'),
(5, 'HUYNDAI', 'huyndai@gmail', '555555555', 'huyndai.jpg', '2022-09-08 10:51:53', '2022-09-22 17:34:16'),
(6, 'TOMOROTA', 'tomorota@gmail', '666666666', 'tomorota.jpg', '2022-09-08 10:51:53', '2022-09-22 17:34:16');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `phone_number` varchar(55) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `company_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `phone_number`, `address`, `created_at`, `updated_at`, `company_id`) VALUES
(1, 'cutomers_samsung', '0902192371', '139 le dinh duong', '2022-09-05 19:36:55', '2022-09-22 17:48:38', 1),
(2, 'cutomers_samsung', '0902192371', '139 le dinh duong', '2022-09-05 19:36:55', '2022-09-22 17:54:11', 1),
(3, 'cutomers_samsung', '0902192371', '139 le dinh duong', '2022-09-05 19:36:55', '2022-09-22 17:54:11', 1),
(4, 'cutomers_samsung', '0902192371', '139 le dinh duong', '2022-09-05 19:36:55', '2022-09-22 17:54:11', 1),
(5, 'cutomers_samsung', '0902192371', '139 le dinh duong', '2022-09-05 19:36:55', '2022-09-22 17:54:11', 1),
(6, 'cutomers_samsung', '0932932123', 'undefined', '2022-09-05 19:36:55', '2022-09-22 17:54:11', 1),
(9, 'cutomers_samsung', '0902192371', '139 le dinh duong', '2022-09-05 19:36:55', '2022-09-22 17:54:11', 1),
(10, 'cutomers_apple', '0902182131', '137 le dinh duong', '2022-09-06 22:54:37', '2022-09-22 17:54:01', 2),
(11, 'cutomers_apple', '0902182131', '137 le dinh duong', '2022-09-06 22:55:16', '2022-09-22 17:54:01', 2),
(12, 'cutomers_apple', '0902182131', '137 le dinh duong', '2022-09-06 22:56:01', '2022-09-22 17:54:01', 2),
(13, 'cutomers_apple', '0902182131', '137 le dinh duong', '2022-09-06 22:56:08', '2022-09-22 17:54:01', 2),
(14, 'cutomers_apple', '0902182131', '137 le dinh duong', '2022-09-06 22:56:27', '2022-09-22 17:54:01', 2),
(15, 'cutomers_apple', '0902182131', '137 le dinh duong', '2022-09-06 23:02:12', '2022-09-22 17:54:01', 2),
(16, 'cutomers_apple', '0902dasdasd182131', '137dasd le dinh duong', '2022-09-16 17:10:05', '2022-09-22 17:54:01', 2),
(17, 'cutomers_apple', '0902dasdasd182131', '137dasd le dinh duong', '2022-09-16 17:17:27', '2022-09-22 17:54:01', 2),
(18, 'cutomers_apple', '0902dasdasd182131', '137dasd le dinh duong', '2022-09-16 17:18:08', '2022-09-22 17:54:01', 2),
(19, 'cutomers_apple', '0902dasdasd182131', '137dasd le dinh duong', '2022-09-16 17:33:29', '2022-09-22 17:54:01', 2),
(20, 'cutomers_sony', '0902dasdasd182131', '137dasd le dinh duong', '2022-09-16 17:33:55', '2022-09-22 17:53:53', 3),
(21, 'cutomers_sony', '0902dasdasd182131', '137dasd le dinh duong', '2022-09-16 17:34:23', '2022-09-22 17:53:53', 3),
(22, 'cutomers_sony', '0902dasdasd182131', '137dasd le dinh duong', '2022-09-16 17:39:42', '2022-09-22 17:53:53', 3),
(23, 'cutomers_sony', '0902dasdasd182131', '137dasd le dinh duong', '2022-09-16 17:39:49', '2022-09-22 17:53:53', 3),
(24, 'cutomers_sony', '0902182131', '137 le dinh duong', '2022-09-16 18:07:18', '2022-09-22 17:53:53', 3),
(25, 'cutomers_sony', '0902182131', '137 le dinh duong', '2022-09-16 18:07:26', '2022-09-22 17:53:53', 3),
(26, 'cutomers_sony', '0902182131', '137 le dinhy89u89 duong', '2022-09-16 18:07:39', '2022-09-22 17:53:53', 3),
(27, 'cutomers_sony', '0902182131', '137 le dinh duong', '2022-09-17 19:59:16', '2022-09-22 17:53:53', 3),
(28, 'cutomers_sony', '0902182131', '137 le dinh duong', '2022-09-17 20:15:02', '2022-09-22 17:53:53', 3),
(29, 'cutomers_sony', '0902182131', '137 le dinh duong', '2022-09-17 20:15:04', '2022-09-22 17:53:53', 3),
(30, 'cutomers_lg', '0902182131', '137 le dinh duong', '2022-09-17 20:15:05', '2022-09-22 17:53:43', 4),
(31, 'cutomers_lg', '0902182131', '137 le dinh duong', '2022-09-17 20:15:06', '2022-09-22 17:53:43', 4),
(32, 'cutomers_lg', '0902182131', '137 le dinh duong', '2022-09-17 20:15:07', '2022-09-22 17:53:43', 4),
(33, 'cutomers_lg', '0902182131', '137 le dinh duong', '2022-09-17 20:15:08', '2022-09-22 17:53:43', 4),
(34, 'cutomers_lg', '0902182131', '137 le dinh duong', '2022-09-17 20:15:09', '2022-09-22 17:53:43', 4),
(35, 'cutomers_lg', '0902182131', '137 le dinh duong', '2022-09-17 20:15:10', '2022-09-22 17:53:43', 4),
(36, 'cutomers_lg', '0902182131', '137 le dinh duong', '2022-09-17 20:15:10', '2022-09-22 17:53:43', 4),
(37, 'cutomers_lg', '0902182131', '137 le dinh duong', '2022-09-17 20:15:11', '2022-09-22 17:53:43', 4),
(38, 'cutomers_lg', '0902182131', '137 le dinh duong', '2022-09-17 20:15:12', '2022-09-22 17:53:43', 4),
(39, 'cutomers_lg', '0902182131', '137 le dinh duong', '2022-09-17 20:15:12', '2022-09-22 17:53:43', 4),
(40, 'cutomers_huyndai', '0902182131', '137 le dinh duong', '2022-09-19 21:57:52', '2022-09-22 17:53:33', 5),
(41, 'cutomers_huyndai', '0902182131', '137 le dinh duong', '2022-09-19 21:57:53', '2022-09-22 17:53:33', 5),
(42, 'cutomers_huyndai', '0902182131', '137 le dinh duong', '2022-09-19 21:57:54', '2022-09-22 17:53:33', 5),
(43, 'cutomers_huyndai', '0902182131', '137 le dinh duong', '2022-09-19 21:57:56', '2022-09-22 17:53:33', 5),
(44, 'cutomers_huyndai', '0902182131', '137 le dinh duong', '2022-09-19 21:58:48', '2022-09-22 17:53:33', 5),
(45, 'cutomers_huyndai', '0902182131', '137 le dinh duong', '2022-09-19 22:00:45', '2022-09-22 17:53:33', 5),
(46, 'cutomers_huyndai', '0902182131', '137 le dinh duong', '2022-09-19 22:00:46', '2022-09-22 17:53:33', 5),
(47, 'cutomers_huyndai', '0902182131', '137 le dinh duong', '2022-09-19 22:00:47', '2022-09-22 17:53:33', 5),
(48, 'cutomers_huyndai', '0902182131', '137 le dinh duong', '2022-09-19 22:03:15', '2022-09-22 17:53:33', 5),
(49, 'cutomers_huyndai', '0902182131', '137 le dinh duong', '2022-09-19 22:03:17', '2022-09-22 17:53:33', 5),
(50, 'cutomers_motorota', '0902182131', '137 le dinh duong', '2022-09-19 22:03:28', '2022-09-22 17:53:19', 6),
(51, 'cutomers_motorota', '0902182131', '137 le dinh duong', '2022-09-19 22:03:51', '2022-09-22 17:53:19', 6),
(52, 'cutomers_motorota', '0902182131', '137 le dinh duong', '2022-09-19 22:21:27', '2022-09-22 17:53:19', 6),
(53, 'cutomers_motorota', '0902182131', '137 le dinh duong', '2022-09-19 22:22:52', '2022-09-22 17:53:19', 6),
(54, 'cutomers_motorota', '0902182131', '137 le dinh duong', '2022-09-19 22:23:37', '2022-09-22 17:53:19', 6),
(55, 'cutomers_motorota', '0902182131', '137 le dinh duong', '2022-09-20 20:22:03', '2022-09-22 17:53:19', 6),
(56, 'cutomers_motorota', '0902182131', '137 le dinh duong', '2022-09-20 20:23:55', '2022-09-22 17:53:19', 6),
(57, 'cutomers_motorota', '0902182131', '137 le dinh duong', '2022-09-20 20:24:35', '2022-09-22 17:53:19', 6),
(58, 'cutomers_motorota', '0902182131', '137 le dinh duong', '2022-09-20 20:25:38', '2022-09-22 17:53:19', 6),
(60, 'cutomers_samsung', '0902182131', '137 le dinh duong', '2022-09-20 20:31:52', '2022-09-22 17:54:11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `company_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `total` float DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `company_id`, `customer_id`, `total`, `created_at`, `updated_at`) VALUES
(50, 1, 1, 20000, '2022-09-22 18:50:20', NULL),
(51, 1, 2, 20000, '2022-09-22 18:51:08', NULL),
(52, 1, 5, 20000, '2022-09-22 18:51:17', NULL),
(53, 1, 4, 20000, '2022-09-22 18:51:22', NULL),
(54, 1, 20, 20000, '2022-09-22 18:51:28', NULL),
(55, 2, 101, 500, '2022-09-22 18:53:12', '2022-10-17 13:28:34'),
(56, 2, 6, 20000, '2022-09-22 18:53:20', NULL),
(57, 2, 6, 20000, '2022-09-22 18:53:26', NULL),
(58, 2, 6, 20000, '2022-09-22 18:53:27', NULL),
(59, 2, 6, 20000, '2022-09-22 18:53:27', NULL),
(60, 2, 10, 20000, '2022-09-22 20:34:12', NULL),
(61, 2, 10, 20000, '2022-09-22 20:37:48', NULL),
(62, 2, 10, 20000, '2022-09-22 20:39:04', NULL),
(63, 2, 10, 20000, '2022-09-22 20:40:32', NULL),
(64, 2, 10, 20000, '2022-09-22 20:44:57', NULL),
(65, 2, 10, 20000, '2022-09-22 20:45:16', NULL),
(66, 2, 10, 20000, '2022-09-22 20:45:34', NULL),
(67, 2, 10, 20000, '2022-09-22 20:48:19', NULL),
(68, 2, 10, 20000, '2022-09-22 20:49:27', NULL),
(69, 2, 10, 20000, '2022-09-22 20:49:45', NULL),
(70, 2, 10, 20000, '2022-09-22 20:50:07', NULL),
(71, 2, 10, 20000, '2022-09-22 20:50:08', NULL),
(72, 2, 10, 20000, '2022-09-22 20:50:09', NULL),
(73, 2, 10, 20000, '2022-09-22 20:50:10', NULL),
(74, 2, 10, 20000, '2022-09-22 20:53:22', NULL),
(75, 2, 10, 20000, '2022-09-22 20:54:03', NULL),
(76, 2, 10, 20000, '2022-09-22 20:54:05', NULL),
(77, 2, 10, 20000, '2022-09-22 20:54:06', NULL),
(78, 2, 10, 20000, '2022-09-22 20:54:07', NULL),
(79, 2, 10, 20000, '2022-09-22 20:54:59', NULL),
(80, 2, 10, 20000, '2022-09-22 20:55:24', NULL),
(81, 2, 10, 20000, '2022-09-22 20:55:43', NULL),
(82, 2, 10, 20000, '2022-09-22 20:55:44', NULL),
(83, 2, 10, 20000, '2022-09-22 20:55:46', NULL),
(84, 2, 10, 20000, '2022-09-22 20:57:46', NULL),
(85, 2, 10, 20000, '2022-09-22 20:57:47', NULL),
(86, 2, 10, 20000, '2022-09-22 20:57:53', NULL),
(87, 2, 10, 20000, '2022-09-22 20:57:54', NULL),
(88, 2, 10, 20000, '2022-09-23 12:06:52', NULL),
(89, 2, 10, 20000, '2022-09-23 12:08:37', NULL),
(90, 2, 10, 20000, '2022-09-23 12:14:49', NULL),
(91, 2, 10, 20000, '2022-09-23 12:16:05', NULL),
(92, 2, 10, 20000, '2022-09-23 12:19:01', NULL),
(93, 2, 10, 20000, '2022-09-23 12:20:05', NULL),
(94, 2, 10, 20000, '2022-09-23 12:21:05', NULL),
(95, 2, 10, 20000, '2022-09-23 12:21:50', NULL),
(96, 1, 3, 500, '2022-10-13 10:42:57', NULL),
(98, 2, 4, 78, '2022-10-13 11:04:30', NULL),
(99, 2, 0, 20000, '2022-10-13 11:58:28', NULL),
(100, 2, 0, 20000, '2022-10-13 11:59:05', NULL),
(101, 2, 10, 500000000, '2022-10-13 12:00:52', '2022-10-13 12:51:18');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` float DEFAULT NULL,
  `price` float DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `quantity`, `price`, `created_at`, `updated_at`) VALUES
(81, 50, 97, 2, 10000, '2022-09-22 18:50:20', NULL),
(82, 50, 98, 7, 100000, '2022-09-22 18:50:20', NULL),
(83, 51, 99, 2, 10000, '2022-09-22 18:51:08', NULL),
(84, 51, 98, 7, 100000, '2022-09-22 18:51:08', NULL),
(85, 52, 99, 2, 10000, '2022-09-22 18:51:17', NULL),
(86, 52, 98, 7, 100000, '2022-09-22 18:51:17', NULL),
(87, 53, 99, 2, 10000, '2022-09-22 18:51:22', NULL),
(88, 53, 98, 7, 100000, '2022-09-22 18:51:22', NULL),
(89, 54, 99, 2, 10000, '2022-09-22 18:51:28', NULL),
(90, 54, 98, 7, 100000, '2022-09-22 18:51:28', NULL),
(91, 55, 106, 5, 10000, '2022-09-22 18:53:12', '2022-09-25 18:46:15'),
(92, 55, 105, 10, 900000, '2022-09-22 18:53:12', '2022-09-25 18:46:15'),
(93, 56, 106, 2, 10000, '2022-09-22 18:53:20', NULL),
(94, 56, 107, 7, 100000, '2022-09-22 18:53:20', NULL),
(95, 57, 106, 2, 10000, '2022-09-22 18:53:26', NULL),
(96, 57, 107, 7, 100000, '2022-09-22 18:53:26', NULL),
(97, 58, 106, 2, 10000, '2022-09-22 18:53:27', NULL),
(98, 58, 107, 7, 100000, '2022-09-22 18:53:27', NULL),
(99, 59, 106, 2, 10000, '2022-09-22 18:53:27', NULL),
(100, 59, 107, 7, 100000, '2022-09-22 18:53:27', NULL),
(101, 60, 106, 2, 10000, '2022-09-22 20:34:12', NULL),
(102, 60, 107, 7, 100000, '2022-09-22 20:34:12', NULL),
(103, 61, 106, 2, 10000, '2022-09-22 20:37:48', NULL),
(104, 61, 107, 7, 100000, '2022-09-22 20:37:48', NULL),
(105, 62, 106, 2, 10000, '2022-09-22 20:39:04', NULL),
(106, 62, 107, 7, 100000, '2022-09-22 20:39:04', NULL),
(107, 63, 106, 2, 10000, '2022-09-22 20:40:32', NULL),
(108, 63, 107, 7, 100000, '2022-09-22 20:40:32', NULL),
(109, 64, 106, 2, 10000, '2022-09-22 20:44:57', NULL),
(110, 64, 107, 7, 100000, '2022-09-22 20:44:57', NULL),
(111, 65, 106, 2, 10000, '2022-09-22 20:45:16', NULL),
(112, 65, 107, 7, 100000, '2022-09-22 20:45:16', NULL),
(113, 66, 106, 2, 10000, '2022-09-22 20:45:34', NULL),
(114, 66, 107, 7, 100000, '2022-09-22 20:45:34', NULL),
(115, 67, 106, 2, 10000, '2022-09-22 20:48:19', NULL),
(116, 67, 107, 7, 100000, '2022-09-22 20:48:19', NULL),
(117, 68, 106, 2, 10000, '2022-09-22 20:49:27', NULL),
(118, 68, 107, 7, 100000, '2022-09-22 20:49:27', NULL),
(119, 69, 106, 2, 10000, '2022-09-22 20:49:45', NULL),
(120, 69, 107, 7, 100000, '2022-09-22 20:49:45', NULL),
(121, 70, 106, 2, 10000, '2022-09-22 20:50:07', NULL),
(122, 70, 107, 7, 100000, '2022-09-22 20:50:07', NULL),
(123, 71, 106, 2, 10000, '2022-09-22 20:50:08', NULL),
(124, 71, 107, 7, 100000, '2022-09-22 20:50:08', NULL),
(125, 72, 106, 2, 10000, '2022-09-22 20:50:09', NULL),
(126, 72, 107, 7, 100000, '2022-09-22 20:50:09', NULL),
(127, 73, 106, 2, 10000, '2022-09-22 20:50:10', NULL),
(128, 73, 107, 7, 100000, '2022-09-22 20:50:10', NULL),
(129, 74, 106, 2, 10000, '2022-09-22 20:53:22', NULL),
(130, 74, 107, 7, 100000, '2022-09-22 20:53:22', NULL),
(131, 75, 106, 2, 10000, '2022-09-22 20:54:03', NULL),
(132, 75, 107, 7, 100000, '2022-09-22 20:54:03', NULL),
(133, 76, 106, 2, 10000, '2022-09-22 20:54:05', NULL),
(134, 76, 107, 7, 100000, '2022-09-22 20:54:05', NULL),
(135, 77, 106, 2, 10000, '2022-09-22 20:54:06', NULL),
(136, 77, 107, 7, 100000, '2022-09-22 20:54:06', NULL),
(137, 78, 106, 2, 10000, '2022-09-22 20:54:07', NULL),
(138, 78, 107, 7, 100000, '2022-09-22 20:54:07', NULL),
(139, 80, 106, 2, 10000, '2022-09-22 20:55:24', NULL),
(140, 80, 107, 7, 100000, '2022-09-22 20:55:24', NULL),
(141, 81, 106, 2, 10000, '2022-09-22 20:55:43', NULL),
(142, 81, 107, 7, 100000, '2022-09-22 20:55:43', NULL),
(143, 82, 106, 2, 10000, '2022-09-22 20:55:44', NULL),
(144, 82, 107, 7, 100000, '2022-09-22 20:55:44', NULL),
(145, 83, 106, 2, 10000, '2022-09-22 20:55:46', NULL),
(146, 83, 107, 7, 100000, '2022-09-22 20:55:46', NULL),
(147, 84, 106, 2, 10000, '2022-09-22 20:57:46', NULL),
(148, 84, 107, 7, 100000, '2022-09-22 20:57:46', NULL),
(149, 85, 106, 2, 10000, '2022-09-22 20:57:47', NULL),
(150, 85, 107, 7, 100000, '2022-09-22 20:57:47', NULL),
(151, 86, 0, 2, 10000, '2022-09-22 20:57:53', NULL),
(152, 86, 107, 7, 100000, '2022-09-22 20:57:53', NULL),
(153, 87, 0, 2, 10000, '2022-09-22 20:57:54', NULL),
(154, 87, 107, 7, 100000, '2022-09-22 20:57:54', NULL),
(155, 88, 0, 2, 10000, '2022-09-23 12:06:52', NULL),
(156, 88, 107, 7, 100000, '2022-09-23 12:06:52', NULL),
(157, 89, 7, 2, 10000, '2022-09-23 12:08:37', NULL),
(158, 89, 107, 7, 100000, '2022-09-23 12:08:37', NULL),
(159, 90, 7, 2, 10000, '2022-09-23 12:14:49', NULL),
(160, 90, 107, 7, 100000, '2022-09-23 12:14:49', NULL),
(161, 91, 7, 2, 10000, '2022-09-23 12:16:05', NULL),
(162, 91, 107, 7, 100000, '2022-09-23 12:16:05', NULL),
(163, 92, 7, 2, 10000, '2022-09-23 12:19:01', NULL),
(164, 92, 107, 7, 100000, '2022-09-23 12:19:01', NULL),
(165, 93, 7, 2, 10000, '2022-09-23 12:20:05', NULL),
(166, 93, 107, 7, 100000, '2022-09-23 12:20:05', NULL),
(167, 94, 7, 2, 10000, '2022-09-23 12:21:05', NULL),
(168, 94, 107, 7, 100000, '2022-09-23 12:21:05', NULL),
(169, 95, 7, 2, 10000, '2022-09-23 12:21:50', NULL),
(170, 95, 107, 7, 100000, '2022-09-23 12:21:50', NULL),
(171, 99, 100, 2, 10000, '2022-10-13 11:58:28', NULL),
(172, 99, 101, 7, 100000, '2022-10-13 11:58:28', NULL),
(173, 100, 100, 2, 10000, '2022-10-13 11:59:05', NULL),
(174, 100, 101, 7, 100000, '2022-10-13 11:59:05', NULL),
(175, 101, 100, 2, 10000, '2022-10-13 12:00:53', NULL),
(176, 101, 101, 7, 100000, '2022-10-13 12:00:53', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `price` float DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `company_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `created_at`, `updated_at`, `company_id`) VALUES
(97, 'galaxy 1', 1000000, 'default.jpg', '2022-09-22 18:30:06', NULL, 1),
(98, 'galaxy 2', 1000000, 'default.jpg', '2022-09-22 18:30:14', NULL, 1),
(99, 'galaxy 3', 1000000, 'default.jpg', '2022-09-22 18:30:18', NULL, 1),
(100, 'galaxy 4', 1000000, 'default.jpg', '2022-09-22 18:30:23', NULL, 1),
(101, 'galaxy 5', 1000000, 'default.jpg', '2022-09-22 18:30:27', NULL, 1),
(102, 'note 5', 1000000, 'default.jpg', '2022-09-22 18:30:39', NULL, 1),
(103, 'iphone 2', 2000000, '', '2022-09-22 18:33:33', '2022-10-17 13:37:47', 2),
(104, 'iphone 2', 2000000, 'default.jpg', '2022-09-22 18:33:43', NULL, 2),
(105, 'iphone 3', 3000000, 'default.jpg', '2022-09-22 18:33:49', NULL, 2),
(106, 'iphone 4', 4000000, 'default.jpg', '2022-09-22 18:33:56', NULL, 2),
(107, 'iphone 5', 5000000, 'default.jpg', '2022-09-22 18:34:02', NULL, 2),
(108, 'lg 5', 5000000, 'default.jpg', '2022-09-22 18:34:43', NULL, 3),
(109, 'lg 4', 4000000, 'default.jpg', '2022-09-22 18:34:50', NULL, 3),
(110, 'lg 3', 3000000, 'default.jpg', '2022-09-22 18:35:03', NULL, 3),
(114, 'dien thoai tomorola 1', 1000000, 'default.jpg', '2022-09-22 18:38:38', NULL, 6),
(115, 'dien thoai tomorola 2', 2000000, 'default.jpg', '2022-09-22 18:38:48', NULL, 6),
(116, 'dien thoai tomorola 3', 3000000, 'default.jpg', '2022-09-22 18:38:55', NULL, 6),
(117, 'dien thoai tomorola 4', 4000000, 'default.jpg', '2022-09-22 18:39:01', NULL, 6),
(118, 'may dao huyndai 4', 4000000, 'default.jpg', '2022-09-22 18:39:43', NULL, 5),
(119, 'may dao huyndai 5', 5000000, 'default.jpg', '2022-09-22 18:39:54', NULL, 5),
(120, 'may dao huyndai 6', 6000000, 'default.jpg', '2022-09-22 18:40:00', NULL, 5),
(121, 'dien thoai sony', 6000000, 'default.jpg', '2022-09-22 18:40:40', NULL, 4),
(122, 'may anh sony', 3000000, 'default.jpg', '2022-09-22 18:40:51', NULL, 4),
(123, 'tv sony', 3000000, 'default.jpg', '2022-09-22 18:40:59', NULL, 4),
(124, 'speaker sony', 1000000, 'default.jpg', '2022-09-22 18:41:09', NULL, 4),
(125, 'speaker sony', 1000000, '', '2022-09-25 18:57:31', NULL, 2),
(126, 'speaker sony', 1000000, '', '2022-09-25 19:02:25', NULL, 2),
(127, 'speaker sony', 1000000, '', '2022-09-25 19:02:27', NULL, 2),
(128, 'speaker sony', 1000000, '', '2022-09-25 19:02:28', NULL, 2),
(129, 'speaker sony', 1000000, '', '2022-09-25 19:02:29', NULL, 2),
(130, 'speaker sony', 1000000, '', '2022-09-25 19:02:30', NULL, 2),
(131, '5555555', 126361000, '', '2022-09-25 19:02:57', '2022-09-25 19:04:15', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `user_name` varchar(55) NOT NULL,
  `password` varchar(255) NOT NULL,
  `company_id` int(11) NOT NULL,
  `email` varchar(55) DEFAULT NULL,
  `phone_number` varchar(55) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `user_name`, `password`, `company_id`, `email`, `phone_number`, `avatar`, `created_at`, `updated_at`) VALUES
(25, 'sam sung user1', 'ss_user1', '00000000', 1, NULL, NULL, NULL, '2022-09-22 18:19:16', NULL),
(26, 'sam sung user2', 'ss_user2', 'dd4b21e9ef71e1291183a46b913ae6f2', 1, NULL, NULL, NULL, '2022-09-22 18:19:28', '2022-10-11 09:16:01'),
(31, 'sam sung user3', 'ss_user3', '00000000', 1, NULL, NULL, NULL, '2022-09-22 18:19:45', NULL),
(32, 'sam sung user4', 'ss_user4', '00000000', 1, NULL, NULL, NULL, '2022-09-22 18:19:53', NULL),
(35, 'sam sung user5', 'ss_user6', '00000000', 1, NULL, NULL, NULL, '2022-09-22 18:20:06', NULL),
(38, 'sam sung user6', 'ss_user7', '00000000', 1, NULL, NULL, NULL, '2022-09-22 18:20:29', NULL),
(39, 'apple user1', 'apple_user1', '00000000', 2, NULL, NULL, NULL, '2022-09-22 18:22:33', '2022-09-22 18:31:24'),
(40, 'apple user2', 'apple_user2', '00000000', 2, NULL, NULL, NULL, '2022-09-22 18:22:33', '2022-09-22 18:31:24'),
(41, 'apple user3', 'apple_user3', '00000000', 2, NULL, NULL, NULL, '2022-09-22 18:22:50', '2022-09-22 18:31:24'),
(42, 'apple user4', 'appple_user4', '00000000', 2, NULL, NULL, NULL, '2022-09-22 18:22:50', NULL),
(43, 'lg user3', 'lg_user3', '00000000', 3, NULL, NULL, NULL, '2022-09-22 18:23:17', NULL),
(44, 'lg user4', 'lg_user4', '00000000', 3, NULL, NULL, NULL, '2022-09-22 18:23:17', NULL),
(45, 'lg user1', 'lg_user1', '00000000', 3, NULL, NULL, NULL, '2022-09-22 18:23:30', NULL),
(46, 'lg user2', 'lg_user2', '00000000', 3, NULL, NULL, NULL, '2022-09-22 18:23:30', NULL),
(47, 'sony user1', 'sony_user1', '00000000', 4, NULL, NULL, NULL, '2022-09-22 18:23:51', NULL),
(48, 'sony user2', 'sony_user2', '00000000', 4, NULL, NULL, NULL, '2022-09-22 18:23:51', NULL),
(49, 'sony user3', 'sony_user3', '00000000', 4, NULL, NULL, NULL, '2022-09-22 18:24:13', NULL),
(50, 'sony user4', 'sony_user4', '00000000', 4, NULL, NULL, NULL, '2022-09-22 18:24:13', NULL),
(51, 'huyndai user1', 'huyndai_user1', '00000000', 5, NULL, NULL, NULL, '2022-09-22 18:25:00', NULL),
(52, 'huyndai user4', 'huyndai_user4', '00000000', 5, NULL, NULL, NULL, '2022-09-22 18:25:00', NULL),
(53, 'tomorola user1', 'tomorola_user1', '00000000', 6, NULL, NULL, NULL, '2022-09-22 18:25:47', NULL),
(54, 'tomorola user2', 'tomorola_user2', '00000000', 6, NULL, NULL, NULL, '2022-09-22 18:25:47', NULL),
(55, 'tomorola user3', 'tomorola_user3', '00000000', 6, NULL, NULL, NULL, '2022-09-22 18:26:08', NULL),
(56, 'tomorola user4', 'tomorola_user4', '00000000', 6, NULL, NULL, NULL, '2022-09-22 18:26:08', NULL),
(57, 'tomorola user5', 'tomorola_user5', '00000000', 6, NULL, NULL, NULL, '2022-09-22 18:26:19', NULL),
(58, 'tomorola user6', 'tomorola_user6', '00000000', 6, NULL, NULL, NULL, '2022-09-22 18:26:19', NULL),
(59, 'sam sung user8', 'ss_user8', 'dd4b21e9ef71e1291183a46b913ae6f2', 1, '', '', '', '2022-10-11 09:40:13', NULL),
(60, 'nam anh', 'namanh', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 09:48:18', NULL),
(62, 'nam anh2', 'namanh2', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 09:49:44', NULL),
(67, 'nam anh2', 'namanh3', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 09:53:50', NULL),
(68, 'nam anh2', 'namanh5', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 10:05:09', NULL),
(69, 'nam anh2', 'namanh6', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 10:06:16', NULL),
(71, 'nam anh2', 'namanh7', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 10:06:26', NULL),
(72, 'nam anh2', 'namanh8', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 10:08:42', NULL),
(73, 'nam anh2', 'namanh9', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 10:08:58', NULL),
(74, 'nam anh2', 'namanh10', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 10:09:40', NULL),
(75, 'nam anh2', 'namanh11', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 10:16:43', NULL),
(77, 'nam anh2', 'namanh12', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 10:17:51', NULL),
(78, 'nam anh2', 'namanh13', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 10:21:56', NULL),
(79, 'nam anh2', 'namanh14', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 10:26:47', NULL),
(81, 'nam anh2', 'namanh15', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-11 10:28:51', NULL),
(82, 'nam anh2', 'namanh17', '670b14728ad9902aecba32e22fa4f6bd', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-13 10:00:43', NULL),
(84, 'nam anh2', 'namanh56', '$2b$10$zkEF5h.3hdB/uQ9BmN/Mh.6IPrguf/MCjSQXTfWGBHox/ObnZDr9a', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-13 14:47:06', NULL),
(85, 'trong tien', 'trongtien021', '$2b$10$IDXHnQydXzuDhWjKIjKMHervaKvyFFNroejnXxfLfDUWWtxCejrCG', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-13 14:50:50', NULL),
(86, 'trong tien', 'trongtien022', '$2b$10$jne8QBrExLDShAIDWgCAp.RFlF2Ka6GhnRaIxAkiPteQZgjUkSQ5C', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-13 14:52:50', NULL),
(87, 'trong tien', 'trongtien023', '$2b$10$0YVXxXJ2pbRJXEHFwaP0He5w9AlvOOcfrTYQytheg2qwHv7m8iP7C', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-14 15:01:41', NULL),
(89, 'trong tien', 'trongtien024', '$2b$10$tRiZDRK.cGmAPXxkJY8HQuth6od/QqJb7PZ/zEHQs4WsxCuHKlUIm', 1, 'namanh@1234', '0901915121', 'namanh.jpg', '2022-10-14 15:02:54', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auths`
--
ALTER TABLE `auths`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD KEY `company_id` (`company_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auths`
--
ALTER TABLE `auths`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);
COMMIT;