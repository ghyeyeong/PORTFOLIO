import React from 'react'
import "../styles/headermodal.css"

function HeaderModal({ type, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="header-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="modal-close"
                    onClick={onClose}
                    aria-label="모달 닫기"
                >
                    ×
                </button>

                {type === 'alarm' && (
                    <div className="modal-content">
                        <p className="modal-label">NOTICE</p>

                        <h2>
                            김혜영은 계속 업데이트가 됩니다.
                        </h2>

                        <p>
                            새로운 작업과 기술을 꾸준히 추가하고 있습니다.
                        </p>
                    </div>
                )}

                {type === 'employ' && (
                    <div className="modal-content">
                        <p className="modal-label">CONTACT</p>

                        <h2>김혜영</h2>

                        <div className="profile-info">
                            <p>
                                <strong>EMAIL</strong>
                                <span>ghyeyeong436@gmail.com</span>
                            </p>

                            <p>
                                <strong>GITHUB</strong>
                                <span>ghyeyeong436@gmail.com/김혜영</span>
                            </p>

                            <p>
                                <strong>POSITION</strong>
                                <span>Frontend Developer</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeaderModal
