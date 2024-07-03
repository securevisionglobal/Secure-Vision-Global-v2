const jwt = require('jsonwebtoken');

const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = verified;
        next();
    } catch (e) {
        console.error('Token verification failed:', e.message);
        return res.status(401).json({ message: 'Access denied' });
    }
};

module.exports = verifyAdmin;
