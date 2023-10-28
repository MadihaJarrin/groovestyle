
  import { useState } from 'react';

  
  import { Rating } from '@smastrom/react-rating';
  import '@smastrom/react-rating/style.css'
  


const ReviewForm = () => {
  const [review, setReview] = useState('');

  const handleReviewChange = (e) => {
    setReview(e.target.value);
    
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the review submission logic here, for example, sending the review to an API.
    console.log('Review submitted:', review);
    // Clear the review input after submission
    setReview('');
  };
 

  return (
 <div className="bg-origin-border p-10 border-20 border-dashed bg-purple-100">

<h2 className="text-4xl font-extrabold ">
     <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-400"> Customer Review </span></h2>
      <h3 className="text-2xl font- mb-30 text-amber-600">Write a Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">

          <textarea
            className="text-gray-950 w-full p-2 border rounded bg-slate-100" rows="5" cols="80" 
            value={review}
            onChange={handleReviewChange}
            required
          /> 
        

               


               <Rating
                                    style={{ maxWidth: 180 }}
                                    
                                  value={review.Rating}
                                  onClick={() => {
                                    }}> 
                                    
                </Rating>
         


              

         
                                
        </div>
        
          <button className="bg-self-center bg-violet-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300"type="submit">
           Submit
        </button>
        
         

    <div className="mx-auto max-w-lg mt-10">
      <table className="table-fixed w-full text-black font-extrabold font-size">
        <thead>
          <tr>
            <th className="w-full bg-slate-200 p-4 text-left font-extrabold text-4xl">Reviews</th>
              
            
            
            
            
                       
          </tr>
          <tr> 
        
            <th className="w-full bg-slate-200 p-4 text-left font-bold">Karim<h1 className="text-left font-extralight italic" >Very good service. Lots of products are available here. Recommend it!</h1></th>
            </tr>
          <tr>
            <th className="w-full bg-slate-200 p-4 text-left font-bold">Rahim<h1 className="text-left font-extralight italic">Love groovestyle.I greatly Recommend it!</h1> </th>
          </tr>
          <tr>
            <th className="w-full bg-slate-200 p-4 text-left font-bold">Afreen<h1 className="text-left font-extralight italic">Nice and Authentic products.</h1></th>
          </tr>
          <tr>
            <th className="w-full bg-slate-200 p-4 text-left font-bold">Nazma<h1 className="text-left font-extralight italic">Looking forward to again order products from here</h1></th>
          </tr>
      
        </thead>
      </table>
</div>

      </form>
      

</div>

   

  );
};



export default ReviewForm;
