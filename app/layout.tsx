import { Nunito } from 'next/font/google'
import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";

import Navbar from "./components/navbar/Navbar";

import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

import './globals.css';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}
const font = Nunito({
  subsets: ['latin'],
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
