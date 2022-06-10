import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const { locale: activeLocale, locales, asPath } = useRouter();

  const availableLocales = locales.filter((locale) => locale !== activeLocale);
  
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
       
        </ul>
        <ul>
          {availableLocales.map((locale) => {
            return (
              <li key={locale}>
                <Link href={asPath} locale={locale}>
                  <a>{locale.toUpperCase()}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}