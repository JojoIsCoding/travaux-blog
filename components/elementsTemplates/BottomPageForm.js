import bottomFormStyles from '/styles/homepage/bottomForm.module.css'

const BottomPageForm = () => {
    return (
        <div>
<div id='ContactezNous' className={`${bottomFormStyles.blankSpace}`}>‎ </div>
            <div className={`${bottomFormStyles.categoryBlock}`}>Contactez-nous</div>
            <div className={`${bottomFormStyles.bottomForm} row form mx-0`}>

<div className={`${bottomFormStyles.formElements} form-elements col-lg-6 offset-lg-3`}>


<div className={`col-12 d-flex justify-content-between`}>
<label htmlFor="Name" className={`${bottomFormStyles.label} col-4`}>Nom et Prénom : </label><input type="text" name="Name" id="Name" placeholder='ex: Jean Dujardin'
        className={`${bottomFormStyles.userInfoForm} col-8 user-info-form`} />
</div><br />
<div className={`col-12 d-flex justify-content-between`}>
<label htmlFor="email" className={`${bottomFormStyles.label} col-4`}>Votre email : </label><input type="email" name="email" id="email" placeholder='ex: jean@mail.com'
        className={`${bottomFormStyles.userInfoForm} col-8 user-info-form`} />
</div><br />
<div className={`col-12 d-flex justify-content-between`}>
<label htmlFor="postalCode" className={`${bottomFormStyles.label} col-4`}>Code postal : </label><input autocomplete="nope" type="text" name="codePostal" id="codePostal" placeholder='ex: 75001'
        className={`${bottomFormStyles.userInfoForm} col-8 user-info-form`} />
</div><br />
<div className={`col-12 d-flex justify-content-between`}>
<label htmlFor="phoneNumber" className={`${bottomFormStyles.label} col-4`}>N° de téléphone : </label><input type="tel" name="phoneNumber" id="phoneNumber" placeholder='ex: +3301020304'
        className={`${bottomFormStyles.userInfoForm} col-8 user-info-form`} />
</div><br />

<input type="submit" value={'Envoyer'} className={`${bottomFormStyles.submitButton} submit-button`} />
</div>
            </div>
        </div>
    )
}

export default BottomPageForm
