import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {

        // dohvacamo token s frontenda 
        const token = req.headers.authorization.split(" ")[1];

        const isCustomAuth = token.length < 500 //provjera je li token nas ili googleov

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET_CODE) 

            req.userId = decodedData.id

        } else {

            decodedData = jwt.decode(token);

            // sub je googleovo ime za id 
            req.userId = decodedData.sub;


        }

        next();

    } catch (error) {
        console.log(error)
    }
}


export default auth;