import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import './App.css'
import { carArray, mobileArray } from './_constants';
import { ReusableLabel } from './_components/FormComponents';
import type { FormValuesType } from './_types';
import check from "/check.png";
import comment from "/comment.png";
import gender from "/gender.png";
import mobile from "/mobile.png";
import user from "/user.png";
import car from "/car.png";



function App() {


  const [formValues, setFormValues] = useState<FormValuesType>({
    name: "",
    comments: "",
    car: "",
    gender: "",
    mobile: []
  });

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
    const htmlEle = document.getElementById('native_dialog') as HTMLDialogElement;
    document.body.style.overflow = "hidden";

    htmlEle.showModal();
  };
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const eTarget = e.target;
    const eTargetName = eTarget.name;
    const eTargetValue = eTarget.value;

    const mobileSelector = () => {
      const mobileArrCpy = [...formValues.mobile];
      if (mobileArrCpy.includes(eTargetValue)) {
        mobileArrCpy.splice(mobileArrCpy.indexOf(eTargetValue), 1);
        return mobileArrCpy;
      }
      mobileArrCpy.push(eTargetValue);
      return mobileArrCpy;
    }
    setFormValues((prev) => ({ ...prev, [eTargetName]: eTargetName === "mobile" ? mobileSelector() : eTargetValue }));

  };



  const handleDialogClose = () => {
    document.body.style.overflow = "auto";
    const htmlEle = document.getElementById('native_dialog') as HTMLDialogElement;
    htmlEle?.close();
  }


  return (
    <>
      <div className='wrapper bg-[#f2f6fa] w-full min-h-screen grid place-items-center'>
        <div className="form_wrapper bg-white rounded-lg p-5 w-[600px]" >
          <p className='text-[#90a8c9] text-center font-semibold'>User Information</p>
          <h1 className="pt-2 pb-8 text-center font-semibold text-xl">Please fill in your details below</h1>
          <form onSubmit={handleSubmit} className="">

            {/* Name */}
            <div className="pb-8">
              <ReusableLabel htmlFor="name" content="Enter name" required={true} />
              <div className="pt-1">
                <input id="name" name="name" value={formValues.name} onChange={handleChange} placeholder='Enter your name' className="border border-gray-300 rounded-md p-2 w-full" />
              </div>
            </div>

            {/* Comments */}
            <div className="pb-8">
              <ReusableLabel htmlFor="comments" content="Comments" required={true} />
              <div className="pt-1">
                <textarea id="comments" name="comments" rows={4} value={formValues.comments} onChange={handleChange} placeholder='Enter your comments...' className="form_inp_border resize-none" />
              </div>
            </div>

            {/* Select Your car */}
            <div className="pb-8">
              <ReusableLabel htmlFor="car" content="Select your car" required={true} />
              <div className="pt-1">
                <select id="car" name="car" value={formValues.car} onChange={handleChange} className="form_inp_border">
                  <option value="">Select your car</option>
                  {carArray.map((ele) => <option key={ele.id} value={ele.value}>{ele.label}</option>)}
                </select>
              </div>
            </div>

            {/* Gender */}
            <div className="pb-8">
              <ReusableLabel content="Select your gender" required={true} />
              <div className="pt-1 flex gap-4">
                <div className="male_input_wrap flex gap-2">
                  <input id="male" name="gender" type="radio" value="male" onChange={handleChange} />
                  <ReusableLabel htmlFor="male" content="Male" fontWeight="normal" />
                </div>

                <div className="female_input_wrap flex gap-2">
                  <input id="female" name="gender" type="radio" value="female" onChange={handleChange} />
                  <ReusableLabel htmlFor="female" content="Female" fontWeight="normal" />
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="pb-8">
              <ReusableLabel content="Select your mobile" />
              <div className="pt-1 flex gap-4">
                {
                  mobileArray.map((ele) => <div className="flex gap-2" key={ele.id}>
                    <input id={ele.value} type="checkbox" name="mobile" onChange={handleChange} value={ele.value} />
                    <ReusableLabel htmlFor={ele.value} content={ele.label} fontWeight="normal" />
                  </div>)
                }
              </div>
            </div>

            {/* Submit */}
            <div className="submit_wrapper flex justify-center">
              <button type="submit" className='submit_button'>Submit</button>
            </div>
          </form>
          <dialog id="native_dialog">
            <div className='dialog_wrapper'>
              <header className='bg-[#f2f6fa] p-3 flex justify-between'>
                <div className="font-semibold flex gap-2 items-center"><img src={check} alt="" className='w-7 h-7' /><span>Dialog</span></div>
                <button className="dialog_close_btn" onClick={handleDialogClose}>X</button>
              </header>
              <main className='p-3'>
                <p className='flex gap-2 items-center px-4 py-2 bg-[#eaf6f0] text-[#2daa6b] rounded-md'><img src={check} alt="" className='w-7 h-7' /><span>Form Submitted Successfully !!!</span></p>
                <p className="font-semibold py-2">Data are:</p>
                <div className="form_cont bg-[#f2f6fa] px-4 py-2 rounded-md">
                  <p className="form_cont_in"><img src={user} alt="" className='w-7 h-7' /><span className="min-w-[120px] inline-block">Name</span><span className="pr-1">:</span><span className="form_value">{formValues.name}</span></p>
                  <p className="form_cont_in"><img src={comment} alt="" className='w-7 h-7' /><span className="min-w-[120px] inline-block">Comments</span><span className="pr-1">:</span><span  className="form_value">{formValues.comments}</span></p>
                  <p className="form_cont_in"><img src={gender} alt="" className='w-7 h-7' /><span className="min-w-[120px] inline-block">Gender</span><span className="pr-1">:</span><span className="form_value">{formValues.gender}</span></p>
                  <p className="form_cont_in"><img src={car} alt="" className='w-7 h-7' /><span className="min-w-[120px] inline-block">Car</span><span className="pr-1">:</span><span  className="form_value">{formValues.car}</span></p>
                  <p className="form_cont_in"><img src={mobile} alt="" className='w-7 h-7' /><span className="min-w-[120px] inline-block">Mobile</span><span className="pr-1">:</span><span  className="form_value">{String(formValues.mobile)}</span></p>
                </div>
                <div className="dialog_btn_wrap flex justify-center pt-4">
                  <button onClick={handleDialogClose} className="submit_button">OK</button>
                </div>
              </main>

            </div>
          </dialog>
        </div>
      </div>
    </>
  )
}

export default App

