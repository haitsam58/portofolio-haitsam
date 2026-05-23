const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
    const referer = req.headers.referer || "";

    console.log("REFERER:", referer);

    // domain yang DIIZINKAN
    const allowedDomains = [
        "https://portfolio-haitsam.vercel.app",
        "https://portofolio-haitsam-git-main-haitsam58s-projects.vercel.app"
    ];

    const allowed = allowedDomains.some(domain =>
        referer.startsWith(domain)
    );

    if (!allowed) {
        return res.status(403).send("Forbidden - Anti Leeching Active");
    }

    const imagePath = path.join(process.cwd(), "foto1.jpeg");

    const image = fs.readFileSync(imagePath);

    res.setHeader("Content-Type", "image/jpeg");

    return res.send(image);
};
