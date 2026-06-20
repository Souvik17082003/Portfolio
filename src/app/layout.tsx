import '../globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../context/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'Souvik Roy — Java & Spring Boot Developer',
  description: 'Portfolio of Souvik Roy, a Backend Developer specializing in Java, Spring Boot, and SQL. B.Tech CSE graduate from Budge Budge Institute of Technology.',
  authors: [{ name: 'Souvik Roy' }],
  keywords: ['Souvik Roy', 'Java Developer', 'Spring Boot', 'Backend Developer', 'Portfolio'],
  openGraph: {
    title: 'Souvik Roy — Java & Spring Boot Developer',
    description: 'Backend Developer specializing in Java, Spring Boot, and SQL.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`} suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = localStorage.getItem('theme');
                  if (localTheme === 'dark' || (!localTheme && true)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
