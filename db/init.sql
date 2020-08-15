CREATE TABLE points
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    category VARCHAR(30),
    description TEXT,
    coordinate VARCHAR(200)
);

INSERT INTO points
    (title, category, description, coordinate)
VALUES
    ('Дом', 'Мои метки', 'дом в мск', 'Андроньевская пл., 10, Москва, 105120');