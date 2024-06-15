import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Quizz() {
    const { id } = useParams();

    const [data ,setdata] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const [QunNumber, setQunNumber] = useState(0);
    const [level , setlevel] = useState(0);
    const [randomArr, setRandomArr] = useState([]);
    const [arr, setArr] = useState([]);



    useEffect( () => {
        axios
        .get(`http://localhost:300/quiz/${id}`)
        .then((res) => {
           setdata(res.data[1].javascript);
         })
        .catch((err) => {
           console.error("Error fetching questions:", err);
         });

        const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:300/quiz/${id}`);
            if (res && res.data.length > 1) {
                setdata(res.data[1].javascript[level]); // Update state with fetched data
              }
            else {
                setError("Invalid data structure");
              }
        }
        catch (error) {
            console.error(error);    
        }
        finally {
            setLoading(false); // Set loading state to false when done
          }
        }
        fetchData();

        // const xy = () => {
        //     if (data && data.test) { // Ensure data and test are defined
        //       const randomN = Math.floor(Math.random() * data.test.length);
        //       for (let i = 0; i < 5; i++) {
        //         if (QunNumber < data.test.length && arr.indexOf(randomN) === -1 && arr.length < 5) {
        //          arr.push(randomN);
        //         }
        //       }
        //     }
        //     return arr;
        //   };
        
        //   if (data) {
        //     xy();
        //   }

        const generateRandomNumbers = async () => {
            const numbers = [];
            if (data[level] && data[level].test) { // Ensure data and test are defined
                const testLength = data[level].test.length;
                const uniqueRandomNumbers = new Set(); // To ensure unique numbers
                while (uniqueRandomNumbers.size < 5) {
                    const randomN = Math.floor(Math.random() * testLength);
                    if (QunNumber < testLength && !uniqueRandomNumbers.has(randomN)) {
                        uniqueRandomNumbers.add(randomN); // Add to set
                    }
                }
                numbers.push(...Array.from(uniqueRandomNumbers)); // Convert set to array
                setArr(numbers);
            }
        };

        fetchData().then(() => {
            if (data.length > 0) {
                generateRandomNumbers(); // Ensure random numbers are generated after data is fetched
            }
        });


    },[level, id]);

    useEffect(() => {
      
      }, [level]);
   

    if (loading) {
    return <div>Loading...</div>; 
    }

    if (error) {
    return <div>Error: {error.message}</div>; 
        }
    
    if (data.length === 0) {
        return <div>No data available.</div>;
        }
        

    // const arr=[];
    // const genraterandomNumber = () => {
    //     const randomN = Math.floor(Math.random()*data[level].test.length);     
    //     if (QunNumber < data[level].test.length && QunNumber > -1 && arr != randomN && arr.length < 5) {
    //         arr.push(randomN);   
    //     }
    //     return arr;
    //  }


    // const arr = []
   

    console.log(arr);


    const generateRandomNumbers = () => {
        const max = data?.test?.length || 0; // Get the maximum possible random number
        const newRandomNumbers = [];
        while (newRandomNumbers.length < 5) {
          const randomN = Math.floor(Math.random() * max);
          if (!newRandomNumbers.includes(randomN)) {
            newRandomNumbers.push(randomN);
            setRandomArr(newRandomNumbers);
          }
        }
        
        return newRandomNumbers;
    };
    
    console.log(randomArr);

    // console.log(QunNumber);
    console.log(data);
    // console.log(Math.floor(Math.random()*data[level].test.length));
    // console.log(data[0].test);
    // console.log(arr);
    const handleNext = () => {
        const newRandomNumbers = generateRandomNumbers();
        setRandomArr(newRandomNumbers);
        setQunNumber((prev) => prev + 1);
      
    }
  return (
    <div>
        <div>
        {arr.map((num, index) => (
                    <li key={index}>Random Index: {num}</li>
                ))}
        </div>
      {
                <div>
                    <h1>Question {QunNumber+1}</h1>
                    <h1>{data.test[QunNumber]?.Q || "Not found"}</h1>
                    <p>{data.test[QunNumber]?.OptionA || "Not found"}</p>
                    <p>{data.test[QunNumber]?.OptionB || "Not found"}</p>
                    <p>{data.test[QunNumber]?.OptionC || "Not found"}</p>
                    <p>{data.test[QunNumber]?.OptionD || "Not found"}</p>
                    <br />
                    <button onClick={() => handleNext()}>Next</button>
                    {/* <button onClick={() => setQunNumber(index)}>Submit</button> */}
                    <br />
                </div>
      }
    </div>
  )
}

export default Quizz


