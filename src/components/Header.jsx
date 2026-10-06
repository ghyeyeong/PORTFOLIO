import React, { useState } from 'react'
import "../styles/header.css"
import HeaderModal from './HeaderModal'

function Header() {
    const [modalType, setModalType] = useState(null)

    const handleScroll = (target) => {
        const section = document.querySelector(target)

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    return (
        <>
            <header>
                <div className="header-inner">

                    <h1>
                        <a href="#top" className="logo">
                            PORTFOLIO®
                        </a>
                    </h1>

                    <nav className="gnb" aria-label="주요 메뉴">
                        <button
                            type="button"
                            onClick={() => handleScroll('.about')}
                        >
                            PROFILE
                        </button>

                        <button
                            type="button"
                            onClick={() => handleScroll('.skills')}
                        >
                            SKILLS
                        </button>

                        <button
                            type="button"
                            onClick={() => handleScroll('.works')}
                        >
                            WORKS
                        </button>

                        <button
                            type="button"
                            onClick={() => handleScroll('footer')}
                        >
                            CONTACT
                        </button>
                    </nav>

                    <div className="gnb-right">

                        <button
                            type="button"
                            className="alarm"
                            onClick={() => setModalType('alarm')}
                        >
                            <img src="/Bell.png" alt="알림" />
                        </button>

                        <button
                            type="button"
                            className="employ"
                            onClick={() => setModalType('employ')}
                        >
                            채용하기
                        </button>

                    </div>
                </div>
            </header>

            {/* 모달이 선택됐을 때만 렌더링 */}
            {modalType !== null && (
                <HeaderModal
                    type={modalType}
                    onClose={() => setModalType(null)}
                />
            )}
        </>
    )
}

export default Header
