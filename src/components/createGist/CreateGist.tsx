import ButtonUI from "../../ui/button/ButtonUI"
import PageHeader from "../pageHeader/pageHeader"
import "./creategist.scss"

const CreateGist = () => {
    return (
        <div>
            <PageHeader headerText="Create Gist" displayViewButtons={false} />
            <div className="create-main">
                <div className="gist-description">
                    <input type="text" />
                </div>
                <div className="text-file">
                    <div className="file-name">
                        <input type="text" placeholder="Filename including extension..."/>
                    </div>
                    <div className="text-area">
                        <textarea></textarea>
                    </div>
                </div>

                <div className="create-buttons">
                    <ButtonUI text="Add File" className="file-button"/> 
                    <ButtonUI text="Create Gist" className="gist-button"/>
                </div>


            </div>
        </div>
    )
}

export default CreateGist
