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

                <div className={`${bottomFormStyles.formElements} col-md-6 col-12`}>
                    <textarea id="request" className={`${bottomFormStyles.requestInput} d-flex justify-content-center`}
                        name="request" rows="6" cols="50"  placeholder='Entrez votre message ici'></textarea><br />
                    <div className={`d-flex justify-content-between`}>
                        <input type="text" name="Name" id="Name" placeholder='Votre nom'
                        className={`${bottomFormStyles.userInfoForm}`} />
                        <input type="text" name="email" id="email" placeholder='Votre email'
                        className={`${bottomFormStyles.userInfoForm}`} />
                    </div><br />
                    <input type="submit" value={'Envoyer'} className={`${bottomFormStyles.submitButton}`} />
                </div>
            </div>
        </div>
    )
}

export default BottomForm
