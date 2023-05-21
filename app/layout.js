import { ContextProvider } from "@/components/clients"
import Header from "./header"
import "../styles/app.scss";

export const metadata = {
  title: 'Todo App',
  description: 'This is a Todo app to learn Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <ContextProvider>
          <>
            <Header />
            {children}
          </>
        </ContextProvider>
      </body>


    </html>
  )
}
