CREATE TABLE IF NOT EXISTS challenge (
  USN varchar(10) NOT NULL,
  sub_code varchar(10) NOT NULL,
  exam_type varchar(5) NOT NULL,
  question_num varchar(2) NOT NULL,
  evaluator varchar(30) NOT NULL,
  challenge int(1),
  comments TEXT,
  PRIMARY KEY (USN,sub_code,exam_type,question_num),
  FOREIGN KEY (USN) REFERENCES student(USN)  ON DELETE CASCADE,
  FOREIGN KEY (sub_code) REFERENCES question_paper(sub_code)  ON DELETE CASCADE,
  FOREIGN KEY (exam_type) REFERENCES question_paper(examtype)  ON DELETE CASCADE,
  FOREIGN KEY (question_num) REFERENCES question(question_num) 
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS challenge;
CREATE TABLE IF  NOT EXISTS challenge (
 image_id int(10)  NOT NULL,
 comments TEXT,
 eval_email varchar(30) NOT NULL,
 PRIMARY KEY(image_id,eval_email),
 Foreign KEY(image_id) REFERENCES image(image_id) ON DELETE CASCADE,
 Foreign KEY(eval_email) REFERENCES evaluator(eval_email) ON DELETE CASCADE
)

Insert into challenge values (10064,"Why not 5 .,,it is correct","kumaradhara@gmail.com")
