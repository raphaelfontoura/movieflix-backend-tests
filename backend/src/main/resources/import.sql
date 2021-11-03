INSERT INTO tb_role (authority) VALUES ('ROLE_USER');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user(name, email, password) VALUES ('Bob','bob@gmail.com','$2a$10$hdEJULxdpGg1KvJqQRvXDeQyQUhkNdPfLBnXz2FUJL6LQieOWpnqe');
INSERT INTO tb_user(name, email, password) VALUES ('Ana','ana@gmail.com','$2a$10$hdEJULxdpGg1KvJqQRvXDeQyQUhkNdPfLBnXz2FUJL6LQieOWpnqe');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

