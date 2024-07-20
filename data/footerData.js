import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const footMenu = [
    {
        id: 1,
        title: "Destek",
        menu: [
            {
                id: 1,
                link: "FAQs",
                path: "/"
            },
            {
                id: 2,
                link: "Siparişleri takip",
                path: "/"
            },
            {
                id: 3,
                link: "Siparişi iptal et",
                path: "/"
            },
            {
                id: 4,
                link: "İade Siparişi",
                path: "/"
            },
            {
                id: 5,
                link: "Garanti Bilgisi",
                path: "/"
            },
        ]
    },
    {
        id: 2,
        title: "Politikalar",
        menu: [
            {
                id: 1,
                link: "İade politikasi",
                path: "/"
            },
            {
                id: 2,
                link: "Güvenlik",
                path: "/"
            },
            {
                id: 3,
                link: "Site haritası",
                path: "/"
            },
            {
                id: 4,
                link: "Gizlilik Politikası",
                path: "/"
            },
            {
                id: 5,
                link: "şartlar ve koşullar",
                path: "/"
            },
        ]
    },
    {
        id: 3,
        title: "Şirket",
        menu: [
            {
                id: 1,
                link: "Hakkımızda",
                path: "/"
            },
            {
                id: 2,
                link: "Bize Ulaşın",
                path: "/"
            },
            {
                id: 3,
                link: "Servis Merkezleri",
                path: "/"
            },
            {
                id: 4,
                link: "Kariyer",
                path: "/"
            },
            {
                id: 5,
                link: "İştirakler",
                path: "/"
            },
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <FaFacebookF />,
        path: "/",
    },
    {
        id: 2,
        icon: <FaTwitter />,
        path: "/",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        path: "/",
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        path: "/",
    },
];
