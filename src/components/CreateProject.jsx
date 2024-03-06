import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function CreateProject({ onAdd, onCancel}) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDateRef.current.value;

        //validation .. 
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }
    return <>
        <Modal btnCaption={'Close'} ref={modal}>
            <h2 className="text-stone-700 text-3xl font-bold'"> Invalid Input</h2>
            <p className='text-stone-600 bold'>Oops...looks like you forget to enter a value</p>
        </Modal>
        <div className="w-2/3 flex items-center flex-col justify-center gap-6">
            <menu className="flex justify-end w-2/3 gap-8">
                <button onClick={onCancel}>Cancle</button>
                <button onClick={handleSave} className="bg-stone-800 text-stone-100 rounded w-20 h-10">Save</button>
            </menu>
            <form action="" className="w-full flex items-center flex-col justify-center gap-6">
                <Input ref={title} type="text" label="Title" />
                <Input ref={description} textarea label="Description" />
                <Input ref={dueDateRef} type="date" label="Due Date" />
            </form>

        </div>
    </>

}