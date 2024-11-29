import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import Calendar from "react-calendar";

export default function BodyInfo(){

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [date, setDate] = useState(null)
    const[showCalendar, setShowCalendar] = useState(false)
    const gender = [
        {value: 'male', label: "Male"},
        {value: 'female', label: "Female"}
    ]
    const [selectedGender, setSelectedGender]= useState(null)

    const handleChange=(selectedGender)=>{
        setSelectedGender(selectedGender)
    }

    const handleHeightChange = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
          setHeight(value);
        }      }

    const handleDateChange=(selectedDate)=>{
        setDate(selectedDate)
        setShowCalendar(false)
    }

    const handleWeightChange = (e) => {
        setWeight(e.target.value)
    }

    return(
        <section className="m-8 flex">
            <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/sign-up.jpg"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Hi There!</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Happy to see you here, we have some questions to personalize your exercise feed</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
        <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Gender
            </Typography>
            <Select
              type="text"
              size="lg"
              value={selectedGender}
              onChange={handleChange}
              options={gender}
              placeholder="Select your gender"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Current Weight
            </Typography>
            <Input
            type="number"
            size="lg"
            placeholder="Enter your weight"
            value={weight}
            onChange={handleWeightChange}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
            className: "before:content-none after:content-none",
            }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Current height
            </Typography>
            <Input
            type="number"
            size="lg"
            placeholder="Enter your height"
            value={height}
            onChange={handleHeightChange}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
            className: "before:content-none after:content-none",
            }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Birth Date
            </Typography>
            <Input 
            type="text"
            value={date ? date.toLocaleDateString() : ""}
            placeholder="Choose the date"
            onClick={()=>setShowCalendar(!showCalendar)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-900"
            />
            {showCalendar && (
                <div className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-900"><Calendar value={date} onChange={handleDateChange} />
                </div>
                
                )
            }
        </div>
          <Button type="submit" className="mt-6" fullWidth>
            Next
          </Button>
        </form>

      </div>
    </section>
    )
}