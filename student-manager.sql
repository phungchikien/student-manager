-- Bảng 'Students' chứa thông tin học sinh
CREATE TABLE student_manager2.Students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Classes(class_id)
);

-- Bảng 'Teachers' chứa thông tin giáo viên
CREATE TABLE student_manager2.Teachers (
    teacher_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Bảng 'Classes' chứa thông tin lớp học
CREATE TABLE student_manager2.Classes (
    class_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES Teachers(teacher_id)
);

-- Bảng 'Academic_Years' chứa thông tin năm học
CREATE TABLE student_manager2.Academic_Years (
    academic_year_id INT AUTO_INCREMENT PRIMARY KEY,
    year INT NOT NULL
);

-- Bảng 'Semesters' chứa thông tin học kì
CREATE TABLE student_manager2.Semesters (
    semester_id INT AUTO_INCREMENT PRIMARY KEY,
    academic_year_id INT,
    semester_number INT NOT NULL,
    FOREIGN KEY (academic_year_id) REFERENCES Academic_Years(academic_year_id)
);

-- Bảng 'Grades' chứa điểm số của học sinh
CREATE TABLE student_manager2.Grades (
    grade_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    semester_id INT,
    score DECIMAL(3, 1),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (semester_id) REFERENCES Semesters(semester_id)
);

ALTER TABLE semesters DROP FOREIGN KEY semesters_ibfk_1;
ALTER TABLE semesters ADD CONSTRAINT semesters_ibfk_1 FOREIGN KEY (academic_year_id) REFERENCES academic_years(academic_year_id) ON DELETE CASCADE;

ALTER TABLE grades 
ADD COLUMN academic_year_id VARCHAR(255) NOT NULL
ADD COLUMN semester_id VARCHAR(255) NOT NULL;

show tables from student_manager2

select * from academic_years
select * from semesters
select * from teachers
select * from grades
select * from classes
select * from students

delete from grades where grade_id = 7
alter table grades auto_increment = 4

ALTER TABLE Grades DROP FOREIGN KEY grades_ibfk_1;
ALTER TABLE Grades ADD CONSTRAINT grades_ibfk_1 FOREIGN KEY (student_id) REFERENCES Students(student_id) ON DELETE CASCADE;

ALTER TABLE Grades DROP FOREIGN KEY grades_ibfk_2;
ALTER TABLE Grades ADD CONSTRAINT grades_ibfk_2 FOREIGN KEY (semester_id) REFERENCES Semesters(semester_id) ON DELETE CASCADE;

