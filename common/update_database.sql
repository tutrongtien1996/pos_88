-- Open remote connection --
CREATE USER 'username'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on *.* TO 'username'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

-- 2023-01-05 --

CREATE TABLE sample_business
(
	id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(55),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP
)

CREATE TABLE sample_products
(
	id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(55),
    price FLOAT,
    image VARCHAR(255),
    business_id VARCHAR(55),
    category_id VARCHAR(55),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP
)

