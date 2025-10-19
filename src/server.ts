import app from "./app.js"
import mongoose from "mongoose"
import { config } from "./app/config/index.js";


async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
            console.log(`Server is running on ${config.port}`)
        })
    } catch (error) {
        console.log('connection failed')
    }
}

main()

