const Footer = () => {
    return (
        <footer>
            <div className="justify-center list-none flex items-center bg-white sticky md:h-16 bottom-0 md:sticky md:flex-col md:items-center w-full border-t-2 shadow-md shadow-gray-300">
                <ul className="flex flex-col md:items-start items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                    <li>
                        <a href="#">© 2023 Airbnblike, tous droits réservés</a>
                    </li>
                    <li>
                        <a href="#">Politique de confidentialité</a>
                    </li>
                    <li>
                        <a href="#">Conditions générales</a>
                    </li>
                    <li>
                        <a href="#">Centre d'aide</a>
                    </li>
                    <li>
                        <a href="#">Nous contacter</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;