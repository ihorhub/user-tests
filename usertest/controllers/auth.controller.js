  
const {oAuthService} = require('../services');
const {AUTHORIZATION} = require('../constans/constans'),
const {errors:{NO_CONTENTS}} = require ('../error')
const tokinizer = require('../helper/tokinizer');

module.exports = {
    login: async (req, res, next) => {
        try {
            const {id} = req.user;
            const token = tokinizer();

            await oAuthService.createToken({user_id: id, ...token});

            res.json(token);
        } catch (e) {
            next(e);
        }
    },
    logout: async (req, res, next) => {
        try {
            const accessToken = req.header(AUTHORIZATION);

            await oAuthService.deleteToken(accessToken);

            res.send(NO_CONTENTS);
        } catch (e) {
            next(e);
        }
    }


 
};