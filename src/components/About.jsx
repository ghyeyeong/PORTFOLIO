import React from 'react'
import "../styles/about.css";

function About() {
    return (
        <section className='about'>
            <div className="inner">
                <h2>PROFILE</h2>

                <div className="about-main">
                    <img src={`${import.meta.env.BASE_URL}about.jpg`} alt="" />

                    <div className="text">
                        <p>
                            저는 새로운 것을 배우고, 제가 할 수 있는 가능성을 하나씩 넓혀가는 사람입니다.
                            익숙한 답에 머무르기보다 스스로 고민하고 시도하면서, 더 나은 방법을 찾아가는 과정을 중요하게 생각합니다.
                            [물고기는 존재하지 않는다]에서 누군가에게는 평범한 들꽃에 불과한 민들레가
                            다른 누군가에게는 꼭 필요한 존재가 될 수 있다는 이야기가 기억에 남았습니다.
                            저는 이처럼 같은 대상도 바라보는 관점에 따라 다른 가치가 발견될 수 있다고 생각합니다.
                            이러한 생각은 제가 디자인과 개발을 바라보는 방식에도 이어집니다.
                            하나의 정답만을 정하기보다 다양한 관점에서 사용자를 바라보고,
                            작은 불편을 발견하며, 그 안에서 필요한 경험을 찾아내고 싶습니다.
                            저 역시 아직 만들어가는 과정에 있는 사람이라고 생각합니다.
                            제가 가진 가능성을 끊임없이 발견하고 발전시키며,
                            누군가에게 실제로 필요한 가치를 만들어내는 프론트엔드 개발자가 되겠습니다.
                        </p>
                    </div>
                </div>

                <div className="about-info">
                    <ul>
                        <li>
                            <h3 className="info-tit">NAME</h3>
                            <p className="info-txt">김혜영</p>
                        </li>

                        <li>
                            <h3 className="info-tit">ROLE</h3>
                            <p className="info-txt">
                                Web Publisher <br />
                                Frontend Developer
                            </p>
                        </li>

                        <li>
                            <h3 className="info-tit">EDUCATION</h3>
                            <p className="info-txt">웹디자인 & 프론트엔드 과정 수료</p>
                        </li>

                        <li>
                            <h3 className="info-tit">CONTACT</h3>
                            <p className="info-txt">ghyeyeong436@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About