import React from 'react'

const ThoughtFallback = () => {
    return (
        <div className="thought-container bg-slate-950 animate-pulse">
            <div className="user-content">
                <div className="user-item">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
                <div className="user-item">
                    <div className="h-4 bg-gray-300 rounded w-16 mt-1"></div>
                    <div className="h-3 bg-gray-300 rounded w-24 mt-1"></div>
                </div>
            </div>
            <div className="thought-content">
                <blockquote>
                    <div className="h-6 bg-gray-300 rounded w-3/4 mt-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2 mt-1"></div>
                </blockquote>
            </div>
            <div>
                <div>
                    <span className="small-text animate-pulse">0</span>
                </div>
            </div>
            <div className="thought-content-footer">
                <div className="thought-footer-item">
                    <button className="btn animate-pulse">
                        {/* <AiOutlineLike /> */}
                    </button>
                    <span className="small-text animate-pulse">like</span>
                </div>
                <div className="thought-footer-item">
                    <button className="btn animate-pulse">

                    </button>
                    <span className="small-text animate-pulse">share</span>
                </div>
                <div className="thought-footer-item">
                    <button className="btn animate-pulse">

                    </button>
                    <span className="small-text animate-pulse">comment</span>
                </div>
            </div>
        </div>
    )
}

export default ThoughtFallback