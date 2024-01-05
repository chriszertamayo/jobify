import multer from "multer";
import DataParser from 'datauri/parser.js'
import path from 'path'

const storage = multer.memoryStorage()

//        multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/uploads')
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname
//         cb(null, fileName)
//     },
// })

const upload = multer({ storage })

const parser = new DataParser()

export const formatImage = (file) => {
    const fileExtenstions = path.extname(file.originalname).toString()
    return parser.format(fileExtenstions,file.buffer).content
}
export default upload