import axios from "axios"
import { IEmail } from "../pages/types"

class EmailService {
    private URl = 'http://localhost:3000/emails'

    async getEmails() {
        const {data} = await axios.get<IEmail[]>(this.URl)
        return data
    }

    async sendEmail(text:string) {
        const {data} = await axios.post(this.URl, {
            text,
        })
        return data
    }
}

export const emailService = new EmailService()