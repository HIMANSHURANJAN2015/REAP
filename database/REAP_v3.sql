-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 08, 2016 at 10:56 AM
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `bundle`
--

INSERT INTO `bundle` (`bundle_id`, `qp_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1);

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
(1, 'srikanthhr@pes.edu'),
(2, 'srikanthhr@pes.edu');

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
(1, 10000),
(2, 10000),
(1, 10001),
(1, 10002),
(1, 10003),
(2, 10003),
(1, 10005),
(1, 10006),
(1, 10007),
(1, 10009),
(1, 10010),
(1, 10011),
(1, 10012),
(1, 10013),
(1, 10014),
(1, 10015),
(1, 10017),
(1, 10018),
(1, 10019),
(1, 10020),
(1, 10022),
(1, 10023),
(1, 10024),
(1, 10025),
(1, 10026);

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
(1, '1PI12CS028'),
(2, '1PI12CS028'),
(1, '1PI12CS059'),
(2, '1PI12CS059'),
(1, '1PI12CS101'),
(1, '1PI12CS102'),
(2, '1PI12CS102'),
(1, '1PI12CS103');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3003 ;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`class_id`, `dept_name`, `sem`, `section`) VALUES
(3000, 'CSE', 8, 'A'),
(3002, 'CSE', 8, 'B');

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

--
-- Dumping data for table `completed`
--

INSERT INTO `completed` (`eval_email`, `image_id`, `bundle_id`) VALUES
('kumaradhara@gmail.com', 10000, 1),
('kumaradhara@gmail.com', 10000, 2),
('srikanthhr@pes.edu', 10000, 1),
('srikanthhr@pes.edu', 10001, 2);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10027 ;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`image_id`, `ques_id`, `USN`, `URL`, `generated_name`, `evaluation_done`) VALUES
(10000, 6006, '1PI12CS102', '1pi12cs102/t112CS4011a2016.jpg', 't1_12CS401_4a_2016', 1),
(10001, 6009, '1PI12CS102', '1pi12cs102/t112CS4012a2016.jpg', 'ASVAFF', 0),
(10002, 6008, '1PI12CS102', '1pi12cs102/t112CS4013a2016.jpg', 'aavavavqvqafv', 1),
(10003, 6009, '1PI12CS059', '1pi12cs059/t112CS4012a2016.jpg', 'dtjtd jdtdtytdkdtk d', 0),
(10005, 6012, '1PI12CS101', '1pi12cs101/t112CS4011d2016.jpg', 'hjgihghg', 0),
(10006, 6013, '1PI12CS102', '1pi12cs102/t112CS4011b2016.jpg', 't112CS4014a2016', 0),
(10007, 6014, '1PI12CS102', '1pi12cs102/t112CS4011c2016.jpg', 't112CS4011c2016.jpg', 0),
(10009, 6017, '1PI12CS102', '1pi12cs102/t112CS4013b2016.jpg', 't112CS4013b2016.jpg', 0),
(10010, 6018, '1PI12CS102', '1pi12cs102/t112CS4013c2016.jpg', 't112CS4013c2016.jpg', 0),
(10011, 6020, '1PI12CS102', '1pi12cs102/t112CS4013d2016.jpg', 't112CS4013d2016.jpg', 0),
(10012, 6021, '1PI12CS102', '1pi12cs102/t112CS4013e2016.jpg', 't112CS4013e2016.jpg', 0),
(10013, 6010, '1PI12CS102', '1pi12cs102/t112CS4012b2016.jpg', 't112CS4012b2016.jpg', 0),
(10014, 6022, '1PI12CS102', '1pi12cs102/t112CS4011e2016.jpg', 't112CS4011e2016.jpg', 0),
(10015, 6022, '1PI12CS101', '1pi12cs101/t112CS4011e2016.jpg', 't112CS4011e2016.jpg', 0),
(10017, 6018, '1PI12CS101', '1pi12cs101/t112CS4013c2016.jpg', 't112CS4011e2016.jpg', 0),
(10018, 6006, '1PI12CS059', '1pi12cs059/t112CS4011a2016.jpg', 't112CS4011a2016.jpg', 0),
(10019, 6010, '1PI12CS059', '1pi12cs059/t112CS4012b2016.jpg', 't112CS4012b2016.jpg', 0),
(10020, 6020, '1PI12CS059', '1pi12cs059/t112CS4013d2016.jpg', 't112CS4011a2016.jpg', 0),
(10022, 6021, '1PI12CS059', '1pi12cs059/t112CS4013e2016.jpg', 't112CS4013e2016.jpg', 0),
(10023, 6009, '1PI12CS028', '1pi12cs028/t112CS4012a2016.jpg', 't112CS4012a2016.jpg', 0),
(10024, 6017, '1PI12CS028', '1pi12cs028/t112CS4013b2016.jpg', 't112CS4013b2016.jpg', 0),
(10025, 6018, '1PI12CS028', '1pi12cs028/t112CS4013c2016.jpg', 't112CS4013c2016.jpg', 0),
(10026, 6020, '1PI12CS028', '1pi12cs028/t112CS4013d2016.jpg', 't112CS4013d2016.jpg', 0);

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
  KEY `eval_email` (`eval_email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `marks_comments`
--

INSERT INTO `marks_comments` (`image_id`, `eval_email`, `marks`, `comments`) VALUES
(10000, 'kumaradhara@gmail.com', 4, 'heelo');

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

--
-- Dumping data for table `pending_images`
--

INSERT INTO `pending_images` (`pq_id`, `image_id`) VALUES
(1, 10000),
(2, 10000),
(1, 10001),
(2, 10001),
(1, 10002),
(1, 10003);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6023 ;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`question_id`, `qp_id`, `question_num`, `question_text`, `expected_answer`, `max_marks`) VALUES
(6006, 1, '1a', 'Write code snippets for the following.\r\nfill a vector with random values between 0 and 100.', 'generate(begin(v), end(v), [](){ return rand() % 100; });', 2),
(6008, 1, '3a', 'What care should we take while returning a \r\nreference to a variable from a function?', 'should have life in the calling environment', 8),
(6009, 1, '2a', 'Write a function to find the position of the ith occurrence of a given element.', 'auto find_ith_occurence(auto first, auto  last, auto val, int i) -> decltype(first)\r\n{\r\n	auto pos = first;\r\n    while(i-- && (pos  = find(pos, last, val)) != last)\r\n	{\r\n		 \r\n	}\r\n	return pos;\r\n}', 5),
(6010, 1, '2b', 'Write a function to find the sum of elements in a vector ignoring the smallest and the biggest.', 'int find_sum(auto first, auto last)\r\n{\r\n	int s = 0;\r\n	// assume that the vector is not empty\r\n	int min = *first;\r\n	int max = *first;\r\n	for_each(first, last, [&s, &min, &max](int e){\r\n		s += e;\r\n		if(min < e) min = e;\r\n		if(max > e) max = e;\r\n	});\r\n	return s -(min + max);\r\n}\r\n', 5),
(6012, 1, '1d', 'Write code snippets for the following.\r\nFind whether any element in an array is a factor of a given number.', 'any_of(begin(v), end(v), [f](int e) { return e % f == 0; });', 5),
(6013, 1, '1b', 'check whether a given sequence is an arithmetic progression given the first term and the common difference.', 'all_of(begin(v), end(v), [&a, d](auto e) {\r\n	int temp = a; a += d; return e == temp;\r\n});', 2),
(6014, 1, '1c', 'template< class InputIt, class T, class BinaryOperation >\r\nT accumulate( InputIt first, InputIt last, T  init,  BinaryOperation op );\r\nmultiply all the elements of a vector using the above function.', 'int mul(int x, int y) { return x * y; }\r\naccumulate(begin(v), end(v), 1, mul);', 2),
(6017, 1, '3b', 'What are the differences between generic find and find of set?', 'generic find : linear, expects == operator, works on a range set find : logarithmic, uses the predicate of the type, works on the whole data structure.', 2),
(6018, 1, '3c', 'What does find return when it fails to find a match? Why?', 'returns the second arg for find - which is beyond the valid range. can return anything in not a valid range.', 2),
(6020, 1, '3d', 'What happens in this code?\r\n[](auto e){ cout <<  e  + e; }(10);\r\n', '20', 2),
(6021, 1, '3e', 'map<int, vector<int> > m;\r\nadd the element to a map with key 5 and value vector containing 5, 10, 15, 20.', 'm.insert(make_pair(5, vector<int>{5, 10, 15, 20}));', 2),
(6022, 1, '1e', 'Compare whether given vector and set have the elements.', 'sort(begin(v), end(v));\r\nmismatch(begin(v), end(v), begin(s)) ;', 2);

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
  PRIMARY KEY (`qp_id`),
  UNIQUE KEY `onepaperpersubjectperexamtype` (`sub_code`,`examtype`),
  KEY `sub_code` (`sub_code`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `question_paper`
--

INSERT INTO `question_paper` (`qp_id`, `sub_code`, `examtype`, `test_date`, `test_time`, `max_marks`) VALUES
(1, '12CS401', 't1', '2016-02-22', '14:30:00', 50),
(3, '12CS402', 't1', '2016-02-21', '14:30:00', 50);

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
('1PI12CS028', 'Ankit', 'Ranjan', 'ankitharrypotter@gmail.com', '8884058851', 'ankit', 'ankit123'),
('1PI12CS029', 'Ankur', 'Kishore', 'pesit.ankur@gmail.com', '8123590013', 'ankur', 'ankur123'),
('1PI12CS030', 'Anurag', 'Patwary', 'anuragpatwary@gmail.com', '9957123312', 'anurag', 'anurag123'),
('1PI12CS059', 'Himanshu', 'Ranjan', 'livelikehimanshu12@gmail.com', '9741304656', 'himanhu', 'himanshu123'),
('1PI12CS101', 'Naveen', 'Kumar', 'naveenkumar@gmail.com', '8765643212', 'naveen', 'naveen123'),
('1PI12CS102', 'Neelkumar', 'Bhuva', 'neel.7365@gmail.com', '8861711614', 'neelbhuva', 'paswrd'),
('1PI12CS103', 'Nidhi', 'Nayak', 'nidhir@gmail.com', '7676654333', 'nidhi', 'nidhi123');

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
('1PI12CS101', 3000),
('1PI12CS102', 3000),
('1PI12CS103', 3000),
('1PI12CS028', 3002),
('1PI12CS059', 3002);

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
('12CS438A', 'Big Data', 'CSE');

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
('1PI12CS028', '12CS401'),
('1PI12CS059', '12CS401'),
('1PI12CS101', '12CS401'),
('1PI12CS102', '12CS401'),
('1PI12CS103', '12CS401'),
('1PI12CS028', '12CS402'),
('1PI12CS059', '12CS402'),
('1PI12CS102', '12CS402');

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
('srikanthhr@pes.edu', '12CS401', 3000),
('srikanthhr@pes.edu', '12CS401', 3002);

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
  ADD CONSTRAINT `bundle_image_ibfk_1` FOREIGN KEY (`bundle_id`) REFERENCES `bundle_eval` (`bundle_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bundle_image_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bundle_stud`
--
ALTER TABLE `bundle_stud`
  ADD CONSTRAINT `bundle_stud_ibfk_1` FOREIGN KEY (`bundle_id`) REFERENCES `bundle_eval` (`bundle_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bundle_stud_ibfk_2` FOREIGN KEY (`USN`) REFERENCES `student` (`USN`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `marks_comments_ibfk_1` FOREIGN KEY (`eval_email`) REFERENCES `evaluator` (`eval_email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `marks_comments_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `fk student` FOREIGN KEY (`USN`) REFERENCES `student` (`USN`) ON DELETE CASCADE ON UPDATE CASCADE;

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
