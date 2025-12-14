import { RiFacebookBoxFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri"

const Footer =()=>{
    return (
        <footer className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
                <div className="flex space-x-6 mb-2">
                    <a href="www.facebook.com"
                    target="_Blank"
                    rel="noopennr noreferrer"
                    aria-label="Visit our Facabook page">
                        <RiFacebookBoxFill/>
                    </a>

                </div>
                <div className="flex space-x-6 mb-2">
                    <a href="www.twitter.com"
                    target="_Blank"
                    rel="noopennr noreferrer"
                    aria-label="Visit our Twitter page">
                        <RiTwitterFill/>
                    </a>

                </div>
                <div className="flex space-x-6 mb-2">
                    <a href="www.instagram.com"
                    target="_Blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram page">
                        <RiInstagramFill/>
                    </a>

                </div>
                <p className="text-sm">&copy; 2025 Baffko . All rights reserved</p>
            </div>

        </footer>
    )
}
export default Footer