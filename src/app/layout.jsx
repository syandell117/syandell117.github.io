import '../styles/main.css';

export const metadata = {
  title: 'Sarah Clifton Yandell',
  description: 'Personal portfolio site for Sarah Clifton Yandell',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}