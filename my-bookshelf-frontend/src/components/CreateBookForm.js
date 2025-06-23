import ".././tailwindoutput.css";
import { useState } from "react"



function CreateBookForm() {
    const [isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        description: "",
        published_year: "",
        finished_reading: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            // keep the previous values, only update the new value
            ...prev,
            // check whether input is a checkbox, if so use TRUE/FALSE, else use value
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/books",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: formData.title,
                        author: formData.author,
                        description: formData.description,
                        published_year: parseInt(formData.published_year),
                        finished_reading: formData.finished_reading,
                    }),
            });

        if (response.ok) {
            const data = await response.json();
            alert("Book created!");
            console.log(data);
        } else {
            console.error("Failed to create book");
        }} catch (err){
            console.error("Error:", err);
        }
        

    };


    return (

        <div>
            <div class="flex justify-end p-12">
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    onClick={() => setIsOpen(true)}
                >
                    Create New Book
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-40">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-lg shadow-xl relative">
                    {/* Close button */}
                    <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={() => setIsOpen(false)}
                    >
                    x
                    </button>

                    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    New Book
                    </h2>

                    <form onSubmit={handleSubmit} class="max-w-md mx-auto">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="title" name="title" id="title" class="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                        appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.title}
                        onChange={handleChange} required />
                        <label for="floating_title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
                        transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 
                        peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Book's title</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="author" name="author" id="author" class="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300
                        appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.author}
                        onChange={handleChange}required />
                        <label for="floating_author" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
                        transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 
                        peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Book's author</label>
                    </div>

                    <div class="col-span-full mb-5" >
                    <label class="block text-sm/6 font-medium text-gray-500">Book's description</label>
                    <div class="mt-2">
                        <textarea name="description" id="description" rows="3" value={formData.description}
                        onChange={handleChange} class="block w-full rounded-md bg-white px-2.5 py-2.5 text-base text-gray-900 outline-2 -outline-offset-2 outline-gray-300 
                        placeholder:text-gray-900 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 "></textarea>
                    </div>

                    </div>
                        <div class="relative z-0 w-full mb-5 group">
                        <input type="number" name="published_year" id="published_year" class="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                        dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.published_year}
                        onChange={handleChange} required />
                        <label for="floating_title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
                        transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 
                        peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Published year</label>
                    </div>
                
                    <div class="flex items-center mb-5 group">
                        <input name="finished_reading" id="finished_reading" type="checkbox" value={formData.finsihed_reading}
                        onChange={handleChange} class="w-4 h-4 border-gray-300 rounded-m focus:ring-blue-500 dark:focus:ring-blue-600 
                        dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                        <label for="checkbox" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">Finished Reading</label>
                    </div>

                    <div class="container flex flex-col mb-15 ">
                        <button type="submit" class="text-white bg-blue-600 font-semibold hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
            )}
        </div>
  
    );
}

export default CreateBookForm;