import "./style.scss"
export default function Footer() {
    return (
        <div className='bg-dark py-5'>
            <div className='container'>
                <div className='row footer'>
                    <div className='footer__item col-3'>
                        <ul className='footer__item__ul'>
                            <h5>About Us</h5>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Find job</li>
                        </ul>
                    </div>
                    <div className='footer__item col-4'>
                        <ul className='footer__item__ul'>
                            <h5>Terms & Conditions</h5>
                            <li>Privacy Policy</li>
                            <li>Operating Regulation</li>
                            <li>Complaint Handling</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className='footer__item col-4'>
                        <p>Copyright © IT VIEC JSC</p>
                        <p>Tax code: 0312192258</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
