const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    const token = req.cookies.emptoken;
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (e) {
        console.error('Token verification failed:', e.message);
        return res.status(401).json({ message: 'Access denied' });
    }
};

module.exports = verifyUser;