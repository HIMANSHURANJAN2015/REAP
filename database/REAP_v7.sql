-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 08, 2016 at 12:31 PM
-- Server version: 5.5.47-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `REAP`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(10) NOT NULL AUTO_INCREMENT,
  `admin_first_name` varchar(20) NOT NULL,
  `admin_last_name` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `admin_email` varchar(50) NOT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `password` (`password`),
  UNIQUE KEY `admin_email` (`admin_email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1012 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_first_name`, `admin_last_name`, `username`, `password`, `admin_email`) VALUES
(1010, 'Badri', 'Prasad', 'badri', 'badri123', 'badriprasad@pes.edu'),
(1011, 'Dinesh', 'Singh', 'dinesh', 'singh', 'dineshsingh@pes.edu');

-- --------------------------------------------------------

--
-- Table structure for table `bundle`
--

CREATE TABLE IF NOT EXISTS `bundle` (
  `bundle_id` int(11) NOT NULL AUTO_INCREMENT,
  `qp_id` int(11) NOT NULL,
  PRIMARY KEY (`bundle_id`),
  KEY `qp_id` (`qp_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `bundle`
--

INSERT INTO `bundle` (`bundle_id`, `qp_id`) VALUES
(1, 1),
(2, 4);

-- --------------------------------------------------------

--
-- Table structure for table `bundle_eval`
--

CREATE TABLE IF NOT EXISTS `bundle_eval` (
  `bundle_id` int(11) NOT NULL,
  `eval_email` varchar(50) NOT NULL,
  PRIMARY KEY (`bundle_id`,`eval_email`),
  KEY `eval_email` (`eval_email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bundle_eval`
--

INSERT INTO `bundle_eval` (`bundle_id`, `eval_email`) VALUES
(1, 'kumaradhara@gmail.com'),
(2, 'kumaradhara@gmail.com'),
(1, 'srikanthhr@pes.edu');

-- --------------------------------------------------------

--
-- Table structure for table `bundle_image`
--

CREATE TABLE IF NOT EXISTS `bundle_image` (
  `bundle_id` int(11) NOT NULL,
  `image_id` int(11) NOT NULL,
  PRIMARY KEY (`bundle_id`,`image_id`),
  KEY `image_id` (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bundle_image`
--

INSERT INTO `bundle_image` (`bundle_id`, `image_id`) VALUES
(1, 10406),
(1, 10408),
(1, 10409),
(1, 10411),
(1, 10412),
(1, 10414),
(1, 10415),
(1, 10417),
(1, 10419),
(1, 10420),
(1, 10421),
(1, 10423),
(1, 10424),
(1, 10425),
(1, 10426),
(1, 10428),
(1, 10430),
(1, 10431),
(1, 10432),
(1, 10434),
(1, 10436),
(1, 10437),
(1, 10438),
(1, 10440),
(1, 10441),
(1, 10443),
(1, 10444),
(1, 10446),
(1, 10447),
(1, 10449),
(1, 10451),
(1, 10452),
(1, 10453),
(1, 10455),
(1, 10457),
(1, 10458),
(1, 10459),
(1, 10461),
(1, 10462),
(1, 10463),
(1, 10465),
(1, 10466),
(1, 10468),
(1, 10469),
(1, 10471),
(1, 10472),
(1, 10473),
(1, 10474),
(1, 10475),
(1, 10476),
(1, 10478),
(1, 10479),
(1, 10481),
(1, 10482),
(1, 10484),
(1, 10485),
(1, 10487),
(1, 10488),
(1, 10490),
(1, 10492),
(1, 10493),
(1, 10495),
(1, 10496),
(1, 10498),
(1, 10500),
(1, 10501),
(1, 10503),
(1, 10504),
(1, 10506),
(1, 10508),
(1, 10509),
(1, 10511),
(1, 10513),
(2, 10514),
(2, 10516),
(2, 10520),
(2, 10522),
(2, 10524),
(2, 10526),
(2, 10529),
(2, 10531),
(2, 10532),
(2, 10534),
(2, 10535),
(2, 10537),
(2, 10538),
(2, 10539),
(2, 10541),
(2, 10543),
(2, 10547),
(2, 10549),
(2, 10551),
(2, 10552),
(2, 10554),
(2, 10556),
(2, 10563),
(2, 10565),
(2, 10566),
(2, 10568),
(2, 10570),
(2, 10572),
(2, 10575),
(2, 10577),
(2, 10875),
(2, 10877),
(2, 10883),
(2, 10893),
(2, 10895),
(2, 10896),
(2, 10898),
(2, 10900),
(2, 10902),
(2, 10913),
(2, 10914),
(2, 10916),
(2, 10918),
(2, 10919),
(2, 10921),
(2, 10933),
(2, 10935),
(2, 10942),
(2, 10943),
(2, 10945),
(2, 10946),
(2, 10948),
(2, 10952);

-- --------------------------------------------------------

--
-- Table structure for table `bundle_stud`
--

CREATE TABLE IF NOT EXISTS `bundle_stud` (
  `bundle_id` int(11) NOT NULL,
  `USN` varchar(10) NOT NULL,
  PRIMARY KEY (`bundle_id`,`USN`),
  KEY `USN` (`USN`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bundle_stud`
--

INSERT INTO `bundle_stud` (`bundle_id`, `USN`) VALUES
(1, '1PI12CS015'),
(1, '1PI12CS028'),
(1, '1PI12CS029'),
(1, '1PI12CS030'),
(1, '1PI12CS059'),
(1, '1PI12CS101'),
(1, '1PI12CS102'),
(1, '1PI12CS103'),
(1, '1PI12CS104'),
(1, '1PI12CS105'),
(1, '1PI12CS107'),
(2, '1PI12CS107'),
(2, '1PI13CS061'),
(2, '1PI13CS096'),
(2, '1PI13CS097'),
(2, '1PI13CS105'),
(2, '1PI13CS106'),
(2, '1PI13CS108'),
(2, '1PI13CS112'),
(2, '1PI13CS114'),
(2, '1PI13CS124'),
(2, '1PI13CS125'),
(2, '1PI13CS128'),
(2, '1PI13CS129'),
(2, '1PI13CS132'),
(2, '1PI13CS134');

-- --------------------------------------------------------

--
-- Table structure for table `challenge`
--

CREATE TABLE IF NOT EXISTS `challenge` (
  `image_id` int(10) NOT NULL,
  `comments` text,
  `eval_email` varchar(30) NOT NULL,
  PRIMARY KEY (`image_id`,`eval_email`),
  KEY `eval_email` (`eval_email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE IF NOT EXISTS `class` (
  `class_id` int(10) NOT NULL AUTO_INCREMENT,
  `dept_name` varchar(5) NOT NULL,
  `sem` int(1) NOT NULL,
  `section` char(1) NOT NULL,
  PRIMARY KEY (`class_id`),
  UNIQUE KEY `unique class in a department` (`sem`,`section`),
  KEY `FK constraint dept` (`dept_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3004 ;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`class_id`, `dept_name`, `sem`, `section`) VALUES
(3000, 'CSE', 8, 'A'),
(3002, 'CSE', 8, 'B'),
(3003, 'CSE', 6, 'A');

-- --------------------------------------------------------

--
-- Table structure for table `completed`
--

CREATE TABLE IF NOT EXISTS `completed` (
  `eval_email` varchar(50) NOT NULL,
  `image_id` int(11) NOT NULL,
  `bundle_id` int(11) NOT NULL,
  PRIMARY KEY (`eval_email`,`image_id`,`bundle_id`),
  KEY `image_id` (`image_id`),
  KEY `bundle_id` (`bundle_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE IF NOT EXISTS `department` (
  `dept_name` varchar(5) NOT NULL,
  PRIMARY KEY (`dept_name`),
  UNIQUE KEY `dept_name` (`dept_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_name`) VALUES
('CSE'),
('ECE');

-- --------------------------------------------------------

--
-- Table structure for table `evaluator`
--

CREATE TABLE IF NOT EXISTS `evaluator` (
  `eval_email` varchar(30) NOT NULL,
  `eval_first_name` varchar(20) NOT NULL,
  `eval_last_name` varchar(20) NOT NULL,
  `profile_photo` mediumblob,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `dept_name` varchar(5) NOT NULL,
  PRIMARY KEY (`eval_email`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `password` (`password`),
  KEY `dept_id` (`dept_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `evaluator`
--

INSERT INTO `evaluator` (`eval_email`, `eval_first_name`, `eval_last_name`, `profile_photo`, `username`, `password`, `dept_name`) VALUES
('kumaradhara@gmail.com', 'Nagabhushana', 'Kumar', NULL, 'nsk', 'nsk123', 'CSE'),
('srikanthhr@pes.edu', 'Srikanth', 'Ramanujam', NULL, 'srikanth', 'srikanth123', 'CSE');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE IF NOT EXISTS `image` (
  `image_id` int(10) NOT NULL AUTO_INCREMENT,
  `ques_id` int(10) NOT NULL,
  `USN` varchar(10) NOT NULL,
  `URL` varchar(767) NOT NULL,
  `generated_name` varchar(30) NOT NULL,
  `evaluation_done` int(11) NOT NULL,
  PRIMARY KEY (`image_id`,`ques_id`,`USN`),
  UNIQUE KEY `URL` (`URL`),
  UNIQUE KEY `uniqueques_idUSN` (`ques_id`,`USN`),
  KEY `fk stud_class` (`USN`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10953 ;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`image_id`, `ques_id`, `USN`, `URL`, `generated_name`, `evaluation_done`) VALUES
(10406, 6021, '1pi12cs030', '1pi12cs030/t112CS4013e2016.jpg', 't112CS4013e2016.jpg', 0),
(10408, 6017, '1pi12cs030', '1pi12cs030/t112CS4013b2016.jpg', 't112CS4013b2016.jpg', 0),
(10409, 6006, '1pi12cs030', '1pi12cs030/t112CS4011a2016.jpg', 't112CS4011a2016.jpg', 0),
(10411, 6013, '1pi12cs030', '1pi12cs030/t112CS4011b2016.jpg', 't112CS4011b2016.jpg', 0),
(10412, 6014, '1pi12cs030', '1pi12cs030/t112CS4011c2016.jpg', 't112CS4011c2016.jpg', 0),
(10414, 6012, '1pi12cs030', '1pi12cs030/t112CS4011d2016.jpg', 't112CS4011d2016.jpg', 0),
(10415, 6008, '1pi12cs030', '1pi12cs030/t112CS4013a2016.jpg', 't112CS4013a2016.jpg', 0),
(10417, 6018, '1pi12cs030', '1pi12cs030/t112CS4013c2016.jpg', 't112CS4013c2016.jpg', 0),
(10419, 6020, '1pi12cs030', '1pi12cs030/t112CS4013d2016.jpg', 't112CS4013d2016.jpg', 0),
(10420, 6020, '1pi12cs105', '1pi12cs105/t112CS4013d2016.jpg', 't112CS4013d2016.jpg', 0),
(10421, 6009, '1pi12cs105', '1pi12cs105/t112CS4012a2016.jpg', 't112CS4012a2016.jpg', 0),
(10423, 6010, '1pi12cs105', '1pi12cs105/t112CS4012b2016.jpg', 't112CS4012b2016.jpg', 0),
(10424, 6012, '1pi12cs105', '1pi12cs105/t112CS4011d2016.jpg', 't112CS4011d2016.jpg', 0),
(10425, 6021, '1pi12cs105', '1pi12cs105/t112CS4013e2016.jpg', 't112CS4013e2016.jpg', 0),
(10426, 6006, '1pi12cs105', '1pi12cs105/t112CS4011a2016.jpg', 't112CS4011a2016.jpg', 0),
(10428, 6013, '1pi12cs105', '1pi12cs105/t112CS4011b2016.jpg', 't112CS4011b2016.jpg', 0),
(10430, 6014, '1pi12cs105', '1pi12cs105/t112CS4011c2016.jpg', 't112CS4011c2016.jpg', 0),
(10431, 6021, '1pi12cs107', '1pi12cs107/t112CS4013e2016.jpg', 't112CS4013e2016.jpg', 0),
(10432, 6009, '1pi12cs107', '1pi12cs107/t112CS4012a2016.jpg', 't112CS4012a2016.jpg', 0),
(10434, 6010, '1pi12cs107', '1pi12cs107/t112CS4012b2016.jpg', 't112CS4012b2016.jpg', 0),
(10436, 6008, '1pi12cs107', '1pi12cs107/t112CS4013a2016.jpg', 't112CS4013a2016.jpg', 0),
(10437, 6012, '1pi12cs103', '1pi12cs103/t112CS4011d2016.jpg', 't112CS4011d2016.jpg', 0),
(10438, 6012, '1pi12cs015', '1pi12cs015/t112CS4011d2016.jpg', 't112CS4011d2016.jpg', 0),
(10440, 6022, '1pi12cs015', '1pi12cs015/t112CS4011e2016.jpg', 't112CS4011e2016.jpg', 0),
(10441, 6013, '1pi12cs015', '1pi12cs015/t112CS4011b2016.jpg', 't112CS4011b2016.jpg', 0),
(10443, 6014, '1pi12cs015', '1pi12cs015/t112CS4011c2016.jpg', 't112CS4011c2016.jpg', 0),
(10444, 6009, '1pi12cs015', '1pi12cs015/t112CS4012a2016.jpg', 't112CS4012a2016.jpg', 0),
(10446, 6010, '1pi12cs015', '1pi12cs015/t112CS4012b2016.jpg', 't112CS4012b2016.jpg', 0),
(10447, 6006, '1pi12cs015', '1pi12cs015/t112CS4011a2016.jpg', 't112CS4011a2016.jpg', 0),
(10449, 6008, '1pi12cs015', '1pi12cs015/t112CS4013a2016.jpg', 't112CS4013a2016.jpg', 0),
(10451, 6017, '1pi12cs015', '1pi12cs015/t112CS4013b2016.jpg', 't112CS4013b2016.jpg', 0),
(10452, 6022, '1pi12cs101', '1pi12cs101/t112CS4011e2016.jpg', 't112CS4011e2016.jpg', 0),
(10453, 6013, '1pi12cs101', '1pi12cs101/t112CS4011b2016.jpg', 't112CS4011b2016.jpg', 0),
(10455, 6008, '1pi12cs101', '1pi12cs101/t112CS4013a2016.jpg', 't112CS4013a2016.jpg', 0),
(10457, 6017, '1pi12cs101', '1pi12cs101/t112CS4013b2016.jpg', 't112CS4013b2016.jpg', 0),
(10458, 6012, '1pi12cs101', '1pi12cs101/t112CS4011d2016.jpg', 't112CS4011d2016.jpg', 0),
(10459, 6018, '1pi12cs101', '1pi12cs101/t112CS4013c2016.jpg', 't112CS4013c2016.jpg', 0),
(10461, 6020, '1pi12cs101', '1pi12cs101/t112CS4013d2016.jpg', 't112CS4013d2016.jpg', 0),
(10462, 6010, '1pi12cs059', '1pi12cs059/t112CS4012b2016.jpg', 't112CS4012b2016.jpg', 0),
(10463, 6017, '1pi12cs059', '1pi12cs059/t112CS4013b2016.jpg', 't112CS4013b2016.jpg', 0),
(10465, 6018, '1pi12cs059', '1pi12cs059/t112CS4013c2016.jpg', 't112CS4013c2016.jpg', 0),
(10466, 6020, '1pi12cs059', '1pi12cs059/t112CS4013d2016.jpg', 't112CS4013d2016.jpg', 0),
(10468, 6021, '1pi12cs059', '1pi12cs059/t112CS4013e2016.jpg', 't112CS4013e2016.jpg', 0),
(10469, 6006, '1pi12cs059', '1pi12cs059/t112CS4011a2016.jpg', 't112CS4011a2016.jpg', 0),
(10471, 6013, '1pi12cs059', '1pi12cs059/t112CS4011b2016.jpg', 't112CS4011b2016.jpg', 0),
(10472, 6022, '1pi12cs059', '1pi12cs059/t112CS4011e2016.jpg', 't112CS4011e2016.jpg', 0),
(10473, 6014, '1pi12cs059', '1pi12cs059/t112CS4011c2016.jpg', 't112CS4011c2016.jpg', 0),
(10474, 6009, '1pi12cs059', '1pi12cs059/t112CS4012a2016.jpg', 't112CS4012a2016.jpg', 0),
(10475, 6009, '1pi12cs028', '1pi12cs028/t112CS4012a2016.jpg', 't112CS4012a2016.jpg', 0),
(10476, 6018, '1pi12cs028', '1pi12cs028/t112CS4013c2016.jpg', 't112CS4013c2016.jpg', 0),
(10478, 6017, '1pi12cs028', '1pi12cs028/t112CS4013b2016.jpg', 't112CS4013b2016.jpg', 0),
(10479, 6012, '1pi12cs028', '1pi12cs028/t112CS4011d2016.jpg', 't112CS4011d2016.jpg', 0),
(10481, 6022, '1pi12cs028', '1pi12cs028/t112CS4011e2016.jpg', 't112CS4011e2016.jpg', 0),
(10482, 6006, '1pi12cs028', '1pi12cs028/t112CS4011a2016.jpg', 't112CS4011a2016.jpg', 0),
(10484, 6013, '1pi12cs028', '1pi12cs028/t112CS4011b2016.jpg', 't112CS4011b2016.jpg', 0),
(10485, 6017, '1pi12cs102', '1pi12cs102/t112CS4013b2016.jpg', 't112CS4013b2016.jpg', 0),
(10487, 6018, '1pi12cs102', '1pi12cs102/t112CS4013c2016.jpg', 't112CS4013c2016.jpg', 0),
(10488, 6020, '1pi12cs102', '1pi12cs102/t112CS4013d2016.jpg', 't112CS4013d2016.jpg', 0),
(10490, 6021, '1pi12cs102', '1pi12cs102/t112CS4013e2016.jpg', 't112CS4013e2016.jpg', 0),
(10492, 6009, '1pi12cs102', '1pi12cs102/t112CS4012a2016.jpg', 't112CS4012a2016.jpg', 0),
(10493, 6006, '1pi12cs102', '1pi12cs102/t112CS4011a2016.jpg', 't112CS4011a2016.jpg', 0),
(10495, 6013, '1pi12cs102', '1pi12cs102/t112CS4011b2016.jpg', 't112CS4011b2016.jpg', 0),
(10496, 6014, '1pi12cs102', '1pi12cs102/t112CS4011c2016.jpg', 't112CS4011c2016.jpg', 0),
(10498, 6022, '1pi12cs102', '1pi12cs102/t112CS4011e2016.jpg', 't112CS4011e2016.jpg', 0),
(10500, 6012, '1pi12cs102', '1pi12cs102/t112CS4011d2016.jpg', 't112CS4011d2016.jpg', 0),
(10501, 6010, '1pi12cs102', '1pi12cs102/t112CS4012b2016.jpg', 't112CS4012b2016.jpg', 0),
(10503, 6008, '1pi12cs102', '1pi12cs102/t112CS4013a2016.jpg', 't112CS4013a2016.jpg', 0),
(10504, 6018, '1pi12cs029', '1pi12cs029/t112CS4013c2016.jpg', 't112CS4013c2016.jpg', 0),
(10506, 6020, '1pi12cs029', '1pi12cs029/t112CS4013d2016.jpg', 't112CS4013d2016.jpg', 0),
(10508, 6021, '1pi12cs029', '1pi12cs029/t112CS4013e2016.jpg', 't112CS4013e2016.jpg', 0),
(10509, 6010, '1pi12cs029', '1pi12cs029/t112CS4012b2016.jpg', 't112CS4012b2016.jpg', 0),
(10511, 6008, '1pi12cs029', '1pi12cs029/t112CS4013a2016.jpg', 't112CS4013a2016.jpg', 0),
(10513, 6017, '1pi12cs029', '1pi12cs029/t112CS4013b2016.jpg', 't112CS4013b2016.jpg', 0),
(10514, 6023, '1PI13CS061', '1PI13CS061/t213CS3671a2016.jpg', 't213CS3671a2016.jpg', 0),
(10516, 6024, '1PI13CS061', '1PI13CS061/t213CS3671b2016.jpg', 't213CS3671b2016.jpg', 0),
(10520, 6028, '1PI13CS061', '1PI13CS061/t213CS3672c2016.jpg', 't213CS3672c2016.jpg', 0),
(10522, 6023, '1PI13CS096', '1PI13CS096/t213CS3671a2016.jpg', 't213CS3671a2016.jpg', 0),
(10524, 6030, '1PI13CS096', '1PI13CS096/t213CS3673b2016.jpg', 't213CS3673b2016.jpg', 0),
(10526, 6023, '1PI13CS097', '1PI13CS097/t213CS3671a2016.jpg', 't213CS3671a2016.jpg', 0),
(10529, 6030, '1PI13CS097', '1PI13CS097/t213CS3673b2016.jpg', 't213CS3673b2016.jpg', 0),
(10531, 6031, '1PI13CS097', '1PI13CS097/t213CS3673c2016.jpg', 't213CS3673c2016.jpg', 0),
(10532, 6026, '1PI13CS097', '1PI13CS097/t213CS3672a2016.jpg', 't213CS3672a2016.jpg', 0),
(10534, 6027, '1PI13CS097', '1PI13CS097/t213CS3672b2016.jpg', 't213CS3672b2016.jpg', 0),
(10535, 6024, '1PI13CS106', '1PI13CS106/t213CS3671b2016.jpg', 't213CS3671b2016.jpg', 0),
(10537, 6023, '1PI13CS105', '1PI13CS105/t213CS3671a2016.jpg', 't213CS3671a2016.jpg', 0),
(10538, 6024, '1PI13CS105', '1PI13CS105/t213CS3671b2016.jpg', 't213CS3671b2016.jpg', 0),
(10539, 6027, '1PI13CS105', '1PI13CS105/t213CS3672b2016.jpg', 't213CS3672b2016.jpg', 0),
(10541, 6028, '1PI13CS105', '1PI13CS105/t213CS3672c2016.jpg', 't213CS3672c2016.jpg', 0),
(10543, 6029, '1PI13CS105', '1PI13CS105/t213CS3673a2016.jpg', 't213CS3673a2016.jpg', 0),
(10547, 6025, '1PI13CS061', '1PI13CS061/t213CS3671c2016.jpg', 't213CS3671c2016.jpg', 0),
(10549, 6027, '1PI13CS061', '1PI13CS061/t213CS3672b2016.jpg', 't213CS3672b2016.jpg', 0),
(10551, 6029, '1PI13CS096', '1PI13CS096/t213CS3673a2016.jpg', 't213CS3673a2016.jpg', 0),
(10552, 6025, '1PI13CS096', '1PI13CS096/t213CS3671c2016.jpg', 't213CS3671c2016.jpg', 0),
(10554, 6028, '1PI13CS097', '1PI13CS097/t213CS3672c2016.jpg', 't213CS3672c2016.jpg', 0),
(10556, 6029, '1PI13CS097', '1PI13CS097/t213CS3673a2016.jpg', 't213CS3673a2016.jpg', 0),
(10563, 6029, '1PI13CS106', '1PI13CS106/t213CS3673a2016.jpg', 't213CS3673a2016.jpg', 0),
(10565, 6030, '1PI13CS106', '1PI13CS106/t213CS3673b2016.jpg', 't213CS3673b2016.jpg', 0),
(10566, 6031, '1PI13CS106', '1PI13CS106/t213CS3673c2016.jpg', 't213CS3673c2016.jpg', 0),
(10568, 6026, '1PI13CS106', '1PI13CS106/t213CS3672a2016.jpg', 't213CS3672a2016.jpg', 0),
(10570, 6027, '1PI13CS106', '1PI13CS106/t213CS3672b2016.jpg', 't213CS3672b2016.jpg', 0),
(10572, 6028, '1PI13CS106', '1PI13CS106/t213CS3672c2016.jpg', 't213CS3672c2016.jpg', 0),
(10575, 6031, '1PI13CS105', '1PI13CS105/t213CS3673c2016.jpg', 't213CS3673c2016.jpg', 0),
(10577, 6030, '1PI13CS105', '1PI13CS105/t213CS3673b2016.jpg', 't213CS3673b2016.jpg', 0),
(10875, 6026, '1PI13CS124', '1PI13CS124/t213CS3672a2016.jpg', 't213CS3672a2016.jpg', 0),
(10877, 6027, '1PI13CS124', '1PI13CS124/t213CS3672b2016.jpg', 't213CS3672b2016.jpg', 0),
(10878, 6025, '1PI13CS107', '1PI13CS107/t213CS3671c2016.jpg', 't213CS3671c2016.jpg', 0),
(10880, 6024, '1PI13CS107', '1PI13CS107/t213CS3671b2016.jpg', 't213CS3671b2016.jpg', 0),
(10881, 6028, '1PI13CS107', '1PI13CS107/t213CS3672c2016.jpg', 't213CS3672c2016.jpg', 0),
(10882, 6031, '1PI13CS107', '1PI13CS107/t213CS3673c2016.jpg', 't213CS3673c2016.jpg', 0),
(10883, 6031, '1PI13CS112', '1PI13CS112/t213CS3673c2016.jpg', 't213CS3673c2016.jpg', 0),
(10893, 6024, '1PI13CS108', '1PI13CS108/t213CS3671b2016.jpg', 't213CS3671b2016.jpg', 0),
(10895, 6025, '1PI13CS108', '1PI13CS108/t213CS3671c2016.jpg', 't213CS3671c2016.jpg', 0),
(10896, 6027, '1PI13CS108', '1PI13CS108/t213CS3672b2016.jpg', 't213CS3672b2016.jpg', 0),
(10898, 6028, '1PI13CS108', '1PI13CS108/t213CS3672c2016.jpg', 't213CS3672c2016.jpg', 0),
(10900, 6025, '1PI13CS128', '1PI13CS128/t213CS3671c2016.jpg', 't213CS3671c2016.jpg', 0),
(10902, 6026, '1PI13CS128', '1PI13CS128/t213CS3672a2016.jpg', 't213CS3672a2016.jpg', 0),
(10913, 6024, '1PI13CS125', '1PI13CS125/t213CS3671b2016.jpg', 't213CS3671b2016.jpg', 0),
(10914, 6025, '1PI13CS125', '1PI13CS125/t213CS3671c2016.jpg', 't213CS3671c2016.jpg', 0),
(10916, 6026, '1PI13CS125', '1PI13CS125/t213CS3672a2016.jpg', 't213CS3672a2016.jpg', 0),
(10918, 6027, '1PI13CS125', '1PI13CS125/t213CS3672b2016.jpg', 't213CS3672b2016.jpg', 0),
(10919, 6023, '1PI13CS132', '1PI13CS132/t213CS3671a2016.jpg', 't213CS3671a2016.jpg', 0),
(10921, 6031, '1PI13CS132', '1PI13CS132/t213CS3673c2016.jpg', 't213CS3673c2016.jpg', 0),
(10933, 6028, '1PI13CS114', '1PI13CS114/t213CS3672c2016.jpg', 't213CS3672c2016.jpg', 0),
(10935, 6029, '1PI13CS114', '1PI13CS114/t213CS3673a2016.jpg', 't213CS3673a2016.jpg', 0),
(10942, 6023, '1PI13CS129', '1PI13CS129/t213CS3671a2016.jpg', 't213CS3671a2016.jpg', 0),
(10943, 6024, '1PI13CS129', '1PI13CS129/t213CS3671b2016.jpg', 't213CS3671b2016.jpg', 0),
(10945, 6025, '1PI13CS129', '1PI13CS129/t213CS3671c2016.jpg', 't213CS3671c2016.jpg', 0),
(10946, 6027, '1PI13CS129', '1PI13CS129/t213CS3672b2016.jpg', 't213CS3672b2016.jpg', 0),
(10948, 6028, '1PI13CS129', '1PI13CS129/t213CS3672c2016.jpg', 't213CS3672c2016.jpg', 0),
(10952, 6030, '1PI13CS129', '1PI13CS129/t213CS3673b2016.jpg', 't213CS3673b2016.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `inserted_by`
--

CREATE TABLE IF NOT EXISTS `inserted_by` (
  `pq_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  PRIMARY KEY (`pq_id`),
  KEY `FK constraint admin` (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `marks_comments`
--

CREATE TABLE IF NOT EXISTS `marks_comments` (
  `image_id` int(11) NOT NULL,
  `eval_email` varchar(50) NOT NULL,
  `marks` int(11) NOT NULL,
  `comments` longtext NOT NULL,
  PRIMARY KEY (`image_id`,`eval_email`),
  KEY `marks_comments_ibfk_1` (`eval_email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `marks_comments`
--

INSERT INTO `marks_comments` (`image_id`, `eval_email`, `marks`, `comments`) VALUES
(10406, 'kumaradhara@gmail.com', 2, 'qwfqwffq'),
(10415, 'kumaradhara@gmail.com', 2, 'good'),
(10438, 'kumaradhara@gmail.com', 1, 'You lost one mark due to ignorance!'),
(10440, 'kumaradhara@gmail.com', 2, 'Great!'),
(10441, 'kumaradhara@gmail.com', 2, 'Could be better!'),
(10443, 'kumaradhara@gmail.com', 2, 'Good hand writing!!!'),
(10444, 'kumaradhara@gmail.com', 5, 'Full marks!!'),
(10446, 'kumaradhara@gmail.com', 4, 'One mistake'),
(10447, 'kumaradhara@gmail.com', 2, 'nice answer !!!!!'),
(10447, 'srikanthhr@pes.edu', 2, 'qwfqwfqwf'),
(10449, 'kumaradhara@gmail.com', 2, 'Smart'),
(10451, 'kumaradhara@gmail.com', 2, 'intelligent!!'),
(10455, 'kumaradhara@gmail.com', 2, 'smart'),
(10484, 'kumaradhara@gmail.com', 1, 'decent'),
(10511, 'kumaradhara@gmail.com', 2, 'Better');

-- --------------------------------------------------------

--
-- Table structure for table `pending_images`
--

CREATE TABLE IF NOT EXISTS `pending_images` (
  `pq_id` int(11) NOT NULL,
  `image_id` int(11) NOT NULL,
  PRIMARY KEY (`pq_id`,`image_id`),
  KEY `image_id` (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pending_queue`
--

CREATE TABLE IF NOT EXISTS `pending_queue` (
  `pq_id` int(11) NOT NULL,
  `eval_email` varchar(50) NOT NULL,
  PRIMARY KEY (`pq_id`),
  KEY `FK constraint eval` (`eval_email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pending_queue`
--

INSERT INTO `pending_queue` (`pq_id`, `eval_email`) VALUES
(1, 'kumaradhara@gmail.com'),
(3, 'kumaradhara@gmail.com'),
(2, 'srikanthhr@pes.edu'),
(4, 'srikanthhr@pes.edu');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE IF NOT EXISTS `question` (
  `question_id` int(10) NOT NULL AUTO_INCREMENT,
  `qp_id` int(11) NOT NULL,
  `question_num` varchar(2) NOT NULL,
  `question_text` varchar(767) NOT NULL,
  `expected_answer` longtext NOT NULL,
  `max_marks` int(11) NOT NULL,
  PRIMARY KEY (`question_id`),
  UNIQUE KEY `unique quesion and answers for each test` (`question_num`,`question_text`),
  UNIQUE KEY `uniquequesnumandpaperid` (`qp_id`,`question_num`),
  KEY `qp_id` (`qp_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6032 ;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`question_id`, `qp_id`, `question_num`, `question_text`, `expected_answer`, `max_marks`) VALUES
(6006, 1, '1a', 'Write code snippets for the following.\r\nfill a vector with random values between 0 and 100.', 'generate(begin(v), end(v), [](){ return rand() % 100; });', 2),
(6008, 1, '3a', 'What care should we take while returning a \r\nreference to a variable from a function?', 'should have life in the calling environment', 2),
(6009, 1, '2a', 'Write a function to find the position of the ith occurrence of a given element.', 'auto find_ith_occurence(auto first, auto  last, auto val, int i) -> decltype(first)\r\n{\r\n	auto pos = first;\r\n    while(i-- && (pos  = find(pos, last, val)) != last)\r\n	{\r\n		 \r\n	}\r\n	return pos;\r\n}', 5),
(6010, 1, '2b', 'Write a function to find the sum of elements in a vector ignoring the smallest and the biggest.', 'int find_sum(auto first, auto last)\r\n{\r\n	int s = 0;\r\n	// assume that the vector is not empty\r\n	int min = *first;\r\n	int max = *first;\r\n	for_each(first, last, [&s, &min, &max](int e){\r\n		s += e;\r\n		if(min < e) min = e;\r\n		if(max > e) max = e;\r\n	});\r\n	return s -(min + max);\r\n}\r\n', 5),
(6012, 1, '1d', 'Write code snippets for the following.\r\nFind whether any element in an array is a factor of a given number.', 'any_of(begin(v), end(v), [f](int e) { return e % f == 0; });', 2),
(6013, 1, '1b', 'check whether a given sequence is an arithmetic progression given the first term and the common difference.', 'all_of(begin(v), end(v), [&a, d](auto e) {\r\n	int temp = a; a += d; return e == temp;\r\n});', 2),
(6014, 1, '1c', 'template< class InputIt, class T, class BinaryOperation >\r\nT accumulate( InputIt first, InputIt last, T  init,  BinaryOperation op );\r\nmultiply all the elements of a vector using the above function.', 'int mul(int x, int y) { return x * y; }\r\naccumulate(begin(v), end(v), 1, mul);', 2),
(6017, 1, '3b', 'What are the differences between generic find and find of set?', 'generic find : linear, expects == operator, works on a range set find : logarithmic, uses the predicate of the type, works on the whole data structure.', 2),
(6018, 1, '3c', 'What does find return when it fails to find a match? Why?', 'returns the second arg for find - which is beyond the valid range. can return anything in not a valid range.', 2),
(6020, 1, '3d', 'What happens in this code?\r\n[](auto e){ cout <<  e  + e; }(10);\r\n', '20', 2),
(6021, 1, '3e', 'map<int, vector<int> > m;\r\nadd the element to a map with key 5 and value vector containing 5, 10, 15, 20.', 'm.insert(make_pair(5, vector<int>{5, 10, 15, 20}));', 2),
(6022, 1, '1e', 'Compare whether given vector and set have the elements.', 'sort(begin(v), end(v));\r\nmismatch(begin(v), end(v), begin(s)) ;', 2),
(6023, 4, '1a', 'class Test\r\n{\r\n	private:\r\n	int n_;\r\n	int *p_;\r\n	public:\r\n	Test(int n) : n_(n), p_(new int[n])\r\n	{\r\n		for(int i = 0; i < n; ++i)\r\n		{\r\n			p_[i] = i * i * i;\r\n		}\r\n	}\r\n	~Test()\r\n	{\r\n		delete [] p_;\r\n	}\r\n};\r\nprovide\r\na) copy assignment operator\r\nb) move constructor\r\nfor this class.														\r\n', 'Test& Test::operator=(const Test& rhs)\r\n{\r\n	if(this != &rhs)\r\n	{\r\n		delete [] p_;\r\n		p_ = new int[rhs.n_];\r\n		n_ = rhs.n_;\r\n		for(int i = 0; i < n_; ++i)\r\n		{\r\n			p_[i] = i * i * i;\r\n		}\r\n	}\r\n	return *this;\r\n}\r\n\r\nTest::Test(Test&& rhs)\r\n: p_(rhs.p_), n_(rhs.n_)\r\n{\r\n	rhs.p_ = nullptr;\r\n	rhs.n_ = 0;\r\n}\r\n', 4),
(6024, 4, '1b', ' What do the context sensitive key words : delete and default in the context\r\nof a class.', 'Compilers generate copy assignment, copy constructor, move assignment\r\nand move constructor by default. We can make our intentions clear by using\r\nthese keywords.\r\nclass A\r\n{\r\n	public:\r\n	A(const A&) = default;\r\n	A(A&& ) = delete;\r\n};', 4),
(6025, 4, '1c', 'State in which cases, should we use the friend function?', '- position of operand not right\r\n- binary operator not requiring an object of the class\r\n- convention demands ', 2),
(6026, 4, '2a', 'Why the following can not be virtual?\r\n	i) constructor\r\n	ii) static function of a class	', '- vptr is initialized to point to vtbl in the ctor\r\n- static function does not have an object - not called with an object\r\n  no object - no vptr - no vtbl', 4),
(6027, 4, '2b', ' What are the three overheads of inheritance?', 'table per class\r\npointer per object\r\nextra dereferencing at runtime', 2),
(6028, 4, '2c', 'When does the compiler emit more than one destructor for the destructor of the class? Why?', 'virtual base class objects - Object of immediate derived class of a virtual\r\nbase class should call the destructor of virtual base class when the object\r\ndies and should not call the destructor of virtual base class when an\r\nobject of its derived class dies.', 4),
(6029, 4, '3a', 'State the iterator hierarchy.', 'input iterator       output iterator\r\n      |                   |\r\n        forward iterator\r\n				|\r\n		bidirectional iterator\r\n				|\r\n		random access iterator', 3),
(6030, 4, '3b', 'Write a template function to swap two variables of any type.', 'template<typename T>\r\nvoid swap(T& x, T& y)\r\n{\r\n	T temp(move(x));\r\n	x = move(y);\r\n	y = move(temp);\r\n}', 4),
(6031, 4, '3c', 'template<typename T>\r\n   class A { };\r\n	 \r\n	template<typename T>\r\n   class A<T*> { };\r\n\r\n	template<typename T>\r\n   class A<int*> { };\r\n\r\n   Write the code to instantiate each of these classes.', 'A<int> a1;\r\nA<double*> a2;\r\nA<int*> a3;', 3);

-- --------------------------------------------------------

--
-- Table structure for table `question_paper`
--

CREATE TABLE IF NOT EXISTS `question_paper` (
  `qp_id` int(11) NOT NULL AUTO_INCREMENT,
  `sub_code` varchar(10) NOT NULL,
  `examtype` varchar(5) NOT NULL,
  `test_date` date NOT NULL,
  `test_time` time NOT NULL,
  `max_marks` int(11) NOT NULL,
  `extraction_done` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`qp_id`),
  UNIQUE KEY `onepaperpersubjectperexamtype` (`sub_code`,`examtype`),
  KEY `sub_code` (`sub_code`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `question_paper`
--

INSERT INTO `question_paper` (`qp_id`, `sub_code`, `examtype`, `test_date`, `test_time`, `max_marks`, `extraction_done`) VALUES
(1, '12CS401', 't1', '2016-02-22', '14:30:00', 50, 1),
(3, '12CS402', 't1', '2016-02-21', '14:30:00', 50, 0),
(4, '13CS367', 't2', '2016-03-24', '13:30:00', 30, 0);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE IF NOT EXISTS `student` (
  `USN` varchar(10) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `stud_email` varchar(30) NOT NULL,
  `contact_no` varchar(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`USN`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `password` (`password`),
  UNIQUE KEY `contact_no` (`contact_no`),
  UNIQUE KEY `stud_email` (`stud_email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`USN`, `first_name`, `last_name`, `stud_email`, `contact_no`, `username`, `password`) VALUES
('1PI12CS015', 'Aishwarya', 'JR', 'esha@gmail.com', '6785490098', 'aishwarya', 'esha123'),
('1PI12CS028', 'Ankit', 'Ranjan', 'ankitharrypotter@gmail.com', '8884058851', 'ankit', 'ankit123'),
('1PI12CS029', 'Ankur', 'Kishore', 'pesit.ankur@gmail.com', '8123590013', 'ankur', 'ankur123'),
('1PI12CS030', 'Anurag', 'Patwary', 'anuragpatwary@gmail.com', '9957123312', 'anurag', 'anurag123'),
('1PI12CS059', 'Himanshu', 'Ranjan', 'livelikehimanshu12@gmail.com', '9741304656', 'himanhu', 'himanshu123'),
('1PI12CS101', 'Naveen', 'Kumar', 'naveenkumar@gmail.com', '8765643212', 'naveen', 'naveen123'),
('1PI12CS102', 'Neelkumar', 'Bhuva', 'neel.7365@gmail.com', '8861711614', 'neelbhuva', 'paswrd'),
('1PI12CS103', 'Nidhi', 'Nayak', 'nidhir@gmail.com', '7676654333', 'nidhi', 'nidhi123'),
('1PI12CS104', 'Nihal', 'Harish', 'nihalharish@gmail.com', '8765456787', 'nihal', 'nihal123'),
('1PI12CS105', 'Nikhil', 'Agarwal', 'nikhilagarwal@gmail.com', '7656784323', 'nikhil', 'nikhil123'),
('1PI12CS107', 'Nikhila', 'S', 'nikhilas@gmail.com', '6789098765', 'nikhila', 'nikhila123'),
('1PI13CS061', 'Girish', 'K', 'girishK@gmail.com', '8765432345', 'girish', 'girish123'),
('1PI13CS096', 'Nagachandra', 'Upadhyaya', 'naga@gmail.com', '7654567898', 'naga', 'naga123'),
('1PI13CS097', 'Nagasundar', 'Jogis', 'nagasundar@gmail.com', '6789543234', 'nagasundar', 'nagasundar123'),
('1PI13CS105', 'Pavan', 'Shankar', 'pavans1@gmail.com', '3456789876', 'pavans', 'pavans123'),
('1PI13CS106', 'Pavan', 'S', 'pavans@gmail.com', '6543456789', 'pavan', 'pavan123'),
('1PI13CS107', 'jihbiuh', 'lhiuhiuh', 'iugbyguiu@gmail.com', '6754345678', 'ijbiiuiu', 'ijhiuhiuhiu'),
('1PI13CS108', 'ig yigygy', 'ig yg g ', 'ig iug ig ig i@gmail.com', '7654567859', 'mjh uih ', 'bgvyde'),
('1PI13CS112', 'qfwqgegf', 'qfqFqf', 'fqwfqwf@gmail.com', '1234567890', 'qwfd', 'ffq'),
('1PI13CS114', 'qf', 'ff', '2wq@gmail.com', '9876543212', 'qw', 'ff'),
('1PI13CS124', 'nkjn', 'ojnoi', 'oijoij@gmail.com', '6789876543', 'jpoijoij', 'iojioji'),
('1PI13CS125', 'qwfdq', 'ggggg', 'ufmdtym@gmail.com', '678997765', 'dqwfqwf', 'brfbr'),
('1PI13CS128', 'j', 'd', 'h', '6777e57e5', 'jgns', 'ssh'),
('1PI13CS129', 'sh', 'srtjjk', 'tyk', 'zse', 'hreh', 'yseyeay'),
('1PI13CS132', 'nt', 'e ', 'werg', 'g3g ', ' gq', 'gq geg'),
('1PI13CS134', 'qg rgq3g', 'q gr', 'qgeg', 'qeg q', 'rsth', 'bsnn');

-- --------------------------------------------------------

--
-- Table structure for table `stud_class`
--

CREATE TABLE IF NOT EXISTS `stud_class` (
  `USN` varchar(10) NOT NULL,
  `class_id` int(10) NOT NULL,
  PRIMARY KEY (`USN`),
  KEY `FK constraint class` (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stud_class`
--

INSERT INTO `stud_class` (`USN`, `class_id`) VALUES
('1PI12CS015', 3000),
('1PI12CS028', 3000),
('1PI12CS029', 3000),
('1PI12CS030', 3000),
('1PI12CS059', 3000),
('1PI12CS101', 3002),
('1PI12CS102', 3002),
('1PI12CS103', 3002),
('1PI12CS104', 3002),
('1PI12CS105', 3002),
('1PI12CS107', 3002),
('1PI13CS061', 3003),
('1PI13CS096', 3003),
('1PI13CS097', 3003),
('1PI13CS105', 3003),
('1PI13CS106', 3003),
('1PI13CS107', 3003),
('1PI13CS108', 3003),
('1PI13CS112', 3003),
('1PI13CS114', 3003),
('1PI13CS124', 3003),
('1PI13CS125', 3003),
('1PI13CS128', 3003),
('1PI13CS129', 3003),
('1PI13CS132', 3003),
('1PI13CS134', 3003);

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE IF NOT EXISTS `subject` (
  `sub_code` varchar(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `dept_name` varchar(5) NOT NULL,
  PRIMARY KEY (`sub_code`),
  UNIQUE KEY `title` (`title`),
  KEY `FK constraint dept` (`dept_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`sub_code`, `title`, `dept_name`) VALUES
('12CS401', 'WEB 2.0 and RIA', 'CSE'),
('12CS402', 'System Modelling and Simulation', 'CSE'),
('12CS403', 'Object Oriented Modelling and Simulation', 'CSE'),
('12CS404', 'Network Management', 'CSE'),
('12CS438A', 'Big Data', 'CSE'),
('13CS367', 'Advanced C++', 'CSE');

-- --------------------------------------------------------

--
-- Table structure for table `takes`
--

CREATE TABLE IF NOT EXISTS `takes` (
  `USN` varchar(10) NOT NULL,
  `sub_code` varchar(10) NOT NULL,
  PRIMARY KEY (`USN`,`sub_code`),
  KEY `sub_code` (`sub_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `takes`
--

INSERT INTO `takes` (`USN`, `sub_code`) VALUES
('1PI12CS015', '12CS401'),
('1PI12CS028', '12CS401'),
('1PI12CS029', '12CS401'),
('1PI12CS030', '12CS401'),
('1PI12CS059', '12CS401'),
('1PI12CS101', '12CS401'),
('1PI12CS102', '12CS401'),
('1PI12CS103', '12CS401'),
('1PI12CS104', '12CS401'),
('1PI12CS105', '12CS401'),
('1PI12CS107', '12CS401'),
('1PI12CS028', '12CS402'),
('1PI12CS059', '12CS402'),
('1PI12CS102', '12CS402'),
('1PI12CS107', '13CS367'),
('1PI13CS061', '13CS367'),
('1PI13CS096', '13CS367'),
('1PI13CS097', '13CS367'),
('1PI13CS105', '13CS367'),
('1PI13CS106', '13CS367'),
('1PI13CS108', '13CS367'),
('1PI13CS112', '13CS367'),
('1PI13CS114', '13CS367'),
('1PI13CS124', '13CS367'),
('1PI13CS125', '13CS367'),
('1PI13CS128', '13CS367'),
('1PI13CS129', '13CS367'),
('1PI13CS132', '13CS367'),
('1PI13CS134', '13CS367');

-- --------------------------------------------------------

--
-- Table structure for table `teaches`
--

CREATE TABLE IF NOT EXISTS `teaches` (
  `eval_email` varchar(50) NOT NULL,
  `sub_code` varchar(10) NOT NULL,
  `class_id` int(10) NOT NULL,
  PRIMARY KEY (`eval_email`,`sub_code`,`class_id`),
  KEY `sub_code` (`sub_code`),
  KEY `class_id` (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teaches`
--

INSERT INTO `teaches` (`eval_email`, `sub_code`, `class_id`) VALUES
('kumaradhara@gmail.com', '12CS401', 3000),
('srikanthhr@pes.edu', '12CS401', 3000),
('srikanthhr@pes.edu', '12CS401', 3002),
('kumaradhara@gmail.com', '13CS367', 3003);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bundle`
--
ALTER TABLE `bundle`
  ADD CONSTRAINT `bundle_ibfk_1` FOREIGN KEY (`qp_id`) REFERENCES `question_paper` (`qp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bundle_eval`
--
ALTER TABLE `bundle_eval`
  ADD CONSTRAINT `bundle_eval_ibfk_1` FOREIGN KEY (`bundle_id`) REFERENCES `bundle` (`bundle_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bundle_eval_ibfk_2` FOREIGN KEY (`eval_email`) REFERENCES `evaluator` (`eval_email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bundle_image`
--
ALTER TABLE `bundle_image`
  ADD CONSTRAINT `bundle_image_ibfk_1` FOREIGN KEY (`bundle_id`) REFERENCES `bundle` (`bundle_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bundle_image_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bundle_stud`
--
ALTER TABLE `bundle_stud`
  ADD CONSTRAINT `bundle_stud_ibfk_1` FOREIGN KEY (`bundle_id`) REFERENCES `bundle` (`bundle_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bundle_stud_ibfk_2` FOREIGN KEY (`USN`) REFERENCES `student` (`USN`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `challenge`
--
ALTER TABLE `challenge`
  ADD CONSTRAINT `challenge_ibfk_1` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `challenge_ibfk_2` FOREIGN KEY (`eval_email`) REFERENCES `evaluator` (`eval_email`) ON DELETE CASCADE;

--
-- Constraints for table `class`
--
ALTER TABLE `class`
  ADD CONSTRAINT `fk dept` FOREIGN KEY (`dept_name`) REFERENCES `department` (`dept_name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `completed`
--
ALTER TABLE `completed`
  ADD CONSTRAINT `completed_ibfk_1` FOREIGN KEY (`eval_email`) REFERENCES `bundle_eval` (`eval_email`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `completed_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `bundle_image` (`image_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `completed_ibfk_3` FOREIGN KEY (`bundle_id`) REFERENCES `bundle_eval` (`bundle_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `evaluator`
--
ALTER TABLE `evaluator`
  ADD CONSTRAINT `evaluator_ibfk_1` FOREIGN KEY (`dept_name`) REFERENCES `department` (`dept_name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `fk question` FOREIGN KEY (`ques_id`) REFERENCES `question` (`question_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk stud_class` FOREIGN KEY (`USN`) REFERENCES `stud_class` (`USN`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `inserted_by`
--
ALTER TABLE `inserted_by`
  ADD CONSTRAINT `inserted_by_ibfk_1` FOREIGN KEY (`pq_id`) REFERENCES `pending_queue` (`pq_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `inserted_by_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `marks_comments`
--
ALTER TABLE `marks_comments`
  ADD CONSTRAINT `marks_comments_ibfk_1` FOREIGN KEY (`eval_email`) REFERENCES `bundle_eval` (`eval_email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `marks_comments_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `bundle_image` (`image_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pending_images`
--
ALTER TABLE `pending_images`
  ADD CONSTRAINT `pending_images_ibfk_1` FOREIGN KEY (`pq_id`) REFERENCES `pending_queue` (`pq_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pending_images_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`qp_id`) REFERENCES `question_paper` (`qp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `question_paper`
--
ALTER TABLE `question_paper`
  ADD CONSTRAINT `question_paper_ibfk_1` FOREIGN KEY (`sub_code`) REFERENCES `subject` (`sub_code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `stud_class`
--
ALTER TABLE `stud_class`
  ADD CONSTRAINT `fk student` FOREIGN KEY (`USN`) REFERENCES `student` (`USN`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stud_class_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`);

--
-- Constraints for table `subject`
--
ALTER TABLE `subject`
  ADD CONSTRAINT `fk dept1` FOREIGN KEY (`dept_name`) REFERENCES `department` (`dept_name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `takes`
--
ALTER TABLE `takes`
  ADD CONSTRAINT `takes_ibfk_1` FOREIGN KEY (`USN`) REFERENCES `student` (`USN`),
  ADD CONSTRAINT `takes_ibfk_2` FOREIGN KEY (`sub_code`) REFERENCES `subject` (`sub_code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teaches`
--
ALTER TABLE `teaches`
  ADD CONSTRAINT `teaches_ibfk_1` FOREIGN KEY (`eval_email`) REFERENCES `evaluator` (`eval_email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `teaches_ibfk_2` FOREIGN KEY (`sub_code`) REFERENCES `subject` (`sub_code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `teaches_ibfk_3` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
