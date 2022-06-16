import formBannerStyles from '../styles/formBanner.module.css'

const FormBanner = () => {
    return (
        <div>
            <div className={`${formBannerStyles.formBanner} form-banner d-none d-md-block`}>
                <div className={`${formBannerStyles.formElements} form-elements`}>
                    <textarea id="request"
                        className={`${formBannerStyles.requestInput} request-input d-flex justify-content-center`}
                        name="request" placeholder='Votre message ici'
                        rows="6" cols="50"></textarea><br />
                    <div className={`col-12 d-flex justify-content-between`}>
                        <input type="text" name="Name" id="Name" placeholder='Votre nom ici'
                            className={`${formBannerStyles.userInfoForm} user-info-form`} />
                        <input type="text" name="email" id="email" placeholder='Votre mail ici'
                            className={`${formBannerStyles.userInfoForm} user-info-form`} />
                    </div><br />
                    <input type="submit" className={`${formBannerStyles.submitButton} submit-button`} />
                </div>
            </div>
        </div>
    )
}

export default FormBanner
