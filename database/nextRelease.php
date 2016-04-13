ALTER TABLE `bundle_stud` DROP FOREIGN KEY `bundle_stud_ibfk_1`;
ALTER TABLE `bundle_stud` ADD  CONSTRAINT `bundle_stud_ibfk_1` FOREIGN KEY (`bundle_id`) REFERENCES `REAP`.`bundle`(`bundle_id`) ON DELETE CASCADE ON UPDATE CASCADE;

//to drop constraint from bundle_Stud table

ALTER TABLE `challenge`  ADD `status` ENUM('PENDING','ACCEPTED','REJECTED') NOT NULL DEFAULT 'PENDING';

ALTER TABLE `challenge` CHANGE `status` `status` ENUM('PENDING','UPDATED','REJECTED') CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'PENDING';