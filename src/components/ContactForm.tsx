import Input from "./Input"
import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseMake, chooseModel, choosePrice, chooseYear} from "../redux/slices/RootSlice";

interface ContactFormProps {
    id?: string[]
}

const ContactForm = (props:ContactFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            setTimeout(() => {window.location.reload()}, 500);
            event.target.reset()
        } else {
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(choosePrice(data.price));
            dispatch(chooseYear(data.year));
            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 500);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name="make" placeholder="Make" />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model" />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price" />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year" />
                </div>
                <div className="flex p-1">
                    <button
                        className="flex justify-start m-3 bg-slate-300 rounded hover:bg-slate-800 text-white"
                        >
                            Submit
                    </button>
                </div>
            </form>
        </div>
    )
    }

export default ContactForm
