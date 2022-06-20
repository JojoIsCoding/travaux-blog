import bottomFormStyles from '/styles/homepage/bottomForm.module.css'

const BottomPageForm = () => {
    return (
        <div>
<div id='ContactezNous' className={`${bottomFormStyles.blankSpace}`}>‎ </div>
            <div className={`${bottomFormStyles.categoryBlock}`}>Contactez-nous</div>
            <div className={`${bottomFormStyles.bottomForm} row form mx-0`}>

                <div className={`${bottomFormStyles.formElements} col-lg-6 offset-lg-3`}>
                <br/><br/> <br/><br/> <br/><br/>
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

export default BottomPageForm
