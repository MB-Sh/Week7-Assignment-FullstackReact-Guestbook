import {db} from "./server.js"

// db.query(`CREATE TABLE IF NOT EXISTS categories (
//     id SERIAL PRIMARY KEY,
//     catergory_name VARCHAR(255) NOT NULL
//   );
// `);

// db.query(`CREATE TABLE IF NOT EXISTS locations (
//   id SERIAL PRIMARY KEY,
//   title VARCHAR(255) NOT NULL,
//   description TEXT NOT NULL,
//   travel_tip TEXT,
//   image_src TEXT
//   );
// `);

// db.query(`CREATE TABLE IF NOT EXISTS locations_categories (
//     location_id INTEGER REFERENCES locations(id),
//     category_id INTEGER REFERENCES categories(id),
//     PRIMARY KEY (location_id, category_id)
//     );
//     `);
    


// db.query(`INSERT INTO categories(catergory_name) VALUES ('Beach'),('Mountain'),
//     ('Tropical'),('City');
//   `);

// db.query(`INSERT INTO locations (title, description,travel_tip, image_src)
//    VALUES
//    ('Santorini, Greece','A city is famed for its crystalline seas, ancient attractions, and warm hospitality',
//    'Busiest months: July and August', 'https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416135_640.jpg'),
//    ('Scottish Highlands','The moody, romantic Scottish Highlands start at Loch Lomond just north of Glasgow',
//    'Avoid in Winter', 'https://cdn.pixabay.com/photo/2023/11/06/11/28/scotland-8369454_640.jpg'),
//    ('Bali, Indonesia','A tropical paradise with colourful culture and stunning nature','Bring a bug spray',
//    'https://cdn.pixabay.com/photo/2016/07/13/10/56/rice-1514141_640.jpg'),
//    ('Dubai','A city of skyscrapers','Avoid Traveling in Summer',
//    'https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045037_640.jpg');
//    `);

db.query(`
    INSERT INTO locations_categories (location_id, category_id) 
    VALUES (1, 1), (2, 2), (3, 3),  (4, 4);  
  `);




