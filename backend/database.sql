CREATE DATABASE IF NOT EXISTS graphic_tablet_app;

USE graphic_tablet_app;

CREATE TABLE `users` (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE `user_address` (
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    postal_code VARCHAR(8) NOT NULL,
    province VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    telephone VARCHAR(255) NOT NULL,
    mobile VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE `admin` (
	user_id INT NOT NULL,
    PRIMARY KEY(user_id)
);

CREATE TABLE `product_category`(
	id INT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `description` TEXT,
    PRIMARY KEY(id)
);

CREATE TABLE `product`(
	id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT,
    price DECIMAL NOT NULL,
    first_image_url VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    inventory INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(category_id) REFERENCES product_category(id)
);

CREATE TABLE `product_image`(
	product_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    PRIMARY KEY(product_id, image_url),
    FOREIGN KEY(product_id) REFERENCES product(id)
);

CREATE TABLE `cart`(
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    bought_at DATETIME,
    total_price DECIMAL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE `cart_item`(
	cart_id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL,
    PRIMARY KEY(cart_id, product_id),
    FOREIGN KEY(cart_id) REFERENCES cart(id),
    FOREIGN KEY(product_id) REFERENCES product(id)
);
