import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const signin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: "User doesn't exist." })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password) //uspoređuemo hashirane sifre

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." })

        // ako user postoji u bazi i sifra je tocna, onda tribamo dohvatit njegov jwt i poslat ga frontendu
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET_CODE, { expiresIn: "1h" })

        res.status(200).json({ result: existingUser, token })


    } catch (error) {

        // 500 oznacava undefined server error
        res.status(500).json({ message: 'Something went wrong' })

    }

}

export const signup = async (req, res) => {
    
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {

        // ne mozemo napravit novi acc ako imamo vec taj existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "User already exist." })

        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." })

        const hashedPassword = await bcrypt.hash(password, 12) // drugi argument ode je salt

        const result = await User.create({
            email, password: hashedPassword, name: `${firstName
                } ${lastName}`
        })

        const token = jwt.sign({ email: result.email, id: result._id }, process.env.JWT_SECRET_CODE, { expiresIn: "1h" })

        res.status(200).json({ result: result, token })

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}