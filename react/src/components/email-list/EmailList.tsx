import { useQuery } from '@tanstack/react-query'
import style from './ListStyle.module.scss'
import { emailService } from '../../services/email.services'
import parse from 'html-react-parser'

export function EmailList() {
    const { data } = useQuery({
        queryKey: ['emailList'],
        queryFn: () => emailService.getEmails()
    })

    return (
        <div className={style.list}>
            {data?.map(email => (
                <div key={email.text}>
                    {parse(email.text)}
                </div>
            ))}
        </div>
    )
}