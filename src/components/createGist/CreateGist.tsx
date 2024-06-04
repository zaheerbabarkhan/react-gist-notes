import ButtonUI from "../../ui/button/ButtonUI"
import PageHeader from "../pageHeader/pageHeader"
import * as Yup from 'yup';
import "./creategist.scss"
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RiDeleteBinLine } from "react-icons/ri";
import { CreateGistI } from "../../types/gist.types";
import { useNavigate } from "react-router-dom";
import axiosInstacne from "../../api/axios";

type CreateGistForm = {
    description: string,
    files: {
        fileName: string
        fileData: string
    }[],
}
const CreateGist = () => {
    const navigate = useNavigate();

    const schema = Yup.object().shape({
        description: Yup.string().required('Gist description is required'),
        files: Yup.array().of(
            Yup.object().shape({
                fileName: Yup.string().required('Filename is required'),
                fileData: Yup.string().required('File content is required'),
            })
        ),
    });

    const { handleSubmit, reset, control, formState: { errors }, register } = useForm<CreateGistForm>({
        resolver: yupResolver(schema) as any,
        defaultValues: {
            description: "",
            files: [
                {
                    fileName: "",
                    fileData: ""
                }
            ]

        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'files',
    });
    const onSubmitHandler = async (data: CreateGistForm) => {
        console.log(data)
        const { description, files } = data;



        const gistData: CreateGistI = {
            public: true,
            description: description,
            files: {}
        }

        files.forEach(
            (file) => {

                gistData.files[file.fileName] = {
                    content: file.fileData,
                    filename: file.fileName
                }
            }
        );
        try {
            const response = await axiosInstacne.post('/gists', gistData);
            if (response.status === 201) {
                navigate("/")
            }
        } catch (error) {
            console.log(error)

        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <PageHeader headerText="Create Gist" displayViewButtons={false} />
                <div className="create-main">
                    <div className="gist-description">
                        <input type="text" {...register("description")} />
                        {errors.description && (
                            <span style={{ color: 'red' }}>{errors.description.message}</span>
                        )}
                    </div>
                    {
                        fields.map((field, index) =>
                            <div key={field.id} className="text-file">

                                <div className="file-name">
                                    <input type="text" placeholder="Filename including extension..."
                                        {...register(`files.${index}.fileName` as const)}
                                    />
                                    <button onClick={() => remove(index)}>
                                        <RiDeleteBinLine size={30} fill="red" />
                                    </button>
                                </div>
                                {errors.files?.[index]?.fileName && (
                                    <span style={{ color: 'red' }}>{errors.files?.[index]?.fileName?.message}</span>
                                )}
                                <div className="text-area">
                                    <textarea
                                        {...register(`files.${index}.fileData` as const)}></textarea>
                                </div>
                            </div>)
                    }


                    <div className="create-buttons">
                        <ButtonUI text="Add File" className="file-button" onClick={() => append({
                            fileData: "",
                            fileName: ""
                        })} />
                        <ButtonUI text="Create Gist" className="gist-button"  type="submit"/>
                    </div>


                </div>
            </form>
        </div>
    )
}

export default CreateGist
