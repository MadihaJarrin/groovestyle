import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {

    // const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = ` https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("image", data.image[0]);

            const imgResponse = await fetch(img_hosting_url, {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json());
            if (imgResponse.success) {
                const imgURL = imgResponse.data.display_url;
                const { name, price, category, description } = data;
                const newItem = { name, price: parseFloat(price), category, description, image: imgURL };
                console.log(newItem);

                // Show the success alert 
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item added successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });

                // Send the data to the server
                fetch('http://localhost:5000/categories', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newItem),
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="w-full px-10   bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 
        my-5 rounded-lg">
            <SectionTitle subHeading="What's new" heading="Add an item" ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Product Name*</span>
                    </label>
                    <input type="text" placeholder="Product Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered input-secondary w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered select-secondary">
                            <option disabled>Pick One</option>
                            <option>dress</option>
                            <option>shoes</option>
                            <option>bags</option>
                            <option>accessories</option>
                            <option>makeup</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered input-secondary w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description", { required: true })} className="textarea textarea-bordered textarea-secondary h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Product Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-secondary w-full " />
                </div>
                <div className=" flex justify-center items-center pb-5">
                    <input className="btn btn-outline btn-secondary mt-4" type="submit" value="Add Item" />

                </div>
            </form>
        </div>
    );
};

export default AddItem;