const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Airbnb, SDlevelUp. Tout droits réservés.
            </span>
            <ul className="flex flex-wrap items-center mt-2 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">A propos</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Confidentialités</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Licences</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Nous contacter</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;