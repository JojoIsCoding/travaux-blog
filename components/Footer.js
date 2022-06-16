import footerStyles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <div>
        <footer className={`${footerStyles.footerStyle}`}>
        <span>A vos travaux - 2022 ©</span>
    </footer>
    <script /*  src="/index.js" */></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    </div>
  )
}

export default Footer
