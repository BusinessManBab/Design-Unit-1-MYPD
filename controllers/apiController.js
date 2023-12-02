const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');

const db = new JsonDB(new Config(`testdb.json`, true, false, '/'));

const defaultData = {
    facilities: [
        {
            facility_title: "Quality Grand Hotel",
            image_url: "https://www.strawberry.no/globalassets/global/hotel-pictures/quality-hotel/quality-hotel-grand-kongsberg/the-hotel/outdoor/facade-main-entrance-quality-hotel-grand-kongsberg.jpg?t=SmartScale%7c1024x570",
            facility_description: "Nice hotel with beautiful views and very good food and service",
            reviews: [
                {
                    review_text: "Great food, but very expensive"
                }
            ]
        },
        {
            facility_title: "Kongens restaurant & bar",
            image_url: "https://uploads-ssl.webflow.com/6262c65ce215186c7481d3dc/626b5fb0f8064f68871711f7_utsikt_50.jpg",
            facility_description: "blal bal bla bla ",
            reviews: [
                {
                    review_text: "Had to throw up"
                }
            ]
        },
        {
            facility_title: "1624 Hotel",
            image_url: "https://www.kongsberg.no/wp-content/uploads/2020/01/hotel-1624-5-e1649155613860.jpeg",
            facility_description: "Beautiful hotel with amazing view",
            reviews: [
                {
                    review_text: "Nice view from the restaurant"
                }
            ]
        },
        {
            facility_title: "Peppes Pizza",
            image_url: "https://www.kongsberg.no/wp-content/uploads/2020/01/peppes2.jpg",
            facility_description: "Delicious american style pizza",
            reviews: [
                {
                    review_text: "The food was exquisite"
                }
            ]
        },
        {
            facility_title: "Marlenes Bistro",
            image_url: "https://www.kongsberg.no/wp-content/uploads/2019/11/marlenes-bistro-3-960x810.jpg",
            facility_description: "Luxorious and delicious food",
            reviews: [
                {
                    review_text: "Way too expensive, but delicious"
                }
            ]
        }
    ]
};
db.push("/reviews",defaultData);

//var data = db.getData("/reviews");
//console.log("data: ", data);

exports.ping = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
    res.send('pong');
};

exports.reviews = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
    //res.send(mockData);
    res.send(db.getData("/reviews"));
};

exports.newReview = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
    //console.log("req: ", req.body);
    var rev = JSON.parse(req.body);
    console.log("rev id, text:", rev.id, rev.review_text)
    db.push(`/reviews/facilities[${rev.id}]/reviews[]`, {review_text: rev.review_text});
    res.send("OK");
}

exports.reviewsFor = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
    //console.log("req: ", req.body);
    const facilityId = req.body;
    const data = db.getData(`/reviews/facilities[${facilityId}]`)
    //console.log("id, data", facilityId, data);
    res.send(data);
}