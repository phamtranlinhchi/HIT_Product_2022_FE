import React from 'react';
import './category.scss';

const Category = () => {
    return (
        <div className="category">
            <div className="category_navbar">
                <div className="category_navbar-item category_navbar-item-active ">Sách phát triển bản thân</div>
                <div className="category_navbar-item">Tiểu thuyết</div>
                <div className="category_navbar-item">Trinh thám</div>
                <div className="category_navbar-item">Truyện ngược</div>
            </div>
        </div>
    );
};

export default Category;
