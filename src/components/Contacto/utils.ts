import ChatIcon from '../../assets/intercom.svg'
import CallIcon from '../../assets/phone.svg'

export const ContactoItems: {
    alt: string;
    id: number;
    img: string;
    text: string;
}[] = [
    {
        alt: 'chat icon',
        id: 1,
        img: ChatIcon,
        text: 'CHAT',
    },
    {
        alt: 'llamar icon',
        id: 2,
        img: CallIcon,
        text: 'LLAMAR',
    }
]