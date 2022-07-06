import formBannerStyles from '../styles/formBanner.module.css'


export const getStaticProps = async () => {

    const res = await fetch('https://vicopo.selfbuild.fr/cherche/');
    const data = await res.json();
  
    const length = data.data.length
  
    return {
      props: { 
        posts: data,
        length: length
      }
    }
  }

const FormBanner = () => {

    return (
        <div>
            <div className={`${formBannerStyles.formBanner} form-banner d-none d-md-block`}>
                <div className={`${formBannerStyles.formElements} form-elements`}>


                    <div className={`col-12 d-flex justify-content-between`}>
                    <label htmlFor="Name" className={`${formBannerStyles.label} col-4`}>Nom et Prénom : </label><input type="text" name="Name" id="Name" placeholder='ex: Jean Dujardin'
                            className={`${formBannerStyles.userInfoForm} col-8 user-info-form`} />
                    </div><br />
                    <div className={`col-12 d-flex justify-content-between`}>
                    <label htmlFor="email" className={`${formBannerStyles.label} col-4`}>Votre email : </label><input type="email" name="email" id="email" placeholder='ex: jean@mail.com'
                            className={`${formBannerStyles.userInfoForm} col-8 user-info-form`} />
                    </div><br />
                    <div className={`col-12 d-flex justify-content-between`}>
                    <label htmlFor="postalCode" className={`${formBannerStyles.label} col-4`}>Code postal : </label><input autocomplete="nope" type="text" name="codePostal" id="codePostal" placeholder='ex: 75001'
                            className={`${formBannerStyles.userInfoForm} col-8 user-info-form`} />
                    </div><br />
                    <div className={`col-12 d-flex justify-content-between`}>
                    <label htmlFor="phoneNumber" className={`${formBannerStyles.label} col-4`}>N° de téléphone : </label><input type="tel" name="phoneNumber" id="phoneNumber" placeholder='ex: +3301020304'
                            className={`${formBannerStyles.userInfoForm} col-8 user-info-form`} />
                    </div><br />
                    
                    <input type="submit" value={'Envoyer'} className={`${formBannerStyles.submitButton} submit-button`} />
                </div>
            </div>
        </div>
    )
} 

export default FormBanner
