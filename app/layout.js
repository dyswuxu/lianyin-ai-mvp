import './globals.css';

export const metadata = {
  title: '链银通 - AI融资顾问平台',
  description: '3分钟测算企业融资能力，匹配适合你的融资方案',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
