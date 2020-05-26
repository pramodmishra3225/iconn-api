import * as jwt from 'jsonwebtoken';

export const isAuthenticated  = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, 'superSecret', function(err, decoded) {
            if (err) {
                return res.status(401).json({message:'not a valid user'});
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        return res.status(401).json({message:'not a valid user'});
    }
}