import crypto from 'crypto';

const generateToken = () => crypto.randomBytes(8).toString('hex');

export default generateToken;
