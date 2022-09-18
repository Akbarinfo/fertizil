import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__box">
          <div className="header__logobox">
            <Link href={"/"}>
              <a>
                <Image src={"/images/Logo.svg"} width="139" height="92" />
              </a>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <Link href={"/"}>
                  <a className="header__link header__link-active">Главная</a>
                </Link>
              </li>
              <li className="header__item">
                <Link href={"/"}>
                  <a className="header__link">Для мужчин</a>
                </Link>
              </li>
              <li className="header__item">
                <Link href={"/"}>
                  <a className="header__link">Для женщин</a>
                </Link>
              </li>
              <li className="header__item">
                <Link href={"/"}>
                  <a className="header__link">Врачам</a>
                </Link>
              </li>
              <li className="header__item">
                <Link href={"/"}>
                  <a className="header__link">Где купить?</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
