import bottomFormStyles from '/styles/homepage/bottomForm.module.css'

const BottomForm = () => {
    return (
        <div>
            <div className={`${bottomFormStyles.bottomForm} row form mx-0`}>
                <div className='col-md-6 col-12'>
            <p className={`${bottomFormStyles.contactText}`}>
                Ne manquez pas de remplir notre formulaire de contact afin de nous joindre rapidement. Nous vous mettrons
                en contact avec un de nos agents experts pour une bonne prise en main de votre requête, et une étude de
                votre projet immobilier.<br /> </p>
                </div>

                <div className={`${bottomFormStyles.formElements} form-elements col-md-6 col-12`}>


                    <div className={`col-12 d-flex justify-content-between`}>
                    <label htmlFor="Name" className={`${bottomFormStyles.label} col-4`}>Nom et Prénom : </label><input type="text" name="Name" id="Name" placeholder='ex: Jean Dujardin'
                            className={`${bottomFormStyles.userInfoForm} col-8 user-info-form`} />
                    </div><br />
                    <div className={`col-12 d-flex justify-content-between`}>
                    <label htmlFor="email" className={`${bottomFormStyles.label} col-4`}>Votre email : </label><input type="email" name="email" id="email" placeholder='ex: jean@mail.com'
                            className={`${bottomFormStyles.userInfoForm} col-8 user-info-form`} />
                    </div><br />
                    <div className={`col-12 d-flex justify-content-between`}>
                    <label htmlFor="postalCode" className={`${bottomFormStyles.label} col-4`}>Code postal : </label><input autoComplete="nope" type="text" name="codePostal" id="codePostal" placeholder='ex: 75001'
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

export default BottomForm
