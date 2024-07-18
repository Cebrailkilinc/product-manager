// components/Loading.tsx
import React from 'react';
import classNames from 'classnames';
import './loading.scss';

interface LoadingProps {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'danger';
    message?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 'medium', color = 'primary', message }) => {
    return (
        <div className='loading-content'>
            <div className={classNames('loading', `loading-${size}`, `loading-${color}`)}>
                <div className="loading-spinner"></div>
                {message && <div className="loading-message">{message}</div>}
            </div>
        </div>
    );
};

export default Loading;
