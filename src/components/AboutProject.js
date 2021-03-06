import React from "react";
import aboutLogo from "../images/About-logo.svg";

function AboutProject() {

  return (
    <div className ="about">
      <p className = "about__title">Наставники.про – цифоровая информационная платформа огрганизации «Старшие Братья Старшие Сестры». 
        Созданная для поддержки наставников программы.
      </p>
      <img src={aboutLogo} alt="Логотип" className="about__logo" />
      <div className="about__container">
        <div className="about__ellipse">
          <p className = "about__ellipse-text">Об организации</p>
        </div>
        <div className="about__text-box">
          <p className = "about__text">«Старшие Братья Старшие Сестры» — межрегиональная общественная организация содействия воспитанию подрастающего поколения. 
            Мы поддерживаем детей, которым требуется внимание: оставшихся без попечения родителей, приемных, детей из неполных, многодетных или неблагополучных 
            семей, детей с ограниченными возможностями.
          </p> 
          <p className = "about__text">
            Любому человеку, тем более ребенку, необходимо общение. Без него дети растут неуверенными и  замкнутыми. 
            Одиночество токсично, а самое надежное противоядие – дружба.
          </p>
          <p className = "about__text"> 
            Мы помогаем детям, которым не хватает поддержки взрослого друга, «Младшим». 
            Таким другом становится наш волонтер, «Старший». Он принимает ребенка, какой он есть, поддерживает, помогает раскрыть потенциал, почувствовать 
            уверенность в своих силах, узнать элементарные вещи о жизни, адаптироваться и полноценно участвовать в жизни общества.
          </p>
        </div>
      </div>
      <div className="about__capture-box">
        <p className="about__capture">
          Мы хотим, чтобы наставник был у каждого ребенка, который в нем нуждается
        </p>
      </div>
      <ul className ="about__row-blocks">
        <li className="about__block">
          <h3 className="about__right-block-title">Пожертвования</h3>
          <div className="about__block-container">
            <p className ="about__block-text">Деньги пойдут на оплату работы кураторов программы (профессиональные психологи/социальные работники), которые поддерживают дружбу 
              между ребенком и наставником.
            </p>
            <a href="" className="about__link">сделать пожертвование</a>
          </div>
        </li>
        <li className="about__block">
          <h3 className="about__center-block-title">Наставничество</h3>
          <div className="about__block-container">
            <p className="about__block-text">Наставник «Старшие Братья Старшие Сестры» — значимый взрослый, который становится для ребенка старшим другом, ролевой моделью, 
              принимает своего «Младшего» таким, какой он есть. «Старший» открывает для ребенка дверь в большой мир и дарит ему надежду на более счастливое 
              и успешное будущее.
            </p>
            <a href="" className="about__link">подробнее</a>
          </div>
        </li>
        <li className="about__block">
          <h3 className="about__left-block-title">Партнерство</h3>
          <div className="about__block-container">
            <p className="about__block-text">Компании поддерживают нас не только деньгами, но и делами. Мы собрали все возможные способы поддержки и сотрудничества: профессиональная 
              помощь Pro Bono, организационная помощь, корпоративное волонтерство, мастер-классы, лекции, учебные программы
            </p>
            <a href="" className="about__link">подробнее</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AboutProject;
