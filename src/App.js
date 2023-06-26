import { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState(filterData[0].title) 
  async function fetchData(){
    try{
      setLoading(true);
      let responce = await fetch(apiUrl).then(res => res.json())
      setCourses(responce.data)
      setLoading(false);
    }catch(e){
      console.log(e)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div  className="app">
      {/* Navbar  */}
      <div>
        <Navbar/>
      </div>
      {/* bottom section  */}
      <div className="bottomSection">
        {/* Filter  */}
        <div>
          <Filter filterData = {filterData} category = {category} setCategory = {setCategory}/>
        </div>
        {/* courses */}     
        <div className="coursesCard">
          {
            loading ? "Loading..." : <Cards courses = {courses} category = {category}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
