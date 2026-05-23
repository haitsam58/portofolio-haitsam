const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
    const referer = req.headers.referer || "";

    const allowed = referer.includes(
        "portfolio-haitsam.vercel.app"
    );

    if (!allowed) {
        return res.status(403).send("Forbidden");
    }

    const imagePath = path.join(process.cwd(), "foto1.jpeg");
    const image = fs.readFileSync(imagePath);

    res.setHeader("Content-Type", "image/jpeg");
    res.send(image);
};