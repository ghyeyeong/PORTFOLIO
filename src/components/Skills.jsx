import React from 'react'
import "../styles/skills.css"

function Skills() {
    return (
        <section className='skills'>
            <div className="inner">
                <ul className="skill-cards">
                    <li><h2 className="skill">SKILLS</h2></li>
                    <li><h3 className="skill-tit">프론트엔드 개발</h3>
                        <p className="skill-txt">HTML5 <br />
                            CSS3 <br />
                            JavaScript (ES6+) <br />
                            jQuery <br />
                            React <br />
                            Sass (SCSS)
                        </p>
                    </li>
                    <li><h3 className="skill-tit">웹 퍼블리싱</h3>
                        <p className="skill-txt">Web Publishing <br />
                            Responsive Web Design
                            Sass (SCSS)
                        </p>
                    </li>
                    <li className="img">
                        <img src="/skill1.jpg" alt="" />
                    </li>
                    <li className="img">
                        <img src="/skill2.jpg" alt="" />
                    </li>
                    <li><h3 className="skill-tit">디자인</h3>
                        <p className="skill-txt">
                            Figma <br />
                            UI/UX Design <br />
                            Photoshop <br />
                        </p>
                    </li>
                    <li><h3 className="skill-tit">버전 관리 및 AI</h3>
                        <p className="skill-txt">
                            Git <br />
                            GitHub <br />
                            Generative AI <br />
                        </p>
                    </li>
                    <li><h3 className="skill-tit">영상 편집</h3>
                        <p className="skill-txt">
                            Premiere Pro <br />
                            After Effects <br />
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills