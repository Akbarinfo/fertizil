import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__bigbox">
          <div className="hero__box">
            <h2 className="hero__title">Фертизил</h2>
            <p className="hero__text">
              ЭФФЕКТИВНЫЙ СПОСОБ ЛЕЧЕНИЯ БЕСПЛОДИЯ КАК ДЛЯ МУЖЧИН ТАК И ДЛЯ
              ЖЕНЩИН
            </p>
            <p className="hero__desc">
              Суть ингаляционной терапии заключается в преобразовании жидких
              лекарственных препаратов в состояние пара или аэрозоля, который
              попадает непосредственно в дыхательные пути пациента.
            </p>
          </div>

          <div className="hero__imgbox">
            <div className="hero__j">
              <Image
                src="/images/hero/fertizil-j.png"
                width="880"
                height="390"
                layout="responsive"
              />
            </div>
            <div className="hero__m">
              <Image
                src="/images/hero/fertizil-m.png"
                width="863"
                height="448"
                layout="responsive"
              />
            </div>
            <div className="hero__c">
              <Image
                src="/images/hero/capsul.png"
                width="406"
                height="370"
                layout="responsive"
              />
            </div>

            <div className="hero__plus">
              <Image
                src="/images/hero/Pluses.png"
                width="373"
                height="206"
                layout="responsive"
              />
            </div>
          </div>
          <div className="hero__blur"></div>
        </div>
      </div>
    </section>
  );
}
