import React from 'react';
import css from "./footer.module.css"
import {Button, TextField} from "@mui/material";
const Footer = () => {
    return (
        <div className={css.footer}>
        <div className={css.footerContent}>
            <div className={css.contentBox}>

                <h3 className={css.socTitle}>Մենք Սոց ցանցերում</h3>
                <div className={css.socIcons}>
                <div className={css.socialBox}>
                    <div><i className={`fab fa-facebook-f ${css.fb}`}></i></div>
                </div>
                <div className={css.socialBox}>
                    <div><i className={`fab fa-instagram ${css.inst}`}></i></div>
                </div>
                <div className={css.socialBox}>
                    <div><i className={`fab fa-pinterest ${css.pinte}`}></i></div>
                </div>
                </div>
            </div>
            <div className={css.contentBox}>
                <div><h3 className={css.socTitle}>Կատեգորիաներ</h3></div>
                <div><h5 className={css.footerCategories}>Փափուկ կահույք</h5></div>
                <div><h5 className={css.footerCategories}>Լամինատե կահույք</h5></div>
                <div><h5 className={css.footerCategories}>Նորոգում</h5></div>
            </div>
            <div className={css.contentBox}>
                <div>
                    <h3 className={css.socTitle}>Հետադարձ կապ</h3>
                </div>
                <TextField id="standard-basic" label="Մենք Ձեզ Կզանգահարենք" variant="standard" />
                <Button variant="outlined">Ուղարկել</Button>
            </div>

        </div>
            <div className={css.copyBox}>
                <i className={`fas fa-copyright ${css.copy}`}></i>
                <p>Art Furniture</p>
            </div>
        </div>
    );
};

export default Footer;