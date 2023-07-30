import Title from "../small_comps/Title"
import { MailOutlined, LinkedinOutlined, GithubOutlined, YoutubeOutlined } from '@ant-design/icons';
import logo from "../../assets/images/logo.jpg"

const ContactMe = () => {
    return (
        <section className="h-auto md:px-40 px-28 md:py-8 py-28 bg-fixed flex flex-col bg-gray-900 justify-center relative">
            <Title text="C O N T A C T" />
            <div className="flex flex-wrap justify-between" >
                <div className="flex flex-col my-10">
                    <div className="flex flex-row flex-wrap text-gray-300 my-2 items-center">
                        <MailOutlined />
                        {/* <p className="ml-1">Email : </p> */}
                        <p className="ml-2"> kss20001218@gmail.com</p>
                    </div>
                    <div className="flex flex-row flex-wrap text-gray-300 my-2 items-center">
                        <LinkedinOutlined />
                        {/* <p className="ml-1">LinkedIn : </p> */}
                        <p className="ml-2"> kss20001218@gmail.com</p>
                    </div>
                    <div className="flex flex-row flex-wrap text-gray-300 my-2 items-center">
                        <GithubOutlined />
                        {/* <p className="ml-1">LinkedIn : </p> */}
                        <p className="ml-2"> kss20001218@gmail.com</p>
                    </div>
                    <div className="flex flex-row flex-wrap text-gray-300 my-2 items-center">
                        <YoutubeOutlined />
                        {/* <p className="ml-1">LinkedIn : </p> */}
                        <p className="ml-2"> kss20001218@gmail.com</p>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap text-gray-300 mt-4">
                    <img src={logo} alt="" className=" max-w-xs w-40 h-40 rounded-full" />
                </div>
            </div>

        </section>
    )
}

export default ContactMe