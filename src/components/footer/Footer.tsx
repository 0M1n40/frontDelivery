import './Footer.css';
import { FacebookLogo, InstagramLogo, LinkedinLogo} from '@phosphor-icons/react';

function Footer() {
    let data = new Date().getFullYear();

    return (
    <>
        <div className="footer-background flex justify-center">
        <div className="container flex justify-between items-center py-4 w-full px-4">
          {/* Textos lado a lado */}
            <div className="flex space-x-6 text-sm footer-text">
            <p>© {data} Welcome. All rights reserved</p>
            <p>Política de Privacidade</p>
            <p>Termos de Serviço</p>
            </div>

          {/* Ícones sociais */}
            <div className="flex gap-4">
            <a href="https://www.linkedin.com/" target="_blank">
            <LinkedinLogo size={25} weight="fill" className="icon-footer" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
            <InstagramLogo size={25} weight="fill" className="icon-footer" />
            </a>
            < a href="https://www.facebook.com/" target="_blank">
            <FacebookLogo size={25} weight="fill" className="icon-footer" />
            </a>
            </div>
        </div>
        </div>
    </>
    );
}

export default Footer;
